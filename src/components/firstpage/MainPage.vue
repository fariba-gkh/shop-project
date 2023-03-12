<template>
    <div>
       <Sliderno/> 
       <AllProducts/>
       <Information/>
       <Footer/>

    </div>
</template>
<script>
import Slider from './Slider.vue';
import AllProducts from './products/AllProducts.vue';
import Information from './Information.vue';
import Footer from '../Footer.vue'
export default {
    name : 'MainPage',
    components : {
        Slider ,
        AllProducts,
        Information,
        Footer,
    }
}
</script>
<style>

</style>