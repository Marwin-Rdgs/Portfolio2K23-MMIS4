<template>

<header class="sticky top-0 h-0 z-50">
  <div class="absolute py-14 w-full bg-mwhite blur-3xl"></div>
    <div class="flex flex-wrap gap-56 relative">
      <a href="#top" @click="menuVisible = true" class="desktop:w-1/12 desktop:scale-50 phone:scale-100 phone:w-1/5 phone:mt-2 phone:ml-2 desktop:mt-0 desktop:ml-0 hover:animate-pulse"><img src="../assets/marwin-logo.svg"></a>
      <div class="desktop:hidden flex">
        <button @click="menuVisible = !menuVisible" :class="{hidden: !menuVisible}"><img src="../assets/menu-phone/Menu.svg" alt=""></button>
        <button @click="menuVisible = !menuVisible" :class="{hidden: menuVisible}"><img src="../assets/menu-phone/cross.png" alt=""></button>
      </div>


      <div class="flex pt-10 gap-96">
             
        <!-- MENU PC -->
        <nav>
          <div class="desktop:flex hidden -mt-2">


            
              <!--  -->
            <ul class="flex gap-10 pt-5 rounded-full">
                
                <div class="group relative">
                  <a href="#Projets" class="z-20"><li class="ml-4 z-20"><p class="z-20 relative opacity-60 group-hover:opacity-100 duration-200 group-hover:font-bold">Projets</p></li></a>
                  <div class="flex justify-center"><div class="group-hover:w-full w-0 duration-500 bg-mlightblue h-1 rounded-lg ml-4 "></div></div>
                </div>
                <div class="group relative">
                  <a href="#Veilles" class="z-20"><li class="ml-4 z-20"><p class="z-20 relative opacity-60 group-hover:opacity-100 duration-200 group-hover:font-bold">Veilles</p></li></a>
                  <div class="flex justify-center"><div class="group-hover:w-full w-0 duration-500 bg-mlightblue h-1 rounded-lg ml-4 "></div></div>
                </div>
                <div class="group relative">
                  <a href="#About" class="z-20"><li class="ml-4 z-20"><p class="z-20 relative opacity-60 group-hover:opacity-100 duration-200 group-hover:font-bold">À propos</p></li></a>
                  <div class="flex justify-center"><div class="group-hover:w-full w-0 duration-500 bg-mlightblue h-1 rounded-lg ml-4 "></div></div>
                </div>
                <div class="group relative">
                  <a href="mailto:contact@marwin-rodrigues" class="z-20"><li class="ml-4 z-20"><p class="z-20 relative opacity-60 group-hover:opacity-100 duration-200 group-hover:font-bold">Contact</p></li></a>
                  <div class="flex justify-center"><div class="group-hover:w-full w-0 duration-500 bg-mlightblue h-1 rounded-lg ml-4 "></div></div>
                </div>


            </ul>
            
        </div>
        <div class="desktop:hidden">
          
        </div>
        </nav>

        


      </div>  
    </div>

    <!-- MENU PHONE -->
    <nav class="overflow-hidden w-full h-full flex desktop:hidden z-50 bg-white absolute">
      <div class="h-full w-full z-50" :class="{hidden: menuVisible}">
        
        <ul class="z-50">
            <li class="z-50"><a href="#Projets" @click="menuVisible = !menuVisible" class="z-50">
              <h2 class="z-50">Projets</h2></a>
            </li>
            <li class="z-50"><a href="#Veilles" @click="menuVisible = !menuVisible" class="z-50">
              <h2 class="z-50">Veilles</h2></a>
            </li>
            <li class="z-50"><a href="#About" @click="menuVisible = !menuVisible" class="z-50">
              <h2 class="z-50">à propos</h2></a>
            </li>
            <li class="z-50"><a to="mailto:contact@marwin-rodrigues.fr" @click="menuVisible = !menuVisible" class="z-50">
              <h2 class="z-50">Contact</h2></a>
            </li>
        </ul>
      </div>
    </nav>
  </header>

  <section id="top"  :class="{hidden: !menuVisible}">
    <!-- <parallax /> -->
    <div class="absolute z-10 mt-56 phone:left-20 desktop:left-1/3">
      <h1 class="text-transparent bg-clip-text bg-gradient-to-br from-mdarkblue to-mlightblue  font-swap text-center phone:text-xs desktop:text-lg">Welcome to <span class="font-bold"> <br /> Marwin RODRIGUES</span></h1>
      <div class="flex justify-center">
        <div class="desktop:py-1 desktop:px-2 bg-mlightblue bg-opacity-40 rounded-full w-3/5 text-center"> <h3 class="text-mdarkblue shadow-2xl shadow-black rounded-full phone:text-4xs desktop:text-3xs">Web Developper Apprentice</h3></div>
      </div>
      <div class="flex justify-center gap-10 mt-5">
        <a href="https://github.com/Marwin-Rdgs" target="_blank"><img src="../assets/socials/github.png" alt="" class="hover:-translate-y-2 hover:duration-100 hover:scale-110"></a>
        <a href="https://www.instagram.com/marwin.rdgs/" target="_blank"><img src="../assets/socials/instagram.png" alt="" class="hover:-translate-y-2 hover:duration-100 hover:scale-110"></a>
        <a href="https://www.linkedin.com/in/marwin-rodrigues/" target="_blank"><img src="../assets/socials/linkedin.png" alt="" class="hover:-translate-y-2 hover:duration-100 hover:scale-110"></a>
      </div>
    </div>
    <v-vanta effect="clouds" :options=options class="w-full z-0" />
  </section>

  <div class="mt-96" :class="{hidden: !menuVisible}"><span>.</span></div>
  

  <section id="About" class="mt-96" :class="{hidden: !menuVisible}">
    <img src="../assets/nuage1.png" alt="" id="cloud" class="absolute hidden desktop:flex mt-10">

    <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-mdarkblue to-mlightblue phone:text-xs desktop:text-xl desktop:mr-20 phone:text-center desktop:text-right font-swap">PRÉSENTATION</h1>
    
   
    <div class="flex justify-center">
    <div class="desktop:grid desktop:grid-cols-2 mt-10">
      <div class="grid-cols-1">
        <div class="flex justify-center">
          <img src="../assets/marwin.png" alt="" class="relative w-1/3 rounded-full z-10">
        </div>
        <div class="desktop:flex desktop:justify-center">
          <div class="desktop:w-80 phone:w-32 absolute z-0 desktop:-mt-64 phone:-mt-40 desktop:h-72 phone:h-40 desktop:left-48 phone:left-32 rounded-full bg-mlightblue blur-lg"></div>
        </div>
      </div>
      <div class="grid-cols-2">
        <h2 class="desktop:text-base phone:ml-2 desktop:ml-0">Marwin RODRIGUES</h2>
        <h3 class="desktop:text-sm text-mdarkblue phone:ml-2 desktop:ml-0">Web Developper Apprentice</h3>

        <p class="desktop:text-3xs phone:text-5xs text-opacity-75 mt-4 w-10/12 phone:ml-2 desktop:ml-0">Étudiant agé de 22 ans, actuellement en deuxième année au <a href="#"><span class="text-mdarkblue hover:underline hover:animate-pulse"> MMI Montbéliard </span></a> et apprentis développeur web chez <a href="#"><span class="text-mdarkblue hover:underline hover:animate-pulse"> Forvia</span></a>. Passionné par le web, l'Animation et le football.</p>
      
        <ul class="theme-list mt-5 phone:ml-2 desktop:ml-0">
            <li><b>Réside:</b> Montbéliard, FR</li>
            <li><b>Age:</b> 22</li>
            <li><b>Né:</b> 19/03/2001</li>
            <li><b>Contact:</b> <a href="mailto:contact@marwin-rodrigues.fr" class="text-mdarkblue hover:underline hover:animate-pulse">contact@marwin-rodrigues.fr</a></li>
          </ul>

          <div class="flex justify-center desktop:w-1/2 mt-4">
          <a href="#"><button class="rounded-full border-2 border-mdarkblue px-2 py-1 hover:bg-mdarkblue hover:text-white hover:scale-110 duration-300">Voir mon CV</button></a>
          </div>
      
        </div>
      </div>
    </div> 

    <img src="../assets/nuage2.png" alt="" id="cloud" class="absolute right-56 w-1/12 z-0 hidden desktop:flex -mt-2">
  <img src="../assets/nuage2.png" alt="" id="cloud" class="absolute right-64 -mt-12 w-2/12 z-0 hidden desktop:flex">

  </section>

  <div class="mt-32 h-2 bg-mlightblue blur" :class="{hidden: !menuVisible}"></div>
  <section id="Compet" class="border-t-2 bg-mdarkblue bg-opacity-80 pb-8 pt-3 shadow-lg shadow-mlightblue" :class="{hidden: !menuVisible}">
    <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-mdarkblue to-mdark desktop:text-xl desktop:mr-20 text-left font-swap">COMPÉTENCES</h1>


    <div class="flex justify-center"><div class="grid desktop:grid-cols-3 desktop:gap-x-52 desktop:gap-y-20 phone:gap-y-16">
    
      <!-- LANGAGE PROGRAMMATION  -->
    <div class="group">
      <div class="flex justify-center">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-6 gap-y-8 py-6">
          <!-- HTML -->
          <div class="group relative">
            <img src="../assets/competences/html.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black desktop:absolute -mt-4 rounded-full">
              <p class="text-center text-white group-hover:text-black">HTML</p>
            </div>
          </div>
          <!-- CSS -->
          <div class="group relative">
            <img src="../assets/competences/css.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center ml-2">CSS</p>
            </div>
          </div>
          <!-- JAVASCRIPT -->
          <div class="group relative">
            <img src="../assets/competences/js.png" alt="" class="w-[128px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center text-white group-hover:text-black desktop:ml-4 phone:scale-75 desktop:scale-100">JavaScript</p>
            </div>  
          </div>
          <!-- PHP -->
          <div class="group relative">
            <img src="../assets/competences/PHP.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-3 rounded-full w-full">
              <p class="text-center hidden group-hover:flex desktop:ml-2">PHP</p>
            </div>
          </div>
          <!-- Python -->
          <div class="group relative">
            <img src="../assets/competences/Python.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center hidden group-hover:flex">Python</p>
            </div>
          </div>

          <!-- VBA -->
          <div class="group relative">
            <img src="../assets/competences/vba.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center hidden group-hover:flex desktop:ml-2">VBA</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/programmation.png" alt="" >
        <h3 class="text-center text-2xs">Langages de programmation</h3>
      </div>
    </div>

      <!-- FRAMEWORKS  -->
    <div class="group">
      <div class="flex justify-center">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-6 px-8">
        <!-- Tailwind -->
        <div class="group relative">
            <img src="../assets/competences/tailwind.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-3">
              <p class="text-center hidden group-hover:flex text-black text-5xs -ml-5">Tailwind CSS</p>
            </div>
          </div>
          <!-- bootstrap -->
          <div class="group relative">
            <img src="../assets/competences/Bootstrap.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-3">
              <p class="text-center hidden group-hover:flex -ml-8">Bootstrap</p>
            </div>
          </div>
          <!-- uikit -->
          <div class="group relative">
            <img src="../assets/competences/uikit.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center text-white group-hover:text-black -ml-4">uikit</p>
            </div>
          </div>
          <!-- vuejs -->
          <div class="group relative">
            <img src="../assets/competences/vuejs.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center hidden group-hover:flex -ml-5">VueJS</p>
            </div>
          </div>
          <!-- Angular -->
          <div class="group relative">
            <img src="../assets/competences/Angular.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center hidden group-hover:flex -ml-7">Angular</p>
            </div>
          </div>

          <!-- ThreeJS -->
          <div class="group relative">
            <img src="../assets/competences/Threejs.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center hidden group-hover:flex -ml-7">ThreeJS</p>
            </div>
          </div>

          <!-- ChartJS -->
          <div class="group relative">
            <img src="../assets/competences/chartjs.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center hidden group-hover:flex -ml-7">ChartJS</p>
            </div>
          </div>

          <!-- AlpineJS -->
          <div class="group relative">
            <img src="../assets/competences/alpine.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center hidden group-hover:flex -ml-8">AlpineJS</p>
            </div>
          </div>

          <!-- OpenStreetMap -->
          <div class="group relative">
            <img src="../assets/competences/openstreetmap.png" alt="" class="w-[64px]">
            <div class="desktop:px-16 phone:px-4 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-8">
              <p class="text-center hidden group-hover:flex phone:-ml-4 desktop:-ml-14 desktop:text-4xs phone:text-5xs">OpenStreetMap</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/frameworks.png" alt="" >
        <h3 class="text-center text-2xs">Frameworks</h3>
      </div>
    </div>
    

      <!-- CMS  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-6 px-8">
          <!-- Wordpress -->
          <div class="group relative">
            <img src="../assets/competences/wordpress.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full desktop:-ml-4">
              <p class="text-center text-white group-hover:text-black">Wordpress</p>
            </div>
          </div>
          <!-- Wix -->
          <div class="group relative mt-4">
            <img src="../assets/competences/wix.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-2 rounded-full w-full">
              <p class="text-center desktop:ml-2">Wix</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/cms.png" alt="" >
        <h3 class="text-center text-2xs">CMS</h3>
      </div>
    </div>


      <!-- BDD  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-6 px-8">
          <!-- Supabase -->
          <div class="group relative">
            <img src="../assets/competences/supabase.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full desktop:-ml-4">
              <p class="text-center text-white group-hover:text-black">Supabase</p>
            </div>
          </div>
          <!-- Firebase -->
          <div class="group relative">
            <img src="../assets/competences/firebase.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-8">Firebase</p>
            </div>
          </div>
          <!-- PHPMyAdmin -->
          <div class="group relative">
            <img src="../assets/competences/phpmyadmin.png" alt="" class="w-[64px]">
            <div class="px-14 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full -ml-6">
              <p class="text-center -ml-12">PHPMyAdmin</p>
            </div>
          </div>
          <!-- SQLLite -->
          <div class="group relative">
            <img src="../assets/competences/sqlite.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-3">
              <p class="text-center -ml-7">SQLlite</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/bdd.png" alt="" >
        <h3 class="text-center text-2xs">Base de données</h3>
      </div>
    </div>


      <!-- Outils de développement  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-6 px-8">
          <!-- Git -->
          <div class="group relative">
            <img src="../assets/competences/git.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full desktop:ml-3">
              <p class="text-center text-white group-hover:text-black">Git</p>
            </div>
          </div>
          <!-- Github -->
          <div class="group relative">
            <img src="../assets/competences/github.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center">Github</p>
            </div>
          </div>
          <!-- VSCode -->
          <div class="group relative">
            <img src="../assets/competences/vscode.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-8">VSCode</p>
            </div>
          </div>
          <!-- PHPStorm -->
          <div class="group relative">
            <img src="../assets/competences/PhpStorm.png" alt="" class="w-[64px]">
            <div class="px-12 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-4">
              <p class="text-center -ml-8">PHPStorm</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/tool.png" alt="" >
        <h3 class="text-center text-2xs">Outils de développement</h3>
      </div>
    </div>


      <!-- Développement Jeux-vidéos  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-6 px-8">
          <!-- UE -->
          <div class="group relative">
            <img src="../assets/competences/unreal.png" alt="" class="w-[64px]">
            <div class="px-4 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full">
              <p class="text-center text-white group-hover:text-black desktop:text-5xs">Unreal Engine</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/gaming.png" alt="" >
        <h3 class="text-center text-2xs">Développement de jeux-vidéos</h3>
      </div>
    </div>


      <!-- Développement d'Application  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-12 px-8">
          <!-- PowerApps -->
          <div class="group relative">
            <img src="../assets/competences/powerapps.png" alt="" class="scale-150">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-1 rounded-full desktop:ml-3">
              <p class="text-center text-white group-hover:text-black">PowerApps</p>
            </div>
          </div>
          <!-- Power Automate -->
          <div class="group relative mt-3">
            <img src="../assets/competences/powerautomate.png" alt="" class="">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-1 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-9">Power Automate</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/application.png" alt="" >
        <h3 class="text-center text-2xs">Développement d'Application</h3>
      </div>
    </div>


      <!-- Maquette  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-12 px-8">
          <!-- Figma -->
          <div class="group relative">
            <img src="../assets/competences/figma.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full">
              <p class="text-center text-white group-hover:text-black">Figma</p>
            </div>
          </div>
          <!-- XD -->
          <div class="group relative">
            <img src="../assets/competences/xd.png" alt="" class="w-[64px]">
            <div class="px-6 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full">
              <p class="text-center -ml-4">Adobe XD</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/maquette.png" alt="" >
        <h3 class="text-center text-2xs">Maquettage Web</h3>
      </div>
    </div>


      <!-- Design  -->
    <div class="group">
      <div class="flex justify-center z-10">
        <div class="p-4 rounded-md bg-mdark absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-700">
          <div class="flex justify-center"><div class="grid desktop:grid-cols-3 gap-x-24 gap-y-11 py-12 px-8">
          <!-- Photoshop -->
          <div class="group relative">
            <img src="../assets/competences/photoshop.png" alt="" class="w-[64px]">
            <div class="px-2 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-2 rounded-full desktop:-ml-3">
              <p class="text-center text-white group-hover:text-black">Photoshop</p>
            </div>
          </div>
          <!-- Illustrator -->
          <div class="group relative">
            <img src="../assets/competences/Illustrator.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-3 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-8">Illustrator</p>
            </div>
          </div>
          <!-- Blender -->
          <div class="group relative">
            <img src="../assets/competences/Blender.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-6">Blender</p>
            </div>
          </div>
          <!-- 3DMax -->
          <div class="group relative">
            <img src="../assets/competences/3Dmax.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-7">3DMax</p>
            </div>
          </div>
          <!-- OBS -->
          <div class="group relative">
            <img src="../assets/competences/OBS.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-3">
              <p class="text-center -ml-4">OBS</p>
            </div>
          </div>
          <!-- DaVinci -->
          <div class="group relative">
            <img src="../assets/competences/DaVinci.png" alt="" class="w-[64px]">
            <div class="px-10 py-1 bg-white border border-black hidden group-hover:flex desktop:absolute -mt-4 rounded-full w-full desktop:-ml-2">
              <p class="text-center -ml-7">DaVinci Resolve</p>
            </div>
          </div>
          </div></div>
        </div>
      </div>
      <div class="opacity-100 relative group-hover:opacity-0 duration-700 group-hover:-translate-y-4 scale-75">
        <img src="../assets/competences-categ/design.png" alt="" >
        <h3 class="text-center text-2xs">Design</h3>
      </div>
    </div>
    </div></div>


  </section>

  <section id="Cursus" class="mt-4 shadow-lg shadow-mlightblue pb-4 z-10" :class="{hidden: !menuVisible}">
    <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-mdarkblue to-mlightblue desktop:text-xl desktop:mr-20 text-right font-swap">PARCOURS</h1>

    <div class="container pt-5 flex justify-center">
      <div class="desktop:flex phone:grid justify-center gap-52">

        <!-- SCOLAIRE -->
        <div class="wow fadeInRight desktop:w-1/3">
          <h2 class="fw-normal font-swap">Scolaire</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">09/2021 à aujourd'hui</div>
              <div class="details">
                <h5>BUT MMI</h5>
                <small class="fg-theme">mmi montbéliard</small>
                <p>Formation aux métiers du web, spécialité <b>Développement Web & dispositifs intéractifs</b></p>
              </div>
              <!-- <div class="text-center wow fadeInUp">
                <a href="https://marwin-rodrigues.fr/MMI/" target="_blank" class="btn btn-theme">Projets Réalisés en MMI</a>
              </div> -->
            </li>
            <li>
              <div class="title">09/2020 à 06/2021</div>
              <div class="details">
                <h5>BTS SIO</h5>
                <small class="fg-theme">Lycée Condorcet, Belfort</small>
                <p>Formé en Informatique en alternance, spécialité <br /> <b>SLAM (= Développement)</b></p>
              </div>
            </li>
            <li>
              <div class="title">09/2017 à 07/2020</div>
              <div class="details">
                <h5>BAC STI2D</h5>
                <small class="fg-theme">Lycée Germaine Tillion, Montbéliard</small>
                <p>Baccalauréat mention assez bien, spécialité <b>SIN</b></p>
              </div>
            </li>
          </ul>
        </div>


        <!-- PRO -->
        <div class="col-md-6 wow fadeInRight desktop:w-1/3" data-wow-delay="200ms">
          <h2 class="fw-normal font-swap">Professionel</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">09/2022 à aujourd'hui</div>
              <div class="details">
                <h5><b>Web developper apprentice</b></h5>
                <small class="fg-theme">Forvia</small>
                <p>Construction d'applications internes et de les maintenir</p>
              </div>
            </li>
            <li>
              <div class="title">08/2021 à aujourd'hui</div>
              <div class="details">
                <h5><b>Arbitrage évennementiel</b></h5>
                <small class="fg-theme">Ekalia</small>
                <p>Arbitrage d'événements de jeux vidéos</p>
              </div>
            </li>
            <li>
              <div class="title">09/2020 à 06/2021</div>
              <div class="details">
                <h5><b>Pilote Système d'Informations</b></h5>
                <small class="fg-theme">Stellantis</small>
                <p>Fabrication d'application interne et de les maintenir</p>
              </div>
            </li>
            <li>
              <div class="title">07/2019 à 07/2021</div>
              <div class="details">
                <h5><b>Modérateur, Gérant Statistiques et Suggestions et UI Designer</b></h5>
                <small class="fg-theme">Ezaly</small>
                <p>Gestion de micro-événements(2h), des statistiques, des suggestions des utilisateurs ainsi que designer l'ensemble des interface</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="h-2 bg-mlightblue blur rotate-180" :class="{hidden: !menuVisible}"></div>
  <img src="../assets/bg-clouds1.gif" alt="" class="absolute w-full desktop:h-full phone:h-[1140px] z-0" :class="{hidden: !menuVisible}">
  <section id="Services" class="mt-0 relative shadow-lg shadow-mlightblue" :class="{hidden: !menuVisible}">

    <h1 class="z-10 text-transparent bg-clip-text bg-gradient-to-b from-black to-mdarkblue desktop:text-xl desktop:mr-20 text-left font-swap">SERVICES</h1>


    <div class="desktop:grid-cols-3 desktop:grid desktop:mt-20 desktop:mx-4">
      <!-- Service 1 -->
      <div class="col-span-1 flex justify-center">
        <div>
          <div class="flex justify-center">
            <img src="../assets/design.png" alt="">
          </div>
          <h1 class="text-center font-sans">Design</h1>
          <p class="font-sans text-3xs text-center mt-2">Besoin de créer une maquette de site internet pour votre projet ? <br /> je vous propose mes services de Maquettage et Prototyppage Web</p>
        </div>
      </div>

      <!-- Service 1 -->
      <div class="col-span-1 flex justify-center phone:mt-20 desktop:mt-0">
        <div>
          <div class="flex justify-center">
            <img src="../assets/developpement.png" alt="">
          </div>
          <h1 class="text-center">Développement</h1>
          <p class="font-sans text-4xs text-center mt-2">Envie de créer votre présence sur le web ? <br /> Je vous propose mes services d'Intégration, Développement, et Hébergement de site internet !</p>
        </div>
      </div>

      <!-- Service 1 -->
      <div class="col-span-1 flex justify-center phone:mt-20 desktop:mt-0">
        <div>
          <div class="flex justify-center">
            <img src="../assets/communication.png" alt="">
          </div>
          <h1 class="text-center">Communication</h1>
          <p class="font-sans text-4xs text-center mt-2">Une envie d'améliorer votre présence sur internet ?<br /> je vous propose mes services d'analyse de stratégie de communication mais également d'alimenter vos réseaux sociaux.</p>
        </div>
      </div>


      <a href="mailto:contact@marwin-rodrigues.fr" class="col-span-3 flex justify-center mt-10">
          <button class="w-10/12 border-2 border-mlightblue bg-mlightblue bg-opacity-0 hover:bg-opacity-80 hover:scale-110 duration-300 group py-2 rounded-lg mb-32 hover:shadow-2xl hover:shadow-mdarkblue"><p class="text-mlightblue group-hover:text-mdarkblue duration-300">Me Contacter</p></button>
      </a>
      </div>



  </section>

  <img src="../assets/bg-clouds2.gif" alt="" class="absolute w-full desktop:h-full phone:h-[575px] z-0 desktop:-mt-2" :class="{hidden: !menuVisible}">
  <section id="Stats" class="mt-0 z-10 desktop:-mt-2" :class="{hidden: !menuVisible}">
    <div class="grid desktop:grid-cols-3 z-10 phone:mt-20 desktop:mt-48">
      <h2 class="phone:text-lg desktop:text-xl text-center desktop:col-span-3 mb-4 z-10">Marwin c'est</h2>
      <h4 class="phone:text-xs desktop:text-lg text-center z-10 phone:mt-10 desktop:mt-0"><vue3-autocounter ref="Demo" :startAmount="0" :endAmount="1" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /> <br /> <span class="phone:text-3xs desktop:text-xs"> Commanditaires </span> </h4>
      <h4 class="phone:text-xs desktop:text-lg text-center z-10 phone:mt-8 desktop:mt-0">+<vue3-autocounter ref="Demo" :startAmount="0" :endAmount="999" :duration="5" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /> <br /> <span class="phone:text-3xs desktop:text-xs"> Lignes de codes </span></h4>
      <h4 class="phone:text-xs desktop:text-lg text-center z-10 phone:mt-8 desktop:mt-0"><vue3-autocounter ref="Demo" :startAmount="0" :endAmount="14" :duration="3" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /> <br /> <span class="phone:text-3xs desktop:text-xs"> Projets </span></h4>
    </div>
  </section>

  <section id="Projets" class="mt-32" :class="{hidden: !menuVisible}">
    <h1 class="mb-24">Mes Projets</h1>

    <!-- data-toggle="modal" data-target="#portfolioModal0" (Ouverture POPUP = First portfolio) -->
    <div class="grid desktop:grid-cols-3 phone:mx-2 desktop:mx-8 gap-y-6">
      <div v-for="Projets in Projets" :key="Projets.projectId"  class="phone:mt-10 desktop:mt-0 col-span-1">
        <cardP v-bind="Projets"/>
      </div>
    </div>


    <Router-Link to="/projets" class="col-span-3 flex justify-center mt-10">
      <button class="w-10/12 border-2 border-mlightblue bg-mlightblue bg-opacity-0 hover:bg-opacity-80 hover:scale-110 duration-300 group py-2 rounded-lg mb-32 hover:shadow-2xl hover:shadow-mdarkblue"><p class="text-mlightblue group-hover:text-mdarkblue duration-300">Voir plus ...</p></button>
    </Router-Link>

  </section>

  <section id="Veilles" class="mt-96" :class="{hidden: !menuVisible}">
    <h1>Veilles Technologiques</h1>

    <div class="grid desktop:grid-cols-3 phone:mx-2 desktop:mx-8 gap-y-6">
    <div v-for="Veille in Veille" :key="Veille.veilleId" class="phone:mt-10 desktop:mt-0 col-span-1">
      <cardV v-bind="Veille"/>
    </div></div>

    <Router-Link to="/veilles" class="col-span-3 flex justify-center mt-10">
      <button class="w-10/12 border-2 border-mlightblue bg-mlightblue bg-opacity-0 hover:bg-opacity-80 hover:scale-110 duration-300 group py-2 rounded-lg mb-32 hover:shadow-2xl hover:shadow-mdarkblue"><p class="text-mlightblue group-hover:text-mdarkblue duration-300">Voir plus ...</p></button>
    </Router-Link>
  
  </section>


  <footer class="bottom-0" :class="{hidden: !menuVisible}">

