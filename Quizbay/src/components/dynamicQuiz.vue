<template>
<div>
    <Header></Header>
    <div class="wrapper">

        <!-- {{getDynamicQues[1]}} -->
        <div class="hiddes">
            See You Next Time QuizMaster</div>

        <div class="scroll">
            <div class="list">

                <div v-for="index in getDynamicQues.length" :key="index.id">
                    <div class="questionnumbers" @click="displayQuestion(index)">
                        {{ index }}
                    </div>
                </div>

            </div>
            <div class="end" v-if="showend"><button @click="endquiz">END QUIZ</button></div>
            <div class="end" v-if="showstart"><button @click="startquiz">GO LIVE..</button></div>

        </div>
        <div v-if="showquestion" class="questioncontainer">
            <div class="thequestion">
                <b>Question</b> : {{ theQuestion }}
                <div class="content">
                    <div class="options"><b>options</b>
                        <br>
                        <div>a ){{ options[0] }}</div>
                        <div>b ){{ options[1] }}</div>
                        <div>c ){{ options[2] }}</div>
                    </div>
                    <div class="media">
                        <div class="imageQues" v-if="getDynamicQues[myindex].questionFormat === 'Image'">
                            <img :src="getDynamicQues[myindex].url">
                        </div>
                        <div class="vidQues" v-if="getDynamicQues[myindex].questionFormat === 'Video'">
                            <video controls>
                                <source :src="getDynamicQues[myindex].url">
                            </video>
                        </div>
                        <div class="AudioQues" v-if="getDynamicQues[myindex].questionFormat === 'Audio'">
                            <audio controls>
                                <source :src="getDynamicQues[myindex].url">
                            </audio>
                        </div>
                    </div>
                </div>

            </div>
            <!-- <div class="live">
                <button @click="golive(sendIndex)">GO LIVE</button>
            </div> -->

            <div class="wrap">
                <button class="button" @click="golive(sendIndex)">GO LIVE</button>
            </div>

            <div v-if="live" class="sign">
                <span class="fast-flicker">Question</span> is&nbsp;
                <span class="flicker">Live&nbsp;</span>Now!
            </div>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Header from './Header.vue';
export default {
    name: "dynamicQuiz",
    data() {
        return {
            questions: [],
            msg: "Welcome to Your Vue.js App",
            theQuestion: "",
            options: [],
            questionListDynamic: [],
            showquestion: false,
            count: 0,
            sendIndex: 0,
            myindex: 0,
            live: false,
            showend: false,
            showstart: true
        };
    },
    beforeMount: function () {
        console.log("hello mf");
        console.log(this.getDynamicQuizId, "id");
        fetch("http://10.20.4.154:8180/contest/contestid/" + this.getDynamicQuizId)
            .then(response => response.json())
            .then(res => {
            var qId = res.questionCode;
            for (var i = 0; i < qId.length; i++) {
                fetch("http://10.20.4.154:8181/question/id/" + qId[i])
                    .then(response => response.json())
                    .then(res => {
                    this.$store.commit("setDynamicQues", res);
                    this.count = this.count + 1;
                });
            }
        });
        console.log(this.getDynamicQues.length, "out");
    },
    computed: {
        ...mapGetters(["getQuestionsList", "getDynamicQuizId", "getDynamicQues"])
    },
    methods: {
        showalert() {
            console.log(document.querySelector(".hiddes").style.display = "flex");
            setTimeout(() => {
                document.querySelector(".hiddes").style.display = "none";
                this.$router.push("/quizzes");
            }, 1000);
        },
        endquiz() {
            axios.post("http://10.20.4.154:8181/question/post/" + this.getDynamicQuizId + "/END", {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                if (res.data) {
                    console.log(res);
                    // alert("sucessfull")
                    this.showalert();
                    // this.$router.push('/login')
                    // window.location.reload()
                }
                else {
                    alert("unsucessfull");
                }
            })
                .catch((err) => console.log(err));
        },
        startquiz() {
            this.showstart = false;
            this.showend = true;
            axios.post("http://10.20.4.154:8181/question/post/" + this.getDynamicQuizId + "/START", {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                if (res.data) {
                    console.log(res);
                    // alert("sucessfull")
                    // this.showalert()
                    // this.$router.push('/login')
                    // window.location.reload()
                }
                else {
                    alert("unsucessfull");
                }
            })
                .catch((err) => console.log(err));
        },
        golive(val) {
            this.live = true;
            console.log(val, "id");
            axios.post("http://10.20.4.154:8181/question/post/" + this.getDynamicQuizId + "/" + val, {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                if (res.data) {
                    console.log(res);
                    // alert("sucessfull")
                    // this.$router.push('/login')
                    // window.location.reload()
                }
                else {
                    alert("unsucessfull");
                }
            })
                .catch((err) => console.log(err));
        },
        displayQuestion(val) {
            if (this.showquestion) {
                this.showquestion = false;
                this.live = false;
            }
            else
                this.showquestion = true;
            this.options = [];
            this.myindex = val - 1;
            this.sendIndex = this.getDynamicQues[val - 1].id;
            this.theQuestion = this.getDynamicQues[val - 1].question;
            for (var i = 0; i < 3; i++) {
                this.options.push(this.getDynamicQues[val - 1].answerList[i].value);
            }
            // console.log(this.getQuestionsList[val].question)
        }
    },
    components: { Header }
}
</script>

