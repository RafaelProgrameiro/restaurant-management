<template>
<div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/add-restaurant">Add Restaurant</router-link>
  <router-link to="/update-restaurant">Update Restaurant</router-link>
  <a @click="logout" href="#">Logout</a>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

  const router = useRouter()
  const logout = () => {
    localStorage.clear()
    router.push({name: 'login'})
    
  }
</script>

<style scoped>
  .nav{
    background-color: #333;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .nav a{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin: 5px;
  }

  .nav a:hover{
    background: #ddd;
    color: #333
  }
</style>