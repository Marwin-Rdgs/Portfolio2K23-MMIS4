<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/supabase.js'

</script>

<template class="scroll-smooth">


  <suspense><RouterView/></suspense>
   
</template>