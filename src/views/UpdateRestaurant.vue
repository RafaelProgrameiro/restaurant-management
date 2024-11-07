<template>
  <h1>Add Restaurant</h1>
  <form class="updateRestaurant">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name">
    <input type="text" v-model="restaurant.address" placeholder="Enter Address">
    <input type="text" v-model="restaurant.contact" placeholder="Enter Contact">
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
    
    
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from '../axiosConfig'

  const restaurant = ref({})
  const router = useRouter()
  const route = useRoute()

  const updateRestaurant = async () => {
    try {
      const result = await axios.put(`/restaurants/${route.params.id}`, restaurant.value)
      if(result.status === 200) router.push({name: 'home'})         
    } catch (error) {
      console.log(error.message)
    }
  }
 
  onMounted(async () => {
    try {
      const result = await axios.get(`/restaurants/${route.params.id}`)
      restaurant.value = result.data   
  } catch (error) {
    console.log(error.message)
  }
  })
</script>

<style scoped>
.updateRestaurant input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto    
  }

  .updateRestaurant button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer
  }
</style>