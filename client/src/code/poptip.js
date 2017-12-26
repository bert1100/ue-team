let code = {};

code.base = `
<template>
    <Poptip trigger="hover" title="提示标题" content="提示内容">
        <Button>hover 激活</Button>
    </Poptip>
    <Poptip title="提示标题" content="提示内容">
        <Button>click 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <Button>focus 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <i-input placeholder="输入框的 focus"></i-input>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.placement = `
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
    <div class="top">
        <Poptip title="提示标题" content="提示内容" placement="top-start">
            <Button>上左</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top">
            <Button>上边</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top-end">
            <Button>上右</Button>
        </Poptip>
    </div>
    <div class="center">
        <div class="center-left">
            <Poptip title="提示标题" content="提示内容" placement="left-start">
                <Button>左上</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left">
                <Button>左边</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left-end">
                <Button>左下</Button>
            </Poptip>
        </div>
        <div class="center-right">
            <Poptip title="提示标题" content="提示内容" placement="right-start">
                <Button>右上</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right">
                <Button>右边</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right-end">
                <Button>右下</Button>
            </Poptip>
        </div>
    </div>
    <div class="bottom">
        <Poptip title="提示标题" content="提示内容" placement="bottom-start">
            <Button>下左</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom">
            <Button>下边</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom-end">
            <Button>下右</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.visible = `
<template>
    <Poptip v-model="visible">
        <a>click 激活</a>
        <div slot="title"><i>自定义标题</i></div>
        <div slot="content">
            <a @click="close">关闭提示框</a>
        </div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.slot = `
<template>
    <Poptip placement="right" width="400">
        <Button type="ghost">click 激活</Button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>版本号</th>
                        <th>更新时间</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>新增对话框组件 <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>新增选择器组件 <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.confirm = `
<template>
    <Poptip
        confirm
        title="您确认删除这条内容吗？"
        @on-ok="ok"
        @on-cancel="cancel">
        <Button>删除</Button>
    </Poptip>
    <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <Button>国际化</Button>
    </Poptip>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
`;

export default code;