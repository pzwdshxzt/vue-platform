<template>
    <el-container>
        <el-header height="25px">
            <TopNav :title="title"></TopNav>
        </el-header>
        <el-main>
            <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 50px; left: 0;background-color: #F5F5F5;">
                <div class="message">
                    <ul>
                        <p class="time"> <span v-text="tableTitle"></span> </p>
                        <li v-for="(message, index) in tableData" :key="message.id" :class="message.direction==2?'an-move-right':'an-move-left'">
                            <p class="time"> <span v-text="message.ctime"></span> </p>
                            <p class="time system" v-if="message.type==10000"> <span v-html="message.content"></span> </p>
                            <div :class="'' + (message.direction==2?' self':'content-flex')" v-else>
                                <img class="avatar" width="45" height="45" :src="message.direction==2? ownerAvatarUrl: contactAvatarUrl">
                                <!-- 文本 -->
                                <div class="text" v-emotion="message.content" v-if="message.type==1"></div>

                                <!-- 图片 -->
                                <div class="text" v-else-if="message.type==2">
                                    <img :src="message.content" class="image" alt="聊天图片">
                                </div>

                                <!-- 其他 -->
                                <div class="text" v-else-if="message.type!=10000" v-text="'[暂未支持的消息类型:'+ message.type +']\n\r' + message.content">
                                   
                                </div>
                            </div>
                        </li>
                    </ul>
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
    import HeadImage from '../components/HeadImage'
    import HeadJpg from '../assets/head.jpg'

    export default {
        data(){
            return {
                ownerAvatarUrl: HeadJpg,
                contactAvatarUrl: HeadJpg,
                websocket: null,
                title: '聊天室',
                input: '',
                tableTitle: '0人在线',
                tableData: [{
                    direction: 1,
                    id: 1, 
                    type: 1, 
                    content: '你好!欢迎光临聊天室![呲牙]', 
                    ctime: new Date().toLocaleString()               
                    }]
            }
        },
        methods:{
            /**
             * 数据发送
             */
            onSend(){
                if (this.input){
                    let sendMsg = JSON.stringify({
                        sendUser: this.$store.state.user.name,
                        msg: this.input,
                        id: this.$store.state.user.id
                    });
                    this.websocket.send(sendMsg);
                    this.input = ''
                }else{
                    console.log('请输入...')
                }
            },
            initWebsocket() {
                console.log('webSocket初始化....');
                const uri = "ws://111.230.183.115:9090/wschat";//ws地址
                if ('WebSocket' in window) {
                    this.websocket = new WebSocket(uri);
                } else {
                    alert('当前浏览器 Not support websocket')
                }
                this.websocket.onopen = this.onOpen;
                this.websocket.onerror = this.OnError;
                this.websocket.onmessage = this.OnMessage;
                this.websocket.onclose = this.onClose;
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
                // console.log('WebSocket收到消息' + e.data);
                let message = JSON.parse(e.data) || {};
                this.tableTitle = message.onlineCount + '人在线...';
                if (message.status === 'SPEAK') {
                    if (message.id === this.$store.state.user.id){
                        this.tableData.push({
                            direction: 2, //为2表示微信主人发出的消息，1表示联系人
                            sendUser: message.username,
                            id: this.tableData[this.tableData.length - 1].id + 1, //根据这个来排序消息
                            type: 1, //1为文本，2为图片
                            content: message.msg, //当type为1时这里是文本消息，当type2为2时这里要存放图片地址；后续会支持语音的显示
                            ctime: new Date().toLocaleString() //显示当前消息的发送时间
                        })
                    } else{
                        this.tableData.push({
                            direction: 1, //为2表示微信主人发出的消息，1表示联系人
                            sendUser: message.username,
                            id: this.tableData[this.tableData.length - 1].id + 1, //根据这个来排序消息
                            type: 1, //1为文本，2为图片
                            content: message.msg, //当type为1时这里是文本消息，当type2为2时这里要存放图片地址；后续会支持语音的显示
                            ctime: new Date().toLocaleString() //显示当前消息的发送时间
                        })
                    }

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
            TopNav,
            HeadImage
        },
        mounted(){
            if (this.$store.state.user.id === '' || this.$store.state.user.id === undefined) {
                this.$message.warning({
                    type: 'warning',
                    message: '请先登陆.'
                })
                this.$router.push('/login')
            }else{
                this.initWebsocket()
            }
        },
        destroyed: function() {
            this.onClose();
        }
    }
</script>
<style>
    *{
    margin: 0;
    padding: 0;
    }
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
    .an-move-left{
        left: 0;
        animation: moveLeft .7s ease;
        -webkit-animation:moveLeft .7s ease; 
    }
    .an-move-right{
        left: 0;
        animation: moveRight .7s ease;
        -webkit-animation:moveRight .7s ease; 
    }
    .message{
        /* height: 100%; */
        /* padding: 10px 15px; */
        /*overflow-y: scroll;*/
        /* background-color: #F5F5F5; */
    }
    .message ul{
        padding-left: 20px;
        list-style-type: none;
    }
    .message li {
        margin-bottom: 15px;
        left:0;
        position: relative;
    }
    .message .time {
        margin: 10px 0;
        text-align: center;
    }
    .message .text {
        display: inline-block;
        position: relative;
        max-width: calc(100% - 75px);
        min-height: 35px;
        line-height: 2.1;
        font-size: 15px;
        padding: 6px 10px;
        text-align: left;
        word-break: break-all;
        background-color: #fff;
        color: #000;
        border-radius: 4px;
        box-shadow: 0px 1px 7px -5px #000;
    }
    .message .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
        background: #fff;
    }
    .message .time>span {
        display: inline-block;
        padding: 0 5px;
        font-size: 12px;
        color: #fff;
        border-radius: 2px;
        background-color: #DADADA;
    }
    .message .system>span{
        padding: 4px 9px;
        text-align: left;
    }
    .message .text:before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: #fff;
    }
    .message .self {
        text-align: right;
        padding-right: 20px
    }
    .message .self .avatar {
        float: right;
        margin: 0 0 0 10px;
    }
    .message .self .text {
        background-color: #9EEA6A;
    }

    .message .self .text:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #9EEA6A;
    }
    .message .image{
        max-width: 200px;
    }
    img.static-emotion-gif, img.static-emotion {
        vertical-align: middle !important;
    }

    .bgnone{
        background: none;
    }

    .content-flex{
        display: flex;
    }
    @keyframes moveRight{
        0%{left:-20px; opacity: 0};
        100%{left:0; opacity: 1}
    }
    @-webkit-keyframes moveRight
    {
        0%{left:-20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @keyframes moveLeft{
        0%{left:20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @-webkit-keyframes moveLeft
    {
        0%{left:20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @media (max-width: 367px){
        .fzDInfo{width:82%;}
    }
</style>
