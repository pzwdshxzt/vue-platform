<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="nav-platform">
          <div class="left el-icon-star-off">PF</div>
          <div class="serach"><el-input v-model="input" placeholder="Serch..." style="margin: 0 auto"></el-input></div>
          <div class="right">me</div>
        </div>
      </el-header>
      <el-main>
        <div>
          <el-button>el-button</el-button>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      activeIndex: '1',
    }
  },
  methods: {
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
  margin-top: 60px;
}
.serach {
  margin:0 auto;
  background:red;
  height: 100%;
}
.left {
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width:100px;
  background:blue;
}
.right {
  height: 100%;
  position:absolute;
  top:0;
  right:0;
  width:100px;
  background:green;
}
.nav-platform{
  width: 100%;
  height: 100px;
}
</style>
