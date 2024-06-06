<template>
    <div class="edit-recipe">
      <Header />
      <section class="form-section">
        <h1>Edit Recipe</h1>
        <form @submit.prevent="updateRecipe" v-if="recipe">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="recipe.title" required>
          </div>
          <div class="form-group">
            <label for="image">Image URL</label>
            <input type="text" id="image" v-model="recipe.image" required>
          </div>
          <div class="form-group">
            <label for="ingredients">Ingredients</label>
            <textarea id="ingredients" v-model="recipe.ingredients" required></textarea>
          </div>
          <div class="form-group">
            <label for="instructions">Instructions</label>
            <textarea id="instructions" v-model="recipe.instructions" required></textarea>
          </div>
          <div class="form-group">
            <label for="diet">Diet Category</label>
            <select id="diet" v-model="recipe.diet" required>
              <option value="Omnivore">Omnivore</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Flexitarian">Flexitarian</option>
              <option value="Fruitarian">Fruitarian</option>
              <option value="Crudivore">Crudivore</option>
              <option value="Paleo">Paleo</option>
              <option value="Keto">Keto</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
          </div>
          <button type="submit">Update Recipe</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { projectFirestore, doc, getDoc, updateDoc } from '@/firebase/Config';
  
  export default {
    name: 'EditRecipe',
    components: {
      Header,
      Footer,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const recipeId = route.params.id;
      const recipe = ref(null);
      const errorMessage = ref('');
      const successMessage = ref('');
  
      onMounted(async () => {
        console.log(`Fetching recipe with ID: ${recipeId}`);
        try {
          const docRef = doc(projectFirestore, 'recipes', recipeId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            // Convert ingredients array to string for the textarea
            data.ingredients = data.ingredients.join('\n');
            recipe.value = { ...data, id: docSnap.id };
            console.log('Recipe data:', recipe.value);
          } else {
            errorMessage.value = 'Recipe not found.';
            console.error('Recipe not found for ID:', recipeId);
          }
        } catch (error) {
          errorMessage.value = error.message;
          console.error('Error fetching recipe:', error);
        }
      });
  
      const updateRecipe = async () => {
        try {
          const docRef = doc(projectFirestore, 'recipes', recipeId);
          await updateDoc(docRef, {
            title: recipe.value.title,
            image: recipe.value.image,
            ingredients: recipe.value.ingredients.split('\n'), // Split textarea input into array
            instructions: recipe.value.instructions,
            diet: recipe.value.diet,
            updatedAt: new Date(),
          });
          successMessage.value = 'Recipe updated successfully!';
          setTimeout(() => {
            router.push('/');
          }, 2000); // Redirect after 2 seconds
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      return {
        recipe,
        errorMessage,
        successMessage,
        updateRecipe,
      };
    },
  };
  </script>
  
  <style scoped>
  .edit-recipe {
    padding: 20px;
    text-align: center;
  }
  .form-section {
    max-width: 600px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  .success {
    color: green;
    margin-top: 10px;
  }
  </style>
  