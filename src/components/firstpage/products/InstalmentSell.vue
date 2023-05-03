<template>

    <div class="instalment-container">
      <div class="cube">
      <div class="instalment-img">
        <div class="front">
          <img src="https://bikes.motobank.co.uk/storage/indian/challenger-elite-1192/h/challenger-elite-1192-hero.jpg" alt="" />
        </div>
        <div class="right">
          <img src="https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg" alt="" />
        </div>
        <div class="back" >
          <img src="https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg" alt="" />
        </div>
        <div class="left">
          <img src="https://www.suzuki.ca/wp-content/uploads/2022-Hayabusa-Right.jpg" alt="" />
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
export default {
  name: "InstalmentSell",

  setup() {

   
   
  },
};
</script>
<style scoped>
.instalment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 500px;
  max-width: 1250px;
  margin: 80px 80px 0px 80px;

}
.cube {
  width: 625px;
  height: 500px;
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.instalment-img {
  width: 300px;
  height:300px;
  transform-style: preserve-3d;
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
}
.instalment-img div img{
  width:300px;
  height: 300px;
  object-fit: fill;
  
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



@media (max-width: 500px) {
  .instalment-container{
    flex-direction: column;
  }
  .instalment-content {
    width: 100%;
  }
  .instalment-content h1{
     font-size: 1rem;

  }
  .cube {
    width: 100%;
  }
  .btn-buy {
  padding: 10px 30px;
  font-size: 12px;
  margin-top: 20px;
 
}
  .instalment-img{
    width: 200px;
    height:200px;
  
  }
  .instalment-img div {
  width: 200px;
  height: 200px;
}
.instalment-img div img{
  width:200px;
  height: 200px;
  
}
 .front {
  transform: translateZ(100px)  ;
}
.right {
  transform: rotateY(-270deg) translateZ(100px);
}
.back{
  transform: rotateY(180deg) translateZ(100px) ;

}
.left {
  transform: rotateY(90deg) translateZ(-100px);
}
}

</style>
