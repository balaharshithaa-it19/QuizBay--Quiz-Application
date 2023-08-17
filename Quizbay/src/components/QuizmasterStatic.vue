<template>
    <div class="body">
        <Header></Header>
        <h2 style="text-align:center;">STATIC CONTEST</h2>
        <div class="maindiv">
            <div class="contestDetails">
                <h4 style="text-align:center; font-size: large;">Please fill the details of the contest below :)</h4>
                <div class="form">
                    <div class="textbox">
                        <input type="number" placeholder="QuizMaster ID" v-model="quizmasterId" required
                            class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Contest Name" v-model="contestName" required
                            class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <input type="number" placeholder="No. of Questions" v-model="noOfQuestions" required
                            class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Difficulty Level(Easy/Medium/Hard/Any Difficulty)"
                            v-model="difficultyLevel" required class="textfield"><br>
                        <!-- <select v-model="difficultyLevel" required class="textfield">Difficulty Level</select> -->
                    </div>
                    <div class="textbox">
                        <input type="number" placeholder="Skip Allowed" v-model="skipAllowed" required
                            class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <input type="number" step="0.01" placeholder="Duration in min.sec" v-model="duration" required
                            class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Category(Food/Technology/Music/Gaming/Sports)"
                            v-model="category" required class="textfield"><br>
                    </div>
                    <div class="textbox">
                        <p style="margin-top: 0; margin-bottom:0;">Contest Start Date and Time</p>
                        <input type="Date" placeholder="Window start Date" v-model="windowStartDate" required
                            class="datefield">
                        <input type="time" placeholder="Window start Time" min="00:00" max="24:00"
                            v-model="windowStartTime" required class="datefield"><br>
                    </div>
                    <div class="textbox">
                        <p style="margin-top: 10px; margin-bottom:0;">Contest End Date and Time</p>
                        <input type="Date" placeholder="Window End Date" v-model="windowEndDate" required
                            class="datefield">
                        <input type="time" placeholder="Window End Time" v-model="windowEndTime" required
                            class="datefield"><br>
                    </div>
                    <button class="button" @click="questions">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import moment from 'moment'
import Header from "./Header.vue"
export default {
    components: { Header },
    data() {
        return {
            quizmasterId: '',
            contestName: '',
            noOfQuestions: '',
            difficultyLevel: '',
            skipAllowed: '',
            duration: '',
            category: '',
            windowStartDate: '',
            windowEndDate: '',
            windowStartTime: '',
            windowEndTime: '',
            quiztype: 'static',
            // time1: moment(this.windowStartTime, "h:mm:ss A").format("HH:mm:ss"),
            // time2: moment(this.windowEndTime, "h:mm:ss A").format("HH:mm:ss")
        }
    },
    computed: {
        ...mapGetters(['getStaticContest'])
    },
    methods: {
        questions(val) {

            let obj = {
                startDate: this.windowStartDate,
                startTime: (this.windowStartTime + ':00'),
                endDate: this.windowEndDate,
                endTime: (this.windowEndTime + ':00'),
                duration: this.duration,
                contestName: this.contestName,
                numberOfQuestions: this.noOfQuestions,
                skipAllowed: this.skipAllowed,
                difficultyLevel: this.difficultyLevel,
                category: this.category,
                type: this.quiztype,
                quizMasterId: this.quizmasterId
            }
            console.log(obj, "objectttt")
            this.$store.commit('setContest', obj)
            this.$store.commit('setQuestionBank',)
            this.$router.push('/framingQuestions')
            // console.log(this.getStaticContest,"helooo dear")
            //     axios.post('http://10.20.4.154:8180/contest', obj, {
            //         'mode': 'no-cors',
            //         'Content-Type': 'application/json; charset=UTF-8'

            //     })
            //         .then((res) => {
            //             if (res != null) {
            //                 alert("sucessful")
            //             } else {
            //                 alert("unsucessful")
            //             }
            //         })
            //         .catch((err) => console.log(err))
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.body {
    background: #daeaf5;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat';
}

.maindiv {
    margin-top: 2vh;
    margin-left: 32vw;
    background: #47B5FF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37vw;
    height: 78vh;
    border-radius: 20px;
}

.contestDetails {
    width: 35vw;
    height: 75vh;
    background: white;
    border-radius: 2vw;
    display: flex;
    flex-direction: column;
    align-items: left;
}

.form {
    width: 30vw;
    height: 10vh;
    padding: 2vw;
    padding-top: 0;
}

.textbox {
    padding: 10px 0px;
    position: relative;
}

.textfield {
    border: none;
    border-bottom: 2px solid #D1D1D4;
    font-weight: 700;
    width: 30vw;
    height: 3vh;
}

.datefield {
    border: none;
    border-bottom: 2px solid #D1D1D4;
    font-weight: 700;
    width: 10vw;
    height: 3vh;
    margin-right: 2vw;
}

.button {
    float: right;
}

button {
    background-color: rgb(218, 226, 219);
    border: 0;
    height: 51px;
    width: fit-content;
    margin-top: -20px;
    margin-left: 10px;
    padding: 10px 10px 10px 10px;
}

button:hover {
    background-color: rgb(193, 200, 193);

}
</style>
