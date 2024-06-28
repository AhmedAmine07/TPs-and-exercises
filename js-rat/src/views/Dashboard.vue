<template>
  <div class="dashboard-container">
    <h2>Upcoming Events</h2>
    <EventList />
  </div>
</template>

<script>
import EventList from '@/components/EventList.vue';

export default {
  name: 'Dashboard',
  components: {
    EventList,
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}
</style>
