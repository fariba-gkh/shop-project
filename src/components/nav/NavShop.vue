<template>
 
  <div class="nav-shop" >
    <nav>
      <ul>
        <li><router-link :to="{name:'home'}">صفحه نخست</router-link></li>
        <!-- <li><a href="">صفحه نخست</a></li> -->
        <li>
          <a href=""><drop-down-brand /></a>
        </li>
        <li>
          <a href=""><drop-down-accessory /></a>
        </li>
        <li><a href="">گارانتی و خدمات </a></li>
        <li><a href="">وبلاگ</a></li>
        <li><a href="">درباره ما</a></li>
        <li><router-link :to="{name:'ContactUs'}">تماس با ما</router-link></li>
        <!-- <li><a href="">تماس با ما</a></li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import DropDownBrand from "../dropdown/DropDownBrand.vue";
import DropDownAccessory from "../dropdown/DropDownAccessory.vue";
export default {
  name: "NavShop",
  components: {
    DropDownBrand,
    DropDownAccessory,
    RouterLink
  },

  
};
</script>
<style>

.nav-shop{
  position: fixed;
  z-index: 10000;
  width: 100%;
  margin: 40px;
}
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
}
</style>
