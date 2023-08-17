<template>
<div class="main" style="background: #daeaf5;">
    <div>
    <header class="header">
        <img src="../assets/qb-removebg-preview.png" @click="hpg" style="width: 4vw; height:7vh; padding-left: 1vw; padding-top: 2vh; float: left; border-radius: 10px;"/>
        <h2 @click="hpg" style=" padding-left: 2px; float: left; font-weight: bold; color: grey;">Quiz</h2>
        <h2 @click="hpg" style=" padding-left: 2px; float: left; font-weight: bold; color:#47B5FF; ">Bay</h2>
        <!-- <h5>Hello</h5> -->
        <h5 @click="snp" style="float: right; font-weight: bold; font-size: large; color: grey; padding-right: 30px;">SignUp</h5>
        <h5 @click="lgn" style="float: right; font-weight: bold; font-size: large; color: grey; padding-right: 30px;">Login</h5>
    </header>
    </div>
    <div class="topouter">
        <div class="top">
            <div class="topinner">
                <link href='https://fonts.googleapis.com/css?family=Mouse Memoirs' rel='stylesheet'/>
                <h4 class="animate__animated animate__swing" style="font-size: 10vh; margin-bottom:0;padding-left: 12vw; margin-top: 3vh;">WELCOME TO QUIZBAY..!!</h4>
                <p class="animate__animated animate__swing" style="font-size: 7vh; margin-bottom:0;padding-left: 10vw; margin-top: 3vh;">Be ready. Be smart. Be noticed!</p>
                <p class="animate__animated animate__swing" style="font-size: 7vh; margin-bottom:0;padding-left: 10vw; margin-top: 3vh; float: right;">Enjoy Quizzing...</p>
            </div>
            <div class="image">
            <img src ="../assets/qm-removebg-preview.png" class="animate__animated animate__backInDown" style="width:25vw; height:50vh"/>
            </div>
        </div>
    </div>
        <div class="container">
        <div class="bottom">    
            <div class="bottom1">
                <router-link to="/login">
                    <h4 style="font-size: xx-large; margin-bottom:0;padding-left: 10vw; padding-top: 5vh;">Scraper</h4>
                </router-link>
            </div>
            <div class="bottom2">
                <router-link to="/login">
                    <h4 style="font-size: xx-large; margin-bottom:0;padding-left: 10vw; padding-top: 5vh;">Screener</h4>
                </router-link>
            </div>
            <div class="bottom3">
                <router-link to="/login">
                    <h4 style="font-size: xx-large; margin-bottom:0;padding-left: 10vw; padding-top: 5vh;">Quiz Master</h4>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from "./Header.vue";
import 'animate.css'
export default{
    components: { Header },
    datat () {
        return {

        }
    },
    methods: {
        hpg() {
            this.$router.push('/homepage');
            window.location.reload()
        },
        snp() {
            this.$router.push('/signup');
            window.location.reload()
        },
        lgn() {
            this.$router.push('/login');
            window.location.reload()
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.header{
    /* padding: 24px; */
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    /* background: linear-gradient(to top, #a5d7fb 0%, #ffffff 100%); */
    /* border: 1px solid  rgb(70, 170, 214); */
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    position: sticky;
    font-family: 'Montserrat';
    position: initial;
}
.main{
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}
.container{
    background: #daeaf5;
}
a{
    text-decoration: none;
    color: white;
}

.topouter{
    background-color: #47B5FF;
    border: 2px solid #47B5FF;
    margin-left: 2vw;
    margin-right: 2.5%;
    margin-top: 0;
    border-radius: 2vw;
}
.topinner{
    width: 50vw;
    height: 35vh;
    font-family: 'Mouse memoirs';
    color: rgb(81, 99, 170);
    overflow: visible;
}
.image{
    padding-left: 10vw;
    width: 30vw;
    height: 50vh;
    color: rgb(81, 99, 170);
    overflow: visible;
}
.top{
    box-sizing: border-box;
    width:93vw;
    height: 50vh;
    margin: 2vh;
    /* margin-right: 20px; */
    border-radius: 2vw;
    background-color: #daeaf5;
    display: flex;
}.bottom{
    display: flex;
    width: 100vw;
    height: 50vh;  
    margin-left: 1.5%;
}
.bottom1{
    width: 30%;
    height: 30vh;
    background: #47B5FF;
    margin: 2vh;
    border-radius: 2vw;
    background-image: url("../assets/scraper.png");
    background-size: 150px;
    background-position: 50px 40px;
    background-repeat: no-repeat;
    text-align: center;
    color: white;
}
.bottom1:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.bottom2{
    width: 30%;
    height: 30vh;
    background: #47B5FF;
    margin: 2vh;
    border-radius: 2vw;
    background-image: url("../assets/screener.png");
    background-size: 130px;
    background-position: 50px 40px;
    background-repeat: no-repeat;
    text-align: center;
    color: white;
}
.bottom2:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.bottom3{
    width: 30%;
    height: 30vh;
    background: #47B5FF;
    margin: 2vh;
    border-radius: 2vw;
    background-image: url("../assets/istockphoto-181885057-612x612-removebg-preview.png");
    background-size: 150px;
    background-position: 40px 40px;
    background-repeat: no-repeat;
    text-align: center;
    color: white;
}
.bottom3:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
/* 
@media only screen and (max-width:900px) {
    div.topinner.h4{
    font-size: 10px;
}
} */
</style>
