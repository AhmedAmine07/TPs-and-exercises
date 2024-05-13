<template>
  <div class="post-card">
    <h3>{{ post.title }}</h3>
    <p>{{ postSnippet }}</p>
    <router-link :to="'/PostDetailView/' + post.id" class="read-more">Read More</router-link>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({
        title: '',
        tags: [],
        text: ''
      })
    }
  },
  computed: {
    postSnippet() {
      return this.post.article ? this.post.article.substring(0, 50) : '';
    }
  }
}
</script>

<style>
.post-card {
  width: 300px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  background: #fff;
}
.read-more {
  color: #007bff;
  text-decoration: none;
}
.tags {
  margin-top: 10px;
}
.tag {
  display: inline-block;
  background: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
}
</style>


