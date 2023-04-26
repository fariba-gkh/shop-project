<template>
    <div class="countent-discounts">
        <div class="title-off">
            <h3>تخفیف ها</h3>
        </div>
        <div class="brands-off">
        <div class="brand-off" v-for="(brandDiscount , index) in discountData" :key="index">
            <p>{{brandDiscount[0]}}</p>
        </div>
        </div>
        <div class="off-items">
        <div class="off-item " v-for="(itemDiscount ,id) in discountData[0][1]" :key="id">
        <span class="off">{{ itemDiscount.off }}</span>
         <img :src="itemDiscount.img" alt="image">
         <div class="overlay">
            <router-link :to="{name:'ProductProperty', params:{id: itemDiscount.id}}" href="" class="buy-btn">جزيیات</router-link>
         </div>
         
        </div>
        </div>
    </div>
</template>
<script>
import {reactive} from 'vue';
export default {
    name: 'Discounts',
    setup() {
       const discountData = reactive([
      [
            'HONDA',
            [
            {
                'id': '0',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'off': '22%',
                'Amps': 'فشار روغن',
                'color': 'مشکی',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
             {
                'id': '1',
                'off': '12%',
                img : "https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                'Amps': 'فشار روغن',
                'color': 'مشکی',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
             {
                'id': '2',
                'off': '22%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'جگری',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
             {
                'id': '3',
                'off': '10%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'بژ',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '4',
                'off': '8%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'سفید',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '5',
                'off': '5%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'طوسی',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '6',
                'off': '11%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'نارنجی',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '7',
                'off': '23%',
                img : "https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                'Amps': 'فشار روغن',
                'color': 'آبی',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '8',
                'off': '22%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'فرمز',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            },
              {
                'id': '9',
                'off': '25%',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg",
                'Amps': 'فشار روغن',
                'color': 'زرد',
                'brand': 'کویر',
                'EnginClass': 'street',
                'TypeLamp': 'ال ای دی',
                'RadiatorType': 'بدون رادیاتور',
                imgs:{
                    img1:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img2:"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg",
                    img3:"https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
                }

            }
            ]
        ],
        [
            'YAMAHA'
        ],
        [
            'KAVIR'
        ],
         [
            'YAMAHA'
        ],
        [
            'KAVIR'
        ],
        
         [
            'YAMAHA'
        ],
        [
            'KAVIR'
        ]
        

       ])
    
    return {
        discountData,
    }

       } 
    }

</script>
<style>
.countent-discounts {
margin-top: 80px;
width: 100vw ;
display: flex;
flex-direction: column;
}
.title-off {
    text-align: center;
    margin-top: 70px;
}
.brands-off {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem auto ;
    
}
.brand-off p {
font-size: 0.8rem;
margin-right: 1.5rem;
}
.off-items {
    display: grid;
    grid-template-columns: repeat(5, 270px);
    grid-template-rows: repeat(2, 250px);
    margin-top: 1rem;
    justify-content: center;
    align-content: center;
    width: 100%;
}
.off{
    position: absolute;
    z-index: 100;
    top: 20px;
    left: 40px;
    color: rgb(211, 3, 3);
    font-weight: bolder;
    
}

.off-item img {
   width: 100%;
   height: 100%; 
   transition: all 0.1s ease 0.08s;   
}
.overlay{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(100, 100, 100, 0.13);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
}
.buy-btn {
color: rgb(255, 255, 255);
text-decoration: none;
background-color: rgb(4, 156, 226);
border-radius: 10%;
box-shadow: 1px 1px 3px;
padding: 3px 10px;
font-size: 16px;
font-weight: 600;
top: 0px;
right: 0px;
transition: all 0.4s;

}

.buy-btn:hover {
   color: rgb(59, 59, 59);
   background-color: rgb(216, 166, 2);
   box-shadow: 2px 2px 5px;
}

.off-item:hover .overlay{
visibility: visible;

}

</style>