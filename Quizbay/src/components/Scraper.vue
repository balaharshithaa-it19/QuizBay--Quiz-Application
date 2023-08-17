<template>
<div class="smain">
  <Header></Header>
    <div class="scrapper">
         
      <div class="one">
        <img src="../assets/qb_quizbay1.png" class="animate__animated animate__zoomInUp" >
      </div>
      <div class="two">
        <form>
            <label class="animate__animated animate__zoomInUp">Enter URL to upload Questions:</label><br/><br/>
            <input type="url" name="url" placeholder="Enter your Url" v-model="url" v-animate-css.hover="'pulse'">
            <button @click="scrapper" v-animate-css.hover="'pulse'" >Submit</button>
        </form>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
    name: "scraper",
    data() {
        return {
            url: ""
        };
    },
    methods: {
        scrapper(e) {
            e.preventDefault();
            var obj = {
                api: this.url
            };
            console.log(this.url);
            axios.post("http://10.20.4.154:8181/questionscreen/scrapper"+'?api='+this.url, {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                console.log(res.data);
                if (res.data === "Successful") {
                    // console.log("hello");
                    alert("API sent successfully")
                    this.$router.push("/scrape")
                    window.location.reload()
                }
                else {
                    alert("unsucessfull");
                }
            })
                .catch((err) => console.log(err));
            this.url = "";
        }
    },
    components: { Header }
}
</script>

<style scoped>

.smain{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.scrapper{
    display: flex;
    background-color: #daeaf5;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
img{
    width: 40vw;
    height:50vh;
    border-radius: 2vh;
    margin-left: 8vw;
}
.one{
    width:50vw;
    height:100vh;
    padding-top: 20vh;
    /* font-family: 'Montserrat'; */
   
}
button{
    width: 10vw;
    border: 0;
    padding: 2%;
    font-size: 14px;
    /* cursor: pointer; */
    border-radius: 12px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    
}
form{
    text-align: left;
    font-size: 20px;
}
.two{
    /* float: right; */
    width:50vw;
    /* justify-content: center; */
    height:100vh;
    padding-top:300px;
    /* text-align:center; */
    /* font-family: 'Montserrat'; */
    /* font-size: 22px; */
}

input{
  width: 50%;
  border: 0;
  margin: 0 0 15px;
  padding: 2%;
  font-size: 14px;
  background: #f2f2f2;
  border-radius: 10px;
}


</style>
