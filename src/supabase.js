import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


import { ref } from "vue";

export const user = ref()

supabase.auth.onAuthStateChange(async () => {
    const { data, error } = await supabase.auth.getSession()
    user.value = data.session.user
    console.log(user.value);
})