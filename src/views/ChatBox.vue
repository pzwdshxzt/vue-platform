<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-main>
            <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 50px; left: 0">
                <div class="shopping-main">
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            height="250">
                        <el-table-column
                                fixed
                                prop="text"
                                label="聊天室"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </scroller>
            <div class="bottom-checkBox">
                <el-row :gutter="24">
                    <el-col :span="18">
                        <el-input  class="bottom-input" v-model="input"  placeholder=""></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-button class="button-right" type="success" @click="onSend">发送</el-button>
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
                tableData: [{
                    text: '1213'
                },
                {
                    text: '121123231'
                }
                ]
            }
        },
        methods:{
            /**
             * 数据发送
             */
            onSend(){
                if (this.input){
                    let sendMsg = JSON.stringify({sendUser: this.$store.state.user.name, msg: this.input});
                    this.websocket.send(sendMsg);
                    this.input = ''
                }else{
                    console.log('请输入...')
                }
            },
            initWebsocket() {
                console.log('webSocket初始化....');
                const uri = "ws://localhost:9090/wschat";//ws地址
                if ('WebSocket' in window) {
                    this.websocket = new WebSocket(uri);
                } else {
                    alert('当前浏览器 Not support websocket')
                }
                this.websocket.onOpen = this.onOpen;
                this.websocket.onError = this.OnError;
                this.websocket.onMessage = this.OnMessage;
                this.websocket.onClose = this.onClose;
            },
            onOpen() {
                console.log('WebSocket连接成功')
            },
            /**
             * 错误
             * */
            OnError(e) {
                console.log("WebSocket连接发生错误:"+ e);
            },
            /**
             * 数据接收
             * @param e
             * */
            OnMessage(e){
                console.log('WebSocket收到消息' + e.data);
                let message = JSON.parse(e.data) || {};
                if (message.type === 'SPEAK') {
                    this.tableData.pop(message.username + ':' + message.msg )
                }
            },
            /**
             * 关闭
             * @param e
             */
            onClose(e){
                this.websocket.close();
                console.log("connection closed (" + e + ")");
            }
        },
        components:{
            TopNav
        },
        mounted(){
            this.initWebsocket()
        },
        destroyed: function() {
            this.onClose();
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
