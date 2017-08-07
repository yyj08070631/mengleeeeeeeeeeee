<template>
    <div class="settings-wrapper">
         <!--头部  -->
        <v-header></v-header>
        <div class="avatar-wrapper">
            <img class="avatar-cover" width="100%" height="100%" :src="data.headimg" />
            <div class="filter"></div>
            <img class="avatar" :src="data.headimg">
            <div class="message">
                <span class="name">{{data.username}}</span>
                <span class="mobile">{{data.phone}}</span>
                <img class="rank" :src="computeImg">
            </div>
        </div>
        <div class="content-wrapper">
            <!-- 我的二维码 -->
            <a href="#myQRcode" class="message-item">
                <span class="title">我的二维码</span>
                <div class="link-wrapper">
                    <img class="qr-code" src="./QR_code.png">
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 昵称 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">昵称</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.username}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 收件信息 -->
            <a href="#addrManage" class="message-item indent">
                <span class="title">收件信息</span>
                <div class="link-wrapper">
                    <span class="msg">已记录</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <!-- 星座 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">星座</span>
                <div class="link-wrapper">
                    <select class="selectBox msg" @change="changeConstellation($event)" :value="data.constellation">
                        <option value="1">白羊座</option>
                        <option value="2">金牛座</option>
                        <option value="3">双子座</option>
                        <option value="4">巨蟹座</option>
                        <option value="5">狮子座</option>
                        <option value="6">处女座</option>
                        <option value="7">天秤座</option>
                        <option value="8">天蝎座</option>
                        <option value="9">射手座</option>
                        <option value="10">摩羯座</option>
                        <option value="11">水瓶座</option>
                        <option value="12">双鱼座</option>
                    </select>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 身高 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">身高</span>
                <div class="link-wrapper">
                    <div class="inputBox msg">
                        <input class="msg" @change="changeHeight($event)" :value="data.height">
                        <span class="msg">cm</span>
                    </div>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 体重 -->
            <a href="javascript:void(0)" class="message-item indent">
                <span class="title">体重</span>
                <div class="link-wrapper">
                    <div class="inputBox msg">
                        <input class="msg" @change="changeWeight($event)" :value="data.weight">
                        <span class="msg">kg</span>
                    </div>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <!-- 职业 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">职业</span>
                <div class="link-wrapper">
                    <select class="selectBox msg" @change="changeCareer($event)" :value="data.career">
                        <option value="销售业务">销售业务</option>
                        <option value="销售管理">销售管理</option>
                        <option value="销售行政/商务">销售行政/商务</option>
                        <option value="客服/售前/售后技术支持">客服/售前/售后技术支持</option>
                        <option value="市场">市场</option>
                        <option value="公关/媒介">公关/媒介</option>
                        <option value="广告/会展">广告/会展</option>
                        <option value="财务/审计/税务">财务/审计/税务</option>
                        <option value="人力资源">人力资源</option>
                        <option value="行政/后勤/文秘">行政/后勤/文秘</option>
                        <option value="项目管理/项目协调">项目管理/项目协调</option>
                        <option value="质量管理/安全防护">质量管理/安全防护</option>
                        <option value="高级管理">高级管理</option>
                        <option value="软件/互联网开发/系统集成">软件/互联网开发/系统集成</option>
                        <option value="硬件开发">硬件开发</option>
                        <option value="互联网产品/运营管理">互联网产品/运营管理</option>
                        <option value="IT质量管理/测试/配置管理">IT质量管理/测试/配置管理</option>
                        <option value="IT运维/技术支持">IT运维/技术支持</option>
                        <option value="IT管理/项目协调">IT管理/项目协调</option>
                        <option value="电信/通信技术开发及应用">电信/通信技术开发及应用</option>
                        <option value="房地产开发/经纪/中介">房地产开发/经纪/中介</option>
                        <option value="土木/建筑/装修/市政工程">土木/建筑/装修/市政工程</option>
                        <option value="物业管理">物业管理</option>
                        <option value="银行">银行</option>
                        <option value="证券/期货/投资管理/服务">证券/期货/投资管理/服务</option>
                        <option value="保险">保险</option>
                        <option value="信托/担保/拍卖/典当">信托/担保/拍卖/典当</option>
                        <option value="采购/贸易">采购/贸易</option>
                        <option value="交通运输服务">交通运输服务</option>
                        <option value="物流/仓储">物流/仓储</option>
                        <option value="生产管理/运营">生产管理/运营</option>
                        <option value="电子/电器/半导体/仪器仪表">电子/电器/半导体/仪器仪表</option>
                        <option value="汽车制造">汽车制造</option>
                        <option value="汽车销售与服务">汽车销售与服务</option>
                        <option value="机械设计/制造/维修">机械设计/制造/维修</option>
                        <option value="服装/纺织/皮革设计/生产">服装/纺织/皮革设计/生产</option>
                        <option value="技工/操作工">技工/操作工</option>
                        <option value="生物/制药/医疗器械">生物/制药/医疗器械</option>
                        <option value="化工">化工</option>
                        <option value="影视/媒体/出版/印刷">影视/媒体/出版/印刷</option>
                        <option value="艺术/设计">艺术/设计</option>
                        <option value="咨询/顾问/调研/数据分析">咨询/顾问/调研/数据分析</option>
                        <option value="教育/培训">教育/培训</option>
                        <option value="律师/法务/合规">律师/法务/合规</option>
                        <option value="翻译-口译与笔译">翻译-口译与笔译</option>
                        <option value="商超/酒店/娱乐管理/服务">商超/酒店/娱乐管理/服务</option>
                        <option value="旅游/度假/出入境服务">旅游/度假/出入境服务</option>
                        <option value="烹饪/料理/食品研发">烹饪/料理/食品研发</option>
                        <option value="保健/美容/美发/健身">保健/美容/美发/健身</option>
                        <option value="医院/医疗/护理">医院/医疗/护理</option>
                        <option value="社区/居民/家政服务">社区/居民/家政服务</option>
                        <option value="能源/矿产/地质勘查">能源/矿产/地质勘查</option>
                        <option value="环境科学/环保">环境科学/环保</option>
                        <option value="农/林/牧/渔业">农/林/牧/渔业</option>
                        <option value="公务员/事业单位/科研机构">公务员/事业单位/科研机构</option>
                        <option value="实习生/培训生/储备干部">实习生/培训生/储备干部</option>
                        <option value="志愿者/社会工作者">志愿者/社会工作者</option>
                        <option value="其他">其他</option>
                    </select>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 收入 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">收入</span>
                <div class="link-wrapper">
                    <div class="inputBox msg">
                        <input class="msg" @change="changeGain($event)" :value="data.gain">
                        <span class="msg">/月</span>
                    </div>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <!-- 兴趣爱好 -->
            <a href="javascript:void(0)" class="message-item">
                <span class="title">兴趣爱好</span>
                <div class="link-wrapper">
                    <input class="inputBox msg" @change="changeHabbit($event)" :value="data.habbit">
                    <img class="other" src="./more.png">
                </div>
            </a>
        </div>
        <!-- 弹出框 -->
        <div>
            <toast v-model="success" type="text">修改成功</toast>
        </div>
        <div>
            <toast v-model="error" type="text">修改失败</toast>
        </div>
        <div>
            <toast v-model="number" type="text">请输入正确数值</toast>
        </div>
        <div>
            <toast v-model="height" type="text">请输入正确数值</toast>
        </div>
        <div>
            <toast v-model="weight" type="text">请输入正确数值</toast>
        </div>
        <div>
            <toast v-model="hobby" type="text">仅包含汉字、字母</toast>
        </div>
        <!-- 弹出框 -->
    </div>
