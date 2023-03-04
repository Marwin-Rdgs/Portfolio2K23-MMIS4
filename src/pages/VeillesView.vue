<template>
    <div class="grid grid-cols-12">
        <section class="col-span-1 bg-mlightblue">
            <Router-Link to="/"><button><h1>Retour</h1></button></Router-Link>
        </section>

        <section class="col-span-11">
            <div v-for="Veille in Veille" :key="Veille.veilleId">
              <cardV v-bind="Veille" />
            </div>
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



</script>