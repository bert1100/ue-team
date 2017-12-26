<template>
	<i-article>
		<div slot="center" class="member-warp">
			<template v-for="item in authorList">
				<div class="member-list">
					<Card>
			        	<div class="text-center">
				            <img src="../../images/logo.png">
				            <h3>{{item.name}}</h3>
				            <p><strong>邮箱：</strong>{{item.email}}</p>
				        </div>
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
			authorList() { 
                return this.$store.state.user.userlist;
            }
		},
		mounted() {
			if(this.$store.state.user.userlist==0){
				this.$store.dispatch('postuserlist');
			}
		}
	}
</script>
<style lang="less" scoped>
	.member-warp {
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		.member-list {
			width: 200x;
			padding: 13px;
			h3 {
				display: block;
			}
		}
	}
</style>