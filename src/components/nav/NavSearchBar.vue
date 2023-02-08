<template>
    <div class="nav-search-bar">
        <div class="row">
         <div class="logo">
            <img src="@/assets/logo-helmet.jpg" alt="Helmet logo">
            <span>HELMET</span>
        </div>
         <div class="search-box">
            <form action="">
                <button class="search-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" />></button>
                <input class="input-search" size="number" type="text" placeholder="جستجو کنید...">
            </form>
        </div>
        </div>
        <div class="row">
         <div class="cart-icon">
            <ShoppingCart/>
        </div>
        <div class="register">
             <a>ورود</a>
            <a>ثبت نام</a> 
        
        </div>
       </div>
    </div>
</template>

<script> 
import ShoppingCart from '../icons/ShoppingCart.vue'
export default {
    name : 'NavSearchBar',
    components: {
        ShoppingCart 
    }

    
}
</script>
<style>
.logo {
    display: flex;
    align-items: center;
}
.logo img {
    width: 60px;
    height: 60px;
}
.nav-search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(223, 223, 223, 0.596);
    
}
.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

}
.register {
 display: flex;
 margin-right: 20px;
}
.register :first-child {
    margin-left: 7px;
}
.search-box {
    margin-right: 25px;
}
.search-icon {
    width: 25px;
    height: 27px;
}
.input-search {
    height: 27px;
    width: 400px;
}

span {
    font-size: 15px;
    margin-top: 0;
}
</style>