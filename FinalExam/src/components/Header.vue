<template>
    <header class="header">
      <div class="logo">
        <img src="https://via.placeholder.com/150x40?text=Logo" alt="Application Logo">
      </div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/recipes">Recipes</router-link></li>
          <li><router-link to="/add-recipe">Add a Recipe</router-link></li>
          <li><router-link v-if="user" to="/profile">Profile</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Register</router-link></li>
          <button v-if="user" @click="logout">Logout</button>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getAuth } from 'firebase/auth';
  
  export default {
    name: 'Header',
    setup() {
      const auth = getAuth();
      const user = ref(null);
  
      onMounted(() => {
        auth.onAuthStateChanged((u) => {
          user.value = u;
        });
      });
  
      const logout = async () => {
        try {
          await auth.signOut();
          user.value = null;
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };
  
      return {
        user,
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .logo img {
    height: 40px;
  }
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .navbar ul li {
    display: inline;
  }
  .navbar ul li a {
    text-decoration: none;
    color: #333;
  }
  </style>
  