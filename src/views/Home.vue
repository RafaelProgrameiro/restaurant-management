<template>
  <h1>Welcome on Home Page</h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.contact }}</td>
      <td>{{ restaurant.address }}</td>
      <td>
        <router-link :to="`/update-restaurant/${restaurant.id}`">Update</router-link>
        <button type="button" @click="deleteRestaurant(restaurant.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script setup>
import Header from '../components/Header.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {userIsLogged} from '../utils/auth'
import axios from '../axiosConfig'

const router = useRouter()
const restaurants = ref([])

const getRestaurants = async () =>{
  const result = await axios.get('/restaurants')
  restaurants.value = result.data
}

const deleteRestaurant = async (id) => {
  try {
    const result = await axios.delete(`/restaurants/${id}`)
    if(result.status === 200) getRestaurants()
  } catch (error) {
    console.log(error.message)
  }
}

  onMounted(() => {
    if(!userIsLogged()) router.push({name: 'login'})
    getRestaurants()
  })
</script>

<style scoped>
td{
  width: 160px;
  height: 40px;
}

td button{
  width: 60px;
  height: 20px;
  border: 1px solid skyblue;
  border-radius: 8px;
  background: rgb(231, 16, 52);
  color: #fff;
  cursor: pointer;
  margin-left: 5px
}
</style>