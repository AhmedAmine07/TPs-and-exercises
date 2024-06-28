<template>
    <div class="event-item" @click="goToEventDetail">
      <h2>{{ event.title }}</h2>
      <div v-if="detailedView">
        <p>{{ event.description }}</p>
        <p>{{ new Date(event.date).toLocaleDateString() }} at {{ new Date(event.date).toLocaleTimeString() }}</p>
        <div class="votes">
          <span>Yes: {{ yesVotes }}</span>
          <span>No: {{ noVotes }}</span>
        </div>
        <VoteButton :eventId="event.id" @onVote="updateVoteCounts" />
      </div>
    </div>
  </template>
  
  <script>
  import { projectFirestore } from '../firebase/Config';
  import VoteButton from './VoteButton.vue';
  
  export default {
    name: 'EventItem',
    components: {
      VoteButton,
    },
    props: {
      event: Object,
      detailedView: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        yesVotes: 0,
        noVotes: 0,
      };
    },
    methods: {
      goToEventDetail() {
        if (!this.detailedView) {
          this.$router.push(`/event/${this.event.id}`);
        }
      },
      async fetchVoteCounts() {
        const snapshot = await projectFirestore.collection('votes')
          .where('eventId', '==', this.event.id)
          .onSnapshot(snapshot => {
            this.yesVotes = snapshot.docs.filter(doc => doc.data().vote === 'yes').length;
            this.noVotes = snapshot.docs.filter(doc => doc.data().vote === 'no').length;
          });
      },
      updateVoteCounts(vote) {
        if (vote === 'yes') {
          this.yesVotes += 1;
        } else {
          this.noVotes += 1;
        }
      },
    },
    async created() {
      this.fetchVoteCounts();
    },
  };
  </script>
  
  <style scoped>
  .event-item {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .event-item:hover {
    transform: scale(1.05);
  }
  
  .event-item h2 {
    font-size: 1.5em;
    margin-bottom: 8px;
    color: #333333;
  }
  
  .votes {
    display: flex;
    justify-content: space-around;
    margin: 12px 0;
  }
  
  .votes span {
    font-size: 1.1em;
    color: #333333;
  }
  </style>
  