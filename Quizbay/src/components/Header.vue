<template>
<div style="background: #daeaf5;">
    <header>
        <img src="../assets/qb-removebg-preview.png" @click="hpg" style="width: 60px; height:50px; padding-left: 20px; padding-top: 20px; float: left; border-radius: 10px;"/>
        <h2 @click="hpg" style=" padding-left: 2px; float: left; font-weight: bold; color: grey;">Quiz</h2>
        <h2 @click="hpg" style=" padding-left: 2px; float: left; font-weight: bold; color:#47B5FF; ">Bay</h2>
        <!-- <h5>Hello</h5> -->
        <h5 @click="lgt" style="float: right; font-weight: bold; font-size: large; color: grey; padding-right: 30px;">Logout    <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /></h5>
    </header>
    </div>
</template>

<script>
export default{
    data () {
        return {

        }
    },
    methods: {
        hpg() {
            this.$router.push('/homepage');
        },
        lgt() {
            this.$router.push('/homepage');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
header{
    /* padding: 24px; */
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    /* background: linear-gradient(to top, #a5d7fb 0%, #ffffff 100%); */
    /* border: 1px solid  rgb(70, 170, 214); */
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    position: sticky;
    font-family: 'Montserrat';

}
h5{
    cursor: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="18" width="18"><text y="28" font-size="32">💔</text><path d="M0,2 L0,0 L2,0"/></svg>'), auto;
}
</style>