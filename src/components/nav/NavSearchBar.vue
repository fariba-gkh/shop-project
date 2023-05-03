<template>
    <div class="nav-search-bar">
        <div class="row">
         <div class="logo">
            <img src="@/assets/logo-helmet.jpg" alt="Helmet logo">
            <span>HELMET</span>
        </div>
         <div class="search-box">
                <input class="input-search" size="number" type="text" placeholder="جستجو کنید...">
                <button type="submite" class="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>

                </button>
        </div>
        </div>
        <div class="row">
         <div class="cart-icon">
            <ShoppingCart/>
        </div>
        <div class="register" @click="showModal()">
            <button  class="user-btn">
             <i class="fa-solid fa-user"></i>
               </button>
            <a>ورود به حساب کاربری</a>   
        </div>
       </div>
    </div>
     <modal-register v-show="isModalVisible"  :closeModal="closeModal"/>
</template>

<script> 
import { ref } from '@vue/reactivity';
import ShoppingCart from '../icons/ShoppingCart.vue';
import ModalRegister from '../modal/ModalRegister.vue'
export default {
    name : 'NavSearchBar',
    components: {
        ShoppingCart,
        ModalRegister,
    },
setup() {
    const isModalVisible = ref(false);
  function showModal(){
   isModalVisible.value = true;
  };

  function closeModal(){
    isModalVisible.value = false;
  };
  
  return {
    isModalVisible,
    showModal,
    closeModal,

  }
}
    
}
</script>
<style>
.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
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
    background: white;
    padding:0 20px;
    position: fixed;
    width: 100%;
    z-index: 10000;
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding:0 20px;
}
.register {
 display: flex;
 margin-right: 20px;
 transition: all 0.3s ease 0s;
 cursor: pointer;
 border: 1px solid rgba(212, 212, 212, 0.603);
 padding: 3px;
 color: rgb(134, 134, 134);
}

.register a {
font-weight: bold;

}
.register :hover {
     color: rgb(54, 54, 54);
}
.register a {
    margin-right: 5px;
    font-size: 12px;
}
.user-btn {
    border: none;
    background: none;
    cursor: pointer;
   
}
.user-btn i {
font-size: 16px;
font-weight: bold;
}

.search-box {
    margin-right: 50px;
    position: relative;
}
.search-btn {
    cursor: pointer;
    border: none;
    position: absolute;
    top: 5px;
    left: 10px;
    background: white;
}


.input-search {
    height: 30px;
    width: 400px;
    outline:  none;
    padding: 5px 10px;
    font-size: 14px;
    color: rgb(110, 110, 110);
    border: solid 1px rgb(206, 205, 205);
    
}

span {
    font-size: 15px;
    margin-top: 0;
    
}


@media (max-width:500px) {

.nav-search-bar {
height: 61px;
padding:0 5px;
flex-wrap: nowrap;
}
.row {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding:0 10px;
}
.register {
 display: flex;
 margin-right: 10px;

}
.logo img {
    width: 40px;
    height: 40px;
}
.logo span {
    font-size: 12px;
}
.input-search {
    height: 0;
    width: 0;
    padding: 0; 
    border: none; 
}

.register a{
font-size: 8px;
padding:5px 5px;
}
}
</style>