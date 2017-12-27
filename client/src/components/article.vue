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
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
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
                activeKey: '',
            }
        },
        methods: {
            updateActiveNav () {
                const route = this.$route.path;
                if (route.indexOf('favor') > -1) {
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
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>