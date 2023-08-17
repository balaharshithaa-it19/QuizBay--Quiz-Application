<template>
    <div class="umain">
        <Header></Header>
        <div class="audio">
            <form @submit="audiourl">
                <h2 style="margin-left: 10vw;">Enter the question you would like to add to your quiz:</h2>
                <div class="main">

                    <div class="one">
                        <label>Enter Question:</label><br /><br />
                        <input type="text" name="question" placeholder="Question" v-model="question"
                            v-animate-css.hover="'pulse'" required>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>Answer:

                        <br /><br />
                        <div>

                            <!-- <p style="padding-left: 25vw;">Correct answer</p> -->
                            <input type="text" name="Option 1" placeholder="Option 1" v-animate-css.hover="'pulse'"
                                v-model="value1" required>&nbsp;&nbsp;

                            <select class="option1" v-animate-css.hover="'pulse'" v-model="isCorrect1">
                                <option disabled selected>Answer</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <br />

                        <div>

                            <input type="text" name="Option 2" placeholder="Option 2" v-animate-css.hover="'pulse'"
                                v-model="value2" required>&nbsp;&nbsp;
                            <select class="option2" v-animate-css.hover="'pulse'" v-model="isCorrect2">
                                <option disabled selected>Answer</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="Option 3" placeholder="Option 3" v-animate-css.hover="'pulse'"
                                v-model="value3" required>&nbsp;&nbsp;
                            <select class="option3" v-animate-css.hover="'pulse'" v-model="isCorrect3">
                                <option disabled selected>Answer</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <br />
                    </div>
                    <div class="two">
                        <label>Difficulty:</label><br />

                        <select class="quiz" v-animate-css.hover="'pulse'" v-model="difficulty">

                            <option disabled selected>Difficuty</option>
                            <option value="Hard">Hard</option>
                            <option value="Medium">Medium</option>
                            <option value="Easy">Easy</option>
                        </select><br /><br />

                        <label>QuestionFormat:</label><br />
                        <select class="quiz1" v-animate-css.hover="'pulse'" v-model="questionformat">

                            <option disabled selected>Question Format</option>
                            <option value="Image">Image</option>
                            <option value="Audio">Audio</option>
                            <option value="Video">Video</option>
                            <option value="Text">Text</option>
                        </select>
                        <br /><br />
                        <label>Question Category:</label><br />
                        <select class="quiz2" v-animate-css.hover="'pulse'" v-model="questioncategory">

                            <option disabled selected>Question Category</option>
                            <option value="Music">Music</option>
                            <option value="Movie">Movie</option>

                        </select><br /><br />
                        <label>Question Type:</label><br />
                        <select class="quiz3" v-animate-css.hover="'pulse'" v-model="questiontype">
                            <option disabled selected>Question Type</option>
                            <option value="multiple">Multiple</option>
                        </select><br /><br />
                        <label>Url:</label><br />
                        <input style="width:64%" class="url" type="url" name="url" placeholder=" Url" v-model="url"
                            v-animate-css.hover="'pulse'"><br /><br />

                        <button v-animate-css.hover="'pulse'">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
    name: "Audio",
    data() {
        return {
            question: "",
            answerList: [],
            difficulty: "",
            questionformat: "",
            questioncategory: "",
            questiontype: "",
            url: "",
            value1: "",
            value2: "",
            value3: "",
            isCorrect1: "",
            isCorrect2: "",
            isCorrect3: "",
        };
    },
    methods: {
        audiourl(e) {
            e.preventDefault();
            // console.log("loki",this.isCorrect1)
            // console.log("hello",this.answerList.option1)
            var option1 = {
                value: this.value1,
                position: 2,
                isCorrect: this.isCorrect1
            };
            this.answerList.push(option1);
            var option2 = {
                value: this.value2,
                position: 1,
                isCorrect: this.isCorrect2
            };
            this.answerList.push(option2);
            var option3 = {
                value: this.value3,
                position: 3,
                isCorrect: this.isCorrect3
            };
            this.answerList.push(option3);
            console.log("asdasd", this.answerList);
            var obj = {
                question: this.question,
                difficulty: this.difficulty,
                questionFormat: this.questionformat,
                category: this.questioncategory,
                questionType: this.questiontype,
                url: this.url,
                answerList: this.answerList
            };
            console.log("obj", obj);
            axios.post("http://10.20.4.154:8181/questionscreen/url", obj, {
                "Content-Type": "application/json; charset=UTF-8"
            })
                .then((res) => {
                    if (res != null) {
                        this.$router.push("/scrape");
                        window.location.reload();
                    }
                    else {
                        alert("unsucessfull");
                    }
                })
                .catch((err) => console.log(err));
            this.question = "",
                this.difficulty = "",
                this.questionformat = "",
                this.questioncategory = "",
                this.questiontype = "";
            this.url = "",
                this.answerList = [""];
        }
    },
    components: { Header }
}
</script>

<style scoped>
.umain {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.main {
    display: flex;
    /* position: sticky; */
    border: 2px solid black;
    /* padding: 10px 50px 30px 0; */
    margin-top: 2vh;
    margin-bottom: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 70vh;
    border-radius: 10px;
    padding: 20px;
    background-color: #47B5FF;
}

.quiz,
.quiz1,
.quiz2,
.quiz3 {
    width: 20vw;
    height: 46px;
    background: #f2f2f2;
    border-radius: 10px;
    border: none;
    height: 5vh;
}



.one {

    width: 50vw;
    margin-left: 4vw;
    margin-right: 10px;
    margin-top: 45px;
    /* background-color: antiquewhite; */
    /* margin-bottom: 100px; */
    /* border-radius: 20px; */
}

.two {
    width: 50vw;
    height: 100vh;
    margin-left: 4vw;
    margin-right: 100px;
    margin-top: 45px;
    /* background-color: antiquewhite; */
    /* margin-bottom: 100px; */
    /* border-radius: 20px; */
    align-items: center;
    justify-content: center;
}

button {
    width: 25%;
    border: 0;
    padding: 15px;
    font-size: 1vw;
    /* cursor: pointer; */
    border-radius: 12px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    /* text-align: center; */
    margin-left: 100px;

}

.option1,
.option2,
.option3 {

    width: 150px;
    height: 46px;
    background: #f2f2f2;
    border-radius: 10px;
    border: none;
    height: 5vh;
}


form {
    text-align: left;
    font-size: 20px;
    font-family: Montserrat Thin Italic;
}



.form {
    float: right;

}

input {
    width: 50%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    font-size: 14px;
    background: #f2f2f2;
    border-radius: 10px;
    margin-left: 0;
    height: 1vh;
}

/* *{
    overflow: hidden;
} */
body {
    background-color: #daeaf5;
}
</style>
