
<template>
    <div class="login">
        <div class="login-con">
        	<div class="login-owl">
        		<div class="hand"></div>
                <div class="hand hand-r"></div>
                <div class="arms">
                    <div class="arm"></div>
                    <div class="arm arm-r"></div>
                </div>
        	</div>
            <Card class="error-page-card">
                <div class="error-state">
                	404
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
.error-page-card {
	box-shadow: 0 1px 6px rgba(0,0,0,.3);
	background: #fff;
	.ivu-card-body {
		padding: 0;
	}
}
.error-state {
	font-size: 120px;
	line-height: 200px;
	font-weight: 700;
	text-align: center;
	color: #2d8cf0;
	text-shadow: 0 3px 0px #404853, 0 6px 0px #333333;
}
.login{
    width: 100%;
    height: 100%;
    // background-image: url('../../images/bg-new.png');
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
	    left: 50%;
	    margin-left: -111px;
	    animation:show 0.5s ease-in-out;
	    animation-fill-mode: forwards;
	    animation-direction:alternate;
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
@keyframes show {    
    from {
        top: 0px;
    }
    to {
		top: -100px;
    }
}
</style>

