<template>
    <div v-if="job" class="edit-job">
      <h1 class="title">Edit Job</h1>
      <form @submit.prevent="updateJob" class="job-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input id="title" v-model="job.title" />
        </div>
        
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="job.description"></textarea>
        </div>
  
        <div class="form-group">
          <label for="salary">Salary:</label>
          <input id="salary" v-model="job.salary" />
        </div>
  
        <div class="form-group">
          <label for="creationDate">Creation Date:</label>
          <input id="creationDate" type="date" v-model="job.creationDate" />
        </div>
        
        <button class="update-button" type="submit">Update</button>
      </form>
    </div>
</template>


<script>
  
  export default {
    name: 'EditJob',
    data() {
      return {
        job: null
      };
    },
    mounted(){
    fetch('http://localhost:3000/jobs/' + this.$route.params.id)
    .then(response => response.json())
    .then(data => this.job = data)
    .catch(error => console.log(error.message))
    },
    methods: {
        updateJob(){
            fetch('http://localhost:3000/jobs/' + Number(this.$route.params.id), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.job)
            })
            .then(() => this.$router.push('/'))
            .catch(error => console.log(error.message))
        }
    }
  }

</script>


<style scoped>
  .edit-job {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    color: #4a4a4a;
    font-size: 2em;
    margin-bottom: 20px;
  }
  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease-in-out;
  }

  h1:hover {
    color: #007BFF;
  }
  .job-form .form-group {
    margin-bottom: 20px;
  }
  
  .job-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .job-form input,
  .job-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .update-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: #fff;
    cursor: pointer;
  }
  
  .update-button:hover {
    background-color: #45a049;
  }
</style>
  
  

