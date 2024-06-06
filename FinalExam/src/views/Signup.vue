<template>
    <div class="signup">
      <Header />
      <section class="form-section">
        <h1>Sign Up</h1>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { ref } from 'vue';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { projectFirestore, doc, setDoc } from '@/firebase/Config';
  
  export default {
    name: 'Signup',
    components: {
      Header,
      Footer,
    },
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const router = useRouter();
  
      const signup = async () => {
        const auth = getAuth();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          await setDoc(doc(projectFirestore, 'users', user.uid), {
            name: name.value,
            email: user.email,
            createdAt: new Date(),
          });
          router.push({ path: '/', state: { message: 'Account created successfully!' } });
        } catch (error) {
          errorMessage.value = error.message;
          console.error('Error signing up:', error);
        }
      };
  
      return {
        name,
        email,
        password,
        errorMessage,
        signup,
      };
    },
  };
  </script>
  
  <style scoped>
  .signup {
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
  </style>
  