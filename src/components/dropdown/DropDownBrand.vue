<template>
  <div class="dropdown-container" @click="openList">
    <a href="#">برند</a>
    <img class="down-icon" src="@/assets/photo/icons8-arrow-24.png" alt="" />
  </div>
  <transition name="brand" appear>
    <div class="brand-menu" v-if="close">
      <div class="item-brand" v-for="(brand, index) in brands" :key="index">
        <a class="name-brand" href="">{{ brand }}</a>
      </div>
    </div>
  </transition>
</template>
<script>
import closeListMenu from '../composable/dropDownMenu.js';
export default {
  name: "DropDownBrand",

  setup() {
    const brands = [
      "honda",
      "kavir",
      "yamaha",
      "honda",
      "kavir",
      "yamaha",
      "honda",
      "kavir",
      "yamaha",
    ];
    const { close, openList, mounted, closed} = closeListMenu();


    return {
      brands,
      close,
      openList,
      mounted,
      closed
    
    };
  },
};
</script>
<style>
.dropdown-container img {
  width: 8px;
  height: 8px;
  margin-right: 5px;
}
.dropdown-container a {
  text-decoration: none;
  transition: all 0.3s ease 0s;
  font-size: 14px;
}
.dropdown-container a:hover {
  color: rgb(255, 166, 0);
}
.brand-menu {
  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: 1000;
  top: calc(100% + 10px);
  width: max-content;
  padding: 15px 25px;
  border: 0.5px solid rgb(240, 240, 240);
  border-radius: 0px 0px 10px 10px;
}
.name-brand {
  color: gray !important;
  font-size: 12px !important;
}
.name-brand:hover {
  color: black !important;
}
.brand-enter-active,
.brand-leave-active {
  transition: all 0.3s ease-in;
}
.brand-enter,
.brand-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  .brand-menu {
  background-color: rgb(241, 241, 241);
  position: relative;
  z-index: 1000;
  top: 10px;
  width: 100%;
  padding: 15px 20px;
  border:none;
}
}
</style>
