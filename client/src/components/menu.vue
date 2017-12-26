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
            <div class="wrapper-header-nav-search">
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
            </div>
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
    import navigate from '../config/navigate';
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
                const pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

                if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'post') {
                    this.$router.push('/post/article' + pathSuffix);
                } else if (type === 'icons') {
                    this.$router.push('/docs/icons/intorduce' + pathSuffix);
                } else if (type === 'teccol') {
                    this.$router.push('/docs/teccol' + pathSuffix);
                } else if (type === 'favor') {
                    this.$router.push('/docs/favor' + pathSuffix);
                } else if (type === 'member') {
                    this.$router.push('/member' + pathSuffix);
                }
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/start',
                    '/docs/guide/i18n',
                    '/docs/guide/theme',
                    '/docs/guide/iview-loader',
                    '/overview',
                    '/docs/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.currentActiveKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.currentActiveKey = 'live';
                } else {
                    this.currentActiveKey = 'guide';
                }
            },
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                const path = this.$route.path.indexOf('-en') > -1 ? this.$route.path.split('-en')[0] : this.$route.path + '-en';
                bus.$emit('on-change-lang', lang, path);
            },
            handleVersion (v) {
                if (v == 1) {
                    window.location.href = 'http://v1.iviewui.com';
                }
            },
            handleGoToGitHub () {
                _hmt.push(['_trackEvent', 'menu-go-github', 'click']);
                window.open('https://github.com/iview/iview');
            },
            handleGoToTwitter () {
                _hmt.push(['_trackEvent', 'menu-go-twitter', 'click']);
                window.open('https://twitter.com/iViewUI');
            }
        },
        mounted () {
            getLabels().then((res) => {
                this.articleTagList = res.data.labels;
            });
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            list = [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: 'Layout 布局',
                    path: '/components/layout',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'Color 色彩',
                    path: '/components/color',
                    img: 'color.png',
                    icon: 'android-color-palette'
                }
            ];
            this.navigateList = list;
            // 设置直播 dot
            const liveDotVersion = window.localStorage.getItem('liveVersion');
            if (liveDotVersion) {
                this.liveDot = liveDotVersion < Config.liveVersion;
            } else {
                this.liveDot = true;
            }
        }
    };
</script>