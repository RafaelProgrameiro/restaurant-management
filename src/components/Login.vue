<template>
  <div>
    <img alt="logo" class="logo" src="../assets/restaurant_logo.svg">
    <h1 style="color: skyblue">Login</h1>
    <div class="login">
      <input type="email" v-model="user.email" placeholder="Enter Email">
      <input type="password" v-model="user.password" placeholder="Enter Password">
      <button @click="login">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">Go to Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from '../axiosConfig'
import { useRouter } from 'vue-router'

  const user = ref({})
  const router = useRouter()

  const login = async () => {
    try {
      const result = await axios.get(`/user?email=${user.value.email}&password=${user.value.password}`)
      console.log(result.data)
      if(result.status === 200 && result.data.length > 0){
        localStorage.setItem('user', JSON.stringify(result.data[0]))
        router.push({name: 'home'})
      } else {
        alert('Email e/ou senha errados')
      }
    } catch (error) {
      console.log(error.message)
    }
    
  }

  onMounted(() => {
    let user = localStorage.getItem('user')
    if(!user) {
      router.push({name: 'login'})
    }
  })

</script>

<style scoped>
  .logo{
    width: 100px;
  }

  .logo path{
    fill: skyblue
  }

  .login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto    
  }

  .login button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer
  }
</style>