<!-- NE PAS TOUCHER -->
<div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
</div>

<!-- Liste des icônes pour les réseaux sociaux -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos réseaux à la place des "#" -->

    <!-- Si vous souhaitez retirer un réseau, supprimer entière une ligne ci-dessous -->

    <!-- Si vous souhaitez ajouter un réseau, rajouter une ligne comme celles ci-dessous, en remplaçant les balises "ion-icon" par des balises
                            trouvables sur ce site : https://ionic.io/ionicons (Vous cherchez une icône, cliquez sur une, puis coller le code) -->
<ul class="social_icon gap-4">

    <!-- Icône Facebook -->
    <li><a href="https://github.com/Marwin-Rdgs" target="_blank"> <img src="../assets/socials/github.png" alt="" class="text-white"> </a></li>
    <li><a href="https://www.linkedin.com/in/marwin-rodrigues/" target="_blank"> <img src="../assets/socials/linkedin.png" alt="" class="text-white"> </a></li>
    <li><a href="https://www.instagram.com/marwin.rdgs/" target="_blank"> <img src="../assets/socials/instagram.png" alt="" class="text-white"> </a></li>

</ul>


<!-- liste des pages, représentant alors un menu du Footer -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos pages à la place des "#" -->
<ul class="menu">
    <li><a href="#Projets">Projets</a></li>
    <li><a href="#Veilles">Veilles</a></li>
    <li><a href="#About">À propos</a></li>
    <li><a href="mailto:contact@marwin-rodrigues.fr">Contact</a></li>
