<template>
 <div class="nav-container">
  <div class="nav-shop" >
    <nav>
      <ul>
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
  return {
    activePage
  }
}
  
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
</style>
