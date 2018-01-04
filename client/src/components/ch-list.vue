<template>
	<div class="ch-list">
		<template v-for="item,index in list">
			<Card class="list-card">
				<p slot="title" @click="showDetail(item._id)" class="list-card-title">{{item.title}}</p>
				<!-- <p>{{item.paragraph}}</p> -->
				<p>
					<template v-for="label in item.labels">
						<Tag type="border" :closable="false" :name="label._id" style="height:32px;line-height: 32px;padding:0 12px;"><span :style="'background:'+label.color" class="ch-tag"></span>{{label.name}}</Tag>
					</template>
				</p>
				<!-- <p slot="extra">
					<ButtonGroup>
				        <Button type="ghost" icon="heart">100</Button>
				        <Button type="ghost" icon="star">40</Button>
				        <Button type="ghost" icon="chatbox-working">40</Button>
				    </ButtonGroup>
				</p> -->
			</Card>
		</template>
	</div>
</template>
<script>
	export default {
		'name': 'ch-list',
		props: {
			list: {
				default: '标题'
			}
		},
		data() {
			return {
			}
		},
		methods: {
			showDetail(id) {
				this.$router.push('/docs/detials/'+id);
			}
		},
		mounted() {
		}
	}
</script>
<style lang="less">
	.list-card {
		margin-bottom: 20px;
		.list-card-title {
			&:hover {
				color: #2d8cf0;
				cursor: pointer;
			}
		}
	}
	.ch-tag {
		display: inline-block;
	    width: 12px;
	    height: 12px;
	    margin-right: 8px;
	    border-radius: 50%;
	    background: #e9eaec;
	    position: relative;
	    top: 1px;
	}
</style>