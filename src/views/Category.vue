<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-container>
            <el-aside width="18%">
                <scroller  ref="category_scroller" noDataText="" height="85%" style="top: 50px; left: 0" width="18%">
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo">
                        <el-menu-item  v-for="(item, index)  in 18" :index="index" :key="item">
                            <span slot="title">{{item}}</span>
                        </el-menu-item>
                    </el-menu>
                </scroller>
            </el-aside>

            <el-main width="82%">
                <scroller  ref="content_scroller" noDataText="" height="85%" style="top: 50px; left: 18%" width="82%">
                    <div>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                        cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>cccc<br>
                    </div>
                </scroller>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import TopNav from '../components/TopNav'
    export default {
        data(){
            return {
                showSearch: false,
                activeName: 'Platform',
                input: '',
                title: '分类'
            }
        },
        name: 'Category',
        components: {
            TopNav
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
