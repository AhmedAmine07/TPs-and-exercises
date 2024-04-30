<template>
  <div class="home">
    <h1 class="title">Jobs:</h1>
    <h2>Job Search</h2>
    <input class="salary-input" type="number" v-model="salaryInput" placeholder="Enter minimum salary">
        <ul>
            <li v-for="job in filteredJobs" :key="job.id" class="job-title">
                <router-link :to="`/job/${job.id}`" > <button class="job">{{ job.title }}</button>
                </router-link>
                <button @click="deleteJob(job.id)">Delete</button>
                <router-link :to="`/edit-job/${job.id}`"><button class="edit">Edit</button></router-link>
            </li>
        </ul>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  data() {
        return {
          salaryInput: 0,
            jobs: []
        };
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(data => this.jobs = data)
        .catch(error => console.log(error.message))
    },
    methods: {
        deleteJob(id){
            fetch('http://localhost:3000/jobs/' + id, {
                method: 'DELETE'
            })
            .then(() => this.jobs = this.jobs.filter(job => job.id !== id))
            .catch(error => console.log(error.message))
        }
    },
    computed: {
    filteredJobs() {
      return this.jobs.filter(job => job.salary > this.salaryInput);
    }}
};
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
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

.salary-input {
  width: 200px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

  


ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

li {
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

li .job-title {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
}

button.job {
  background-color: #008CBA;
  color: white;
}

button.job:hover {
  background-color: #007B9A;
}

button.edit {
  background-color: #4CAF50;
  color: white;
}

button.edit:hover {
  background-color: #45a049;
}

button.delete {
  background-color: #f44336;
  color: white;
}

button.delete:hover {
  background-color: #d32f2f;
}

router-link {
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>