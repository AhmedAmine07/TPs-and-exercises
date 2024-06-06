<template>
    <div class="user-profile">
      <Header />
      <section class="profile-info">
        <h1>User Profile</h1>
        <p><strong>Name:</strong> {{ userData.name }}</p>
        <p><strong>Email:</strong> {{ userData.email }}</p>
        <h2>Your Recipes</h2>
        <div class="recipe-card" v-for="recipe in userRecipes" :key="recipe.id">
          <img :src="recipe.image" :alt="recipe.title">
          <h3>{{ recipe.title }}</h3>
          <p>{{ recipe.description }}</p>
          <router-link :to="'/recipes/' + recipe.id">View Recipe</router-link>
        </div>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { ref, onMounted } from 'vue';
  import { getAuth } from 'firebase/auth';
  import { projectFirestore, doc, getDoc, collection, query, where, getDocs } from '@/firebase/Config';
  
  export default {
    name: 'UserProfile',
    components: {
      Header,
      Footer,
    },
    setup() {
      const userData = ref({});
      const userRecipes = ref([]);
      const auth = getAuth();
      const user = auth.currentUser;
  
      const fetchUserData = async () => {
        try {
          const userDoc = await getDoc(doc(projectFirestore, 'users', user.uid));
          if (userDoc.exists()) {
            userData.value = userDoc.data();
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      const fetchUserRecipes = async () => {
        try {
          const recipesRef = collection(projectFirestore, 'recipes');
          const q = query(recipesRef, where('authorId', '==', user.uid));
          const querySnapshot = await getDocs(q);
          userRecipes.value = [];
          querySnapshot.forEach((doc) => {
            userRecipes.value.push({ id: doc.id, ...doc.data() });
          });
        } catch (error) {
          console.error('Error fetching user recipes:', error);
        }
      };
  
      onMounted(async () => {
        if (user) {
          await fetchUserData();
          await fetchUserRecipes();
        }
      });
  
      return {
        userData,
        userRecipes
      };
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
    text-align: center;
  }
  .profile-info {
    max-width: 600px;
    margin: 0 auto;
  }
  .recipe-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    width: 200px;
  }
  .recipe-card img {
    width: 100%;
    height: auto;
  }
  .recipe-card h3 {
    margin: 10px 0;
  }
  </style>
  