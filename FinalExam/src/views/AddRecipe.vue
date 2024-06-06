<template>
    <div class="add-recipe">
      <Header />
      <section class="form-section">
        <h1>Add a New Recipe</h1>
        <form @submit.prevent="submitRecipe">
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
          <button type="submit">Add Recipe</button>
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
  import { ref } from 'vue';
  import { getAuth } from 'firebase/auth';
  import { projectFirestore, collection, addDoc } from '@/firebase/Config';
  
  export default {
    name: 'AddRecipe',
    components: {
      Header,
      Footer,
    },
    setup() {
      const recipe = ref({
        title: '',
        image: '',
        ingredients: '',
        instructions: '',
        diet: 'Omnivore',
      });
      const errorMessage = ref('');
      const successMessage = ref('');
      const auth = getAuth();
  
      const submitRecipe = async () => {
        try {
          const user = auth.currentUser;
          if (!user) {
            throw new Error('User not authenticated');
          }
          await addDoc(collection(projectFirestore, 'recipes'), {
            ...recipe.value,
            ingredients: recipe.value.ingredients.split('\n'), // Assuming ingredients are entered line by line
            authorId: user.uid,
            createdAt: new Date(),
          });
          successMessage.value = 'Recipe added successfully!';
          // Reset form
          recipe.value = {
            title: '',
            image: '',
            ingredients: '',
            instructions: '',
            diet: 'Omnivore',
          };
        } catch (error) {
          errorMessage.value = error.message;
          console.error('Error adding recipe:', error);
        }
      };
  
      return {
        recipe,
        errorMessage,
        successMessage,
        submitRecipe,
      };
    },
  };
  </script>
  
  <style scoped>
  .add-recipe {
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
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
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
  