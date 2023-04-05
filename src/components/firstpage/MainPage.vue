<template>
    <div>
       <Slider/> 
       <AllProducts/>


    </div>
</template>
<script>
import Slider from './Slider.vue';
import AllProducts from './products/AllProducts.vue';

export default {
    name : 'MainPage',
    components : {
        Slider ,
        AllProducts,

    }
}
</script>
<style>

</style>