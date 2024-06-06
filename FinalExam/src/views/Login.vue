<template>
    <div class="login">
      <Header />
      <section class="form-section">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'Login',
    components: {
      Header,
      Footer
    },
    setup() {
      const email = ref('')
      const password = ref('')
      const errorMessage = ref('')
      const router = useRouter()
      
      const login = async () => {
        const auth = getAuth()
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value)
          router.push({ path: '/', state: { message: 'Logged in successfully!' } })
        } catch (error) {
          errorMessage.value = error.message
          console.error('Error logging in:', error)
        }
      }
  
      return {
        email,
        password,
        errorMessage,
        login
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
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
  .form-group input {
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
  </style>
  