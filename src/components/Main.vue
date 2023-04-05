<template>
<Navbar/>
 <router-view/>
<Information/>
<Footer/>

</template>
<script>
import { RouterView } from 'vue-router';
import Navbar from './nav/Navbar.vue';
import Information from '../components/firstpage/Information.vue'
import Footer from '../components/Footer.vue'
export default {
    name : 'Main',
    components : {
        Navbar ,
        Information,
        Footer,
        RouterView
    }

    
}
</script>
<style>
header {
  /* max-height: 100vh; */
  /* height: 200px; */
  /* background: white; */
   /* padding:0 20px; */
  /* position: fixed;
  width: 100%;
  z-index: 1000; */
  /* position: fixed;
  z-index: 100000;
  width: 100%; */

}
</style>