</template>

<script type="ecmascript-6">
import { Toast, Group } from 'vux'
import header from '../../components/header/header';
export default {
    components: {
        Toast,
        Group,
        'v-header': header
    },
    data() {
        return {
            data: [],
            success: false,
            error: false,
            number: false,
            height: false,
            weight: false,
            hobby: false,
        }
    },
    created() {
        this.$nextTick(function () {
            this.getDataFromBackend();
        })
    },
    methods: {
        // textFocus1: function () {
        //     this.$refs.input1.selectionStart = 0;
        //     this.$refs.input1.selectionEnd = this.$refs.input1.value.length
        //     //input. = input.value.length
        // },
        // textFocus2: function () {
        //     this.$refs.input2.selectionStart = 0;
        //     this.$refs.input2.selectionEnd = this.$refs.input2.value.length
        //     //input. = input.value.length
        // },
        // textFocus3: function () {
        //     this.$refs.input3.selectionStart = 0;
        //     this.$refs.input3.selectionEnd = this.$refs.input3.value.length
        //     //input. = input.value.length
        // },
        // textFocus4: function () {
        //     this.$refs.input4.selectionStart = 0;
        //     this.$refs.input4.selectionEnd = this.$refs.input.value.length
        //     //input. = input.value.length
        // },
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userDetail?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res.data
            })
        },
        // 修改星座
        changeConstellation: function ($event) {
            // console.log($event.target.value)
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&constellation=' + $event.target.value,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                if (res.code == 200) {
                    this.success = true
                    this.getDataFromBackend();
                } else {
                    this.error = true
                    return
                }
            })
        },
        // 修改身高
        changeHeight: function ($event) {
            // console.log($event.target.value)
            if ((/^(\+|-)?\d+$/.test($event.target.value)) && $event.target.value > 100 && $event.target.value < 230) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&height=' + $event.target.value,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log($event.target.value)
                    if (res.code == 200) {
                        this.success = true
                        this.getDataFromBackend();
                    } else {
                        this.error = true;
                        return
                    }
                })
            } else {
                this.number = true
                return
            }
            $event.target.blur();
        },
        // 修改体重
        changeWeight: function ($event) {
            // console.log($event.target.value)
            if ((/^(\+|-)?\d+$/.test($event.target.value)) && $event.target.value > 20 && $event.target.value < 255) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&weight=' + $event.target.value,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log($event.target.value)
                    if (res.code == 200) {
                        this.success = true;
                        this.getDataFromBackend();
                    } else {
                        this.error = true;
                        return
                    }
                })
            } else {
                this.height = true
                return
            }
            $event.target.blur();
        },
        // 修改职业
        changeCareer: function ($event) {
            // console.log($event.target.value)
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&career=' + $event.target.value,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log($event.target.value)
                if (res.code == 200) {
                    this.success = true;
                    this.getDataFromBackend();
                } else {
                    this.error = true;
                    return
                }
            })
        },
        // 修改收入
        changeGain: function ($event) {
            // console.log($event.target.value)
            if ((/^(\+|-)?\d+$/.test($event.target.value)) && $event.target.value < 4294967295) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&gain=' + $event.target.value,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log($event.target.value)
                    if (res.code == 200) {
                        this.success = true;
                        this.getDataFromBackend();
                    } else {
                        this.error = true;
                        return
                    }
                })
            } else {
                this.weight = true
                return
            }
            $event.target.blur();
        },
        // 修改兴趣爱好
        changeHabbit: function ($event) {
            // console.log($event.target.value.length)
            if ((/^[\u4E00-\u9FA5A-Za-z]+$/.test($event.target.value)) && $event.target.value.length >= 1 && $event.target.value.length <= 15) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/userSet?userId===tPtcNLZARXEuvDhRSFGkQX&habbit=' + $event.target.value,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log($event.target.value)
                    if (res.code == 200) {
                        this.success = true;
                        this.getDataFromBackend();
                    } else {
                        this.error = true;
                        return
                    }
                })
            } else {
                this.hobby = true
                return
            }
            $event.target.blur();
        }
    },
    mounted() {

    },
    computed: {
        computeImg: function () {
            // console.log(this.data.level)
            let level = parseInt(this.data.level);
            if (level == 1) {
                return require('./images/xiaobai.png')
            } else if (level == 2) {
                return require('./images/xingxing.png')
            } else if (level == 3) {
                return require('./images/zuanshi.png')
            } else if (level == 4) {
                return require('./images/jinguan.png')
            } else if (level == 5) {
                return require('./images/huangguan.png')
            } else {
                console.log('获取了无效的等级数据！');
                return '#'
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    // init
    width = 100%
    select {   
        /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/  
        border: solid 1px #000;   
        /*很关键：将默认的select选择框样式清除*/  
        appearance:none;   
        -moz-appearance:none;   
        -webkit-appearance:none;   
        /*在选择框的最右侧中间显示小箭头图片*/  
        background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll rightright center transparent;   
        /*为下拉小箭头留出一点位置，避免被文字覆盖*/  
        padding-right: 14px;   
    }   
    /*清除ie的默认选择框样式清除，隐藏下拉箭头*/  
    select::-ms-expand {
        display: none;
    }
    
    .settings-wrapper
        width: 100%
        height: 100%
        background: #f0f0f0
        padding-bottom: 0.6875rem
        .avatar-wrapper
            position: relative
            margin-top: 1.4063rem
            width: 100% 
            height: 7.375rem
            overflow: hidden
            font-size: 0
            .avatar-cover
                position: absolute
                left: 0
                top: 0
                filter: blur(0.1563rem)
            .filter
                position: absolute
                left: 0
                top: 0
                width: width
                height: width
                filter: blur(0.1563rem)
                background: linear-gradient(rgba(0,0,0,0) 60%,rgba(255,255,255,0.3) 30%,rgba(255,255,255,1))
            .avatar
                position: absolute
                left: 50%
                margin: 1.3125rem 0 5.0016px -1.4219rem
                width: 3.0938rem
                height: 3.0938rem
                border: 0.0938rem solid #fff
            .message
                position: absolute
                top: 4.8125rem
                left: 50%
                margin-left: -2.9063rem
                width: 6.25rem
                text-align: center
                .name
                    display: block
                    font-size: 0.4375rem
                .mobile
                    display: block
                    margin: 0.1563rem 0 0.1875rem 0 
                    font-size: 0.3438rem
                    color: #909090
                 .rank
                    width: 1.125rem
                    height: 0.375rem
                    margin 0 auto
        .content-wrapper
            width: 100%
            height: 100%
            background: #fff
            overflow: hidden
            .message-item
                display: block
                position: relative
                margin-left: 0.5rem   
                width: 100%
                height: 1.3438rem
                line-height: 1.3438rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                .title
                    float: left 
                    font-size: 0.4063rem
                    color: #333
                .link-wrapper
                    float: right
                    margin: 0 1rem 0 0
                    height: 100%
                    .other
                        margin: 0.5rem 0 0 0.25rem
                        width: 0.375rem
                        height: 0.375rem
                    .msg
                        float: left
                        font-size: 0.3438rem
                        vertical-align: top
                        outline 0
                    img        
                        display: inline-block
                        float: left
                    .qr-code
                        margin-top: 0.5rem 
                        width: 0.375rem
                        height: 0.375rem
                // 其实并不是天才如我。。。
                .selectBox
                    position absolute
                    right 0
                    height 1.3438rem
                    padding 0 1.5625rem 0 0
                    border 0
                    background-color transparent
                    font-size 0
                    color #7e8c8d
                    z-index 500
                    direction rtl
                    option
                        font-size 0.3438rem
                .inputBox
                    display flex
                    position absolute
                    right 1.625rem
                    top 0.0313rem
                    height 1.3438rem
                    margin-top -0.0625rem
                    border 0
                    background-color transparent
                    font-size 0.3438rem
                    color #7e8c8d
                    text-align right
                    z-index 500
                    outline 0
                    input, span
                        background-color transparent
                    input
                        margin 0.0313rem 0.0313rem 0 0
                        color #7e8c8d
                        text-align right
            .indent
                border-bottom-none()               
            .line
                width: 100%
                height: 0.3125rem
                background: #f0f0f0            
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.3125rem 0.3125rem
            font-size 0.375rem


</style>