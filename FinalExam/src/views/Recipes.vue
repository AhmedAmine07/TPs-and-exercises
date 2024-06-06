<template>
    <div class="recipes">
      <Header />
      <section class="recipes-list">
        <h1>All Recipes</h1>
        <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
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
  import { projectFirestore, collection, getDocs } from '@/firebase/Config';
  
  export default {
    name: 'Recipes',
    components: {
      Header,
      Footer
    },
    setup() {
      const recipes = ref([]);
  
      const fetchRecipes = async () => {
        try {
          const querySnapshot = await getDocs(collection(projectFirestore, 'recipes'));
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data()); // Log each document fetched
            recipes.value.push({ id: doc.id, ...doc.data() });
          });
          console.log('Recipes fetched:', recipes.value); // Log the recipes array
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      onMounted(fetchRecipes);
  
      return {
        recipes
      };
    }
  };
  </script>
  
  <style scoped>
  .recipes {
    padding: 20px;
    text-align: center;
  }
  .recipes-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  