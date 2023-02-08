<template>
    <!-- <div class="icon">
       <i class="fa-solid fa-house"></i>
       <font-awesome-icon icon="fa-solid fa-house" />
 
    </div> -->
    <div class="nav-shop">
    <nav>
        <ul>
            <li> <a href="">صفحه نخست</a> </li>
            <li><a href="">برند</a> </li>
            <li><a href="">لوازم جانبی</a> </li>
            <li><a href="">گارانتی و خدمات</a> </li>
            <li><a href="">وبلاگ</a> </li>
            <li><a href="">درباره ما</a> </li>
            <li><a href="">تماس با ما</a> </li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name : 'NavShop',
    
}
</script>
<style>
.nav-shop li{
   list-style: none;
   display: inline-block; 
   padding: 10px 20px;
}

.nav-shop a {
    text-decoration: none;
    transition: all 0.3s ease 0s;
    font-size: 14px;
}
.nav-shop a:hover {
    color: rgb(255, 166, 0);
}
</style>