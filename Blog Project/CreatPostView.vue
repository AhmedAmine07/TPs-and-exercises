<template>
  <div class="create-post-container">
    <form @submit.prevent="submitPost" class="post-form">
      <input v-model="newPost.title" type="text" placeholder="Title" class="input-title" required />
      <textarea v-model="newPost.article" placeholder="Body" class="textarea-body" required></textarea>
      <input v-model="newTag" @keyup.space="addTag" placeholder="Tags (press enter to add)" class="input-tags" />
      <ul class="tag-list">
        <li v-for="tag in newPost.tags" :key="tag" class="tag-item">{{ tag }}</li>
      </ul>
      <button type="submit" class="submit-btn">Create Post</button>
    </form>
  </div>
</template>




<script>
import { projectFirestore } from '../Firebase/Config';

export default {
  data() {
    return {
      newPost: {
        title: '',
        article: '',
        tags: []
      },
      newTag: ''
    };
  },
  methods: {
    addTag() {
      if (this.newTag.trim() !== '' && !this.newPost.tags.includes(this.newTag.trim())) {
        this.newPost.tags.push(this.newTag.trim());
        this.newTag = ''; 
      }
    },
    submitPost() {
      const newDoc = projectFirestore.collection("Articles").doc();

      const id = newDoc.id;

      const postData = {
        id: id,
        title: this.newPost.title,
        article: this.newPost.article,
        tags: this.newPost.tags
      };

      newDoc.set(postData)
        .then(() => {
          console.log("Document written with ID: ", id);
          this.$router.push('/');
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          alert("Failed to add post: " + error.message);
        });
    }
  }
}
</script>


<style>
.create-post-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
}
.post-form {
  display: flex;
  flex-direction: column;
}
.input-title, .textarea-body, .input-tags {
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}
.input-title:focus, .textarea-body:focus, .input-tags:focus {
  border-color: #007bff;
}
.tag-list {
  margin-bottom: 10px;
}
.tag-item {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
}
.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.submit-btn:hover {
  background-color: #218838;
}
</style>