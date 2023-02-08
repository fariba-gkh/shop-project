<template>
  <div>
    <div class="instalment-container">
      <div class="instalment-img">
        <img :src="dataInastalment.img" alt="" />
      </div>
      <div class="instalment-content">
        <h1>فروش اقساطی هوندا</h1>
        <button class="btn-buy">خرید</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InstalmentSell",

  setup() {
    const dataInastalment = {
      img: "https://img.freepik.com/premium-psd/road-bike-transparent-background-3d-rendering-illustration_494250-30842.jpg?auto=format&h=200",
    };

    return {
      dataInastalment,
    };
  },
};
</script>
<style>
.instalment-container {
  display: flex;
  flex-direction: row;
  height: 450px;
  margin-top: 50px;
}
.instalment-img {
  width: 50%;
}
.instalment-img img {
  width: 100%;
  min-height: 100%;
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


</style>
