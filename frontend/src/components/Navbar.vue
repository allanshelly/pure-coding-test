<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="title">Pure</h1>
      <div class="nav">
        <div class="dropdown">
          <span class="dropdown-label">Agents</span>
          <div class="dropdown-content">
            <router-link to="/agents/view">View All</router-link>
            <router-link to="/agents/add">Add Agent</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.dropdown {
  position: relative;
  padding-bottom: 1rem;
}

.dropdown-label {
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  display: inline-block;
}

.dropdown-label:hover {
  color: #007bff;
}

.dropdown-content {
  position: absolute;
  top: 100%; /* flush with label */
  right: 0;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  z-index: 10;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-content a {
  display: block;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.dropdown-content a:hover {
  background-color: #f5f5f5;
  color: #007bff;
}
</style>
