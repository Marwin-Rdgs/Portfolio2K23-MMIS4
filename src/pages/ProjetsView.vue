<template>
    <div class="grid grid-cols-12">
        <section class="col-span-1 bg-mlightblue">
            <Router-Link to="/"><button><h1>Retour</h1></button></Router-Link>
        </section>

        <section class="col-span-11">
            <div v-for="Projets in Projets" :key="Projets.projectId">
                <cardP v-bind="Projets" />
            </div>
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


</script>
