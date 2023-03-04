<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/supabase.js'

</script>

<template>


  <suspense><RouterView/></suspense>
   
</template>