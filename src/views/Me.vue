<template>
    <el-container>
        <div class="nav-head">
            <div class="head-left">
                <img class="head-img" src="../../public/static/img/head.jpg" alt="head">
            </div>
            <div class="head-right">
                <time v-if="username" class="time">{{ username }}</time>
                <el-button v-if="!username" type="text" class="button">登陆</el-button>
            </div>
        </div>
    </el-container>
</template>
<script>
    export default {
        data(){
            return {
                username: '我好饿了'
            }
        }
    }
</script>
<style>
    .nav-head{
        height: 25%;
        width: 100%;
        background-color: cornsilk;

    }
    .head-left{
        top: 5px;
        /*left: 5px;*/
        display: inline-block;
        position: relative;
        width: 35%;
        height: 0;
        padding-bottom: 20%;
        /*background: red;*/
    }
    .head-img{
        height: auto;
        width: 70%;
        border-radius: 50%;
        border: 3px solid #eee;
        overflow: hidden;
    }
    /*.head-right{*/
        /*display: inline-block;*/
        /*position: relative;*/
        /*width: 75%;*/
        /*height: 0;*/
        /*padding-bottom: 20%;*/
    /*}*/
    .head-right{
        padding-top: 10px;
        /*padding-bottom: 10%;*/
    }
</style>
