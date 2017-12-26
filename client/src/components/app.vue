<style scoped>
    @import "../styles/common.css";
    .icon-loading{
        position: fixed;
        top: 10px;
        right: 10px;
        color: #0099e5;
        animation: ani-app-loading 1s linear infinite;
    }
    @keyframes ani-app-loading {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>
<template>
    <div>
        <router-view></router-view>
        <Back-top :bottom="100"></Back-top>
        <transition name="fade">
            <div class="loading" v-show="loading">
                <Icon type="load-c" size="18" class="icon-loading"></Icon>
            </div>
        </transition>
        <!-- <Modal v-if="lang === 'zh-CN'" v-model="fee" title="第一期前端探索交流会报名中" width="750" :closable="false" :mask-closable="false">
            <div class="ivu-article">
                <p>活动介绍：前端探索交流会 FEE(Front End Explore) 是由 TalkingData 可视化团队发起的非盈利性前端开发者交流会，旨在分享、探索和传播具有创新的、有价值的思想、灵感或经验。</p>
                <p>时间地点：2017-12-09 14:30 北京市东城区东直门外大街39号院京投快轨大厦604A(TalkingData腾云大学)</p>
                <p>活动详细介绍、嘉宾介绍、主题及报名点击链接查看：<a href="http://www.huodongxing.com/event/3416099407500" target="_blank">http://www.huodongxing.com/event/3416099407500</a></p>
                <p>说明：由于现场至多容纳120人，为防止无效报名，收取20元门票，门票的所有收入将捐赠给开源项目（本期捐赠 Vue.js）。请在14:00 - 14:30 之间入场。</p>
                <p>
                    关注 FEE 公众号，获取最新动态：
                </p>
                <row>
                    <i-col span="12">
                        <img src="../images/fee-code.jpg" width="200px">
                    </i-col>
                </row>
            </div>
            <div slot="footer">
                <Button type="text" size="large" @click="feeclose">关闭</Button>
                <Button type="primary" size="large" style="width: 100px" @click="gotofee">报名</Button>
            </div>
        </Modal> -->
    </div>
</template>
<script>
    import bus from './bus';

    export default {
        data () {
            return {
                liveVisible: false,
                iViewVisible: false,
                lang: this.$lang,
                fee: true
            }
        },
        computed: {
            loading () {
                return bus.loading;
            }
        },
        mounted () {
            this.lang = this.$lang;
            if (window.localStorage.getItem('liveModalTime')) {
                const time = parseInt(window.localStorage.getItem('liveModalTime'));
                const today = this.getTodayUnix();
                if ((today - time) > 86400000 * 4) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible && this.$lang === 'zh-CN') {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: '《Vue.js 实战》正在热卖',
//                    desc: '<p>本书由 iView 作者 Aresn 著， Vue.js 作者<strong>尤雨溪</strong>作推荐序，大漠、justjavac 等人联合推荐。如果你喜欢通过实例来学习，那么本书会是你上手 Vue 的一个好选择。</p><p style="margin-top: 6px"><a href="https://detail.tmall.com/item.htm?id=559480603657" target="_blank" onclick="clickAdBuy()">立即购买书籍</a><a href="https://segmentfault.com/ls/1650000011074057" target="_blank" style="margin-left: 20px" onclick="clickAdVideo()">查看系列视频</a></p>',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('liveModalTime', today);
//                        this.$Message.success('关闭成功，近期不再提示', 4);
//                    }
//                });
//                this.$Notice.config({
//                    top: 24
//                });
            } else if (this.liveVisible && this.$lang === 'en-US') {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: 'Are you using iView?',
//                    desc: '<p>We appreciate you support if you or your organization is using iView. You are welcome to leave replies about your organization here, which could became the confidence of maintainers, communication and undecided watchers.</p><a href="https://github.com/iview/iview/issues/2143" target="_blank">> Click here to reply <</a>',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('liveModalTime', today);
//                        this.$Message.success('Closed successfully, no longer prompt', 4);
//                    }
//                });
//                this.$Notice.config({
//                    top: 24
//                });
            }

            // 广告统计
            window.clickAdBuy = function () {
                _hmt.push(['_trackEvent', 'index-ad-buy', 'click'])
            }

            window.clickAdVideo = function () {
                _hmt.push(['_trackEvent', 'index-ad-video', 'click'])
            }
        },
        methods: {
            getTodayUnix () {
                const date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                return date.getTime();
            },
            handleLive () {
                const today = this.getTodayUnix();
                window.localStorage.setItem('liveModalTime', today);
            },
            feeclose () {
                this.fee = false;
            },
            gotofee () {
                _hmt.push(['_trackEvent', 'gotofee', 'click']);
                window.open('http://www.huodongxing.com/event/3416099407500');
            }
        }
    }
</script>