<style scoped>
.wrapper {
    /* margin-left: 10%;
    margin-top: 7%; */
    margin: 0 auto;
    margin-top: 0;
    height: 60vh;
    width: 80vw;
    border-radius: 20px;
    background-color: rgb(192, 169, 138);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

}

.questionnumbers {

    padding: 20px 20px 20px 20px;
    margin-top: 40px;
    margin-left: 5px;
    border-radius: 100%;
    background-color: aquamarine;
    /* overflow: scroll; */
}

.hiddes {
    text-align: center;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: none;
    font-size: 1.7rem;
    z-index: 100;
    padding: 3rem;
    box-shadow: rgba(165, 78, 78, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: rgb(235, 112, 112);
    color: white;
}

.questionnumbers:hover {
    background-color: rgb(230, 211, 211);
}

button {
    background-color: rgb(224, 74, 58);
    border: 0;
    height: 50px;
    width: fit-content;
    margin-left: 10px;
    padding: 10px 10px 10px 10px;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.questioncontainer {

    width: 80%;
    height: 60%;
    margin-left: 10%;
    margin-top: 5%;
}

.imageQues img {

    margin: -12% 0;
    height: 200px;
    width: 300px;
}

.vidQues video {
    margin: -12% 0;
    height: 200px;
    width: 300px;

}

div.end {
    z-index: 100;
    margin-top: -80px;
}

.AudioQues audio {
    margin-left: 200%;
    margin-top: -12%;
    height: 200px;
    width: 300px;
}

.scroll {
    /* background-color: black; */

    width: 100%;
    /* overflow: scroll; */
}

.list {

    scroll-margin-top: 10px;
    overflow: scroll;
    /* background-color: blue; */
    margin-left: 15%;
    width: 70%;
    margin-top: 80px;
    display: flex;
    flex-direction: row;

}


.live {
    display: flex;
    justify-content: center;
}

html,
body {
    height: 100%;
}

.wrap {
    margin-top: -80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    min-width: 300px;
    min-height: 60px;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #313133;
    background: #4FD1C5;
    background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
}

.end button {
    border-radius: 1000px;
}

.end button::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(95px);
    min-height: calc(60px);
    border: 6px solid #e4471c;
    box-shadow: 0 0 60px rgba(233, 87, 29, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40.25vw, -28.75vh);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

.wrap button::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #00FFCB;
    box-shadow: 0 0 60px rgba(0, 255, 203, .64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

.button:hover,
.button:focus {
    color: #313133;
    transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
    opacity: 1;
}

button::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00FFCB;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
}

button:hover::after,
button:focus::after {
    animation: none;
    display: none;
}

@keyframes ring {
    0% {
        width: 30px;
        height: 30px;
        opacity: 1;
    }

    100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
}

@font-face {
    font-family: Clip;
    src: url("https://acupoftee.github.io/fonts/Clip.ttf");
}

body {
    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
        linear-gradient(155deg, black 23px, transparent 23px),
        linear-gradient(335deg, black 23px, transparent 23px),
        linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
}

.sign {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0%;
    height: 20%;
    background-image: radial-gradient(ellipse 50% 35% at 50% 50%,
            #6b1839,
            transparent);
    transform: translate(-50%, -50%);
    letter-spacing: 2;
    left: 50%;
    top: 10%;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: 2.5em;
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #13bc48,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;
}

@keyframes blink {

    0%,
    22%,
    36%,
    75% {
        color: #ffe6ff;
        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
            -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
            0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }

    28%,
    33% {
        color: #ff65bd;
        text-shadow: none;
    }

    82%,
    97% {
        color: #ff2483;
        text-shadow: none;
    }
}

.flicker {
    font-size: 60px;
    margin-right: 20px;
    animation: shine 2s forwards, blink 3s 2s infinite;
}

.fast-flicker {
    margin-right: 20px;
    font-size: 30px;
    animation: shine 2s forwards, blink 10s 1s infinite;
}

@keyframes shine {
    0% {
        color: #6b1839;
        text-shadow: none;
    }

    100% {
        color: #ffe6ff;
        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
            -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
            0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
}

@keyframes flicker {
    from {
        opacity: 1;
    }

    4% {
        opacity: 0.9;
    }

    6% {
        opacity: 0.85;
    }

    8% {
        opacity: 0.95;
    }

    10% {
        opacity: 0.9;
    }

    11% {
        opacity: 0.922;
    }

    12% {
        opacity: 0.9;
    }

    14% {
        opacity: 0.95;
    }

    16% {
        opacity: 0.98;
    }

    17% {
        opacity: 0.9;
    }

    19% {
        opacity: 0.93;
    }

    20% {
        opacity: 0.99;
    }

    24% {
        opacity: 1;
    }

    26% {
        opacity: 0.94;
    }

    28% {
        opacity: 0.98;
    }

    37% {
        opacity: 0.93;
    }

    38% {
        opacity: 0.5;
    }

    39% {
        opacity: 0.96;
    }

    42% {
        opacity: 1;
    }

    44% {
        opacity: 0.97;
    }

    46% {
        opacity: 0.94;
    }

    56% {
        opacity: 0.9;
    }

    58% {
        opacity: 0.9;
    }

    60% {
        opacity: 0.99;
    }

    68% {
        opacity: 1;
    }

    70% {
        opacity: 0.9;
    }

    72% {
        opacity: 0.95;
    }

    93% {
        opacity: 0.93;
    }

    95% {
        opacity: 0.95;
    }

    97% {
        opacity: 0.93;
    }

    to {
        opacity: 1;
    }
}
</style>
