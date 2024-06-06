<template>
    <div class="recipe-detail">
      <Header />
      <section class="recipe-info">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" :alt="recipe.title">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
        <h2>Instructions</h2>
        <p>{{ recipe.instructions }}</p>
        <h2>Author</h2>
        <p>{{ recipe.author }}</p>
        <router-link :to="'/edit-recipe/' + recipe.id" class="edit-button">Edit Recipe</router-link>
      </section>
      <section class="comments">
        <h2>Comments</h2>
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <p><strong>{{ comment.user }}</strong>: {{ comment.text }}</p>
        </div>
        <div class="add-comment">
          <textarea v-model="newComment" placeholder="Add a comment..."></textarea>
          <button @click="addComment">Submit</button>
        </div>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { getAuth } from 'firebase/auth'
  import { projectFirestore, doc, getDoc, collection, addDoc } from '@/firebase/Config'
  
  export default {
    name: 'RecipeDetail',
    components: {
      Header,
      Footer
    },
    setup() {
      const route = useRoute()
      const recipeId = route.params.id
      const recipe = ref({
        title: '',
        image: '',
        ingredients: [],
        instructions: '',
        author: ''
      })
      const comments = ref([])
      const newComment = ref('')
      const userData = ref({})
      const auth = getAuth()
      const user = auth.currentUser
  
      const fetchUserData = async () => {
        try {
          const userDoc = await getDoc(doc(projectFirestore, 'users', user.uid))
          if (userDoc.exists()) {
            userData.value = userDoc.data()
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
  
      const fetchRecipe = async () => {
        try {
          const docRef = doc(projectFirestore, 'recipes', recipeId)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            recipe.value = { ...data, id: docSnap.id }
            console.log('Recipe data:', recipe.value)
          } else {
            console.error('Recipe not found for ID:', recipeId)
          }
        } catch (error) {
          console.error('Error fetching recipe:', error)
        }
      }
  
      const fetchComments = async () => {
        try {
          const commentsRef = collection(projectFirestore, 'recipes', recipeId, 'comments')
          const querySnapshot = await getDocs(commentsRef)
          querySnapshot.forEach((doc) => {
            comments.value.push({ id: doc.id, ...doc.data() })
          })
        } catch (error) {
          console.error('Error fetching comments:', error)
        }
      }
  
      const addComment = async () => {
        if (newComment.value.trim() !== '') {
          try {
            const commentsRef = collection(projectFirestore, 'recipes', recipeId, 'comments')
            await addDoc(commentsRef, {
              user: userData.value.name,
              text: newComment.value,
              createdAt: new Date()
            })
            comments.value.push({
              user: userData.value.name,
              text: newComment.value,
              createdAt: new Date()
            })
            newComment.value = ''
          } catch (error) {
            console.error('Error adding comment:', error)
          }
        }
      }
  
      onMounted(async () => {
        if (user) {
          await fetchUserData()
          await fetchRecipe()
          await fetchComments()
        }
      })
  
      return {
        recipe,
        comments,
        newComment,
        addComment
      }
    }
  }
  </script>
  
  <style scoped>
  .recipe-detail {
    padding: 20px;
  }
  .recipe-info {
    text-align: center;
  }
  .recipe-info img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: 20px 0;
  }
  .comments {
    margin-top: 40px;
  }
  .comment {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  .add-comment {
    margin-top: 20px;
  }
  .add-comment textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }
  .edit-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  .edit-button:hover {
    background-color: #0056b3;
  }
  </style>
  