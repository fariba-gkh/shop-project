<template>
    <div class="slide-container">
      <div class="sliders">
      <div class="slider" v-show="currentSlide === index + 1" v-for="(image, index) in Images " :key="index">
        <img :src="image.img">
      </div>
      </div>
        <div class="navigation">
          <div class="nav right">
          <i class="nav-previous" @click="next()">&#10094;</i>
        </div>
          <div class="nav left">
          <i class="nav-next" @click="previous()">&#10095;</i>
        </div>
        </div> 
        <div class="pagination" >
          
            <span class="pagi" v-for="(pag , index) in Images" :key="index" :class="{active: index + 1 === currentSlide}"></span>

        </div>
      
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
export default {
    name : 'Slider',
    setup() {
      const Images = [
       {img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"},
       {img : "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg"},
       {img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"},
       { img :"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg"},

      ];
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnable = ref(true);
   
  
    
    function previous(){
      if (currentSlide.value === 1){
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    function next(){
      if (currentSlide.value === getSlideCount.value ) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        next();
      } , 4000)
    };
  
    if(autoPlayEnable.value) {
      autoPlay();
    }
    
    
    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slider").length;
    });

    
   

      return {
         Images,
         currentSlide,
         previous,
         next,
         getSlideCount,
         autoPlay,
     
      }
    }
    
}
</script>
<style>
.slider {
  width: 100vw; 
  height: 80vh;
}
.sliders {
    display: flex;
    flex-direction: row;
    overflow: hidden; 
    
    position: relative;
    width: 100%;
}
.slider img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}


.navigation {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 10%;
  gap: 30px;

}
.nav {

}
.nav i {
  background: rgb(80, 80, 80);
  padding: 8px 13px;
  border-radius: 50%;
  opacity: 0.6;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: aliceblue;
  

}
.nav i:hover {
  background:  rgb(240, 169, 17);
  color: #555555;
}
.pagination {
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.pagi {
  cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #707070;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

.active {
  background-color: rgb(240, 169, 17);
}
</style>