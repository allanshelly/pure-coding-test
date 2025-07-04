<template>
  <v-container>
    <v-card>
      <v-card-title>Agents</v-card-title>

      <v-text-field
        v-model="search"
        label="Search agents"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        clearable
        class="mb-4"
      />

      <v-data-table
        :headers="headers"
        :items="filteredAgents"
        :items-per-page="10"
        class="elevation-1"
      >
        <template #item.actions="{ item }">
          <v-btn icon size="small" color="primary" @click="openEditModal(item)">
            <v-icon size="20">mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon size="small" color="error" @click="openDeleteDialog(item.id)">
            <v-icon size="20">mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Edit Modal -->
    <v-dialog v-model="editDialog" max-width="500">
      <v-card>
        <v-card-title>Edit Agent</v-card-title>
        <v-card-text>
          <v-text-field v-model="editForm.firstName" label="First Name" />
          <v-text-field v-model="editForm.lastName" label="Last Name" />
          <v-text-field v-model="editForm.email" label="Email" />
          <v-text-field v-model="editForm.mobileNumber" label="Mobile Number" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="editDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="submitEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation -->
    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Confirm Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this agent?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="confirmDialog = false">Cancel</v-btn>
          <v-btn color="error" @click="confirmDeleteAgent">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

type Agent = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
};

const agents = ref<Agent[]>([]);
const search = ref('');
const confirmDialog = ref(false);
const editDialog = ref(false);
const selectedAgentId = ref<number | null>(null);

const snackbar = ref({
  show: false,
  text: '',
  color: 'success',
});

const editForm = ref<Partial<Agent>>({});

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'First Name', key: 'firstName' },
  { title: 'Last Name', key: 'lastName' },
  { title: 'Email', key: 'email' },
  { title: 'Mobile', key: 'mobileNumber' },
  { title: 'Actions', key: 'actions', sortable: false },
];

const fetchAgents = async () => {
  try {
    const res = await fetch('http://localhost:3000/agents');
    agents.value = await res.json();
  } catch {
    snackbar.value = { show: true, text: 'Failed to fetch agents', color: 'error' };
  }
};

onMounted(fetchAgents);

const filteredAgents = computed(() =>
  agents.value.filter((a) =>
    `${a.firstName} ${a.lastName} ${a.email} ${a.mobileNumber}`
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
);

// Open edit modal and fill form
const openEditModal = (agent: Agent) => {
  editForm.value = { ...agent };
  selectedAgentId.value = agent.id;
  editDialog.value = true;
};

// Submit edit
const submitEdit = async () => {
  if (!selectedAgentId.value) return;

  try {
    const res = await fetch(`http://localhost:3000/agents/${selectedAgentId.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm.value),
    });

    if (!res.ok) throw new Error();

    snackbar.value = { show: true, text: 'Agent updated successfully!', color: 'success' };
    await fetchAgents();
    editDialog.value = false;
  } catch {
    snackbar.value = { show: true, text: 'Failed to update agent', color: 'error' };
  }
};

// Delete logic
const openDeleteDialog = (id: number) => {
  selectedAgentId.value = id;
  confirmDialog.value = true;
};

const confirmDeleteAgent = async () => {
  if (!selectedAgentId.value) return;

  try {
    const res = await fetch(`http://localhost:3000/agents/${selectedAgentId.value}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error();

    snackbar.value = { show: true, text: 'Agent deleted!', color: 'success' };
    await fetchAgents();
  } catch {
    snackbar.value = { show: true, text: 'Failed to delete agent', color: 'error' };
  } finally {
    confirmDialog.value = false;
    selectedAgentId.value = null;
  }
};
</script>

<style scoped>
.v-btn {
  margin-right: 6px;
}
</style>
