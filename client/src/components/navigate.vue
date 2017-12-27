<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect">
            <Menu-item v-for="item in categories" :key="item.path" :name="item.path" :ref="item.path">
                {{ item.des}}
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    import { getLeftMenuList } from '../api/axios';
    import bus from './bus';
    export default {
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                activeKey: this.$route.path,
            }
        },
        methods: {
            handleSelect (path) {
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            },
        },
        computed: {
            categories() {
                const categoriesName = this.$route.meta.name,
                      _categories = this.$store.state.categories.categorieslist;
                let _curcategories = [];
                let curPath = this.$route.path;
                if (this.$route.params.id) {
                    const curPathArray = curPath.split('/');
                    curPathArray.pop();
                    let temPath = '';
                    for(let i = 0; i<curPathArray.length;i++) {
                        temPath += curPathArray[i];
                        if(i!=curPathArray.length-1) {
                            temPath += '/';
                        }
                    }
                    curPath = temPath;
                }
                _categories.map((item) => {
                    if (item.name==categoriesName) {
                        item.children.map((item) => {
                            _curcategories.push(Object.assign({},item, { path: curPath + '/' + item.name}))
                        });
                    }
                })
                return _curcategories;
            }
        },
        created () {
            if (this.$store.state.categories.categorieslist.length == 0) {
                this.$store.dispatch('postCategoriesList', '');
            }
        },
        mounted() {
            
        }
    }
</script>