<template>
  <div class="tag-cloud">
    <span v-for="tag in tags" :key="tag" :to="'/tags/' + tag" class="tag-link">{{ tag }}</span>
  </div>
</template>

  <script>
  export default {
    props: ['tags']
  }
  </script>
  
  
  <style>
  .tag-cloud {
    padding: 20px;
    text-align: center;
  }
  .tag-link {
    display: inline-block;
    background-color: #17a2b8;
    color: white;
    padding: 8px 16px;
    margin: 5px;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  .tag-link:hover {
    background-color: #138496;
  }
  </style>
  