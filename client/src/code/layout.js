let code = {};

code.top = `
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <MenuItem name="1">Option 1</MenuItem>
                <MenuItem name="2">Option 2</MenuItem>
                <MenuItem name="3">Option 3</MenuItem>
            </div>
        </Menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                <BreadcrumbItem>iView</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">Content</div>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.left = `
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <MenuItem name="1">Option 1</MenuItem>
                <MenuItem name="2">Option 2</MenuItem>
                <MenuItem name="3">Option 3</MenuItem>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <Col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Col>
                <Col span="19">
                    <div class="layout-content-main">Content</div>
                </Col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.side = `
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <Col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                        <BreadcrumbItem>iView</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">Content</div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.ceiling = `
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">Sign up</a> |
                <a href="#">Help Center</a> |
                <a href="#">Security</a> |
                <a href="#">Service</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>
        <div style="height: 200px"></div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.fold = `
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <MenuItem name="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">Option 1</span>
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">Option 2</span>
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">Option 3</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Index</BreadcrumbItem>
                        <BreadcrumbItem href="#">Apps</BreadcrumbItem>
                        <BreadcrumbItem>App</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">Content</div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
`;

export default code;