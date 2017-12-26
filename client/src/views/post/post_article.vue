<template>
    <i-article>
        <article slot="left">
            <Card class="padding-top-10">
                <Form ref="articleValidate" :model="formItem" :rules="ruleValidate" :label-width="80">
                    <FormItem label="文章标题" prop="title">
                        <Input v-model="formItem.title" placeholder="文章标题" icon="android-list"></Input>
                    </FormItem>
                    <FormItem label="内容">
                        <mavon-editor v-model="formItem.content" class="md-editor" code_style="atelier-estuary-light" :toolbars="toolbars" @imgAdd="imgAdd" @imgDel="imgDel" ref="md" :value="formItem.content"/>
                    </FormItem>
                </Form>
            </Card>
        </article>
        <aside slot="right">
            <Card>
                <p slot="title">
                    <Icon type="paper-airplane"></Icon>
                    发布
                </p>
                <p class="margin-top-10">
                    <Icon type="person"></Icon>&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp; 者：
                    <Select size="small" style="width:90px" v-model="user" :disabled="isEdit">
                        <Option v-for="item in authorList" :value="item._id" :key="item._id">{{ item.name }}</Option>
                    </Select>
                </p>
                <Row class="margin-top-20 publish-button-con">
                    <span class="publish-button"><Button disabled title="正在开发，暂不支持该功能">预览</Button></span>
                    <!-- <span class="publish-button"><Button disabled title="正在开发，暂不支持该功能">保存草稿</Button></span> -->
                    <template v-if="isEdit">
                        <span class="publish-button"><Button @click="handlePublish('articleValidate')" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">修改</Button></span>
                    </template>
                    <template v-else>
                        <span class="publish-button"><Button @click="handlePublish('articleValidate')" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">发布</Button></span>
                    </template>
                </Row>
            </Card>
            <Card class="margin-top-10">
                <p slot="title">
                    <Icon type="navicon-round"></Icon>
                    分类目录
                </p>
                <Tabs size="small">
                    <template v-for="item in categories" :value="categories_value">
                        <TabPane :label="item.des" :name="item.name">
                            <RadioGroup v-model="categoriesItem" vertical>
                                <template v-for="child in item.children">
                                    <Radio :label="child._id">{{child.des}}</Radio>
                                </template>
                            </RadioGroup>
                        </TabPane>
                    </template>
                </Tabs>
            </Card>
            <Card class="margin-top-10">
                <p slot="title">
                    <Icon type="ios-pricetags-outline"></Icon>
                    标签
                </p>
                <Row>
                    <Col span="18">
                        <Select v-model="articleTagSelected" multiple @on-change="handleSelectTag" placeholder="请选择文章标签" :value="articleTagSelected">
                            <Option v-for="item in articleTagList" :value="item._id" :key="item._id" ><Icon type="record" :style="'margin-right:5px;color:'+ item.color"></Icon>{{item.name}}</Option>
                        </Select>
                    </Col>
                    <Col span="6" class="padding-left-10">
                        <Button v-show="!addingNewTag" @click="handleAddNewTag" long type="ghost">新建</Button>
                    </Col>
                </Row>
                <div v-show="addingNewTag" class="add-new-tag-con">
                    <Row>
                        <Col span="12">
                            <Input v-model="newTagName" placeholder="请输入标签名" />                                
                        </Col>
                        <Col span="6" class="padding-left-10">
                            <Button @click="createNewTag" long type="primary">确定</Button>
                        </Col>
                        <Col span="6" class="padding-left-10">
                            <Button @click="cancelCreateNewTag" long type="ghost">取消</Button>
                        </Col>
                    </Row>
                   <div class="warp-color margin-top-20">
                       <Chrome v-model="colors" style="width: 100%"></Chrome>
                   </div>
                </div>
            </Card>
        </aside>
    </i-article>
