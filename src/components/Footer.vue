<template>
    <div class="footer-container">
        <div class="footer-contact">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="footer-menus">
          <div class="footer-menu">
            <header class="footer-header">اطلاعات:</header>
            <ul class="menu-items">
                <li class="menu-item">درباره ما</li>
                <li class="menu-item">مدرک صد.ر سند</li>
                <li class="menu-item">گارانتی موتور سیکلت</li>
            </ul>
          </div>
          <div class="footer-menu">
            <header class="footer-header">راهنمای خرید از هلمت:</header>
            <ul class="menu-items">
                <li class="menu-item">راهنمای خرید</li>
                <li class="menu-item">روش های چرداخت وجه</li>
                <li class="menu-item">روش های ارسال</li>
                <li class="menu-item">نحوه تحویل سفارش</li>
            </ul>
          </div>
          <div class="footer-menu">
            <header class="footer-header">دسترسی سریع:</header>
            <ul class="menu-items">
                <li class="menu-item">تماس با ما</li>
                <li class="menu-item">قوانین و مقررات فروشگاه</li>
                <li class="menu-item">شیوه پرداخت</li>
            </ul>
          </div>
          <div class="footer-menu">
            <header class="footer-header">دنبال کردن در شبکه های اجتماعی:</header>
            <ul class="menu-items items-socoal" >
                <li class="menu-item"><a href=""><img src="../assets/socialmedia/icons8-facebook.svg" alt=""></a></li>
                <li class="menu-item"><a href=""><img src="../assets/socialmedia/icons8-instagram.svg" alt=""></a></li>
                <li class="menu-item"><a href=""><img src="../assets/socialmedia/icons8-linkedin.svg" alt=""></a></li>
                <li class="menu-item"><a href=""><img src="../assets/socialmedia/icons8-pinterest.svg" alt=""></a></li>

            
            </ul>
          </div>
        </div>
        <div class="footer-about-us">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a libero asperiores porro autem voluptatibus culpa cupiditate voluptatum suscipit, assumenda dignissimos deleniti. Consequatur itaque culpa animi! Fugiat, soluta reprehenderit sapiente, repellat dolorum incidunt earum, sunt inventore itaque hic debitis iste?</p>
        </div>
    </div>
</template>
<script>
// import { reactive } from 'vue';

export default {
    name : 'Footer',
 
setup() {
   

//     const socialIcons = reactive([{img: require("../assets/socialmedia/icons8-facebook.svg")},
//     {img: require("../assets/socialmedia/icons8-facebook.svg")},
//     {img: require("../assets/socialmedia/icons8-facebook.svg")}]) ;

// const getSocialIcon =(name) => {
//     new URL(`../assets/socialmedia/icon8-${name}.svg` , import.meta.url).href;
// }
// console.log(getSocialIcon);

    return {
    
    
    }
}


}
</script>
<style>
.footer-container {
    background: white;
}
.footer-contact {

    display: block;
    padding: 10px 20px;

}
.footer-menus {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px ;
}
.footer-menu {
    margin-bottom: 50px;
}
.footer-menus header {
    font-weight: 500;
}
.footer-menu ul li {
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 10px;
    list-style: none;
   
}
.items-socoal {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 20px;
}
.menu-item a img {
    width: 30px;
    height: 30px;
    transition: all 0.5s;
    
}
.menu-item a img:hover {
    width: 60px;
    height: 60px; 
    margin-left: 10px;
    margin-right: 10px;
}
.footer-about-us {
    width: 40%;
    margin-right: 20px ;
    padding-bottom: 30px;
    
}
</style>