</ul>

<!-- Vous trouverez ici la "mention légale" -->
<p>Copyright © 2023 Marwin RODRIGUES</p>

  </footer>



</template>

<script setup>
import { supabase } from "../supabase.js";
import Vue3autocounter from 'vue3-autocounter';

import cardP from "../components/CardP.vue"
import cardV from "../components/cardV.vue"

import {ref} from 'vue';
const menuVisible = ref(true);

console.log("supabase :", supabase);

let { data: Projets } = await supabase
  .from('Projets')
  .select('*')
  .eq('projectFav', true);

let { data: Veille } = await supabase
  .from('Veille')
  .select('*')
  .eq('veilleFav', true)


</script>
 
<script>
//  import parallax from "../components/parallax.vue"
import VVanta from 'vue-vanta';


// let langage = false;

export default {
    components: { VVanta },
    data () {
      return {
        options: {
            mouseControls: true,
            scale: 2.00,
            scaleMobile: 1.00,
            speed: 1.20,
            minHeight: 710.00,
          },
          langage: false,
          framework: false,
          cms: false,
          bdd: false,
          utils: false,
          gaming: false,
          maquette: false,
          design: false,
          appli: false,
      }
    },
  name: 'Demo',
  components: {
  'vue3-autocounter': Vue3autocounter
  }
  }

