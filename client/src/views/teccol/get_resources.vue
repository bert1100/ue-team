<template>
    <i-article>
        <article>
            <h1>技术集</h1>
            <p>CHSI前端开发组件库所用技术集，兼容性好，质量第一。</p>
            <blockquote>进度：正在开发</blockquote>
            <ch-list :list='list'></ch-list>
            <div class="text-center" v-if="total>0">
                <Page :total="total" :page-size="pagesize" :current="current" :page-size-opts="[10, 20, 30, 40]" show-elevator show-sizer @on-page-size-change="pageSizeChange" @on-change="onChange"></Page>
            </div>
        </article>
    </i-article>
</template>
<script>
    import { getArticle } from '../../api/axios';
    import iArticle from '../../components/article.vue';
    import Anchor from '../../components/anchor.vue';
    import chList from '../../components/ch-list.vue';
    export default {
        components: {
            iArticle,
            Anchor,
            chList
        },
        data () {
            return {
                value: [20, 50],
                list: [],
                total: 0,
                current: 1,
                pagesize: 10
            }
        },
        methods: {
            getList () {
                const path = this.$route.path.split('/').pop();
                getArticle(path, { 'current': this.current,'page-size': this.pagesize}).then((res)=>{
                    this.list = res.data.docs;
                    this.total = res.data.total;
                    this.current = res.data.page;
                    this.pagesize = res.data.limit;
                });
            },
            pageSizeChange (pagesize) {
                this.pagesize = pagesize;
                this.getList();
            },
            onChange (current) {
                this.current = current;
                this.getList();
            }
        },
        mounted() {
            this.getList();
        },
        watch: {
            '$route' (to, from) {
                this.list = []; //清空原数组
                this.getList();
            }
        }
    }
</script>
<style lang="less">
    .text-center {
        text-align: center;
    }
</style>