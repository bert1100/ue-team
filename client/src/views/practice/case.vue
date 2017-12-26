<style>
    .demo-case-img{
        width: 100%;
    }
    .demo-case-img img{
        width: 100%;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>实践案例</h1>
            <p>iView 是由 <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> 开发的，面向中后台业务的一整套前端解决方案，包含了工程构建、主题定制、多语言等功能，极大提升了开发效率。</p>
            <p>从 2016 年下旬开始，TalkingData 的众多新项目开始使用 iView，部分核心项目已逐步开始使用 iView 重构。</p>
            <p>iView 已逐步成为 TalkingData 的设计和开发规范。</p>
            <Anchor title="最佳实践" h2></Anchor>
            <Anchor title="App 统计分析" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>App 统计分析是 TalkingData 最核心的产品，因历史原因，项目已沉淀很久，开发模式也比较传统，现已全面基于 iView 进行重构，视觉和交互都有极大的提升。</p>
                    <p><a href="https://www.talkingdata.com/products.jsp?languagetype=zh_cn" target="_blank">立即访问</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-1.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-2.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-3.png">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="MarketingCloud 营销云" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Marketing Cloud营销云是一体化数据营销产品，提供360度客群特征分析服务，用大数据全面构建人群画像。</p>
                    <p><a href="https://www.talkingdata.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">立即访问</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-1.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-2.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-3.png">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="地缘" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>地缘是一款基于海量移动设备线上、线下行为数据结合精准选址分析模型，为地产投策、线下选址提供决策依据的产品。</p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-3-1.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-3-2.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-3-3.png">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {

            }
        },
        methods: {

        }
    };
</script>