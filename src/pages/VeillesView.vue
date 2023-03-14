<template>
  <div class="grid grid-cols-12">
      <section class="col-span-1 bg-mlightblue">
          <Router-Link to="/"><button><h1>Retour</h1></button></Router-Link>
      </section>

      <section class="col-span-11">

          <div class="flex justify-center mt-10 mb-10">
              <div>
                  <h1 class="text-transparent bg-clip-text bg-gradient-to-br from-mdarkblue to-mlightblue  font-swap text-center phone:text-xs desktop:text-lg "> Marwin RODRIGUES</h1>
                  <div class="flex justify-center">
                      <div class="desktop:py-1 bg-mlightblue bg-opacity-40 rounded-full desktop:w-8/12 phone:w-11/12 text-center px-1"> <h3 class="text-mdarkblue shadow-2xl shadow-black rounded-full phone:text-4xs desktop:text-3xs">Web Developper Apprentice</h3></div>
                  </div>
                  <h1 class="desktop:ml-20 text-transparent bg-clip-text bg-gradient-to-r from-mdarkblue to-mlightblue text-lg desktop:mr-20 text-center font-swap animate-pulse mb-5">Veille Technologique</h1>
                  <div class="phone:grid phone:grid-cols-2 desktop:flex desktop:justify-center gap-x-2">
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300">All</button></a>
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Dev'; console.log(seeCateg)">Developpement</button></a>
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Gestion'; console.log(seeCateg)">Gestion</button></a>
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Design'; console.log(seeCateg)">Design</button></a>
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Communication'; console.log(seeCateg)">Communication</button></a>
                      <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Others'; console.log(seeCateg)">Others</button></a>
                  </div>
              </div>
          </div>

          <div class="grid desktop:grid-cols-3 gap-y-6">
          <div v-for="Veilles in Veilles" :key="Veilles.veilleId" class="col-span-1" >
              <cardV v-bind="Veilles" v-if="veilleCateg == seeCateg"/>
          </div></div>
      </section>
  </div>
</template>

<script setup>
import { supabase } from "../supabase.js";

import cardV from "../components/cardV.vue"

import {ref} from 'vue';

console.log("supabase :", supabase);

let { data: Veille } = await supabase
  .from('Veille')
  .select('*')

let seeCateg = "all";

defineProps ({
veilleTitle: {
type: String,
default: "DEFAUT",
},
veilleCateg: {
type: String,
default: "nothing",
},
veilleDesc: {
type: String,
default : "nothing",
},
veilleImg: {
type: String,
default: "nothing"
},
veilleUrl: {
type: String,
default: "nothing",
},
seeCateg : {
  type: String,
  default : "all",
},
});

</script>