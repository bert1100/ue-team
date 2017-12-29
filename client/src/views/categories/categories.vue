<template>
	<i-article>
		<div slot="center" class="member-warp">
			<template v-for="n in 3">
				<div class="member-list">
					<Card class="member-pic">
			        	<p slot="title">
				            <Icon type="ios-videocam"></Icon>
				            网络收藏
				        </p>
				        <Icon type="plus-round" slot="extra" size="16"></Icon>
				        <ul>
				            <li v-for="n in 5" class="icon-btn-warp">
				                <a href="##" >二级菜单</a>
				                <span class="icon-btn">
				                  	<Button type="text" icon="edit" style="cursor: pointer;padding:0;font-size: 14px;margin-right: 5px;"></Button>  
				                  	<Button type="text" icon="trash-a" style="cursor: pointer;padding:0;font-size: 16px;"></Button>  
				                </span>
				            </li>
				        </ul>
				    </Card>
				</div>
			</template>
		</div>
	</i-article>
</template>
<script>
	import iArticle from '../../components/article_nomenu.vue';
	export default {
		name: 'member',
		components: {
			iArticle
		},
		computed: {
		},
		mounted() {
		}
	}
</script>
<style lang="less" scoped>
	.member-warp {
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		.member-list {
			width: 399px;
			padding: 13px 13px 20px;
			position: relative;
    		perspective: 1000px;
			h3 {
				display: block;
			}
		}
	}
	.article-base-user {
		margin: 0 auto;
	}
	.icon-btn-warp {
		position: relative;
		padding-right: 40px; 
		.icon-btn {
			position: absolute;
			right: 0;
		}
	}
	
</style>