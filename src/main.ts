import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import { plugin, defaultConfig } from "@formkit/vue";

import "./index.css";

// A supprimer en "production"
import { supabase } from "./supabase";
console.log(supabase);

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");