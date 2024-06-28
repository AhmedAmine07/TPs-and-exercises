<template>
    <div class="vote-buttons">
      <button @click="vote('yes')" :disabled="hasVoted" :class="{ disabled: hasVoted }">Yes</button>
      <button @click="vote('no')" :disabled="hasVoted" :class="{ disabled: hasVoted }">No</button>
    </div>
  </template>
  
  <script>
  import { projectFirestore, projectAuth } from '../firebase/Config';
  import firebase from 'firebase/app';
  
  export default {
    name: 'VoteButton',
    props: {
      eventId: String,
    },
    data() {
      return {
        hasVoted: false,
      };
    },
    async created() {
      const user = projectAuth.currentUser;
      if (user) {
        const voteRef = projectFirestore.collection('votes').doc(`${this.eventId}_${user.uid}`);
        const voteDoc = await voteRef.get();
        this.hasVoted = voteDoc.exists;
      }
    },
    methods: {
      async vote(choice) {
        const user = projectAuth.currentUser;
        if (user) {
          const voteRef = projectFirestore.collection('votes').doc(`${this.eventId}_${user.uid}`);
          const voteDoc = await voteRef.get();
          if (!voteDoc.exists) {
            await voteRef.set({
              eventId: this.eventId,
              userId: user.uid,
              vote: choice,
              createdAt: new Date(),
            });
  
            const eventRef = projectFirestore.collection('Events').doc(this.eventId);
            const increment = firebase.firestore.FieldValue.increment(1);
            if (choice === 'yes') {
              await eventRef.update({ yesVotes: increment });
            } else {
              await eventRef.update({ noVotes: increment });
            }
  
            this.hasVoted = true;
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .vote-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
  }
  
  .vote-buttons button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .vote-buttons button.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .vote-buttons button:hover:not(.disabled) {
    background-color: #0056b3;
  }
  
  .vote-buttons button:focus {
    outline: none;
  }
  </style>
  