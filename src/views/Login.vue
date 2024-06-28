<template>
  <div class="container content">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
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
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <br>
      <div class="but">
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
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
    async login() {
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
        await projectAuth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.push('/dashboard'); // Redirect to a dashboard page after successful login
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            window.alert('Invalid email.');
            break;
          case 'auth/user-not-found':
            this.error = 'No user found with this email.';
            break;
          case 'auth/wrong-password':
            this.error = 'Incorrect password. Please try again.';
            this.password = ''; // Clear password field
            break;
          default: 
            this.error = 'Email or password is incorrect.';
            this.password = ''; // Clear password field
        }
        console.error("Error logging in: ", error.message);
      }
    },
    moveToRegister() {
      this.$router.push('/register');
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
