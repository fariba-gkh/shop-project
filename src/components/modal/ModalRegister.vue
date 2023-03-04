<template>
  <div class="modal-background" >
    
    <div class="modal">
        <div class="modal-close"  @click="close">
        <i class="fa fa-window-close" aria-hidden="true"></i>
        </div>
        <div class="mdl enter">
         <p>ورود</p>

        </div>
        <form action="">
            <label for="name">نام کاربری:</label><br>
            <input class="input-mdl" type="text" name="name" required><br>

           <label for="phone">شماره موبایل:</label><br>
            <input class="input-mdl" type="tel" name="phone"  reguired>
           
        </form>
        <div class="mdl">
            <button type="submite">ثبت</button>
        </div>
        <div class="mdl create" >
            <p>کاربر جدید هستید؟</p>
            <a class="register-link" href="">ثبت نام</a>

        </div>
        
    </div>
  </div>
</template>

<script>
import { toRef } from 'vue'
// import { toRef } from 'vue';
export default {
    name: 'MoadalRegister',
    props:{
        closeModal :{
            type: Function,
        } ,
    },
  setup(props){
    const closeModal = toRef(props)
    const close = props.closeModal


return{
    closeModal,
    close,
 
    
}
  }

}
</script>

<style>
.modal-background {
    background: rgba(0, 0, 0, 0.692);
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
}
.modal {
    background: white;
    padding: 50px;

}
.modal-close{
    top: 0px;
    left: 5px;
    position: absolute;
    font-size: 20px;
    transition: all 0.4s ease-in 0.1;
     color: rgb(92, 92, 92);
}
.modal-close :hover{
    color: rgb(134, 135, 136);
}
.modal form {
    font-size: 14px;
}
.modal button {
    padding: 5px 15px;
    background: rgb(70, 162, 248);
    border: none;
    font-size: 14px;
    margin-top: 5px;
   
}
.mdl {
    margin-bottom: 20px;
}
.enter p {
    color: rgb(70, 162, 248);
    font-size: 14px;
}
.input-mdl{
    padding: 5px;
    width: 200px;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: rgb(88, 88, 88);
    outline: none;
    border:solid 1px rgb(170, 170, 170);
}
.create{

    font-size: 12px;
}
.register-link{
    text-decoration: none;
    color: rgb(70, 162, 248);

}


</style>