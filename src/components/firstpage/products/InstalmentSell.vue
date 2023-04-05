<template>

    <div class="instalment-container">
      <div class="cube">
      <div class="instalment-img">
        <div class="front">
          <img src="@/assets/photo/cubi/beautiful-biker-girl-wearing-black-leather-jacket-leaning-her-superbike-outside-building.jpg" alt="" />
        </div>
        <div class="right">
          <!-- <img src="https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg" alt="" /> -->
          <img src="@/assets/photo/cubi/close-up-motorcyclist-with-helmet.jpg" alt="" />
        </div>
        <div class="back" >
          <img src="@/assets/photo/cubi/person-taking-driver-s-license-exam.jpg" alt="" />
        </div>
        <div class="left">
          <img src="@/assets/photo/cubi/red-motor-biking-road.jpg" alt="" />
        </div>
      </div>
      </div>
      <div class="instalment-content">
        <h1>فروش اقساطی هوندا</h1>
        <button class="btn-buy" >خرید</button>
      </div>
    </div>

</template>
<script>
import { ref } from 'vue';
export default {
  name: "InstalmentSell",

  setup() {

   
    // const dataInastalment = {
    //   img: "https://img.freepik.com/premium-psd/road-bike-transparent-background-3d-rendering-illustration_494250-30842.jpg?auto=format&h=200",
    // };
   
    return {
   
    };
  },
};
</script>
<style scoped>
.instalment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 500px;
  width: 1250px;
  margin: 80px 80px 0px 80px;

}
.cube {
  /* background-color: aqua;   */
  /* border: 1px solid rgb(153, 51, 51); */
  width: 625px;
  height: 500px;
  /* position: relative; */
  perspective: 800px;
  /* transform-origin: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.instalment-img {
  width: 300px;
  height:300px;
  
  /* background-color: rgb(255, 251, 0); */
  /* transform: perspective(800px) rotateX(270px) rotate(0deg) translateZ(180deg); */
  transform-style: preserve-3d;
  /* position: relative; */
  transform: rotateY(45deg);
  animation: spin 10s linear infinite;

}
@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}
.instalment-img div {
  position: absolute;
  width: 300px;
  height: 300px;
  box-shadow: 0px 7px 15px rgb(121, 121, 121);
}
.instalment-img div img{
  width:300px;
  height: 300px;
  object-fit: cover;
  
}
.front {
  transform: translateZ(150px)  ;
}
.right {
  transform: rotateY(-270deg) translateZ(150px);
}
.back{
  transform: rotateY(180deg) translateZ(150px) ;

}
.left {
  transform: rotateY(90deg) translateZ(-150px);
}
.instalment-content {
  width: 50%;
  text-align: center;
  /* background-color:rgb(192, 135, 248) ; */
}
.instalment-content h1 {
  margin-top: 25%;
  
}
.btn-buy {
  padding: 10px 40px;
  font-size: 16px;
  background: rgb(26, 144, 255);
  color: aliceblue;
  border: none;
  margin-top: 40px;
  box-shadow: 2px 2px 5px;
}
.btn-buy:hover {
  background: rgb(240, 216, 2);
  color: rgb(73, 73, 73);
}


</style>
