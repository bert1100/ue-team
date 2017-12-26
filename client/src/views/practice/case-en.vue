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
            <h1>Practical Cases</h1>
            <p>iView is a set of front-end solutions developed by <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> for intermediate and backend business, including engineering, theme customization, multi-language and other functions, greatly improving the development efficiency.</p>
            <p>Since late 2016, iView has been used in many new projects of TalkingData, and even gradually used in refactoring of some core projects.</p>
            <p>iView has gradually become the design and development specification for TalkingData.</p>
            <Anchor title="The Best Case" h2></Anchor>
            <Anchor title="App Analytics" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>App analytics is the core product of TalkingData. Due to historical reasons, the project has been precipitated for a long time. Compared with the traditional development model of the previous version, AppAnalytics has fully been refactored based on iView, and its visual effects and interaction has been greatly improved.</p>
                    <p><a href="https://www.talkingdata.com/products.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
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
            <Anchor title="Marketing Cloud" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Marketing Cloud is an integrated database marketing product, providing a 360-degree analysis service of customer characteristics and building a comprehensive user portrait based on big data.</p>
                    <p><a href="https://www.talkingdata.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
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
            <Anchor title="Geographic" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Geographic is a product which can provide the basis for decision-making in real estate investment policy and offline site selection, based on the online and offline behavior data of massive mobile devices combined with accurate location analysis model.</p>
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