<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-main>Main</el-main>
    </el-container>
</template>
<script>
    import TopNav from '../components/TopNav'
    export default {
        data(){
            return {
                title: '购物车'
            }
        },
        components:{
            TopNav
        }
    }
</script>
