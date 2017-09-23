<template>
    <div class="digest-wrapper">
        <!-- header -->
        <!-- <v-header></v-header> -->
        <section class="main">
            <img class="serve" :src="appData.sericeitem.src">
            <div class="serve-desc">
                <h2 class="desc-title">{{appData.sericeitem.name}}</h2>
                <span class="desc-content">
                    {{appData.sericeitem.descript}}
                </span>
            </div>
            <div class="divider"></div>
            <div class="serve-date-address">
                <span class="date">时间</span>
                <div class="details">
                    <span>{{appData.timeitem.name}}</span>
                    <span class="mg-top">{{appData.timeitem.tip}}</span> 
                </div>
            </div>
            <div class="divider dividerShort"></div>
            <div class="serve-date-address">
                <span class="date">地址</span>
                <div class="details">
                    <span>{{appData.nearbyitem.name}}</span>
                <span class="mg-top">{{appData.nearbyitem.address}}</span>
                </div>
            </div>
            <div class="divider"></div>
            <a href="javascript:void(0)" class="link" @click="editInfo = true">我要预约</a>
        </section>
        <!-- 遮罩：填写预约信息 -->
        <div v-transfer-dom>
            <x-dialog v-model="editInfo" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>预约信息编辑</p>
                    <label class="inputBox">
                        <span class="digestTitle">预约人：</span>
                        <input type="text" class="digestContent" placeholder="请填写预约人" v-model="name" maxlength="4">
                    </label>
                    <label class="inputBox">
                        <span class="digestTitle">电话：</span>
                        <input type="text" class="digestContent" placeholder="请填写电话" v-model="telphone" maxlength="11">
                    </label>
                    <div class="checkLabel">
                        <span class="checkTitle">性别：</span>
                        <checker v-model="gender" default-item-class="valueUnsel" selected-item-class="valueSel">
                            <checker-item value="男">
                                男
                            </checker-item>
                            <checker-item value="女">
                                女
                            </checker-item>
                        </checker>
                    </div>
                    <div class="btnCont">
                        <div class="inSubmit" @click="setOrder()">确定预约</div>
                        <div class="inSubmit inCancel" @click="editInfo = false">取消</div>
                    </div>
                </div>
            </x-dialog>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux';
import { Checker, CheckerItem, Popup } from 'vux';
// import header from '../../components/header/header';
export default {
    directives: {
        TransferDom
    },
    components :{
        'v-view': view,
        XDialog,
        XButton,
        Checker,
        CheckerItem,
        Popup,
        // 'v-header': header
    },
    data(){
        return {
            appData: [],
            name: '',
            telphone: '',
            gender: '',
            editInfo: false
        }
    },
    methods: {
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Nearby/serice?nid=' + this.$route.query.nid+'&sid='+this.$route.query.sid,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res)
                this.appData = res
                //console.log(this.appData.nearbyitem.address)
            });
        },
        setOrder: function(){
            if(this.name == ''){
                alert('请输入预约人姓名');
            } else if (this.telphone == ''){
                alert('请输入预约电话');
            } else if (this.gender == ''){
                alert('请选择性别');
            } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.telphone))){
                alert('手机号码格式不正确！');
            } else {
                // alert(this.name + this.telphone + this.gender);
                this.$http({
                    method: 'get',
                    url: global.Domain + '/Nearby/appointment?nid=' + this.$route.query.nid + '&sid=' + this.$route.query.sid + '&username=' + this.name + '&phone=' + this.telphone + '&time=' + this.appData.timeitem.date + '&gender=' + this.gender,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log(res)
                    if(res == 0){
                        this.editInfo = false;
                        alert('预约失败');
                    } else if (res == 1){
                        this.editInfo = false;
                        alert('预约成功');
                        this.$router.push('subscribe');
                    } else if (res == 2){
                        this.editInfo = false;
                        alert('填写的数据有误');
                    } else if (res == 3){
                        this.editInfo = false;
                        alert('该活动已经预约，请查看预约列表');
                        this.$router.push('subscribe');
                    }
                });
            }
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.getDataFromBackend();
            // 若再次预约，则直接打开弹窗
            if(this.$route.query.open == 1){
                this.editInfo = true
            }
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
// init
*
    letter-spacing 1px
img, span, a
    display block

// 充值金额选择框：modal
.valueUnsel
    display flex !important
    justify-content center
    align-items center
    height 1.25rem
    width 2.1875rem
    border .0313rem solid #ea68a2
    font-size fs + 0.0625rem
    color #333
    background-color #fff
.valueSel
    color #fff
    background-color #ea68a2
.valueUnsel:last-child
    margin 0
.weui-dialog
    max-width none !important
    width auto !important
    text-align left !important
    border-radius 0.1875rem
    .chooseValue
        width 8.2813rem
        padding 0 0.4375rem
        // 充值金额
        .btnCont
            display flex
            margin 1rem 0 0.4688rem 0
            .inSubmit
                display flex
                justify-content center
                align-items center
                width 100%
                height 1.25rem
                font-size fs + 0.0625rem
                color #fff
                background-color #ea68a2
            .inCancel
                color #353535
                background-color #f0f0f0
        p
            margin 0.4063rem 0 0.3438rem 0
            font-size fs + 0.0313rem
            color #555
        // 选择组
        .checkLabel
            display flex
            .checkTitle
                display flex
                align-items center
                width 2.125rem
                font-size fs + 0.0469rem
            .vux-checker-box
                display flex
                justify-content space-around
                width 6.1563rem
        // 提现信息
        .inputBox
            display flex
            margin-bottom 0.5625rem
            .digestTitle
                display flex
                align-items center
                width 3rem
                font-size fs + 0.0469rem
            .digestContent
                height 0.875rem
                width 100%
                padding-right 0.2813rem
                border 1px solid #ea68a2
                outline 0
                font-size fs + 0.0469rem
                text-align right
// 主体
.digest-wrapper
    width: 100%
    height: 100%
    background-color #fff
    // 主体
    .main
        padding-bottom: 1.3438rem
        .divider
            border-top 1px solid #e0e0e0
        .dividerShort
            margin-left 3.8125rem
        .serve
            display block
            width: 100%
        .serve-desc
            display flex
            flex-direction column
            justify-content center
            margin 0 0.5rem
            .desc-title
                margin 0.5625rem 0 0.4375rem 0
                font-size fs + 0.0156rem
                color #333
            .desc-content
                margin-bottom 0.4688rem
                font-size fs
                color #909090
                line-height 0.4688rem
                text-align justify
        .serve-date-address
            display flex
            .date
                width 3.3125rem
                margin 0.5313rem 0 0 0.5rem
                font-size fs
                color #909090
            .details
                height 1.9688rem
                width 5.6875rem
                margin-top 0.5313rem
                font-size fs
                color #333
                .mg-top
                    margin-top 0.3125rem
                    line-height 0.4688rem
                    text-align justify
        .link
            display flex
            justify-content center
            height 1.4375rem
            padding-top 0.4375rem
            font-size fs + 0.0156rem
            color #ea68a2
</style>
