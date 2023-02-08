<template>
    <div class="container-inf">
        <div class="carts-inf ">
           <div class="cart-inf" v-for="(dataInf, id) in dataInformation" :key="id">
            <div class="inf-contant">
            <h3 class="inf-title">{{dataInf.title}}</h3>
            <a href="">مشاهده</a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path
      d="M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"
    />
  </svg>
           </div>
           
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    name: "Information",

    setup() {
      const dataInformation = ref([
        {
            "id" : "0",
          "title" : "مدارک مورد نیاز صدور سند",
        },
         {
            "id" : "1",
          "title" : "مدارک مورد نیاز صدور سند",
        },
         {
            "id" : "2",
          "title" : "مدارک مورد نیاز صدور سند",
        },
         {
            "id" : "3",
          "title" : "مدارک مورد نیاز صدور سند",
        }
      ])

    return {
       dataInformation, 
    }
 }
}
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
    gap:40px ;
    height: 100%;


}
.cart-inf {
     background-image:linear-gradient(to right, rgba(255, 217, 0, 0.801),  rgb(255, 255, 185)) ;
     padding: 50px 40px;
     border-radius: 5%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
}

.cart-inf svg {
margin: auto;
}
.inf-contant {
    width: 70%;
}
.inf-contant h3 {
font-size: 1rem;
margin-bottom: 10px;
font-weight: 500;
color: rgb(77, 77, 77);

}
.inf-contant a {
border: solid 2px rgba(221, 221, 221, 0.74);
padding: 2px 5px ;
font-size: 0.7rem;
color: rgb(58, 58, 58);
font-weight: 400;
border-radius: 5%;
margin-top: 50px;

}
</style>