<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Tooltip</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A simple text popup tip.</p>
            <p>The tip shows while mouse enter, and hides while mouse leave. The Tooltip doesn't support complex text and operation.</p>
            <p>It can provide an explanation of button/text/operation that can cover the usage of the default system <code>title</code>.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tooltip content="这里是提示文字">
                        当鼠标经过这段文字时，会显示一个气泡框
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                    <p>Tip: Tooltip use <code>white-space: nowrap;</code> in text that is not automatically wrap. You can add style <code>white-space: normal;</code> in slot if you want to show a lot of content and automatically wrap.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Placement">
                <div slot="demo">
                    <div class="top">
                        <Tooltip content="Top Left 文字提示" placement="top-start">
                            <Button>上左</Button>
                        </Tooltip>
                        <Tooltip content="Top Center 文字提示" placement="top">
                            <Button>上边</Button>
                        </Tooltip>
                        <Tooltip content="Top Right 文字提示" placement="top-end">
                            <Button>上右</Button>
                        </Tooltip>
                    </div>
                    <div class="center">
                        <div class="center-left">
                            <Tooltip content="Left Top 文字提示" placement="left-start">
                                <Button>左上</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Center 文字提示" placement="left">
                                <Button>左边</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Bottom 文字提示" placement="left-end">
                                <Button>左下</Button>
                            </Tooltip>
                        </div>
                        <div class="center-right">
                            <Tooltip content="Right Top 文字提示" placement="right-start">
                                <Button>右上</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Center 文字提示" placement="right">
                                <Button>右边</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Bottom 文字提示" placement="right-end">
                                <Button>右下</Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div class="bottom">
                        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
                            <Button>下左</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Center 文字提示" placement="bottom">
                            <Button>下边</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
                            <Button>下右</Button>
                        </Tooltip>
                    </div>
                </div>
                <div slot="desc">
                    <p>The ToolTip has 12 placements choice. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="Custom">
                <div slot="demo">
                    <Tooltip placement="top">
                        <Button>多行</Button>
                        <div slot="content">
                            <p>显示多行信息</p>
                            <p><i>可以自定义样式</i></p>
                        </div>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>Display multiple lines of text or more complex styles by customizing the slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.content }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
                        <Button @click="disabled = true">点击关闭提示</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>You can disable text prompts by setting the property <code>disabled</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Delay">
                <div slot="demo">
                    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
                        <Button @click="disabled = true">延时1秒显示</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>By setting the property <code>delay</code>, you can delay the text prompt, in milliseconds.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.delay }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tooltip props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>content</td>
                            <td>prompt text</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>To set the position, which can be one of <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>.</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Whether to disable the Tooltip.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>Delay display in milliseconds.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>always</td>
                            <td>Whether it is always visible.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tooltip events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-popper-show</td>
                            <td>Emit when tooltip displays.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-popper-hide</td>
                            <td>Emit when Tooltip disappear.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tooltip slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>default</td>
                            <td>Main content.</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>The contents of the Tooltip, when this slot is defined, overwrites the props content.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/tooltip';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                disabled: false
            }
        }
    }
</script>