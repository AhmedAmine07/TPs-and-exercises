<template>
    <div class="container content">
      <form @submit.prevent="register">
        <h2 class="mb-3">Register</h2>
        <div class="input">
          <label for="email">Email address</label>
          <input
            v-model="email"
            class="form-control"
            type="text"
            name="email"
            placeholder="email@adress.com"
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            v-model="password"
            class="form-control"
            type="password"
            name="password"
            placeholder="password123"
          />
        </div>
  
        <div class="alternative-option mt-4">
          Already have an account? <span @click="moveToLogin">Login</span>
        </div>
         
        <br>
        <div>
          <button type="submit" id="register_button" class="mt-4 btn-pers">
            Register
          </button>
        </div>
        <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { projectAuth } from '../firebase/Config';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      };
    },
    methods: {
      validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
      async register() {
        if (!this.email || !this.password) {
          this.error = 'Email and password are required.';
          return;
        }
        if (!this.validateEmail(this.email)) {
          this.error = 'Invalid email.';
          return;
        }
        try {
          this.error = null; // Clear previous error
          await projectAuth.createUserWithEmailAndPassword(this.email, this.password);
          this.$router.push('/dashboard'); // Redirect to a dashboard page after successful registration
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.error = 'The email address is already in use by another account.';
              break;
            case 'auth/invalid-email':
              window.alert('Invalid email.');
              break;
            case 'auth/weak-password':
              this.error = 'The password is too weak.';
              break;
            default:
              this.error = error.message;
              this.password = ''; // Clear password field
          }
          console.error("Error registering: ", error.message);
        }
      },
      moveToLogin() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  button{
  margin-left: -180px;
  width: 50%; 
}
  .alert {
    color: #d9534f;
    background-color: #f2dede;
    border-color: #ebccd1;
    padding: 15px;
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  
  </style>
  