</script> 

<style>
/* CLOUDS */
#cloud {
    animation: 5s cubic-bezier(0.1, 0.01, 0.1, 0.01)
               infinite alternate bounce;
  }  
  @keyframes bounce {
    from { transform: translate(200px, 0); }
    to   { transform: translate(20px, 0); }
  }


  /* LIST */
  .theme-list {
    position: relative;
    padding-left: 30px;
    list-style: none;
    z-index: 10;
}

.theme-list::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 9px;
    margin: auto;
    width: 1px;
    height: 85%;
    background-color: #106F94;
    z-index: -1;
}

.theme-list li {
    display: block;
    margin: 5px 0;
}

.theme-list li::before {
    content: "";
    position: absolute;
    left: 3px;
    margin: 6px 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid #75E8FF;
}

/* CURSUS */
.timeline {
  position: relative;
  list-style: none;
  padding-left: 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 2px;
  height: 95%;
  background-color: #106F94;
}

.timeline li {
  position: relative;
  display: block;
  padding-left: 30px;
  margin-bottom: 20px;
}

.timeline li::before {
  content: '';
  position: absolute;
  top: 8px;
  left: -8px;
  width: 18px;
  height: 18px;
  background-color: #75E8FF;
  border: 3px solid #fff;
  border-radius: 50%;
}

