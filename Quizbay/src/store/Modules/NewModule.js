import axios from "axios"
export default {
    state: {
        questionBank: [],
        dynamicQues:[],
        questionsList: [],
        Contest: {},
        dynamicContest: {},
        serachedQ: "",
        dynamicQuizId:""
    },
    getters: {
        getDynamicQuizId: (state) =>state.dynamicQuizId,
        getDynamicQues: (state) =>state.dynamicQues,

        getQuestionBank: (state) =>state.questionBank,
        getQuestionsList: (state) => state.questionsList,
        getContest: (state) => state.Contest,
        getDynamicContest: (state) => state.dynamicContest,
        getSerachedQ: state => state.serachedQ

    },
    mutations:
    {
        setDynamicQuizId: function (state, val) {
            state.dynamicQuizId = val
        },
        setDynamicQues: function (state, val) {
            if(val!=null){
                state.dynamicQues.push(val)
            // state.questionBank = [...new Set(state.questionBank)];
                }
                else{
                    // console.log("null")
                    state.dynamicQues=[]
                }
        },
        setQuestionsList: function (state, val) {
            state.questionsList = val
        },
        setQuestionBank: function (state, val) {
       
         
                // console.log("emopyt")
                if(val!=null){
                state.questionBank.push(val)
            state.questionBank = [...new Set(state.questionBank)];
                }
                else{
                    console.log("null")
                    state.questionBank.length=0
                }
            
            
           
        },

        setContest: function (state, val) {
            state.Contest = val
        },

        setDynamicContest: function (state, val) {
            state.dynamicContest = val
        },
        setSerachedQ: function (state, value) {
            state.serachedQ = value;
        }
    },

    actions:
    {
        actionGetQuestionsList: ({ commit, getters }, { success }) => {
            fetch('http://10.20.4.154:8181/questionscreen/list')
                .then(response => response.json())
                .then(res => {
                    commit('setQuestionsList', res)
                    // commit('setQuestionBank', )
                    // console.log(getters.getQuestionsList,"store")
                    // console.log("hello",typeof(getters.getStaticContest))
                    success && success(res)
                })
        },

        actionGetSerachedList: ({ commit, getters }, { success }) => {
            axios
                .get(
                    "http://10.20.4.154:8181/questionscreen/search/" + getters.getSerachedQ,
                    {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                )
                .then(res => {
                    commit("setQuestionsList", res.data);

                    console.log(getters.getQuestionsList.length)

                    success && success(res.data);
                })
                .catch(err => console.log(err));
        }
    }
}
