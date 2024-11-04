<template>
  <div>
    <img alt="logo" class="logo" src="../assets/restaurant_logo.svg">
    <h1 style="color: skyblue">Sign up</h1>
    <div class="register">
      <input type="text" v-model="user.name" placeholder="Enter Name">
      <input type="email" v-model="user.email" placeholder="Enter Email">
      <input type="password" v-model="user.password" placeholder="Enter Password">
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from '../axiosConfig'

  const user = ref({})
  
  const signUp = async () => {
    try {
      const result = await axios.post('/user', user.value)
      if (result.status === 201) {
        localStorage.setItem('user', JSON.stringify(result.data))
        user.value = {}
      }
    } catch (error) {
      console.log(error.message)
    }
    
  }
</script>

<style scoped>
  .logo{
    width: 100px;
  }

  .logo path{
    fill: skyblue
  }

  .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto
  }

  .register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer
  }
</style>