<template>
 
  <div class="nav-shop" >
    <nav>
      <ul>
        <li><a href="">صفحه نخست</a></li>
        <li>
          <a href=""><drop-down-brand /></a>
        </li>
        <li>
          <a href=""><drop-down-accessory /></a>
        </li>
        <li><a href="">گارانتی و خدمات</a></li>
        <li><a href="">وبلاگ</a></li>
        <li><a href="">درباره ما</a></li>
        <li><a href="">تماس با ما</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import DropDownBrand from "../dropdown/DropDownBrand.vue";
import DropDownAccessory from "../dropdown/DropDownAccessory.vue";
export default {
  name: "NavShop",
  components: {
    DropDownBrand,
    DropDownAccessory,
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
</style>
