<template>
	<i-article>
		<div slot="center" class="member-warp">
			<template v-for="item in categories">
				<div class="member-list">
					<Card class="member-pic">
			        	<p slot="title">
				            <Icon type="ios-navigate" v-if="item.name==='icon'"></Icon>
		                    <Icon type="ios-keypad" v-else-if="item.name==='teccol'"></Icon>
		                    <Icon type="ios-videocam" v-else></Icon>
				            {{item.des}}
				        </p>
				        <!-- <Icon type="plus-round" slot="extra" size="16"></Icon> -->
				        <ul>
				        	<li class="tag-cutline">
				        		<Row :gutter="3">
				        			<Col span="9"><Input v-model="item.newDes" placeholder="请输入标签名"></Input></Col>
				        			<Col span="8"><Input v-model="item.newName" placeholder="请输入标签name"></Input></Col>
				        			<Col span="7" class="text-right">
										<ButtonGroup>
									        <Button type="ghost" icon="checkmark" @click="add(item)"></Button>
									        <Button type="ghost" icon="close"></Button>
									    </ButtonGroup>
				        			</Col>
				        		</Row>
				        	</li>
				            <li v-for="n in item.children" class="tag-list">
				                <Row :gutter="3">
				        			<Col span="9"><Input :value="n.des" v-model="n.des" placeholder="请输入标签名" :disabled="!n.disabled"></Input></Col>
				        			<Col span="8"><Input :value="n.name" v-model="n.name" placeholder="请输入标签name" :disabled="!n.disabled"></Input></Col>
				        			<Col span="7" class="text-right">
										<ButtonGroup>
											<template v-if="!n.disabled">
												<Button type="ghost" icon="edit" @click="edit(n)"></Button>
									        	<Button type="ghost" icon="trash-a" @click="del(n)"></Button>
											</template>
									        <template v-else>
												<Button type="ghost" icon="checkmark" @click="save(n)"></Button>
									        	<Button type="ghost" icon="close" @click="cancle(n)"></Button>
											</template>
									    </ButtonGroup>
				        			</Col>
				        		</Row>
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
		data() {
			return {
				// tagValue: '',
				// tagName: ''
			}
		},
		methods: {
			add(o) {
				this.$store.dispatch('postCategories',{ name: o.newName, des: o.newDes, parent: o._id});
			},
			edit(o) {
				this.$set(o,'disabled',true);
			},
			del(o) {
				this.$store.dispatch('deleteCategories',{ id: o._id})
			},
			save(o) {
				this.$store.dispatch('putCategories',{name: o.name, des: o.des, id: o._id})
			},
			cancle(o) {
				this.$set(o,'disabled',false);
			}
		},
		computed: {
			categories() {
				return this.$store.getters.getCategoriesList;
			}
		},
		mounted() {

		}
	}
</script>
<style lang="less" scoped>
	.text-right {
		text-align: right;
	}
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
	.tag-list {
		height: 40px;
		line-height: 40px;
	}
	.tag-cutline {
		padding-bottom: 16px;
		border-bottom: 1px dashed #e9eaec; 
		margin-bottom: 10px; 
	}
	
</style>