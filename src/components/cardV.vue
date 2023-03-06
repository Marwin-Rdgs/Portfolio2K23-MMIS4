<template>
  <div class="hover:scale-110 hover:duration-300">

    <!-- HEAD CARD -->
    <!-- => Dev -->
    <div class="bg-green-400 flex justify-center p-2" v-if="veilleCateg == 'Dev'">
      <div>
        <img src="/public/card/veilles/dev.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Developpement</h3>
      </div>
    </div>

    <!-- => Design -->
    <div class="bg-green-400 flex justify-center p-2" v-if="veilleCateg == 'Design'">
      <div>
        <img src="/public/card/veilles/design.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Design</h3>
      </div>
    </div>

    <!-- => Communication -->
    <div class="bg-green-400 flex justify-center p-2" v-if="veilleCateg == 'Communication'">
      <div>
        <img src="/public/card/veilles/communication.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Communication</h3>
      </div>
    </div>

    <!-- => Gestion -->
    <div class="bg-green-400 flex justify-center p-2" v-if="veilleCateg == 'Gestion'">
      <div>
        <img src="/public/card/veilles/gestion.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Gestion</h3>
      </div>
    </div>

    <!-- => Other -->
    <div class="bg-green-400 flex justify-center p-2" v-if="veilleCateg == 'Other'">
      <div>
        <img src="/public/card/veilles/more.png" alt="">
        <h3 class="text-mwhite my-2 text-center">Other</h3>
      </div>
    </div>


    <!-- CONTENT CARD -->
    <div class="bg-mwhite">
      <h2 class="text-red-400 text-center">{{ veilleTitle }}</h2>

      <div class="flex justify-center">
        <button @click="showModal = true" class="border-2 border-mdark bg-mdark bg-opacity-0 hover:bg-opacity-80 hover:scale-110 duration-300 group py-2 rounded-lg mb-32 hover:shadow-2xl hover:shadow-mdarkblue text-mdark hover:text-white">Click here</button>
      </div>
    </div>

  </div>
    <!-- RAJOUTER UN V-BIND ?! -->
    <modalP v-show="showModal" @close-modal="showModal = false"/>
</template>

<script setup>
defineProps ({
    veilleTitle: {
      type: String,
      default: "DEFAUT",
    },
    veilleCateg: {
      type: String,
      default: "other",
    }
});
</script>

<script>
import modalV from "./modalV.vue"

export default {
  components: {modalV},
  
  data() {
    return {
      showModal: false,
    }
  },
}

</script>