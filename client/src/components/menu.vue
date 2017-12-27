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
                <Menu-item name="icons">
                    <Icon type="ios-navigate"></Icon>
                    图标
                </Menu-item>
                <Menu-item name="teccol">
                    <Icon type="ios-keypad"></Icon>
                    技术集
                </Menu-item>
                <Menu-item name="favor">
                    <Icon type="ios-videocam"></Icon>
                    网络资源库
                </Menu-item>
                <Menu-item name="member">
                    <Icon type="ios-people"></Icon>
                    团队成员
                </Menu-item>
            </div>
        </div>
    </Menu>
</template>
<script>
    import Config from '../config/config';
    import bus from './bus';
    import { getLabels } from '../api/axios';
    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                articleTagList: [],
                navigateList: [],
                currentActiveKey: this.activeKey,
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSearch (path) {
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
            handleSelect (type) {
                if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'post') {
                    this.$router.push('/post/article');
                } else if (type === 'icons') {
                    this.$router.push('/docs/icons/intorduce');
                } else if (type === 'teccol') {
                    this.$router.push('/docs/teccol');
                } else if (type === 'favor') {
                    this.$router.push('/docs/favor');
                } else if (type === 'member') {
                    this.$router.push('/member');
                }
            }
        },
        mounted () {
            getLabels().then((res) => {
                this.articleTagList = res.data.labels;
            });
        },
        created () {
        }
    };
</script>