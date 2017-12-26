<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-content">
                <slot name="center"></slot>
                <Row>
                    <Col span="18">
                        <slot name="left"></slot>
                    </Col>
                    <Col span="6" class="padding-left-10">
                        <slot name="right"></slot>
                    </Col>
                </Row>
            </div>
        </div>
        <ch-footer></ch-footer>
    </div>
</template>
<script>
    import navMenu from './menu.vue';
    import bus from './bus';
    import chFooter from './footer.vue';

    export default {
        components: {
            navMenu,
            chFooter
        },
        data () {
            return {
                activeKey: ''
            }
        },
        methods: {
            updateActiveNav () {
                const route = this.$route.path;
                if (route.indexOf('post') > -1) {
                    this.activeKey = 'post';
                }else if (route.indexOf('teccol') > -1) {
                    this.activeKey = 'teccol';
                }else if (route.indexOf('icons') > -1) {
                    this.activeKey = 'icons';
                }else if (route.indexOf('member') > -1) {
                    this.activeKey = 'member';
                } else {
                    this.activeKey = '';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            }
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>
<style lang="less" scoped>
    .wrapper-content {
        width: 1200px;
        margin: 30px auto 20px;
        padding: 0;
        &:after {
            background: transparent;
        }
    }
</style>