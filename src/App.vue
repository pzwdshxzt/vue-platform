<template>
  <div id="app">
    <div class="app">
      <router-view></router-view>
      <bottom-nav></bottom-nav>
    </div>
  </div>
</template>
<script>
import BottomNav from './components/BottomNav'
export default {
  data(){
    return {
        showSearch: false,
        activeName: 'Platform',
        input: ''
    }
  },
  name: 'app',
  components: {
      BottomNav
  },
  methods: {
    showSearchMethod() {
      this.showSearch = true;
      this.$refs.indexscroller.finishPullToRefresh();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.navigation{
  display:flex;/*设置五个导航条的内容由列排列变为行排列*/
  height: 8vh ;
  font-size: 0.7rem;
}
.nav{
  display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
  flex-direction: column;
  flex: 1;/*设置五个导航条的内容等分*/
  margin: 0.5rem 0 0 0rem;
  line-height: 1.2rem;
}
#outer-4ouoy {

}
</style>
