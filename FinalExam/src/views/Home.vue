<template>
  <div class="home">
    <Header />
    <section class="banner">
      <img src="https://via.placeholder.com/1200x400?text=Banner" alt="Banner Image">
      <div class="slogan">
        <h1>Discover and Share Recipes</h1>
      </div>
    </section>
    <section class="intro">
      <h2>Welcome to Our Recipe Application</h2>
      <p>Explore a wide variety of recipes tailored to different dietary preferences. Register now to save your favorite recipes and share your own!</p>
    </section>
    <section class="popular-recipes">
      <h2>Popular Recipes</h2>
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
  name: 'Home',
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
.home {
  text-align: center;
}
.banner {
  position: relative;
}
.banner img {
  width: 100%;
  height: auto;
}
.slogan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
.intro {
  margin: 20px;
}
.popular-recipes {
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
