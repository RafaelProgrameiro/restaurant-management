<template>
  <div>
    <img alt="logo" class="logo" src="../assets/restaurant_logo.svg">
    <h1 style="color: skyblue">Sign up</h1>
    <div class="register">
      <input type="text" v-model="user.name" placeholder="Enter Name">
      <input type="email" v-model="user.email" placeholder="Enter Email">
      <input type="password" v-model="user.password" placeholder="Enter Password">
      <button @click="signUp">Sign Up</button>
      <p>
        <router-link to="/login">Go to login</router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../axiosConfig'
import {userIsLogged} from '../utils/auth'

  const user = ref({})
  const router = useRouter()
  
  const signUp = async () => {
    try {
      const result = await axios.post('/user', user.value)
      if (result.status === 201) {        
        router.push({name: 'login'})
      }
    } catch (error) {
      console.log(error.message)
    }    
  }

  onMounted (() => {
    if(userIsLogged()) router.push({name: 'home'})
  })  
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