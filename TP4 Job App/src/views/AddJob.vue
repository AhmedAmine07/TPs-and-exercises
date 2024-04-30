<template>
  <div class="add-job">
    <h1 class="title">Add New Job</h1>
    <form @submit.prevent="addJob">
      <div class="form-group">
        <label for="title">Job Title:</label>
        <input id="title" v-model="newJob.title" required>
      </div>

      <div class="form-group">
        <label for="description">Job Description:</label>
        <textarea id="description" v-model="newJob.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="salary">Salary:</label>
        <input id="salary" type="number" v-model="newJob.salary" required>
      </div>

      <div class="form-group">
        <label for="creationDate">Creation Date:</label>
        <input id="creationDate" type="date" v-model="newJob.creationDate" required>
      </div>

      <button type="submit">Add Job</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newJob: {
        title: '',
        description: '',
        salary: '',
        creationDate: ''
      }
    }
  },
  methods: {
    addJob() {
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newJob),
      })
      .then(response => response.json())
      .then(data => {
        this.newJob.title = '';
        this.newJob.description = '';
        this.newJob.salary = '';
        this.newJob.creationDate = '';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    color: #4a4a4a;
    font-size: 2em;
    margin-bottom: 20px;
  }

  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }


.add-job {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.add-job h1 {
  margin-bottom: 20px;
  color: #343a40;
}

.add-job form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #495057;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  color: #495057;
}

.add-job button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.add-job button:hover {
  background-color: #0056b3;
}
</style>