<template>
    <div class="event-list">
      <div v-for="event in events" :key="event.id" class="event-item">
        <EventItem :event="event" />
      </div>
    </div>
  </template>
  
  <script>
  import { projectFirestore } from '../firebase/Config';
  import EventItem from './EventItem.vue';
  
  export default {
    name: 'EventList',
    components: {
      EventItem,
    },
    data() {
      return {
        events: [],
      };
    },
    methods: {
      fetchEvents() {
        projectFirestore.collection('Events').onSnapshot(snapshot => {
          this.events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
      },
    },
    created() {
      this.fetchEvents();
    },
  };
  </script>
  
  <style scoped>
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  