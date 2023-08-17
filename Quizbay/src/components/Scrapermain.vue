<template>
<div>
    <Header></Header>
    <!-- <div class="scrapperhome"> -->
        <p style="font-size: 300%; font-weight:300">Choose what you would like to do</p>
        <div class="main">
            <!-- <link href='//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800' rel='stylesheet' type='text/css'> -->
            <div class="form1" >
                <button class="one" @click="formed()">Post API for Web Scraping</button>
                <p>Scraping</p>
            </div>
            <div class="form2">
                <button class="two" @click="form()"> Add Audio/Image/Video Questions</button>
                <p>Creating</p>
            </div>
        </div>
    <!-- </div> -->
</div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: "Scrapermain",
    data() {
        return {};
    },
    methods: {
        formed() {
            this.$router.push("/scraper");
        },
        form() {
            this.$router.push("/uploadquestions");
        }
    },
    components: { Header }
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/great-vibes');
p{
    font-family: 'Great Vibes';
    font-size: 500%;
    font-weight: 600;
    text-align: center;
}
.main{
    display: flex;
    width: 100vw;
    height: 100vh;
    /* background-color: #47B5FF; */
    
    
}
.form1 {
    width: 30vw;
    height: 50vh;
    margin-left: 10vw;
    /* margin-top: 15vw;
    margin-bottom: 15vw;
    margin-left: 10vw;
    margin-right: 10vw;
    padding: 10vw;
    border-radius: 2vw; */
    background-color:#47B5FF ;
    border-radius: 2vw;
}
.form2 {
    width: 30vw;
    height: 50vh;
    margin-left: 20vw;
    border-radius: 2vw;
    /* height: 100vh; */
    /* margin-top: 15vw;
     margin-bottom: 15vw;
    margin-right: 10vw; */
    /* border: 2px solid black; */
    /* padding: 10vw;
    border-radius: 2vw; */
    background-color:#47B5FF ;
}
.one{ 
    width:28vw;
    height:10vh;
    border-radius: 2vw;
    /* background-color:antiquewhite; */
    margin-top: 2vw; 
    margin-left: 1vw;
    margin-right: 0vh; 
    padding: 0vh;
    padding-left: 0vw;
     /* border: 2px solid black; */
} 
.two{
    width:28vw;
    height:10vh;
    border-radius: 2vw;
    /* background-color:antiquewhite; */
    margin-top: 2vw; 
    margin-left: 1vw;
    margin-right: 0vh; 
    padding: 0vh;
    padding-left: 0vw;} 

*{
overflow:hidden;
}
/* button{
    background-color: none;
    border-radius: 10px;
    padding: 10px;
} */


</style>
