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
                    <h1 class="desktop:ml-20 text-transparent bg-clip-text bg-gradient-to-r from-mdarkblue to-mlightblue text-lg desktop:mr-20 text-center font-swap animate-pulse mb-5">Projets</h1>
                    <div class="phone:grid phone:grid-cols-3 desktop:flex desktop:justify-center gap-x-2">
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300">All</button></a>
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'School'; console.log(seeCateg)">School</button></a>
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Pro'; console.log(seeCateg)">Pro</button></a>
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Presta'; console.log(seeCateg)">Presta</button></a>
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Perso'; console.log(seeCateg)">Perso</button></a>
                        <a href="#"><button class="rounded-lg border-mdarkblue text-mdarkblue border px-2 py-1 bg-mdarkblue bg-opacity-0 hover:text-mwhite hover:bg-opacity-80 duration-300" onclick="seeCateg = 'Template'; console.log(seeCateg)">Template</button></a>
                    </div>
                </div>
            </div>

            <div class="grid desktop:grid-cols-3 gap-y-6">
            <div v-for="Projets in Projets" :key="Projets.projectId" class="col-span-1" >
                <cardP v-bind="Projets" v-if="projectCateg == seeCateg"/>
            </div></div>
        </section>
    </div>
</template>

<script setup>
import { supabase } from "../supabase.js";

import cardP from "../components/cardP.vue"

import {ref} from 'vue';

console.log("supabase :", supabase);

let { data: Projets } = await supabase
  .from('Projets')
  .select('*')

let seeCateg = "all";

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
    projectSite: {
      type: String,
      default: "nothing",
    },
    projectCateg : {
      type : String,
      default: "All",
    },
    projectDoc : { 
    type: String,
    default : "#",
    },
    projectRepos : {
      type: String,
      default : "#",
    },
    seeCateg : {
        type: String,
        default : "all",
    },
});


</script>
