<template>
	<div>
		<post-article :isEdit="true"></post-article>
	</div>
</template>
<script>
	import postArticle from './post_article';
	export default {
		name: 'editarticle',
		components: {
			postArticle
		}
	}
</script>