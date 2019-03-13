<template>
    <div class="navigation">
        <div class="nav"><router-link to="/">首页</router-link></div>
        <div class="nav"><router-link to="/category">分类</router-link></div>
        <!--<div class="nav">发现</div>-->
        <div class="nav"><router-link to="/shoppingCar">购物车</router-link></div>
        <div class="nav"><router-link to="/me">我的</router-link></div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.navigation{
    display:flex;/*设置五个导航条的内容由列排列变为行排列*/
    height: 8vh ;
    font-size: 0.7rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
}
.nav{
    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
    flex-direction: column;
    flex: 1;/*设置五个导航条的内容等分*/
    margin: 0.5rem 0 0 0rem;
    line-height: 1.2rem;
}
.nav a{
    font-weight:bold;
    color:#2c3e50;
    text-decoration:none;
}
.navIcon{
    width: 1.3rem;
    height: 1.3rem;
}

</style>
