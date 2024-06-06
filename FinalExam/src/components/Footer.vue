<template>
    <footer class="footer">
      <div>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/legal">Legal</router-link>
        <router-link to="/social">Social</router-link>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
  .footer div {
    display: flex;
    gap: 20px;
  }
  .footer div a {
    text-decoration: none;
    color: #333;
  }
  </style>
  