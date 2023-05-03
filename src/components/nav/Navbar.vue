<template>
     <NavSearchBar/>   
     <NavShop/>   

</template>

<script>
import NavSearchBar from './NavSearchBar.vue'
import NavShop from './NavShop.vue'

export default {
    name : 'Navbar',
    components : {
   NavSearchBar,
   NavShop
    }
    
}
</script>
<style>

</style>