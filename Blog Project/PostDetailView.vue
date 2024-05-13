<template>
  <div class="post-detail-container" v-if="post">
    <h2>Title :{{ post.title }}</h2>
    <p>Article :{{ post.article }}</p>
    <p>Tags: <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span></p>
  </div>
  <div v-else>
    <p>Loading post...</p>
  </div>
</template>



  
  <script>
  import { getPost } from '../services/getPost';
  
  export default {
    data() {
      return {
        post: undefined
      };
    },
    async created() {
  if (this.$route.params.id) {
    this.post = await getPost(this.$route.params.id);
  } else {
    console.error("No post ID provided in route.");
    this.post = null;
  }
}

  }
  </script>
  

  <style>
.post-detail-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.tag {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  display: inline-block;
}
</style>