</template>
<script>
    import { uploadImgs,getLabels,addLabel,getUsers,postResources,putResources,getArticleDetail } from '../../api/axios';
    import markdownConfig from '../../config/markdown_config';
    import tags from '../../api/tag';
    import iArticle from '../../components/article_nomenu.vue';
    import Anchor from '../../components/anchor.vue';
    import { Chrome } from 'vue-color';
    export default {
        components: {
            iArticle,
            Anchor,
            Chrome
        },
        data () {
            return {
                colors: {
                  hex: '#194d33',
                  hsl: {
                    h: 150,
                    s: 0.5,
                    l: 0.2,
                    a: 1
                  },
                  hsv: {
                    h: 150,
                    s: 0.66,
                    v: 0.30,
                    a: 1
                  },
                  rgba: {
                    r: 25,
                    g: 77,
                    b: 51,
                    a: 1
                  },
                  a: 1
                },
                categories_value: '',
                categoriesItem: '', //选中标签
                user: '', //选中作者
                addingNewTag: false, // 添加新标签
                articleTagSelected: [], //文章选中的标签
                newTagName: '', // 新建标签名
                contentHTML: '', //html字符串
                toolbars: markdownConfig, //编辑器工具栏配置
                img_file: {}, //
                publishLoading: false,
                formItem: {
                    title: '',
                    content: ''
                },
                ruleValidate: {
                    title: [
                        { required: true, message: '文章标题不能为空', trigger: 'blur' }
                    ]
                    // content: [
                    //     { required: true, message: '文章内容不能为空', trigger: 'change' }
                    // ]
                }
            }
        },
        computed: {
            articleTagList() { // 所有标签列表
                return this.$store.state.tags.tagsList;
            },
            authorList() { // 作者列表
                return this.$store.state.user.userlist;
            }, 
            categories() {
                return this.$store.state.categories.categorieslist;
            }
        },
        props: {
            isEdit: { //是否编辑
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleAddNewTag () {
                this.addingNewTag = !this.addingNewTag;
            },
            createNewTag () {
                if (this.newTagName.length !== 0) {
                    let label = { name: this.newTagName,des:'',color: this.colors.hex };
                    addLabel(label).then((res) => {
                        this.$store.dispatch('addevent',res.data.labels);
                        this.addingNewTag = false;
                        setTimeout(() => {
                            this.newTagName = '';
                        }, 200);
                    }).catch((err)=>{
                        console.log(err);
                    });
                } else {
                    this.$Message.error('请输入标签名');
                }
            },
            cancelCreateNewTag () {
                this.newTagName = '';
                this.addingNewTag = false;
            },
            handleSelectTag () {

            },
            imgAdd (filename,imgfile) {  //添加图片回调
                this.img_file[filename] = imgfile;
            },
            imgDel (filename) { //删除图片回调
               delete this.img_file[filename]; 
            },
            sendArticle (data) { //发布文章到数据库 putResources
                if(this.isEdit) { 
                    putResources(this.$route.params.id,data).then((res) => {
                        this.$router.push('/docs/detials/'+ this.$route.params.id);
                    });
                } else {
                    postResources(data).then((res) => {
                        this.$router.push('/docs/detials/'+ res.data.resource._id);
                    });
                }
                
            },
            uploadImg() {
                let formdata = new FormData();
                for (let _img in this.img_file ){
                    formdata.append(_img, this.img_file[_img]);
                }
                uploadImgs(formdata).then((res)=>{
                    let imgPaths = [];
                    for (var i in res.data) {
                       this.$refs['md'].$img2Url(res.data[i].fieldname, 'http://172.16.11.149:3000/' + res.data[i].path);
                       imgPaths.push(res.data[i].path);
                    }
                    this.$nextTick(function () {
                        this.contentHTML = this.$refs['md'].d_render;
                        let data = {
                            owner: this.user,
                            labels: this.articleTagSelected,
                            title: this.formItem.title,
                            category: this.categoriesItem,
                            content: this.formItem.content,
                            contentImgs: imgPaths,
                            contentHTML: this.contentHTML
                        };
                        this.sendArticle(data);
                    })
                }).catch(function (err) {
                   console.log(err);
                });
            },
            handlePublish (name) {
                //先上传图片
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.uploadImg();
                    } else {
                        this.$Message.error('Error');
                    }
                })
                
            }
        },
        created() {
            let selectTag = this.$store.state.tags.selectTag;
            if (selectTag.length > 0) {
                selectTag.map((item)=>{
                    this.articleTagSelected.push(item._id)
                })
            }
            if (this.isEdit) { //编辑
                if(this.$store.state.article.article.title){
                    console.log("有数据")
                    this.formItem.title = this.$store.getters.getArticle.title;
                    this.formItem.content = this.$store.getters.getArticle.content;
                    this.user = this.$store.getters.getArticle.owner._id;
                    this.$nextTick(function(){
                        this.categories_value = this.$store.getters.getArticle.category.name;
                    });
                } else {
                    console.log("无数据")
                    getArticleDetail(this.$route.params.id).then((res)=>{
                        const data = res.data.resource[0];
                        this.formItem.title = data.title;
                        this.formItem.content = data.content;
                        this.user = data.owner._id;
                    });
                }
            }
        },
        mounted (){
            // this.categories_value = this.$store.getters.getArticle.category.name;
        },
        watch: {
            // formItem: {  //内容必填
            //     handler: function () {
            //         this.$refs['articleValidate'].validate();
            //     },
            //     deep: true
            // }
        }
    }
</script>
<style lang="less">
    .text-center {
        text-align: center;
    }
    .margin-bottom-10 {
        margin-bottom: 10px; 
    }
    .margin-top-10 {
        margin-top: 10px; 
    }
    .margin-top-20 {
        margin-top: 20px;
    }
    .padding-left-10 {
        padding-left: 10px; 
    }
    .padding-top-10 {
        padding-top: 10px; 
    }
    .add-new-tag-con{
    margin-top: 20px;
    border-top: 1px dashed #dbdddf;
    padding: 20px 0;
    height: 60px;
    overflow: hidden;
    }
    .add-new-tag-enter{
        height: 0;
        margin-top: 0;
        padding: 0px 0;
    }
    .add-new-tag-enter-active, .add-new-tag-leave-active{
        transition: all .3s;
    }
    .add-new-tag-enter-to{
        height: 60px;
        margin-top: 20px;
        padding: 20px 0;
    }
    .add-new-tag-leave{
        height: 60px;
        margin-top: 20px;
        padding: 20px 0;
    }
    .add-new-tag-leave-to{
        height: 0;
        margin-top: 0;
        padding: 0px 0;
    }
    .publish-button-con {
        border-top: 1px solid #f3eff1;
        padding-top: 14px;
    }
    .publish-button {
        float: right;
        margin-left: 10px;
    }
    .md-editor {
        min-height: 500px !important;
    }
    .add-new-tag-con {
        height: auto;
    }
</style>