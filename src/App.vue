<template>
  <div id="app">
    <div class="app">
        <router-view></router-view>
        <!--<bottom-nav></bottom-nav>-->
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
</style>
