<template>
    <div>
      <BestSelling/> 
      <InstalmentSell/>
      <Discounts/>

    </div>
</template>
<script>
import BestSelling from './BestSelling.vue';
import InstalmentSell from './InstalmentSell.vue';
import Discounts from './Discounts.vue';import Footer from '../../Footer.vue';
export default {
    name: 'AllProducts' , 
    components : {
        BestSelling,
        InstalmentSell,
        Discounts,
    }
    
}
</script>
<style>

</style>