<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>Change Log</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.7.4" h2></Anchor>
                    <p>
                        <code>2017-12-01</code>
                    </p>
                    <ul>
                        <li>Fixed bug that import some components on demand. <issue id="2537"></issue></li>
                        <li>Input add more type. <issue id="2526"></issue></li>
                        <li>Add Italian. <mention id="lucagentile"></mention></li>
                        <li>Add Thai. <mention id="NatJNP"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.3" h2></Anchor>
                    <p>
                        <code>2017-11-16</code>
                    </p>
                    <ul>
                        <li>Fixed problem that can not be used in Nuxt.js under version 2.7.0.</li>
                        <li>Fixed a bug about InputNumber. <issue id="2418"></issue></li>
                        <li>Update Spanish. <issue id="2426"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.2" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>Fixed bug when Tabs was destroyed.</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.1" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>Fix the problem of errors in Tabs. <issue id="2407"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.0 Lara Croft GO" h2></Anchor>
                    <p>
                        <code>2017-11-13</code>
                    </p>
                    <ul>
                        <li>i18n support vue-i18n 6.x+ version, and support using with <code>script</code> tag. Improve the i18n doc. <router-link to="/docs/guide/i18n-en">View</router-link></li>
                        <li>Now you can load components on demand. <router-link to="/docs/guide/start-en">View</router-link></li>
                        <li>Form validation method <code>validate</code> supporting Promise. <issue id="2018"></issue></li>
                        <li>Form add new property <code>autocomplete</code>. </li>
                        <li>BreadcrumbItem <code>href</code> support the <code>to</code> Object of vue-router, and add new property <code>to</code>, the same as href. The href property will be abandoned in the future. <issue id="2214"></issue></li>
                        <li>Input add new property <code>spellcheck</code>, and some components add <code>autocomplete</code> and <code>spellcheck</code> as default. <issue id="2324"></issue></li>
                        <li>Modal add new event <code>on-visible-change</code>. </li>
                        <li>Transfer add new event <code>on-selected-change</code>. <issue id="2019"></issue></li>
                        <li>InputNumber add new event <code>on-focus</code> and <code>on-blur</code>. </li>
                        <li>Avatar style adjusts to center. <issue id="1926"></issue></li>
                        <li>Fixed InputNumber bug that sometimes unable to enter the range of numbers. <issue id="2205"></issue></li>
                        <li>Fixed Table bug when it is not set width and in vertical scroll, the fixed column's position is wrong. <issue id="2102"></issue></li>
                        <li>Fixed Table bug when the column is expandable and fixed, the fixed column will be rendered again. <issue id="1648"></issue></li>
                        <li>Fixed DatePicker and TimePicker that can not trigger <code>on-change</code> event when click clear button at first time.<issue id="2215"></issue></li>
                        <li>Fixed DatePicker, TimePicker and ColorPicker bug that using in FormItem, the icon is incorrect.<issue id="2219"></issue></li>
                        <li>Fixed an IE bug of TimePicker. <issue id="2330"></issue></li>
                        <li>Fixed Page bug in simple mode, enter an empty string, it shows NaN. <issue id="1575"></issue></li>
                        <li>Fixed Tooltip bug when change the content, the position is wrong. <issue id="1482"></issue></li>
                        <li>Add Ukrainian. <mention id="f3man"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.6.0 FRAMED" h2></Anchor>
                    <p>
                        <code>2017-10-26</code>
                    </p>
                    <ul>
                        <li>Refactor the Tree component to support Render function, asynchronous loading data, and perfect documentation. <mention id="SergioCrisostomo"></mention></li>
                        <li>Carousel add new properties <code>loop</code> and <code>radius-dot</code>. <issue id="2181"></issue> <mention id="lisafra"></mention></li>
                        <li>Tabs can be rolled when TabPane are too much. <issue id="1031"></issue> <mention id="marxy"></mention></li>
                        <li>The Date panel can display local year and month formats based on the current language package. <issue id="2097"></issue> <mention id="SergioCrisostomo"></mention></li>
                        <li>Table add new properties <code>callback</code>, <code>quoted</code> and <code>separator</code> in export csv file. <issue id="2114"></issue></li>
                        <li>Table add filter event <code>on-filter-change</code>. <issue id="2078"></issue></li>
                        <li>Tag add new property <code>checkable</code>. <issue id="2115"></issue></li>
                        <li>Scroll add new property <code>distance-to-edge</code>.  <issue id="2137"></issue></li>
                        <li>Fix the Scroll component bug under the Firefox browser that unable to trigger the rolling event. <issue id="2135"></issue></li>
                        <li>Fix Select bug in remote and multiple mode, and when the data is cleared, the selected item is not empty. <issue id="2066"></issue></li>
                        <li>Fix Poptip bug in transfer mode, the float layer will be closed when click inside. <issue id="1700"></issue></li>
                        <li>Fix Tabs bug that can not update TabPane using v-for directive. <issue id="2100"></issue></li>
                        <li>Fix Cascader bug in trigger mode with only one item, sometimes it will be selected directly. <issue id="1922"></issue></li>
                        <li>Fix the bug when Input size is small, and using in FormItem, the icon's position is wrong. <issue id="2149"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.1" h2></Anchor>
                    <p>
                        <code>2017-10-18</code>
                    </p>
                    <ul>
                        <li>Fixed bug in version 2.5.0 that the DatePicker will be displayed <code>false</code> when binding an empty data. <issue id="2119"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.0 Old Man’s Journey" h2></Anchor>
                    <p>
                        <code>2017-10-17</code>
                    </p>
                    <ul>
                        <li><strong>Publish management system template <a href="https://github.com/iview/iview-admin" target="_blank">iview-admin</a>.</strong></li>
                        <li>Add infinite Scroll component. <router-link to="/components/scroll-en">View</router-link></li>
                        <li>Date will automatically identify the weekly start Date according to the current language package. <issue id="1809"></issue></li>
                        <li>InputNumber add <code>readonly</code> and <code>editable</code> properties. </li>
                        <li>Optimize the performance of InputNumber real-time input.<issue id="2059"></issue></li>
                        <li>Optimized Date to focusout after entering a wrong Date format. <issue id="2002"></issue></li>
                        <li>Fix the problem that Date is not validated by the Form under SSR. <issue id="1971"></issue></li>
                        <li>Fix a problem with Date in IE11. <issue id="1937"></issue></li>
                        <li>Fix the bug that Date, Dropdown in transfer mode, the style is wrong when the body's width is 100%. <issue id="2050"></issue></li>
                        <li>Fix the bug that sometimes the error message cannot be cleared when the FormItem set `error` property. <issue id="2047"></issue></li>
                        <li>Fix Badge bug that when the dot is opened and the count is 0, the dot is displayed. </li>
                        <li>Fix InputNumber bug that when the precision is 0, unable to set the precision to an integer. <issue id="2026"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.4.0 Monument" h2></Anchor>
                    <p>
                        <code>2017-09-25</code>
                    </p>
                    <ul>
                        <li>InputNumber adds new property <code>precision</code>. <issue id="1810"></issue></li>
                        <li>Spin adds global usage <code>$Spin</code>. <issue id="1063"></issue></li>
                        <li>Optimize Spin styles, <code>fix</code> no longer mandatory set parent's width and height.</li>
                        <li>Table supports adaptive width. <issue id="690"></issue></li>
                        <li>Table adds property <code>loading</code> and named slot <code>loading</code>. <issue id="704"></issue></li>
                        <li>Table adds method <code>clearCurrentRow</code> to clear highlighted row. <issue id="1372"></issue></li>
                        <li>Table event <code>@on-row-click</code> and <code>@on-row-dblclick</code> params add index. <issue id="693"></issue></li>
                        <li>Date supports the dynamic toggle type. <issue id="1851"></issue></li>
                        <li>Steps supports dynamic setting Step.</li>
                        <li>All form components add <code>name</code> property. <issue id="812"></issue></li>
                        <li>FormItem adds <code>label-for</code> property. Input, AutoComplete, Cascader, Date, InputNumber, Select(filterable) add <code>element-id</code> property, click label can focus corresponding component when label-for is equivalent to element-id. <issue id="433"></issue></li>
                        <li>Modify the z-index value of the Menu. <issue id="823"></issue></li>
                        <li>Optimize Message styles. <issue id="1881"></issue></li>
                        <li>Optimize Select styles. <issue id="860"></issue></li>
                        <li>Optimize the interaction of Date when press tab key. <issue id="1930"></issue></li>
                        <li>Fix Table bug in stripe mode that hover style is not correct. <issue id="1380"></issue></li>
                        <li>Fix Tabs bug after closing all tabs. <issue id="1842"></issue></li>
                        <li>Fix Select bug in remote mode, highlight the search word, retype and select an item, the query is incorrect. <issue id="1865"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.1 & 2.3.2" h2></Anchor>
                    <p>
                        <code>2017-09-10</code>
                    </p>
                    <ul>
                        <li>Publish <router-link to="/docs/guide/iview-loader-en">iview-loader</router-link> .</li>
                        <li>Fix the bug that the slot cannot display correctly when the Switch uses <code>true-value</code> and <code>false-value</code>. <issue id="1797"></issue></li>
                        <li>Fix the bug that Select use the same Option data, only the first one can be selected. <issue id="1807"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.0 Lumino City" h2></Anchor>
                    <p>
                        <code>2017-09-05</code>
                    </p>
                    <ul>
                        <li>Switch add new property <code>true-value</code> and <code>false-value</code>. <issue id="1399"></issue></li>
                        <li>Input add new property <code>autocomplete</code>.</li>
                        <li>Table column add <code>type: html</code> to avoid XSS. <issue id="993"></issue></li>
                        <li>When the Table column is expandable, it can set the title or renderHeader.</li>
                        <li>Improve Select rendering performance. <issue id="1777"></issue></li>
                        <li>Fix the bug when Table columns are empty. <issue id="1736"></issue></li>
                        <li>Fix Table bug in selection mode when all columns are disabled, the header will be checked. <issue id="1751"></issue></li>
                        <li>Fix Select bug that select an Option, the html tag will be included. <issue id="1690"></issue></li>
                        <li>Fix Select bug in remote mode, when clear data, the label will not be clear. <issue id="1743"></issue></li>
                        <li>Fix Rate bug in allow-half mode. <issue id="1761"></issue></li>
                        <li>Fix Date bug that unable to display the initial value in IE 11. <issue id="1422"></issue></li>
                        <li>Fix Date bug in <code>datetime</code> type, clear date and select again, the time is wrong. <issue id="1223"></issue></li>
                        <li>Fix Date bug without default value, sometimes choose the time one day ahead. <issue id="1734"></issue></li>
                        <li>Fix Tabs bug that bottom border is not correct in IE 11. <issue id="695"></issue></li>
                        <li>Fix Tooltip bug in always mode, the position is wrong. <issue id="1568"></issue></li>
                        <li>Fix Slider bug when dbclick, it will jump to the left. <issue id="1354"></issue></li>
                        <li>Fix Cascader bug in transfer mode, the style is wrong. <issue id="1728"></issue></li>
                        <li>Add Indonesian. <mention id="IndraGunawan"></mention></li>
                        <blockquote>Special thanks to <mention id="SergioCrisostomo"></mention></blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item color="red">
                    <Icon type="ios-heart" size="18" slot="dot"></Icon>
                    <Anchor title="2.2.0 Shadowmatic" h2></Anchor>
                    <p>
                        <code>2017-08-28</code>
                    </p>
                    <ul>
                        <li>Add Avatar component. <router-link to="/components/avatar-en">View</router-link></li>
                        <li>Add ColorPicker component. <router-link to="/components/color-picker-en">View</router-link></li>
                        <li>Add AutoComplete component.<router-link to="/components/auto-complete-en">View</router-link></li>
                        <li>Form supports validation of ColorPicker and AutoComplete components.</li>
                        <li>Radio and RadioGroup add <code>size</code> property.</li>
                        <li>Checkbox and CheckboxGroup add <code>size</code> property.</li>
                        <li>Components with size property add <code>default</code> value.</li>
                        <li>Fix the bug that the Select can still input when opening the disabled in the filterable mode. <issue id="1547"></issue></li>
                        <li>Fix Poptip in the transfer mode, using the confirm style bug. <issue id="1612"></issue></li>
                        <li>Fix a problem with InputNumber. <issue id="1654"></issue></li>
                        <li>Optimize the Grid component for gutter settings. <issue id="1661"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.1.0 Alto's Adventure" h2></Anchor>
                    <p>
                        <code>2017-08-14</code>
                    </p>
                    <ul>
                        <li>TimePicker add new property <code>steps</code>, You can set the interval of hours, minutes, and seconds. <mention id="SergioCrisostomo"></mention></li>
                        <li>Radio、Checkbox add new property <code>true-value</code> and <code>false-value</code>. <issue id="1191"></issue></li>
                        <li>The current of the Page supports the <code>.sync</code> modifier.</li>
                        <li>Poptip、Tooltip add event <code>on-popper-show</code>.</li>
                        <li>Optimize the export of csv in the Safari browser.</li>
                        <li>Fix Cascader bug in <code>change-on-select</code> mode that when you choose item again, the panel does not reset the sublist. <issue id="1553"></issue></li>
                        <li>Fix Cascader bug in the dynamic load option, when the child's data is empty, recursively triggered the requested.</li>
                        <li>Fix InputNumber bug that sometimes to calculate inaccurate. <issue id="1452"></issue></li>
                        <li>Fix InputNumber bug that not watch for min and max. <issue id="1134"></issue></li>
                        <li>Fix Page when changing the <code>total</code>, the page number is incorrect. <issue id="1543"></issue></li>
                        <li>Fix Date in datetimerange mode, the data is incorrectly returned. <issue id="1220"></issue></li>
                        <li>Fix the bug that the Tree automatically checked when children were empty. <issue id="1504"></issue></li>
                        <li>Fix a bug that after the replacement of the Form, some of the components can not be verified for the first time. <issue id="1534"></issue></li>
                        <li>Add Vietnamese. <mention id="hckhanh"></mention></li>
                        <li>Add Portuguese. <mention id="SergioCrisostomo"></mention></li>
                        <li>Add Swedish. <mention id="SergioCrisostomo"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0 Leo's Fortune" h2></Anchor>
                    <p>
                        <code>2017-07-28</code>
                    </p>
                    <ul>
                        <li>Nuxt.js support internationalization. <router-link to="/docs/guide/i18n-en">View</router-link></li>
                        <li>Modal width will be displayed as a percentage when less than 100.</li>
                        <li>Progress add new property <code>vertical</code>. <issue id="629"></issue></li>
                        <li>Table add property <code>sortType</code> to achieve the default sort. <issue id="1403"></issue></li>
                        <li>Table will prevent bubbling under selection mode. <issue id="1271"></issue></li>
                        <li>Table replace <code>renderHeader</code> to a Render function. <issue id="1357"></issue></li>
                        <li>When sorting using Table, click the header title can also be sorted. <issue id="122"></issue></li>
                        <li>Fixed Table bug that using Select, Dropdown and other components can not be folded. <issue id="1341"></issue></li>
                        <li>Fixed Table bug that fixed column height is incorrect when data is empty. <issue id="1387"></issue></li>
                        <li>Fixed Table bug that column without width will be disappeared when data is empty. <issue id="658"></issue></li>
                        <li>Fixed Table bug, set the height and add some data, the height is incorrect when data is empty. <a href="https://github.com/iview/iview/commit/119eeafedea02d984650b82920abdcdf4e809f79" target="_blank">commit</a></li>
                        <li>
                            Modal, Poptip, Tooltip, Dropdown, Select, Date, Cascader add property <code>transfer</code>, it will be inserted to body when the value is true. <issue id="830"></issue> <issue id="844"></issue> <issue id="1187"></issue>
                            <blockquote>A component with a floating layer, when used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</blockquote>
                        </li>
                        <li>Input add event @on-keyup, @on-keydown, @on-keypress. </li>
                        <li>Fixed Select bug that using in Modal, the layer position is not correct under remote mode. <issue id="1099"></issue></li>
                        <li>Fixed bug that when Tabs contains other Tabs, the outer one disable animation, the inner can not be clicked. <issue id="1427"></issue></li>
                        <li>Add Korean. <mention id="dokenzy"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.19" h2></Anchor>
                    <p>
                        <code>2017-07-17</code>
                    </p>
                    <ul>
                        <li>Support Vue 2.4.1</li>
                        <li>Support SSR and Nuxt.js.<issue id="1315"></issue></li>
                        <li>Page supports keypad operation.<issue id="1318"></issue></li>
                        <li>Table add new event <code>@on-select-cancel</code> to cancel select row. <issue id="705"></issue></li>
                        <li>Fixed Select bug in remote mode that set <code>label</code> does not take effect.<issue id="1286"></issue></li>
                        <li>Fixed Table, Cascader, Tree bug in Vue 2.4.1 <issue id="1353"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button type="ghost" size="large" @click="handleBefore">View 1.x Change Log</Button>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v1.iviewui.com/docs/guide/update');
            }
        }
    }
</script>