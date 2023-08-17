<template>
<div class="qmain" style="background: #daeaf5;">
    <Header></Header>
    <div class="main">
        <div class="left">
            <div class="left1" @click="static">
                <router-link to="/static" >    
                    <h4 style="font-size: x-large; margin-bottom:0;padding-left: 130px; padding-top: 5px;">Create</h4>
                    <h4 style="font-size: x-large; margin:0; padding-left: 135px;">Static</h4>
                    <h4 style="font-size: x-large; margin:0; padding-left: 140px;">Quiz</h4>
                </router-link>
            </div>
            <div class="left2" @click="dynamic">
                <router-link to="/dynamic"  >             
                    <h4 style="font-size: x-large; margin-bottom:0;padding-left: 120px; padding-top: 5px;">Create</h4>
                    <h4 style="font-size: x-large; margin:0; padding-left: 110px;">Dynamic</h4>
                    <h4 style="font-size: x-large; margin:0; padding-left: 130px;">Quiz</h4>   
                </router-link>
            </div>
            <div class="left3">
                <router-link to="/quizzes">    
                    <h4 style="font-size: x-large; margin-bottom:0;padding-left: 110px; padding-top: 30px;">Quizzes</h4>
                    <!-- <h4 style="font-size: x-large; margin:0; padding-left: 110px;">Quizzes</h4> -->
                </router-link>
                <!-- <h4 style="font-size: x-large; margin:0; padding-left: 120px;">Quiz</h4> -->
            </div>
            <div class="left4">
                <router-link to="/leaderboard">    
                    <h4 style="font-size: x-large; margin-bottom:0;padding-left: 120px; padding-top: 10px;">View</h4>
                    <h4 style="font-size: x-large; margin:0; padding-left: 70px;">Leaderboard</h4>
                </router-link>
                <!-- <h4 style="font-size: x-large; margin:0; padding-left: 120px;">Quiz</h4> -->
            </div>
        </div>
        <div class="right">
            <div class="rightinner">
                <p class="p1"> Contest Creation Rules and regulations: </p>
                <p class="p2">Static Contest:<br>
                1. You can create any number of contests.<br>
                2. User can skip questions only X no of times in one contest.<br>
                3. Each contest should have a minimum of 10 questions.<br>
                4. Contest should have a question in the ratio of 40% text-based, 20% Image-based, 20%audio-based, and 20% video-based only.<br>
                <br/><br/>
                Dynamic Contest:<br>
                1. Question will be added in real-time by the admin to this contest.<br>
                2. There will be a time limit in which the user has to answer this question.<br> 
                3. There is no question ratio for dynamic contest.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from "./Header.vue";
export default{
    components: { Header },
    beforeMount: function(){
        // window.location.reload();
    },
    methods: {
        static(){
            console.log("static")
            window.location.reload();
        },
         dynamic(){
            console.log("dynamic")
            window.location.reload();
        }
    }
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/oleo-script');

.qmain{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.main{
    display: flex;
    width: 100vw;
    height: 100vh;

}
.left{
    margin-left: 7px;
    border-radius: 20px;
    width: 20vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    /* background: #47B5FF; */

}
.left1{
    height: 20vh;
    width:15vw;
    margin-top: 10px;
    border-radius: 20px;
    background: #47B5FF;
    margin-left: 20px;
    background-image: url("../assets/lukas-blazek-UAvYasdkzq8-unsplash-removebg-preview.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

}
.left1:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.left2{
    height: 20vh;
    width:15vw;
    margin-top: 10px;
    border-radius: 20px;
    background: #47B5FF;
    margin-left: 20px;
    background-image: url("../assets/elena-koycheva-VmcIMhuWCac-unsplash-removebg-preview.png");
    background-size: contain;
    background-repeat: no-repeat;
    color: white;

}
.left2:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.left3{
    height: 20vh;
    width:15vw;
    margin-top: 10px;
    border-radius: 20px;
    background: #47B5FF;
    margin-left: 20px;
    color: white;
    background-image: url("../assets/q-removebg-preview.png");
    background-size: 100px;
    background-position: 10px 30px;
    background-repeat: no-repeat;

}
.left3:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.left4{
    height: 20vh;
    width:15vw;
    margin-top: 10px;
    border-radius: 20px;
    background: #47B5FF;
    margin-left: 20px;
    background-image: url("../assets/Screenshot_2022-08-04_at_12.37.35_PM-removebg-preview.png");
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
}
.left4:hover{
    box-shadow: 0px 0px 14px #847fb5;
}
.right{
    border-radius: 20px;
    background: #47B5FF;
    width:75vw;
    height: 84vh;
    margin-top: 10px;
}
.rightinner{
    border-radius: 20px;
    background: #daeaf5;
    width:72vw;
    height: 79vh;
    margin-top: 20px;
    margin-left: 20px;
    /* cursor: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="20" width="20"><text y="28" font-size="32">🤩</text><path d="M0,2 L0,0 L2,0"/></svg>'), auto; */
}
p.p1{
    padding: 5vh;
    padding-bottom: 0;
    font-size:3vh;
    font-family: 'Oleo script';
    color: #360c85;
    text-decoration: underline;
}
p.p2{
    padding: 5vh;
    padding-top: 0;
    font-size:3vh;
    font-family: 'Oleo script';
    color: #195278;
}
a{
    text-decoration: none;
    color: white;
}
</style>
