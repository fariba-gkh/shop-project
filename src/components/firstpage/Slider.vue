<template>
    <div class="slide-container">
      <div class="sliders">
      <div class="slider" v-for="(image, id) in Images " :key="id">
        <img :src="image.img">
        </div>
        </div>
        <div class="arrow-container">
          <i class="arrow-previous" @click="previous()">&#10094;</i>
          <i class="arow-next" @click="next()">&#10095;</i>
        </div> 
      
    </div>
</template>
<script>
export default {
    name : 'Slider',
    setup() {
      const Images = [
       {img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"},
       {img : "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg"},
       {img : "https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg"},
       { img :"https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg"},

      ];
   
    
    function previous(){
 
    };

    function next(){
    
    };

    
   

      return {
         Images,
         previous,
         next,
      }
    }
    
}
</script>
<style>
.slider {
  width: 100%; 

}
.sliders {
    display: flex;
    flex-direction: row;
    overflow: hidden; 
    margin: 1px 0;  
    height: 80vh;
    position: relative;
    width: 100%;
}
.slider img {
    width: 100vw;
    height: 100%;
    object-fit: fill;
}


.arrow-container {
  position: absolute;
  bottom: 7%;
  right: 46%;

}
.arrow-container i {
  background: rgb(197, 197, 197);
  padding: 8px 11px;
  border-radius: 50px;
  opacity: 0.6;
  margin-right: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

}

</style>