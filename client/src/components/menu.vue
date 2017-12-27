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
                <!-- <img src="../images/logo-doc.png"> -->
                <div style="font-size: 32px;height: 50px;line-height: 50px;font-weight: 700;">学信UED</div>
            </router-link>
            <!-- <div class="wrapper-header-nav-search">
                <i-select
                    ref="select"
                    v-model="search"
                    filterable
                    :placeholder="searchText"
                    :not-found-text="notFoundText"
                    @on-change="handleSearch">
                    <i-option v-for="item in articleTagList" :key="item._id" :value="item._id">
                        <template v-if="lang === 'zh-CN'">{{ item.name }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div> -->
            <div class="wrapper-header-nav-list">
                <Menu-item name="post">
                    <Icon type="ios-compose"></Icon>
                    {{ $t('index.post') }}
                </Menu-item>
                <Menu-item name="icons">
                    <Icon type="ios-navigate"></Icon>
                    {{ $t('index.icons') }}
                </Menu-item>
                <Menu-item name="teccol">
                    <Icon type="ios-keypad"></Icon>
                    {{ $t('index.technology_category') }}
                </Menu-item>
                <Menu-item name="favor">
                    <Icon type="ios-videocam"></Icon>
                    {{ $t('index.network_resource_library') }}
                </Menu-item>
                <Menu-item name="member">
                    <Icon type="ios-people"></Icon>
                    {{ $t('index.team_member') }}
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
                search: '',
                navigateList: [],
                liveDot: false,
                currentActiveKey: this.activeKey,
                searchText: this.$t('index.search'),
                notFoundText: this.$t('index.notFound'),
                lang: this.$lang
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
                if (this.lang === 'en-US') path += '-en';
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