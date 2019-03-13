<template>
    <div>
        <i class="el-icon-back icon-left" @click="backStep"></i>
        {{title}}
        <i class="el-icon-search icon-right" @click="showSearchPage"></i>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            default: ' '
        }
    },
    methods:{
        backStep() {
            this.$router.go(-1);
        },
        showSearchPage() {
            console.log('showSearchPage')
        }
    }
}
</script>
<style scoped>
.icon-left{
    float: left;
}
.icon-right {
    float: right;
}

</style>
