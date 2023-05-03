<template>
 <div class="nav-container">
  <div class="nav-shop" >
    <nav>
      <ul v-show="!mobile">
        <li @click="activePage = 'firstPage'" :class="{active:activePage === 'firstPage'}">
          <router-link :to="{name:'home'}">صفحه نخست</router-link></li>
        <li>
          <a href=""><drop-down-brand /></a>
        </li>
        <li>
          <a href=""><drop-down-accessory /></a>
        </li>
        <li @click="activePage = 'service'" :class="{active: activePage === 'service'}">
          <router-link :to="{name:'service'}">گارانتی و خدمات </router-link></li>
        <li @click="activePage = 'blog'" :class="{active:activePage === 'blog'}">
          <router-link :to="{name: 'blog'}" >وبلاگ</router-link></li>
        <li @click="activePage = 'aboutUs'" :class="{active:activePage === 'aboutUs'}">
          <router-link :to="{name:'aboutUs'}">درباره ما</router-link></li>
        <li  @click="activePage = 'contactUs'" :class="{active:activePage === 'contactUs'}">
          <router-link :to="{name:'ContactUs'}">تماس با ما</router-link></li>
      </ul>
    </nav>
    <div class="nav-icon" >
      <svg v-show="mobile"  @click="toggleMobileNav" :class="{'icon-activ' : mobileNav}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="20px" height="20px" fill-rule="nonzero"><g fill="#1b1c1c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M6,22h36v4h-36zM6,10h36v4h-36zM6,34h36v4h-36z"></path></g></g></svg>
    </div>
    <transition name="mobileNav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li @click="activePage = 'firstPage'" :class="{active:activePage === 'firstPage'}">
          <router-link :to="{name:'home'}">صفحه نخست</router-link></li>
        <li>
          <a href=""><drop-down-brand /></a>
        </li>
        <li>
          <a href=""><drop-down-accessory /></a>
        </li>
        <li @click="activePage = 'service'" :class="{active: activePage === 'service'}">
          <router-link :to="{name:'service'}">گارانتی و خدمات </router-link></li>
        <li @click="activePage = 'blog'" :class="{active:activePage === 'blog'}">
          <router-link :to="{name: 'blog'}" >وبلاگ</router-link></li>
        <li @click="activePage = 'aboutUs'" :class="{active:activePage === 'aboutUs'}">
          <router-link :to="{name:'aboutUs'}">درباره ما</router-link></li>
        <li  @click="activePage = 'contactUs'" :class="{active:activePage === 'contactUs'}">
          <router-link :to="{name:'ContactUs'}">تماس با ما</router-link></li>
      </ul>
    </transition>
  </div>
</div>
</template>

<script>
import { RouterLink } from "vue-router";
import DropDownBrand from "../dropdown/DropDownBrand.vue";
import DropDownAccessory from "../dropdown/DropDownAccessory.vue";
import { ref } from "vue";
export default {
  name: "NavShop",
  components: {
    DropDownBrand,
    DropDownAccessory,
    RouterLink
  },
setup(){
  const activePage = ref(null);
  const mobile = ref(null);
  const mobileNav = ref(null);
  const windowWidth = ref(null);
  

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value
  };
  const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 500) {
      mobile.value = true;
    }
    else {
      mobile.value = false;
      mobileNav.value = false;
    }
  }

  return {
    activePage,
    mobile,
    mobileNav,
    toggleMobileNav,
    checkScreen
  }
},
created() {
    window.addEventListener( 'resize' , this.checkScreen)
    this.checkScreen();
  },
};
</script>
<style>


.nav-shop li {
  list-style: none;
  display: inline-block;
  padding: 10px 20px;
}

.nav-shop a {
  text-decoration: none;
  transition: all 0.3s ease 0s;
  font-size: 14px;
  color: rgb(19, 19, 19);
}
.nav-shop a:hover {
  color: rgb(255, 166, 0);
}
.nav-shop {
  background: white;
    padding:0 20px;
    border-bottom: 0.7px solid rgba(218, 218, 218, 0.637);
    position: fixed;
  width: 100%;
  z-index: 10000;
  margin-top: 61px;
}
.nav-container {
  height: 100px;
}

.nav-shop .active{
  background: white;
}
.active a{
  color: rgb(255, 166, 0);
}


.nav-icon {
  padding: 0.4rem 0.5rem;
  margin-top: 0.2rem;

}
.icon-activ {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  height: 100vh;
  top: 0;
  right: 0;
}
</style>
