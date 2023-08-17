<template>
  <div class="register">
    <div class="one">
      <img src="../assets/qb_quizbay1.png" class="animate__animated animate__zoomInUp">
    </div>
    <div class="twoouter">
        <div class="two">
            <h2 class="welcome" >Welcome to Admin register page</h2><br>
            <form>    
              <!-- <label>Name:</label> -->
              <input type="text" name="text" placeholder="Name*" v-model="name" v-animate-css.hover="'pulse'" pattern="[a-zA-Z]{1,}" required><br/><br/>
              <!-- <div  class='error'>{{ nameError }}</div> -->
              <!-- <label>Email:</label> -->
              <input type="email" name="email" placeholder="Email*" v-model="email" v-animate-css.hover="'pulse'" required><br/><br/>
              <!-- <div  class='error'>{{ emailError }}</div> -->
              <!-- <label>Password:</label> -->
              <input type="password" name="password" placeholder="Password*" v-model="password" v-animate-css.hover="'pulse'" required><br/><br/>
              <!-- <div v-if="passwordError" class='error'>{{ passwordError }}</div> -->
              <!-- <label>Confirm Password:</label> -->
              <input type="password" name="confirm password" placeholder="Confirm Password*" v-model="confirmpassword" v-animate-css.hover="'pulse'" @change="handle1" required><br/><br/>
              <div v-if="confirmpasswordError" style="color:red" class='error'>{{ confirmpasswordError }}</div>
              <!-- <label>Gender:</label> -->
              <!-- <select class="quiz" v-animate-css.hover="'pulse'">
                <option disabled  selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Others">Others</option>
              </select>&nbsp&nbsp&nbsp&nbsp -->
              <p style="text-align: left; padding-left:7vw">Role of the admin:*</p>
              <select class="quiz1" v-model="role" v-animate-css.hover="'pulse'" required>
                  <option disabled  selected>Account Type</option>
              <option value="Scrapper">Scraper</option>
              <option value="Screener">Screener</option>
              <option value="Quiz Master">Quiz Master</option>
              </select><br/>
              <p style="text-align: left; padding-left: 7vw; color: red;">(* required)</p>
              <!-- <label>D.O.B:</label> -->
              <!-- <p style="text-align: left; padding-left:7vw">Date of Birth<br></p> -->
              <!-- <input type="date" name="date" placeholder="D.O.B" v-animate-css.hover="'pulse'" v-model="dob"><br/><br/>
              <label>Phone Number</label>
              <input type="Number" name="number" placeholder="Phone Number" v-model="phone" @change="handle2" v-animate-css.hover="'pulse'"  ><br/><br/>
              <div v-if="phoneError" class='error'>{{ numberError }}</div> -->
              <br/>
              <button @click="signup" v-animate-css.hover="'pulse'" >Submit</button>
              <p class="message">Already registered? <router-link to="/login">Login</router-link></p>
            </form>
          </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import axios from 'axios'
export default {
  name: 'signup',
  data() {
    return {
    
        name: "",
        email: "",
        password: "",
        passwordError: "",
        confirmpassword: "",
        confirmpasswordError: " ",
        role:""
      
    }
  },
  methods: {
    
    signup(e) {
      e.preventDefault();
      var obj = {
        name:this.name ,
        password: this.password,
        confirmPassword: this.confirmpassword,
        emailId:this.email,
        role:this.role
       
      }
      // console.log("obj",obj)
      axios.post('http://10.20.4.154:8182/admin/register', obj, {
        'Content-Type':'application/json; charset=UTF-8'
      })
      
        .then((res) => {
         
          if(res.data){
            console.log(res)
            alert("sucessfull")
            this.$router.push('/login')
             window.location.reload()
          }
          else{
            alert("unsucessfull")
          }
        })
        .catch((err) => console.log(err))
    //   console.log(obj, 'signup success')
      this.name = '',
      this.email = '',
      this.password = '',
      this.confirmPassword = '',
      this.role = ''
    },
   
    handle () {
      this.passwordError =
       this.password.length > 6
        ? ''
          : 'Password should be more than 6 characters long!'
    },
    handle1 () {
      this.confirmpasswordError =
        this.password === this.confirmpassword ? '' : 'Password does not match'
    }
    // handle2 () {
    //   this.phoneError = this.phone.match('^[6-9]{1}[0-9]{9}$') ? '' : 'Enter a valid phone number'
    // }
}
}
   
</script>

<style scoped>
.register{
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
    /* background-color: beige; */
    border-radius: 20px;
    width:50vw;
    height:100vh;
    margin-top: 20vh;
    /* background-image: https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000; */
    /* margin-bottom: 100px; */
    /* position:sticky; */
}

*{
  overflow: hidden;
}
button{
  width: 25%;
  border: 0;
  padding: 15px;
  font-size: 14px;
  /* cursor: pointer; */
  border-radius: 1vw;
  text-transform: uppercase;
  background-color: #f2f2f2;
    
    
}
.quiz{
  width:13vw;
  height: 5vh;
  background: #f2f2f2;
  border-radius: 1vw;
  border: none;
  text-align: left;
  /* margin-right: 2vw; */
  color: grey;
}

.quiz1{
  width:70%;
  height: 5vh;
  background: #f2f2f2;
  border-radius: 1vw;
  border: none;
  color: grey;

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
    /* float: right; */
    /* border: 2px solid black; */
    /* border-radius: 2px; */
    width:40vw;
    height:87vh;
    justify-content: center;
    /* margin: 20vh; */
    margin-top: 4vh;
    margin-left: 5%;
    padding-top: 4vh;
    text-align:center;
    background-color:#daeaf5;
    border-radius: 2vw;
    /* position: relative; */
    /* position:sticky; */
}
.form{
    float: right;
   
}
input{
  width: 65%;
  border: 0;
  /* margin: 0 0 1vh; */
  padding: 15px;
  font-size: 14px;
  background: #f2f2f2;
  border-radius: 1vw;
  height: 2vh;
}
</style>