.timeline li .title {
  width: 150px;
  padding: 6px 20px;
  color: #fff;
  font-weight: 500;
  background-color: #106f945a;
  border-width: 2px;
  border-color: #75E8FF;
  border-radius: 30px 0 60px 30px;
}

.timeline li .details {
  background-color: #f4f5f8;
  margin-top: 8px;
  padding: 20px;
  border-radius: 4px;
}

.timeline li .details h5,
.timeline li .details p {
  margin-bottom: 0;
}

.timeline li .details small {
  display: block;
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
}


/* Portfolio ANCIEN */
/* .portfolio .portfolio-item {
  cursor: pointer;
  position: relative;
  display: block;
  max-width: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.portfolio .portfolio-item .portfolio-item-caption {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  background-color: rgba(31, 45, 65, 0.9);
}
.portfolio .portfolio-item .portfolio-item-caption:hover {
  opacity: 1;
}
.portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
  font-size: 1.5rem;
}

.portfolio-modal .portfolio-modal-title {
  font-size: 2.25rem;
  line-height: 2rem;
}
@media (min-width: 992px) {
  .portfolio-modal .portfolio-modal-title {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}
.portfolio-modal .close {
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  top: 1rem;
  font-size: 3rem;
  line-height: 3rem;
  color: #1f2d41;
  opacity: 1;
} */

</style>