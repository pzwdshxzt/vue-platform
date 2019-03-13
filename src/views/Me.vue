<template>
    <el-container width="90%">
        <scroller  ref="shopping_scroller" noDataText="" height="90%" style="top: 20px; margin: 0 auto ">
            <el-card shadow="always" class="nav-header" body-style="background-color: #fbf3fa;">
                <div class="head-left">
                    <img class="head-img" src="../../public/static/img/head.jpg" alt="head">
                </div>
                <div class="head-right">
                    <span v-if="username" class="username">{{ username }}</span>
                    <el-button v-if="!username" type="text" class="button">登陆</el-button>
                </div>
            </el-card>
            <br>
            <el-card shadow="always" class="nav-header">
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @close="handleClose"
                        text-color="#dsddss">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>我的订单
                        </template>
                        <el-menu-item index="1-1">待付款</el-menu-item>
                        <el-menu-item index="1-2">待收货</el-menu-item>
                        <el-menu-item index="1-3">已完成</el-menu-item>
                        <el-menu-item index="1-4">退换货</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">会员中心</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">我的优惠</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">地址管理</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的设置</span>
                    </el-menu-item>
                </el-menu>
            </el-card>
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

    .nav-header{
        margin: 0 auto;
        width: 90%;
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
    .el-menu-vertical-demo {
        border-right:none !important;
    }
</style>
