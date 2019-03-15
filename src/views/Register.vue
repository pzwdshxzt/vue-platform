<template>
    <el-container>
        <el-main>
            <scroller  ref="shopping_scroller" noDataText="" height="85%" style="top: 50px; left: 0">
                <el-card shadow="always" class="nav-header" body-style="background-color: #fbf3fa;">
                    <div class="head-left">
                        <img class="head-img" src="../../public/static/img/head.jpg" alt="head">
                    </div>
                </el-card>
                <br><br>
                <el-card shadow="always" class="nav-header">
                    <el-form ref="form"  :model="form" :rules="rules">
                        <el-form-item label="用户名"  prop="username">
                            <el-input style="width:300px" v-model="form.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码"  prop="password">
                            <el-input style="width:300px" type="password" v-model="form.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="昵称"  prop="name">
                            <el-input style="width:300px" v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="checkCode">
                            <el-input style="width:150px" v-model="form.checkCode" autocomplete="off"></el-input>
                            <!--<img :src="checkCode" @click="getCheckCode">-->
                        </el-form-item>
                        <el-button type="success" @click="submitRegForm('form')">注册</el-button>
                        <br><br>
                        <span><router-link to="/login">已有账号？去登陆</router-link></span>
                    </el-form>
                </el-card>
            </scroller>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data(){
            return {
                title: 'Login',
                form: {
                    username: '',
                    password: '',
                    checkCode: '',
                    name:''
                },
                rules: {
                    username: [
                        { inputValidator: '^[\\\u4e00-\\\u9fa5a-zA-Z][\\\u4e00-\\\u9fa5a-zA-Z]+$', required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    checkCode: [
                        { required: true, message: '请输入验证吗', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' }
                    ]
                },
                formLabelWidth: '70px'
            }
        },
        methods:{
            loginSuccess (response) {
                if (response.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: response.data.msg
                    })
                    this.$store.dispatch('loginUserInfo', response.data.data)
                    this.form = {
                        username: '',
                        password: ''
                    }
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    this.$message({
                        type: 'warning',
                        message: response.data.msg
                    })
                }
            },
            submitRegForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.form.password = this.$md5(this.form.password)
                        this.$axios.post('user/reg', { data: this.form }
                        ).then((Response) => {
                            this.loginSuccess(Response)
                        })
                    } else {
                        this.$message({
                            type: 'warning',
                            message: '请检查数据是否正确'
                        })
                        return false
                    }
                })
            }
        }
    }
</script>
<style>
</style>
