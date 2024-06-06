<template>
    <div>
      <h1>Firebase Firestore Example</h1>
      <button @click="addDocument">Add Document</button>
      <button @click="getDocuments">Get Documents</button>
      <ul>
        <li v-for="doc in documents" :key="doc.id">{{ doc.data().name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { projectFirestore } from '../firebase/Config'
  
  export default {
    name: 'FirebaseComponent',
    setup() {
      const documents = ref([])
  
      const addDocument = async () => {
        try {
          await projectFirestore.collection('example').add({
            name: 'New Document',
            createdAt: new Date()
          })
          alert('Document added')
        } catch (error) {
          console.error('Error adding document: ', error)
        }
      }
  
      const getDocuments = async () => {
        try {
          const querySnapshot = await projectFirestore.collection('example').get()
          documents.value = querySnapshot.docs
        } catch (error) {
          console.error('Error getting documents: ', error)
        }
      }
  
      return {
        addDocument,
        getDocuments,
        documents
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  