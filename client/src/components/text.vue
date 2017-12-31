<template>
	<div>
	<span class="font-3d" data-text="学">学</span>
	<span class="font-3d" data-text="信">信</span>
	<span class="font-3d" data-text="前">前</span>
	<span class="font-3d" data-text="端">端</span>
	<span class="font-3d" data-text="看">看</span>
	<span class="font-3d" data-text="板">板</span>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	prop: {

	}
}
</script>
<style lang="less" scoped>
	.font-3d {
		color: transparent;
		font-size: 72px;
		display: inline-block;
		position: relative;
		-webkit-transform-style: preserve-3d;
	    transform-style: preserve-3d;
	    -webkit-perspective: 500;
	    perspective: 500;
	    -webkit-font-smoothing: antialiased;
	    &:before,&:after {
	    	// display: none;
		    position: absolute;
		    top: 0;
		    left: -1px;
		    -webkit-transform-origin: left top;
		    -ms-transform-origin: left top;
		    transform-origin: left top;
		    -webkit-transition: all ease-out 0.3s;
		    transition: all ease-out 0.3s;
		    content: attr(data-text);
	    }
	    &:hover {
	    	&:after {
	    		-webkit-transform: rotateY(-40deg);
		    	transform: rotateY(-40deg);
	    	}
	    	&:before {
				-webkit-transform: scale(1.1, 1) skew(0deg, 20deg);
			    -ms-transform: scale(1.1, 1) skew(0deg, 20deg);
			    transform: scale(1.1, 1) skew(0deg, 20deg);
	    	}
	    }
	    &:before {
	    	z-index: 1;
		    color: rgba(0,0,0,0.2);
		    -webkit-transform: scale(1.1, 1) skew(0deg, 5deg);
		    -ms-transform: scale(1.1, 1) skew(0deg, 5deg);
		    transform: scale(1.1, 1) skew(0deg, 5deg);
	    }
	    &:after {
	    	z-index: 2;
		    color: #fff;
		    text-shadow: -1px 0 1px #fff, 1px 0 1px rgba(0,0,0,0.8);
		    -webkit-transform: rotateY(-10deg);
    		transform: rotateY(-10deg);
	    }
	}
</style>