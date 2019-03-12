<template>
    <el-container>
        <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 30px; left: 0">
            <div class="nav-head">
                <div class="head-left">
                    <img class="head-img" src="../../public/static/img/head.jpg" alt="head">
                </div>
                <div class="head-right">
                    <span v-if="username" class="username">{{ username }}</span>
                    <el-button v-if="!username" type="text" class="button">登陆</el-button>
                </div>
            </div>
        </scroller>
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
        margin: 0 auto;
        height: 25%;
        width: 92%;
        background-color: #fbf3fa;
        box-shadow: 0 0 1px #e1fbed;
        border-radius: 1%;
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
    .username{
        padding: auto;
    }
</style>
