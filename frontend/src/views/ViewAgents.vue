<template>
  <v-container>
    <v-card class="mt-4">
      <v-card-title>
        Agent List
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="agents"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #item.actions="{ item }">
          <v-btn icon @click="editAgent(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="red" @click="deleteAgent(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const agents = ref([])

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'First Name', value: 'firstName' },
  { text: 'Last Name', value: 'lastName' },
  { text: 'Email', value: 'email' },
  { text: 'Mobile', value: 'mobileNumber' },
  { text: 'Created At', value: 'createdAt' },
  { text: 'Actions', value: 'actions', sortable: false },
]

const fetchAgents = async () => {
  try {
    const res = await axios.get('http://localhost:3000/agents')
    agents.value = res.data
  } catch (err) {
    console.error('Failed to fetch agents', err)
  }
}

const deleteAgent = async (id: number) => {
  if (!confirm('Are you sure you want to delete this agent?')) return

  try {
    await axios.delete(`http://localhost:3000/agents/${id}`)
    agents.value = agents.value.filter((agent: any) => agent.id !== id)
  } catch (err) {
    console.error('Failed to delete agent', err)
  }
}

const editAgent = (agent: any) => {
  // You can route to the update form with the agent ID
  // e.g. router.push(`/agents/update/${agent.id}`)
  alert(`Edit Agent: ${agent.firstName} ${agent.lastName}`)
}

onMounted(() => {
  fetchAgents()
})
</script>
