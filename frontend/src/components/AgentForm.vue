<template>
  <div class="form-container">
    <h2>{{ agent.id ? 'Update Agent' : 'Create Agent' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="agent.firstName" placeholder="First Name" required />
      <input v-model="agent.lastName" placeholder="Last Name" required />
      <input v-model="agent.mobileNumber" placeholder="Mobile Number" required />
      <input v-model="agent.email" type="email" placeholder="Email" required />
      <button type="submit">{{ agent.id ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const agent = ref({
  id: null,
  firstName: '',
  lastName: '',
  mobileNumber: '',
  email: ''
})

const handleSubmit = async () => {
  try {
    if (agent.value.id) {
      await axios.put(`http://localhost:3000/agents/${agent.value.id}`, agent.value)
      alert('Agent updated successfully')
    } else {
      await axios.post('http://localhost:3000/agents', agent.value)
      alert('Agent created successfully')
    }
    agent.value = { id: null, firstName: '', lastName: '', mobileNumber: '', email: '' }
  } catch (err) {
    alert('Error submitting agent')
    console.error(err)
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
