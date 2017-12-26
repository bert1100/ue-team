let code = {};

code.base = `
<template>
    <Tooltip content="这里是提示文字">
        当鼠标经过这段文字时，会显示一个气泡框
    </Tooltip>
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
</template>
<script>
    export default {
        
    }
</script>
`;

code.content = `
<template>
    <Tooltip placement="top">
        <Button>多行</Button>
        <div slot="content">
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
        </div>
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
        <Button @click="disabled = true">点击关闭提示</Button>
    </Tooltip>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false
            }
        }
    }
</script>
`;

code.delay = `
<template>
    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
        <Button @click="disabled = true">延时1秒显示</Button>
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;