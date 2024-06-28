<template>
    <div v-if="event" class="event-detail">
      <EventItem :event="event" detailedView />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { projectFirestore } from '../firebase/Config';
  import EventItem from '@/components/EventItem.vue';
  
  export default {
    name: 'EventDetail',
    components: {
      EventItem,
    },
    data() {
      return {
        event: null,
      };
    },
    async created() {
      const eventId = this.$route.params.eventId;
      const eventDoc = await projectFirestore.collection('Events').doc(eventId).get();
      if (eventDoc.exists) {
        this.event = { id: eventDoc.id, ...eventDoc.data() };
      }
    },
  };
  </script>
  
  <style scoped>
  .event-detail {
    margin-top : 8%;
    padding: 20px;
    background-color: #e6f7ff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  