<template>
    <div>
        <Header></Header>
        <div class="head">
            <!-- {{getQuestionBank.length}} -->
            <div class="right">
                <div class="wrapper">
                    <div class="hiddes">Limit has been reached!!!</div>
                    <div v-if="sent" class="wrapper2"> <svg class="animated-check" viewBox="0 0 24 24">
                            <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                        </svg>
                    </div>
                    <div class="search">

                        <router-link to="/quizmaster"><button @click="emptyarray"
                                style="margin-left: 0; margin-right:2vw;">
                                <font-awesome-icon icon="fa-solid fa-backward-fast" />
                            </button>
                        </router-link>
                        <input v-model="searchbar" placeholder="search the question">
                        <button @click="searchlist"> SEARCH</button>
                        <button class="length">{{ getQuestionBank.length }}</button>

                    </div>

                    <div class="eachquestion" style="width:100%" v-for="item in pageOfItems" :key="item.id">
                        <div class="question">
                            {{ item.name }}
                            Q :
                            {{ getQuestionsList[item.name - 1].question }}<br>
                            <button id="add" @click="addtolist(item.name - 1)">ADD</button>
                        </div>
                        <div class="media">
                            <div class="answers">
                                Answers :<br>

                                <div> a) {{ getQuestionsList[item.name - 1].answerList[0].value }}</div>
                                <div> b) {{ getQuestionsList[item.name - 1].answerList[1].value }}</div>
                                <div>c) {{ getQuestionsList[item.name - 1].answerList[2].value }}</div>

                            </div>
                            <div class="imageQues" v-if="getQuestionsList[item.name - 1].questionFormat === 'Image'">
                                <img :src="getQuestionsList[item.name - 1].url">
                            </div>
                            <div class="vidQues" v-if="getQuestionsList[item.name - 1].questionFormat === 'Video'">
                                <video controls>
                                    <source :src="getQuestionsList[item.name - 1].url">
                                </video>
                            </div>
                            <div class="AudioQues" v-if="getQuestionsList[item.name - 1].questionFormat === 'Audio'">
                                <audio controls>
                                    <source :src="getQuestionsList[item.name - 1].url">
                                </audio>
                            </div>
                        </div>


                    </div>
                </div>
                <br>
                <br>
                <div class="card-footer pb-0 pt-3">
                    <jw-pagination class="pagination" :pageSize=5 :items="exampleItems" @changePage="onChangePage"
                        :styles="customStyles"></jw-pagination>
                    <button @click="send">SEND</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './Header.vue';
import axios from 'axios';
// import OneQuestion from './OneQuestion.vue'
const customStyles = {
    // onmouseover: function(){this.backgroundCol÷or='red'},
    ul: {
        // border: '2px solid grey',
        // backgroundColor:'blue'
    },
    li: {
        // borderRadius:'100%',
        margin: '2px',
        backgroundColor: 'grey',
        color: "white",

        display: 'inline-block',
    },
    a: {
        color: 'white'
    }
};
export default {
    name: "Screener",
    data() {
        return {
            exampleItems: [],
            pageOfItems: [],
            id: 0,
            questionBank: [],
            quizType: "",
            quizName: "",
            schedule: 0,
            searchbar: "",
            customStyles,
            sent: false
        };
    },
    computed: {
        ...mapGetters(["getQuestionsList", "getLen", "getContest", 'getQuestionBank'])
    },
    methods: {
        emptyarray() {
            this.$store.commit('setQuestionBank',)
        },
        searchlist() {
            this.$store.commit("setSerachedQ", this.searchbar);
            console.log(this.searchbar);
            this.$store.dispatch("actionGetSerachedList", {
                success: (res) => {
                    console.log("hello", res);
                    this.len = res.length;
                    this.exampleItems = [...Array(this.len).keys()].map(i => ({ id: (i + 1), name: (i + 1) }));
                    this.pageOfItems = this.exampleItems;
                }
            });
        },
        showalert() {
            console.log(document.querySelector('.hiddes').style.display = 'flex')
            setTimeout(() => {
                document.querySelector('.hiddes').style.display = 'none'
            }, 1000);
        },
        addtolist(val) {
            document.querySelectorAll('#add')[val % 5].style.backgroundColor = '#df5353';
            // console.log(val, "contest")
            if (this.getQuestionBank.length >= this.getContest.numberOfQuestions) {
                this.showalert();

            }
            else {
                this.$store.commit('setQuestionBank', this.getQuestionsList[val].id);

                console.log("this", this.getQuestionBank);
                console.log(val);
            }
        },
        onChangePage(pageOfItems) {
            // console.log(pageOfItems);
            this.pageOfItems = pageOfItems;
        },
        // send() {
        //     var obj = {
        //         name: this.quizName,
        //         quizType: this.quizType,
        //         time: this.schedule,
        //         questioncode: this.questionBank
        //     };
        //     console.log("final obj", obj.questions);
        // },
        send() {

            console.log("contest", this.getContest);
            if (this.getContest.type === "static") {
                var obj = {
                    startDate: this.getContest.startDate,
                    startTime: this.getContest.startTime,
                    endDate: this.getContest.endDate,
                    endTime: this.getContest.endTime,
                    duration: this.getContest.duration,
                    maximumScore: null,
                    contestName: this.getContest.contestName,
                    numberOfQuestions: this.getContest.numberOfQuestions,
                    skipAllowed: this.getContest.skipAllowed,
                    difficultyLevel: this.getContest.difficultyLevel,
                    category: this.getContest.category,
                    type: this.getContest.type,
                    quizMasterId: this.getContest.quizMasterId,
                    questionCode: this.getQuestionBank
                };
            }
            else {
                var obj = {
                    startDate: this.getContest.startDate,
                    startTime: this.getContest.startTime,
                    endDate: null,
                    endTime: null,
                    duration: null,
                    maximumScore: null,
                    contestName: this.getContest.contestName,
                    numberOfQuestions: this.getContest.numberOfQuestions,
                    skipAllowed: null,
                    difficultyLevel: this.getContest.difficultyLevel,
                    category: this.getContest.category,
                    type: this.getContest.type,
                    quizMasterId: this.getContest.quizMasterId,
                    questionCode: this.getQuestionBank
                };
            }
            console.log("final obj", obj);
            axios.post("http://10.20.4.154:8180/contest", obj, {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                    // alert("contest created succesfully")
                    //   if(res.data.mailId!=null){
                    // this.$router.push('/quizmaster')
                    this.sent = !this.sent
                    setTimeout(() => {
                        this.sent = !this.sent
                        window.location.reload()
                    }, 2000);

                })
                .catch((err) => {
                    alert("oops!! something went wrong")
                });
        }
    },
    // components: { OneQuestion },
    beforeMount: function () {
        this.$store.dispatch("actionGetQuestionsList", {
            success: (res) => {
                // console.log(this.getQuestionsList, "qqq")
                this.len = res.length - 1;
                this.questionBank = []
                // this.$store.commit('setQuestionBank',0)

                this.exampleItems = [...Array(this.len).keys()].map(i => ({ id: (i + 1), name: (i + 1) }));
                // console.log("res from cat", (this.getLen));
            }
        });
    },
    watch: {
        searchbar: function (value) {
            if (value === "") {
                this.$store.dispatch("actionGetQuestionsList", {
                    success: (res) => {
                        console.log(this.getQuestionsList, "qqq")
                        this.len = res.length - 1;
                        console.log(this.len);
                        this.exampleItems = [...Array(this.len).keys()].map(i => ({ id: (i + 1), name: (i + 1) }));
                        // console.log("res from cat", (this.getLen));
                    }
                });
                // window.location.reload();
            }
        }
    },
    components: { Header }
};
</script>
<style scoped>
.head {
    display: flex;
    flex-direction: row;
    background-color: #daeaf5;
    width: 100%;
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
    background-color: red;
    color: white;
}

