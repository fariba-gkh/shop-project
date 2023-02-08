<template>
 <div>
    <header>
 <Navbar/>
</header>
<main>
 <MainPage/>
</main>
 
 </div>  



</template>
<script>
import Navbar from './nav/Navbar.vue';
import MainPage from './firstpage/MainPage.vue'
export default {
    name : 'Main',
    components : {
        Navbar ,
        MainPage
    }

    
}
</script>
<style>
header {
  max-height: 100vh;
  background: white;
  widows: 100vh;
  padding:0 20px;
}
</style>