<template>

<div class="login">
     
<div class="one">
   
  <img src="../assets/qb_quizbay1.png" class="animate__animated animate__zoomInUp" >
</div>
<div class="twoouter">
<div class="two">
    <h2 class="welcome">Welcome to Admin Login page</h2><br/><br/>
    <form >
         
    <input type="email" name="email" placeholder="Email*" v-model="email" v-animate-css.hover="'pulse'" required ><br/><br/>
    <!-- <div v-if="emailError" class='error'>{{ emailError }}</div> -->
    <!-- <label>Password:</label> -->
<input type="password" name="password" placeholder="Password*" v-model="password" v-animate-css.hover="'pulse'" required><br/><br/>
<!-- <div v-if="passwordError" class='error'>{{ passwordError }}</div> -->
<p style="text-align: left; padding-left: 9vw; color: red; margin-top: 0;">(* required)</p>
<button @click="login" v-animate-css.hover="'pulse'" >Submit</button>
<br/><br/>
<p class="message">Not registered? <router-link to="/signup">Sign Up</router-link></p>
</form>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'login',
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods : {
     login(e) {
      e.preventDefault();
      var obj = {
        emailId:this.email ,
        password: this.password,
      }
// console.log(obj)
     
     axios.post('http://10.20.4.154:8182/admin/login/'+obj.emailId+'/'+obj.password, {
        'Content-Type':'application/json; charset=UTF-8'
      })
      
         .then((res) => {
          console.log(res.data);
          if(res.data === 'Scrapper'){
            alert("login successful")
            this.$router.push('/scrape')
            window.location.reload()
          }
          else if(res.data==='Screener'){
            alert("login successful")
            this.$router.push('/screener')
            window.location.reload()
          }
          else if(res.data==='Quiz Master'){
            alert("login successful")
            this.$router.push('/quizmaster')
            window.location.reload()
          }
          else{
            alert("unsucessfull")
          }
        })
        .catch((err) => console.log(err))
        
      console.log(obj)
      this.email = ''
      this.password = ''
    }   
  }
}
   
</script>

<style scoped>
.login{
    display: flex;
    background-color:#daeaf5 ;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}
img{
    width: 40vw;
    height:50vh;
    border-radius: 20px;
    margin-left: 100px;
}
.one{
    width:50vw;
    height:100vh;
    margin-top: 20vh;
    /* font-family: 'Montserrat'; */
   
}
button{
  width: 25%;
  border: 0;
  padding: 15px;
  font-size: 14px;
  /* cursor: pointer; */
  border-radius: 12px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    
}
.twoouter{
  background-color:#47B5FF;
  width: 45vw;
  height: 100vh;
  /* align-items: center; */
  border-radius: 2vw;
  margin: 3px;
}
.two{
    width:40vw;
    height:76vh;
    justify-content: center;
    /* margin: 20vh; */
    margin-top: 4vh;
    margin-left: 5%;
    padding-top: 15vh;
    text-align:center;
    background-color:#daeaf5;
    border-radius: 2vw;
    /* font-family: 'Montserrat'; */
    /* font-size: 22px; */
}
.form{
    float: right;
   
}
input{
  width: 50%;
  border: 0;
  /* margin: 0 0 15px; */
  padding: 15px;
  font-size: 14px;
  background: #f2f2f2;
  border-radius: 10px;
}

*{
  overflow: hidden;
}
</style>

