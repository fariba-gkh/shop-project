<template>
  <div class="dropdown-acc" @click="openList">
    <a href="#">لوازم جانبی</a>
    <img class="down-icon" src="src/assets/photo/icons8-arrow-24.png" alt="" />
  </div>
  <transition name="acc">
    <div class="acc-menu" v-if="close" >
      <div>
        <header>ایپسوم</header>
        <div
          class="items-acc"
          v-for="(accessory, index) in accessories"
          :key="index"
        >
          <a class="name-acc" href="">{{ accessory }}</a>
        </div>
      </div>
      <div>
        <header>موتور سیکلت</header>
        <div class="items-acc" v-for="(acc, index) in accMotor" :key="index">
          <a class="name-acc" href="">{{ acc }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import closeListMenu from '../composable/dropDownMenu';
export default {
  name: "DropDownAccessory",
  setup() {
    const accessories = [
      "کلاه ایمنی",
      "دستکش",
      "کلاه ایمنی",
      "دستکش",
      "کلاه ایمنی",
      "دستکش",
      "کلاه ایمنی",
      "دستکش",
      "کلاه ایمنی",
      "دستکش",
    ];
    const accMotor = ["کلاه ایمنی", "دستکش", "کلاه ایمنی"];

    const {close , openList} = closeListMenu()

    return {
      accessories,
      accMotor,
      close,
      openList,
    };
  },
};
</script>
<style>
.dropdown-acc img {
  width: 8px;
  height: 8px;
  margin-right: 5px;
}
.acc-menu {
  position: absolute;
  z-index: 1000;
  background-color: #ffffff;
  width: max-content;
  border: 0.5px solid rgb(240, 240, 240);
  padding: 15px 25px;
  top: calc(100% + 10px);
  display: flex;
  gap: 80px;
  border-radius: 0 0 10px 10px;
}
.name-acc {
  color: gray !important;
  font-size: 12px !important;
}
.name-acc:hover {
  color: black !important;
}

.acc-enter-active,
.acc-leave-active {
  transition: all 0.3s ease-in;
}
.acc-enter,
.acc-leave-to {
  opacity: 0;
}
</style>
