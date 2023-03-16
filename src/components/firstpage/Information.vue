<template>
  <div class="container-inf">
    <div class="carts-inf">
      <div class="cart-inf" v-for="(dataInf, id) in dataInformation" :key="id">
        <div class="inf-contant">
          <h3 class="inf-title">{{ dataInf.title }}</h3>
          <a href="">مشاهده</a>
        </div>
        <div class="inf-svg">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><path fill="#424242" d="M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"/>
            <path fill="#E65100" d="M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"/><path fill="#FF6E40" d="M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z"/><path fill="#FFF3E0" d="M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z"/></svg>
      
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Information",

  setup() {
    const dataInformation = ref([
      {
        id: "0",
        title: "مدارک مورد نیاز صدور سند",
      },
      {
        id: "1",
        title: "مدارک مورد نیاز صدور سند",
      },
      {
        id: "2",
        title: "مدارک مورد نیاز صدور سند",
      },
      {
        id: "3",
        title: "مدارک مورد نیاز صدور سند",
      },
    ]);

    return {
      dataInformation,
    };
  },
};
</script>
<style>
.container-inf {
  background: rgba(185, 185, 185, 0.527);
  height: 300px;
  top: 60px;
  margin: 50px 0;
}
.carts-inf {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100%;
}
.cart-inf {
  background-image: linear-gradient(
    to right,
    rgba(255, 217, 0, 0.801),
    rgb(255, 255, 185)
  );
  padding: 40px 40px;
  border-radius: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
}
.cart-inf:hover{
  box-shadow: -3px 3px 8px rgba(145, 99, 1, 0.486);
}
.inf-svg {
  width: 40%;
}
.inf-contant {
  width: 60%;
  padding: 0 10px;
}
.inf-contant h3 {
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: rgb(77, 77, 77);
}
.inf-contant a {
  border: solid 2px  rgba(184, 184, 184, 0.74);
  padding: 2px 10px;
  font-size: 0.8rem;
  color: rgb(97, 97, 97);
  font-weight: 500;
  border-radius: 10%;
  margin-top: 50px;
  text-decoration: none;
  transition: all 0.5s;
}
.inf-contant a:hover {
  background-color: rgba(184, 184, 184, 0.74);
  color: rgb(20, 20, 20);
}
</style>
