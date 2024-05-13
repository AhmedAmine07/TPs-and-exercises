
<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" exact-active-class="active-link">Home</router-link>
    <router-link to="/CreatPostView" class="nav-link" exact-active-class="active-link">Create Post</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #343a40;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  font-size: 1.1em;
}

.nav-link:hover, .active-link {
  background-color: #495057;
  color: #f8f9fa;
}

.active-link {
  background-color: #007bff;
  color: white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-link {
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
  }
}
</style>

