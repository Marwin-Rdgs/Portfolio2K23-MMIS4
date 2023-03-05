<!-- FAIRE DES SLOTS = TITRE/LIENS/DESC/etc... -->
<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <img class="check" src="../assets/menu-phone/Menu.svg" alt="" />
        <h6>{{projectTitle}}</h6>
        <img :src=projectImg alt="">
        <p>{{ projectDesc }} <br /> <br /> {{ projectDescTech }} </p>
        <div class="flex justify-center gap-3">
        <a href="#" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2">Repository</button></a>
        <a href="#" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2">Documentation</button></a>
        <a href="#" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2">Site</button></a>
      </div></div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="../assets/menu-phone/cross.png" alt="" />
      </div>
    </div>
  </template>
  
  <script>
    export default {
    props: {
      projectTitle: {
      type: String,
      default: "DEFAUT",
    },
    projectDesc: {
      type: String,
      default: "DEFAUT",
    },
    projectDescTech: {
      type: String,
      default : "DEFAUT",
    },
    projectImg: {
      type: String,
      default: "DEFAUT"
    },
  },
  }
  </script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 6%;
  padding: 10px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  width: 150px;
  height: 40px;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>