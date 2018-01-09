<template>
	<i-article>
		<article slot="left">
			<Card class="padding-top-10">
				<h1 style="margin-bottom: 20px;text-align: center; display: block;border-bottom: 1px solid #ddd;padding-bottom: 15px; ">{{article.title}}<Button type="text" icon="edit" class="ch-edit" @click="editArticle"></Button></h1>
				<div class="article-base">
					<avatar :username="username" color="#fff" class="article-base-user"></avatar>
					<p class="article-base-creattime"><strong>创建时间：</strong>{{article.createdAt | date-string}}</p>
					<template v-for="label in article.labels">
						<span class="tagsdetail" :style="'background:'+label.color">{{label.name}}</span>
						<!-- <Tag :closable="false" :name="label._id" :style="'color:#fff; background:'+label.color" class="tagsdetail">{{label.name}}</Tag> -->
					</template>
				</div>
				<div class="article-content markdown-body" v-html="article.contentHTML" id="post">
				</div>
			</Card>
		</article>
		<aside slot="right">
			<Card>
				<div class="md-catalogue-title">
                    目录
                </div>
                <div class="md-catalogue-content" id="toc">
                </div>
			</Card>
		</aside>
	</i-article>
</template>
<script>
	import mdtoc from '../../libs/md-toc';
	import Avatar from 'vue-avatar';
	import { getArticleDetail } from '../../api/axios';
	import iArticle from '../../components/article_nomenu';
	export default {
		components: {
            iArticle,
            Avatar
        },
		data () {
            return {
            	username: ''
            }
        },
        computed: {
        	article() {
        		return this.$store.getters.getArticle;
        	}
        },
        methods: {
        	create_catalogue () { //生成目录
        		new Toc('post', {
            		'level':3,
			        'class':'toc',
			        'targetId':'toc'
            	});
        	},
        	editArticle () {  //编辑文章
        		this.$router.push('/update/article/'+ this.article._id);
        	}
        },
        mounted () {
            getArticleDetail(this.$route.params.id).then((res)=>{
            	const data = res.data.resource[0];
                this.$store.dispatch('editevent', data);
                this.$store.dispatch('uploadtagevent',data);
                this.username = data.owner.name;
                this.$nextTick(function(){
                	this.create_catalogue();
                })
            });
        },
	}
</script>
<style lang="less" scoped>
	.article-base {
		position: relative;
		padding-left: 60px;
		margin-bottom: 20px;  
		.article-base-user {
			position: absolute;
			top: 0;
			left: 0;
		}
		.article-base-creattime {
			line-height: 24px;
			height: 24px;
		}
	}
	.md-catalogue-title {
		font-size: 16px;
		font-weight: 700;
		height: 30px;
		line-height: 30px;
		margin-bottom: 5px;
	}
	.ch-edit {
		margin-left: 5px;
		font-size: 20px;
		&:hover {
			color: #2d8cf0;
			cursor: pointer;
		}
	}
	.markdown-body img {
		width: 100%;
	}
	.tagsdetail {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		border-radius: 2px;
		height: 24px;
		line-height: 24px;
		padding: 0 10px; 
		margin-right: 10px; 
	}
</style>