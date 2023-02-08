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
         <img :src="itemDiscount.img" alt="image">
         <a href="">جزيیات</a>
        </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    name: 'Discounts',
    setup() {
       const discountData = ref([
      [
            'HONDA',
            [
            {
                'id': '0',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
             {
                'id': '1',
                img : "https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg"
            },
             {
                'id': '2',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
             {
                'id': '3',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
              {
                'id': '4',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
              {
                'id': '5',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
              {
                'id': '6',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
              {
                'id': '7',
                img : "https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg"
            },
              {
                'id': '8',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
            },
              {
                'id': '9',
                img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
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
width: 100% ;
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
    
}

.off-item img {
   width: 100%;
   height: 100%; 
   transition: all 0.1s ease 0.08s;   
}
.off-item a {
color: aliceblue;
}
.off-item :hover {
opacity: 0.3;
 
}
.off-item a:hover {
    color: black;
}



</style>