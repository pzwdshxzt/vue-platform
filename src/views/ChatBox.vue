<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-main>
            <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 50px; left: 0">
                <div class="shopping-main">
                    <span>聊天室<br></span>
                </div>
            </scroller>
            <div class="bottom-checkBox">
                <el-row :gutter="24">
                    <el-col :span="18">
                        <el-input  class="bottom-input" v-model="input" :label-width="input_width" placeholder=""></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-button class="button-right" type="success" @click="webSocketSend">发送</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    import TopNav from '../components/TopNav'
    export default {
        data(){
            return {
                websocket: null,
                title: '聊天室',
                input: '',
                input_width: '100px'
            }
        },
        methods:{
          initWebsocket() {
              let uri = "ws://localhost:9090/wschat";//ws地址
              this.websocket = new WebSocket(uri);
              this.websocket.onOpen = this.webSocketOnOpen;
              this.websocket.onError = this.webSocketOnError;
              this.websocket.onMessage = this.webSocketOnMessage;
              this.websocket.onClose = this.webSocketClose;
          },
            webSocketOnOpen() {
                console.warn("WebSocket连接成功");
            },
            webSocketOnError(e) { //错误
                console.log("WebSocket连接发生错误");
            },
            webSocketOnMessage(e){ //数据接收
                const redata = JSON.parse(e.data);
                //注意：长连接我们是后台直接1秒推送一条数据，
                //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
                //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
                console.log(redata.value);
            },
            webSocketSend(){//数据发送
                if (this.input){
                    this.websock.send(this.input);
                }
            },
            webSocketClose(e){ //关闭
                console.log("connection closed (" + e.code + ")");
            },
        },
        components:{
            TopNav
        },
        mounted(){
            this.initWebsocket()
        },
        destroyed: function() {
            this.webSocketClose()
        }
    }
</script>
<style>
    .shopping-main{
        padding-top: 10px;
    }
    .bottom-checkBox{
        position: fixed;
        font-size: 0.7rem;
        left: 0;
        bottom: 10px;
        width: 100%;
        z-index: 9996;
    }
    .bottom-input{
        left: 5%;
    }
</style>
