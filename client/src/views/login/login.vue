
<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
        	<div class="login-owl" :class="loginClass">
        		<div class="hand"></div>
                <div class="hand hand-r"></div>
                <div class="arms">
                    <div class="arm"></div>
                    <div class="arm arm-r"></div>
                </div>
        	</div>
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="username">
                            <Input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码" @on-focus="show" @on-blur="hidden">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="19">
                                    <router-link to="/resetpassword">忘记密码？</router-link>
                                    <router-link to="/register" style="margin-left: 10px;">注册</router-link>
                                </Col>
                                <Col span="5"><Button @click="handleSubmit" type="primary" long>登录</Button></Col>
                            </Row>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/axios';
export default {
    data () {
        return {
        	loginClass: '',
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$store.dispatch('login', this.form).then(()=>{
                        if(this.$store.state.user.userinfo.name) {
                            this.$router.push('/post/article');
                        }
                    });
                } else {
                    // this.$Message.error('用户名和密码不能为空');
                }
            });
        },
        hidden() {
        	this.loginClass = '';
        },
        show() {
        	this.loginClass = 'password';
        }
    }
};
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background-image: url('../../images/bg-new.png');
    background-size: cover;
    background-position: center;
    position: absolute;
    .login-con{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-60%, -60%);
        width: 400px;
        .login-header{
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .form-con{
            padding: 10px 0 0;
        }
        .login-tip{
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }
    }
    .login-owl {
	    width: 211px;
	    height: 108px;
	    background-image: url('../../images/owl-login.png');
	    position: absolute;
	    top: -100px;
	    left: 50%;
	    margin-left: -111px;
	    z-index: 1000;
	    .hand {
	    	width: 34px;
		    height: 34px;
		    border-radius: 40px;
		    background-color: #472d20;
		    transform: scaleY(0.6);
		    transition: 0.3s ease-out;
		    position: absolute;
		    left: 14px;
		    bottom: -8px;
		    &.hand-r {
		    	left: 170px;
		    }
	    }
	    .arms {
	    	top: 58px;
		    position: absolute;
		    width: 100%;
		    height: 41px;
		    overflow: hidden;
		    .arm {
		    	width: 40px;
			    height: 65px;
			    position: absolute;
			    left: 20px;
			    top: 40px;
			    background-image: url('../../images/owl-login-arm.png');
			    transition: 0.3s ease-out;
			    transform: rotate(-20deg);
			    &.arm-r {
			    	transform: rotate(20deg) scaleX(-1);
    				left: 158px;
			    }
		    }
	    }
	    &.password {
	    	.hand {
	    		transform: translateX(42px) translateY(-15px) scale(0.7);
	    		&.hand-r {
	    			transform: translateX(-42px) translateY(-15px) scale(0.7);
	    		}
	    	}
	    	.arms {
	    		.arm {
	    			 transform: translateY(-40px) translateX(40px);
	    			 &.arm-r {
	    			 	transform: translateY(-40px) translateX(-40px) scaleX(-1);
	    			 }
	    		}
	    	}
	    }
    }
}
</style>