.eachquestion {
    margin-top: 10px;
    margin-left: -20px;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    background-color: #47B5FF;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

}

.eachquestion:hover {
    transform: scale(1.009);
}

.wrapper {
    height: fit-content;
    width: 90%;
    color: #ebebeb;
    margin-left: 5vw;
    /* background-color: rgb(4, 7, 58); */

    /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
    padding-left: 2%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.search button {
    background-color: #aaa7a7;
}

.search .length {
    height: 15%;
    border-radius: 100%;
    color: white;
    background-color: #df5353;
}

button:hover {
    background-color: rgb(131, 129, 128);
}



.right {
    width: 80%;
    margin: 0% 10% 1% 10%;
}

.search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: -20px;
    margin-bottom: 10px;
}


.imageQues img {

    margin-left: 40%;
    margin-top: -12%;
    height: 200px;
    width: 300px;
}

.vidQues video {
    margin-left: 40%;
    margin-top: -12%;
    height: 200px;
    width: 300px;

}

.AudioQues audio {
    margin-left: 50%;
    margin-top: -12%;
    height: 200px;
    width: 300px;
}
.search input {
    height: 50px;
    width: 80%;
    margin-bottom: 0;
    padding: 0;
    border-style: none none solid;
    border-width: 1.5px;
    background-color: #daeaf5;
    /* border: 5px solid black; */
    border-color: #000 #000 #161515;
    color: #7e7e7e;
    font-size: 30px;
    line-height: 30px;
    font-weight: 300;
    outline: 0;
}

button {
    background-color: rgb(218, 226, 219);
    border: 0;
    height: 51px;
    width: fit-content;
    margin-left: 10px;
    padding: 10px 10px 10px 10px;
}


.eachdiv {
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: rgb(220, 225, 225);
    width: 100%;

}

.question {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.question button {
    margin-right: 2%;
}

.question button:hover {
    background-color: rgb(55, 217, 131);

}

.card-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.card-footer button {
    background-color: #c82f2f;
    border-radius: 10px;
    color: white;
    width: 80px;
    margin-top: -5px;
    /* margin-left: 200px; */
}

.card-footer button:hover {
    background-color: #2fc865;
    cursor: pointer;
    /* margin-left: 200px; */
}

.answers {
    /* background-color: antiquewhite; */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

}

* {
    padding: 0;
    margin: 0
}

.wrapper2 {
    padding: 2rem;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
    background-color: #eee;
    border-radius: 100%;
    box-shadow: rgba(165, 78, 78, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.animated-check {
    height: 10em;
    width: 10em
}

.animated-check path {
    fill: none;
    stroke: #7ac142;
    stroke-width: 4;
    stroke-dasharray: 23;
    stroke-dashoffset: 23;
    animation: draw 1s linear forwards;
    stroke-linecap: round;
    stroke-linejoin: round
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>