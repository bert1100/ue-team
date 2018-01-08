<style>
    .wrapper-header-nav .ivu-menu-item i{
        margin-right: 6px;
    }
    .wrapper-header .ivu-menu{
        z-index: 901;
    }
</style>
<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <div style="font-size: 32px;height: 50px;line-height: 50px;font-weight: 700;">学信UED</div>
            </router-link>
            <div class="wrapper-header-nav-list">
                <Menu-item name="post">
                    <Icon type="ios-compose"></Icon>
                    文章发布
                </Menu-item>
                <Menu-item v-for="item in categories" :key="item.name" :name="item.name">
                    <Icon type="ios-navigate" v-if="item.name==='icon'"></Icon>
                    <Icon type="ios-keypad" v-else-if="item.name==='teccol'"></Icon>
                    <Icon type="ios-videocam" v-else></Icon>
                    {{item.des}}
                </Menu-item>
                <Menu-item name="member">
                    <Icon type="ios-people"></Icon>
                    团队成员
                </Menu-item>
                <div style="position: relative;display: inline-block;width: 80px;text-align: right">
                    <avatar v-if="user.name" :username="user.name" color="#fff" backgroundColor="#2d8cf0" :size="40" style="position:absolute;top: 50%;left:50%; transform: translate(-50%,-64%);"></avatar>
                    <router-link to="/login" v-else><Button type="primary">登录</Button></router-link>
                </div>
            </div>
        </div>
    </Menu>
</template>
<script>
    import bus from './bus';
    import Avatar from 'vue-avatar';
    // import { getLabels } from '../api/axios';
    export default {
        components: {
            Avatar
        },
        data () {
            return {
                articleTagList: [],
                navigateList: []
            };
        },
        computed: {
            user() {
                return this.$store.state.user.userinfo;
            },
            currentActiveKey() {
                const route = this.$route.path;
                if (route.indexOf('favor') > -1) {
                   return 'favor';
                } else if (route.indexOf('post') > -1) {
                    return 'post';
                }else if (route.indexOf('teccol') > -1) {
                    return 'teccol';
                }else if (route.indexOf('icon') > -1) {
                    return 'icon';
                }else if (route.indexOf('member') > -1) {
                    return 'member';
                } else {
                    return '';
                }
            },
            categories() {
                return this.$store.state.categories.categorieslist;
            }
        },
        watch: {
            categories: (a,b)=>{
                
            }
        },
        methods: {
            handleSelect (type) {
                this.$nextTick(() => {
                    if (type === 'post') {
                        this.$router.push('/post/article');
                    } else if (type === 'icon') {
                        this.$router.push('/docs/icon');
                    } else if (type === 'teccol') {
                        this.$router.push('/docs/teccol');
                    } else if (type === 'favor') {
                        this.$router.push('/docs/favor');
                    } else if (type === 'member') {
                        this.$router.push('/member');
                    }
                });
            }
        },
        mounted () {
            // getLabels().then((res) => {
            //     this.articleTagList = res.data.labels;
            // });
        },
        created () {

        }
    };
</script>