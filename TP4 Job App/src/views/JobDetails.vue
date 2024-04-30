<template>
    <div v-if="job" class="job-details">
      <h1 class="job-title">{{ job.title }}</h1>
      <p class="job-description">{{ job.description }}</p>
      <p class="job-salary">Salary: {{ job.salary }}</p>
      <p class="job-date">Creation Date: {{ job.creationDate }}</p>
    </div>
</template>
 

<script>
  
  export default {
    name: 'JobDetails',
    data() {
      return {
        job: null
      };
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.$route.params.id )
        .then(response => response.json())
        .then(data => this.job = data)
        .catch(error => console.log(error.message))
    }
  };
</script>


<style scoped>
  .job-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.job-details:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.job-title {
  text-align: center;
  color: #4a4a4a;
  font-size: 2em;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.job-description {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
}

.job-salary {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #008000; /* green */
}

.job-date {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #0000FF; /* blue */
}
</style>

