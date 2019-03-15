<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-main>
            <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 50px; left: 0">
                <div class="shopping-main">
                    <span>你还没添加商品，快去选择吧<br></span>
                </div>
            </scroller>
        </el-main>
        <el-footer>
            <bottom-nav></bottom-nav>
        </el-footer>
    </el-container>


</template>
<script>
    import BottomNav from '../components/BottomNav'
    import TopNav from '../components/TopNav'
    export default {
        data(){
            return {
                title: '购物车'
            }
        },
        components:{
            TopNav,
            BottomNav
        }
    }
</script>
<style>
    .shopping-main{
        padding-top: 10px;
    }
</style>
