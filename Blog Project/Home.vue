<template>
  <div class="home-container">
    <h1>Welcome to Our Blog!</h1>
    <PostList :posts="posts" />
    <TagCloud :tags="tags" />
  </div>
</template>




<script>
import getPosts from '../services/getPosts.js';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

export default {
  components: { PostList, TagCloud },
  data() {
    return {
      posts: [],
      tags: [],
      error: null
    };
  },
  async created() {
    const { posts, error, load } = getPosts();
    await load(); 
    if (error.value) {
      console.error("Failed to load posts:", error.value);
    } else {
      this.posts = posts.value; 
      this.tags = [...new Set(this.posts.map(post => post.tags).flat())];
    }
  }
}
</script>


<style>
.home-container {
  text-align: center;
  padding: 20px;
}
h1 {
  color: #333;
}
</style>