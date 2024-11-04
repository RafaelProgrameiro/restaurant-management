<template>
  <div>
    <img alt="logo" class="logo" src="../assets/restaurant_logo.svg">
    <h1 style="color: skyblue">Sign up</h1>
    <div class="register">
      <input type="text" placeholder="Enter Name">
      <input type="email" placeholder="Enter Email">
      <input type="password" placeholder="Enter Password">
      <button>Sign Up</button>
    </div>
  </div>
</template>

<style scoped>
  .logo{
    width: 100px;
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