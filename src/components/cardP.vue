<template>
  <div class="rounded-md hover:scale-110 hover:duration-300 hover:border hover:border-red-400">

    <!-- HEAD CARD -->
    <!-- => Presta -->
    <div class="bg-red-400 flex justify-center p-2 rounded-md" v-if="projectCateg == 'Presta'">
      <div>
        <img src="../assets/card/projects/presta.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Prestation</h3>
      </div>
    </div>

    <!-- => School -->
    <div class="bg-red-400 flex justify-center p-2 rounded-md" v-if="projectCateg == 'School'">
      <div>
        <img src="../assets/card/projects/school.png" alt="">
        <h3 class="text-mwhite my-2 text-center">School</h3>
      </div>
    </div>

    <!-- => Perso -->
    <div class="bg-red-400 flex justify-center p-2 rounded-md" v-if="projectCateg == 'Perso'">
      <div>
        <img src="../assets/card/projects/perso.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Personnal</h3>
      </div>
    </div>

    <!-- => Pro -->
    <div class="bg-red-400 flex justify-center p-2 rounded-md" v-if="projectCateg == 'Pro'">
      <div>
        <img src="../assets/card/projects/pro.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Professional</h3>
      </div>
    </div>

    <!-- => Template -->
    <div class="bg-red-400 flex justify-center p-2 rounded-md" v-if="projectCateg == 'Template'">
      <div>
        <img src="../assets/card/projects/template.png rounded-md" alt="">
        <h3 class="text-mwhite my-2 text-center">Template</h3>
      </div>
    </div>

    <!-- CONTENT CARD -->
    <div class="bg-mwhite">
      <h2 class="text-red-400 text-center">{{ projectTitle }}</h2>

      <div class="flex justify-center">
        <button @click="showModal = true" class="border-2 border-red-400 bg-red-400 bg-opacity-0 hover:bg-opacity-80 hover:scale-110 duration-300 group py-2 rounded-lg mb-4 hover:shadow-2xl hover:shadow-red-900 text-red-400 hover:text-white px-2">Click here</button>
      </div>
    </div>

  </div>
    <!-- RAJOUTER UN V-BIND ?! -->
    <modalP v-show="showModal" @close-modal="showModal = false"
    :projectTitle="projectTitle"
    :projectDesc="projectDesc"
    :projectDescTech="projectDescTech"
    :projectImg="projectImg"/>
</template>

<script setup>
defineProps ({
    projectTitle: {
      type: String,
      default: "DEFAUT",
    },
    projectCateg: {
      type: String,
      default: "nothing",
    },
    projectDesc: {
      type: String,
      default : "nothing",
    },
    projectDescTech: {
      type: String,
      default : "nothing"
    },
    projectImg: {
      type: String,
      default: "nothing"
    },
});
</script>

<script>
import { stringifyStyle } from "@vue/shared";
import modalP from "./modalP.vue"

export default {
  components: {modalP},
  
  data() {
    return {
      showModal: false,
    }
  },
}

</script>