<template>
  <h1>Welcome on Home Page</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

  onMounted(() => {
    let user = localStorage.getItem('user')
    if(!user){
      router.push({name: 'login'})
    }
  })
</script>