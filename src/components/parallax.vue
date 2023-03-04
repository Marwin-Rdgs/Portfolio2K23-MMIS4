<template>

    <div class="banner">
        <img src="../assets/parallax/background.png" alt="" class="layer-1">
        <img src="../assets/parallax/meteor.png" alt="" class="layer-2">

        <div class="layer-3">
            <h1>Hello &amp; Wellcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias.</p>
            <a href="">Get Started</a>
        </div>

        <img src="../assets/parallax/4.png" alt="" class="layer-4">
        <img src="../assets/parallax/5.png" alt="" class="layer-5">
        <img src="../assets/parallax/6.png" alt="">
    </div>

    <div class="content">
        <h1>Parallax effect</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a quis, molestias, iusto perspiciatis provident in commodi nihil nulla tenetur fuga reprehenderit, officiis ipsam eos optio obcaecati quidem nemo corrupti.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a quis, molestias, iusto perspiciatis provident in commodi nihil nulla tenetur fuga reprehenderit, officiis ipsam eos optio obcaecati quidem nemo corrupti.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a quis, molestias, iusto perspiciatis provident in commodi nihil nulla tenetur fuga reprehenderit, officiis ipsam eos optio obcaecati quidem nemo corrupti.</p>
    </div>
    
</template>

    
<style scoped>

.banner {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
}

img {
    position: absolute;
    bottom: 0;
}

.content {
    background-color: #1d1d4f;
    padding: 60px;
    color: white;
    position: relative;
}

h1 {
    text-align: center;
    margin: 40px 0;
}

p {
    text-align: justify;
    line-height: 20px;
    letter-spacing: 1px;
    text-indent: 50px;
    width: 100%;
    max-width: 900px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    opacity: 0.7;
}

.layer-3  {
    position: absolute;
}

.layer-3 h1 {
    margin-top: 80px;
}

.layer-3 p {
    max-width: 600px;
    text-indent: 0;
    text-align: center;
    font-size: 14px;
    transform: translateY(-20px);
}

.layer-3 a {
    background-color: #7ff5ff;
    display: block;
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: auto;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #514c9c;
}
    
</style>

<script setup>
import { Parallax } from "../composables/parallax.js"
</script>