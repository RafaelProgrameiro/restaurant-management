<template>
  <h1>Welcome on Home Page</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {userIsLogged} from '../utils/auth'

const router = useRouter()

  onMounted(() => {
    if(!userIsLogged()) router.push({name: 'login'})    
  })
</script>