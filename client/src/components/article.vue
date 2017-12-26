<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="20">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <ch-footer></ch-footer>
        <div class="catalogue" v-show="list.length">
            <card dis-hover shadow>
                <div class="catalogue-title">
                    <template v-if="lang === 'zh-CN'">目录</template>
                    <template v-else>CAT</template>
                </div>
                <div class="catalogue-content">
                    <ul>
                        <li v-for="item in list">
                            <a :href="'#' + item">{{ item }}</a>
                        </li>
                        <li>
                            <a href="#API">API</a>
                        </li>
                    </ul>
                </div>
            </card>
        </div>
        <!-- <Modal v-model="donate" v-if="lang === 'zh-CN'" title="支持 iView 的开发" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)</p>
                <p>您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>
                <h3>个人可使用 微信 或 支付宝 捐助：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal>
        <Modal v-model="donate" v-if="lang !== 'zh-CN'" title="Donate iView project" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView is an open source project with MIT licenses that you can use for free in your personal or business projects. However, if you feel that iView has helped your project to improve development efficiency, you can use donations to express your gratitude: )</p>
                <h3>Use Wechat or Alipay to donate：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal> -->
        <!-- <Modal v-model="ask" title="免费加入 iView 官方QQ群参与讨论" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>免费加入官方QQ讨论群，交流 iView 技术问题。</p>
                <p>群号：<strong>621780943</strong></p>
                <p>二维码：</p>
                <p>
                    <img src="../images/qqgroup1.png" style="display: block;width: 50%;margin: 0 auto;">
                </p>
                <p>
                    <Alert show-icon>仅限开发者加入，请勿讨论与技术无关的问题，比如发招聘信息等。</Alert>
                </p>
            </div>
        </Modal> -->
        <!-- todo 提问 -->
        <!-- <div class="ask-question" @click="ask = true" v-if="lang === 'zh-CN'">
            <Icon type="ios-people" size="24"></Icon>
            <p>QQ群</p>
        </div> -->
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';
    import chFooter from './footer.vue';

    export default {
        components: {
            Navigate,
            navMenu,
            chFooter
        },
        data () {
            return {
                list: [],
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/docs/guide/iview-loader',
                    '/docs/guide/iview-loader-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('favor') > -1) {
                    this.activeKey = 'favor';
                } else if (route.indexOf('guide') > -1) {
                    this.activeKey = 'guide';
                } else if (route.indexOf('post') > -1) {
                    this.activeKey = 'post';
                }else if (route.indexOf('teccol') > -1) {
                    this.activeKey = 'teccol';
                }else if (route.indexOf('icons') > -1) {
                    this.activeKey = 'icons';
                } else {
                    this.activeKey = '';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            for (let i = 0; i < examples.length; i++) {
                const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                this.list.push(title);
            }
            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>