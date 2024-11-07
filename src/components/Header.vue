<template>
<div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/add-restaurant">Add Restaurant</router-link>
  <a v-if="logoutButton" @click="logout" href="#">Logout</a>
</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {userIsLogged} from '../utils/auth'

  const router = useRouter()
  const route = useRoute()

  const logoutButton = ref(userIsLogged())

  const logout = () => {
    localStorage.clear()
    logoutButton.value = false
    router.push({name: 'login'})    
  }

  watch(
    () => route.fullPath,
    () => {
      logoutButton.value = userIsLogged()
    }
  )


</script>

<style scoped>
  .nav{
    background-color: #333;
    overflow: hidden;
    margin-bottom: 30px
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