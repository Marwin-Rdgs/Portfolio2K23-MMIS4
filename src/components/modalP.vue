<!-- FAIRE DES SLOTS = TITRE/LIENS/DESC/etc... -->
<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal phone:w-[300px] phone:h-[720px] desktop:w-[500px] desktop:h-[500px]" @click.stop>
        <!-- DIMENSION IDEALE IMG = 1280x450 -->
        <img :src="projectImg" alt="" class="rounded-t-[20px] -mt-3 h-1/3 w-full">
        <h6 class="phone:text-3xs desktop:text-xs">{{projectTitle}}</h6>
        <p class="phone:text-5xs desktop:text-4xs">{{ projectDesc }} <br /> <br /> {{ projectDescTech }} </p>
        <div class="phone:grid desktop:flex desktop:justify-center gap-3">
        <a :href="projectRepos" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2 text-4xs">Repository</button></a>
        <a :href="projectDoc" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2 text-4xs">Documentation</button></a>
        <a :href="projectSite" target="_blank"><button class="border-2 border-red-900 bg-red-400 bg-opacity-80 hover:bg-opacity-100 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-white hover:text-red-900 px-2 text-4xs">Site</button></a>
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
    projectSite : {
      type: String,
      default: "#",
    }
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
  margin: 10px 0;
}

p {
  margin: 10px 0;
}

button {
  width: 150px;
  height: 40px;
  border-radius: 16px;
  margin-top: 20px;
}
</style>