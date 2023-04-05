<template>
    <div class="contact-container">
        <div class="contact">
          <img src="../../../assets/photo/cubi/person-taking-driver-s-license-exam.jpg" alt="">
          
          <div class="contact-text">
            <h1>ارتباط با ما</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum molestias, eius accusantium dicta architecto.</p>
          </div>
        </div>
    </div>
    <div class="form-container">
        
        <div class="contact-form">
            <div class="send-text"><h2>ارسال پیام</h2></div>
        <form action="" class="">
            <div class="labels">
            <label for="nm">نام و نام خانوادگی:</label><br>
            <input type="text" name="nm" required>
        </div>
            <div class="labels">
            <label for="email">ایمیل:</label><br>
            <input type="email" name="email" required>
        </div>
            <div class="labels">
            <label for="text">متن پیام:</label><br>
            <textarea name="text" id="" cols="30" rows="10" required></textarea>
        </div>
        <div class="labels">
            <button>ارسال</button>
        </div>
        </form>
    </div>
    </div>
</template>
<script>
export default {
    name: 'ContactUs',
}

</script>
<style>
.contact-container {
    height: 80vh;
    width: 100vw;
}
.contact{
    position: relative;
    width: 100%;
    height: 100%; 
}
.contact h1 {
   color: aliceblue;
   margin-bottom: 20px;
}
.contact img{
height: 100%;
width: 100%;
object-fit: fill;
position: fixed;
}

.contact-text{
    background: rgba(0, 0, 0, 0.849);
    position: absolute;
    padding: 20px 80px 40px 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
    line-height: 30px;
}
.contact-text p{
color: rgb(196, 196, 196);
}
.form-container {
   widows: 100%; 
   height: 100vh;
   
}
.contact-form{
    background-color: rgb(255, 255, 255);
    width: 80%;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.send-text{
    position: absolute;
    margin-left: auto;
    top: 5%;
    left: 50%;
    transform: translate(-50% , 0);
}
.send-text h2 {
    color: rgb(92, 92, 92);
}
.contact-form form {
    display: flex;
    flex-direction: column;
    border: 0.4px solid rgba(209, 209, 209, 0.521);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    padding: 25px 50px;
    margin-top: 15px;

}
.labels {
    margin-top: 15px;

}

.labels input {
    padding: 8px 5px;
    margin-top: 3px;
    width: 300px;
    border: 0.5px solid rgb(168, 168, 168);
    font-size: 14px;
    color: rgb(90, 90, 90);
}

.labels textarea {
    padding: 10px ;
    margin-top: 3px;
    width: 300px;
    border: 0.5px solid rgb(168, 168, 168);
    color: rgb(90, 90, 90);
    font-size: 14px;
}
.labels button {
    padding: 8px 20px;
    background: rgb(0, 140, 255);
    border: none;
    color: rgb(71, 71, 71);
    font-size: 16px;
}
.labels label {
    font-size: 16px;
    color: rgb(97, 97, 97);
}
</style> 