<template>
  <h1>Add Restaurant</h1>
  <form class="addRestaurant">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name">
    <input type="text" v-model="restaurant.address" placeholder="Enter Address">
    <input type="text" v-model="restaurant.contact" placeholder="Enter Contact">
    <button type="button" @click="addRestaurant">Add new Restaurant</button>
    
    
  </form>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import axios from '../axiosConfig'

  const restaurant = ref({})
  const router = useRouter()
  const addRestaurant = async () => {
    try {
      const result = await axios.post('/restaurants', restaurant.value)
      if(result.status === 201){
        router.push({name: 'home'})
      }      
    } catch (error) {
      console.log(error.message)
    }
  }
</script>

<style scoped>
.addRestaurant input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto    
  }

  .addRestaurant button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer
  }
</style>