<template>
    <div>
        <section>
      <div class="best-sell-container ">
        <div class="title-best">
            
            <h3>محصولات پرفروش</h3>
            
        </div>
        <div class="arrow-icon">
            <i class="arrow-previous">&#10094;</i>
            <i class="arrow-next">&#10095;</i>
        </div>
      
      
        <div class="best-slider"  >
            <div class="flex-slider" v-for="(bestProduct,id) in dataBest" :key="id" >
                <p>{{bestProduct.Brand}}</p>
                <img :src="bestProduct.img" alt="">
            </div>

        </div>
      </div>
      </section> 
    </div>
</template>
<script>
import {ref} from 'vue';
export default { 
    name : 'BestSelling',

    setup() {
const dataBest = ref([
    {
        "id" : "0", 
        "Brand" : "HONDA",
        img: "https://imageio.forbes.com/specials-images/imageserve/5c0aa5554bbe6f0f2aa19644/0x0.jpg?format=jpg&width=1200"
    },
    {
        "id" : "1", 
        "Brand" : "YAMAHA",
        img: "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
    },
    {
        "id" : "2",
        "Brand" : "KAVIR",
        img: "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg" 
    },
    {
        "id" : "3", 
        "Brand" : "HONDA",
        img: "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
    },
    {
        "id" : "4",
        "Brand" : "YAMAHA",
        img: "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"
    },
    {
        "id" : "5", 
        "Brand" : "HONDA",
        img : "https://electrek.co/wp-content/uploads/sites/3/2022/09/csc-rx1e-header.jpg?quality=82&strip=all&w=1590"
    },
    {
        "id" : "6", 
        "Brand" : "KAVIR",
          img: "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"

    },
    {
        "id" : "7", 
        "Brand" : "HONDA",
        img : "https://www.bennetts.co.uk/-/media/bikesocial/2020-june-images/motorcycle-types-guide/kawasaki_ninja_1000sx_sports_tourer.ashx?h=493&la=en&w=740&hash=F34D4C66DBD3B31F2011EB0A61D8C01C61B54A09"
    },
    {
        "id" : "8",
        "Brand" : "HONDA",
        img : "https://i.pinimg.com/736x/15/0d/d1/150dd134ec8221d6ed1daa0ccfa71557.jpg" 
    },
    {
        "id" : "9", 
        "Brand" : "YAMAHA",
        img : "https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg"
    }
]) 





return {
    dataBest,
    
 

}
    
}
}


</script>
<style>

.title-best {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 50px 0 20px 0 ;
}

.best-slider {
    display: flex;
    flex-direction: row ;
    justify-content: center;
    overflow: hidden;
    margin: 0 50px;
}

.flex-slider {
    border-right: 1px solid rgba(238, 238, 238, 0.336);
}
.flex-slider img {
    height: 200px;
    width: 250px;
    top: -20px;
    transition: all 0.3s ease;
}

.flex-slider img:hover  {
    top: 0;
    box-shadow: 0 -20px 20px rgba(221, 221, 221, 0.336);

}

.flex-slider p {
    font-size: 12px;
    text-align: center;
    color: gray;
    font-weight: 600;
}
.arrow-icon {
    display: flex;
    justify-content: center;
    margin: 0 0 20px 0;
}
.arrow-icon i {
    margin: 0 20px;
    padding: 4px 12px;
    cursor: pointer;
   
}
.arrow-icon i:hover {
    background: rgba(255, 255, 255, 0.61);
    border-radius: 50%;
}




 

</style>