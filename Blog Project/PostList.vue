<template>
  <div class="post-list">
    <single-post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>


<script>
  import SinglePost from './SinglePost.vue';
  
  export default {
    components: { SinglePost },
    props: ['posts']
  }
  </script>
  
<style>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}
</style>

  
  
  