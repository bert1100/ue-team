<template>
	<i-article>
		<div slot="center" class="member-warp">
			<template v-for="item in authorList">
				<div class="member-list">
					<Card>
			        	<div class="text-center">
				            <avatar :username="item.name" color="#fff" backgroundColor="#2d8cf0" class="article-base-user"></avatar>
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
	import Avatar from 'vue-avatar';
	export default {
		name: 'member',
		components: {
			iArticle,
			Avatar
		},
		computed: {
			authorList() { 
                return this.$store.state.user.userlist;
            }
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
			width: 300px;
			padding: 13px;
			h3 {
				display: block;
			}
		}
	}
	.article-base-user {
		margin: 0 auto;
	}
</style>