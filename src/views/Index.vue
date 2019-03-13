<template>
    <div class="index">
        <el-container>
            <scroller  :on-refresh="showSearchMethod" ref="indexscroller" noDataText="" :refreshText="showSearchTips" height="90%">
                <el-main>
                    <div v-if="showSearch" >
                        <el-input  v-model="input"  placeholder="搜索商品名称" icon="el-icon-search" ></el-input>
                    </div>
                    <span v-if="!showSearch" class="platformTitle">Platform</span>
                    <div class="line-5px"></div>
                    <el-carousel style="margin: 5px 0;" indicator-position="outside" height="150px">
                        <el-carousel-item v-for="item in 5" :key="item">
                            <h3 style="background: darkorange">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                    <div class="index-navigation">
                        <div class="index-nav">新品发布</div>
                        <div class="index-nav">以旧换新</div>
                        <div class="index-nav">电视热卖</div>
                        <div class="index-nav">每日臻选</div>
                        <div class="index-nav">米粉卡</div>
                        <!--<img class="navIcon" src="../../static/image/homeOn.png"/>-->
                    </div>
                    <div class="line"></div>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                </el-main>
            </scroller>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showSearch: false,
                activeName: 'Platform',
                input: '',
                showSearchTips: '下拉显示搜索框'
            }
        },
        name: 'app',
        components: {
        },
        methods: {
            showSearchMethod(done) {
                if (this.showSearch){
                    this.showSearch = false;
                } else {
                    this.showSearchTips = '';
                    this.showSearch = true;
                }

                this.$refs.indexscroller.finishPullToRefresh();
                done()
            }
        }
    }
</script>

<style scoped>
.platformTitle{
    color: gold;
    font-size: xx-large;
}
.index{
    max-height: 92vh;
    overflow-y: scroll;
    flex: 1;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.index-navigation{
    display:flex;/*设置五个导航条的内容由列排列变为行排列*/
    font-size: 0.7rem;
}
.index-nav{
    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
    flex-direction: column;
    flex: 1;/*设置五个导航条的内容等分*/
    margin: 0 auto;
    height: 3.5vh;
    line-height: 1.2rem;
}
.line-5px{
    top: 5px;
    height: 1px;
    background-color: #e0e6ed;
}
.line{
     height: 1px;
     background-color: #e0e6ed;
 }

</style>
