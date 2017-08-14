<template>
    <div class="subscribeNow-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="activity-wrapper">
            <div class="mainmap">
                <img src="./serve.png">
            </div>
            <div class="subscribe-item">
                <div class="pullLeft">服务</div>
                <div class="pullRight"><p>单人泡澡+臀部疗保养+面部补水三项套餐</p></div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">预约人信息</div>
                <div class="pullRight noLine">
                    <div class="userinfo">
                        <div class="msg">
                            <span>独孤剑</span>
                            <span>13766666666</span>
                        </div>
                        <!-- <a href="javascript:void(0)" class="write" @click="editInfo = true">编辑</a> -->
                    </div>
                </div>
            </div>
            <div class="subscribe-item">
                <div class="pullLeft noLine">时间</div>
                <div class="pullRight"><p>2017-12-31</p></div>
            </div>
            <div class="subscribe-item">
                <div class="pullLeft noLine">地点</div>
                <div class="pullRight"><p>广东省广州市天河区某处</p></div>
            </div>
            <div class="subscribe-item">
                <div class="pullLeft noLine">状态</div>
                <div class="pullRight noLine"><p>已完成</p></div>
            </div>
        </div>
        <!-- <div class="subscribe" @click="editInfo = true">
            <div>确定预约</div>
        </div>  -->
        <!-- 老弹框 -->
        <!-- <div class="writeTab" v-show="showTab">
            <div class="write-wrapper">
                <div class="msg">
                    <div class="head">预约人信息编辑</div>
                    <div class="uname flexbox">
                        <div>预约人:</div>
                        <div><input type="text" placeholder="预约人" :value="name" @click="textFocus1" ref="checkVal1"></div>
                    </div>
                    <div class="tlephone flexbox">
                        <div>电&nbsp;&nbsp;&nbsp;话:</div>
                        <div><input type="text" placeholder="请填写电话" :value="telphone" @click="textFocus2" ref="checkVal2"></div>
                    </div>
                </div>
                <div class="dump" @click="closeTab">确定</div>
            </div>
        </div> -->
        <!-- footer -->
        <v-view class="route-item"></v-view>
        <!-- 遮罩：选择充值金额 -->
        <!-- <div v-transfer-dom>
            <x-dialog v-model="editInfo" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>预约人信息编辑</p>
                    <label class="inputBox">
                        <span>预约人：</span>
                        <input type="text" placeholder="请填写预约人" v-model="name" maxlength="4">
                    </label>
                    <label class="inputBox">
                        <span>电话：</span>
                        <input type="text" placeholder="请填写电话" v-model="telphone" maxlength="11">
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
        </div> -->
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
// import { Checker, CheckerItem, Popup } from 'vux'
// import header from '../../components/header/header';
export default {
    // directives: {
    //     TransferDom
    // },
    components :{
        'v-view': view,
        // XDialog,
        // XButton,
        // Checker,
        // CheckerItem,
        // Popup,
        // 'v-header': header
    },
    data(){
        return {
            // showTab: false,
            // name: '',
            // telphone: '',
            // gender: '',
            // editInfo: false
        }
    },
    methods: {
        // setOrder: function(){
        //     if(this.name == ''){
        //         alert('请输入预约人姓名');
        //     } else if (this.telphone == ''){
        //         alert('请输入预约电话');
        //     } else if (this.gender == ''){
        //         alert('请选择性别');
        //     } else {
        //         alert(this.name + this.telphone + this.gender);
        //     }
        // }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 充值金额选择框：modal
.valueUnsel
    display flex !important
    justify-content center
    align-items center
    height 1.25rem
    width 2.1875rem
    border .0313rem solid #ff8b00
    font-size fs + 0.0625rem
    color #d54600
    background-color #fff
.valueSel
    color #fff
    background-color #ff8b00
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
                background-color #ff8b00
            .inCancel
                color #353535
                background-color #f0f0f0
        p
            margin 0.4063rem 0 0.3438rem 0
            font-size fs
            color #555
        // 选择组
        .checkLabel
            display flex
            .checkTitle
                display flex
                align-items center
                width 2.125rem
                font-size fs - 0.0313rem
            .vux-checker-box
                display flex
                justify-content space-around
                width 6.1563rem
        // 提现信息
        .inputBox
            display flex
            margin-bottom 0.5625rem
            span
                display flex
                align-items center
                width 3rem
                font-size fs - 0.0313rem
            input
                height 0.875rem
                width 100%
                padding-right 0.2813rem
                border 1px solid #e0e0e0
                outline 0
                font-size fs - 0.0313rem
                text-align right
            select
                height 0.875rem
                width 100%
                padding-right 0.2813rem
                border 1px solid #e0e0e0
                outline 0
                font-size fs - 0.0313rem
                color #909090
                appearance none 
                direction rtl

.subscribeNow-wrapper
    position: absolute
    left: 0
    margin-bottom: 0.6719rem
    width: 100%
    font-size: 0
    overflow: hidden
    background: #efeff8
    .route-item
        footerCss()
    // .header
    //     headerCss()
    .activity-wrapper
        width: 100%
        height: 100%
        background: #fff
        border-bottom 1px solid #e0e0e0
        // 活动主图容器
        .mainmap
            width 100%
            // height 10rem
            img
                width 100%
                // height 10rem
        .subscribe-item
            display: flex
            margin-left: 0.5rem
            width: 100%
            height 1.5625rem
            div
                font-size: fs - 0.0625rem
                border-bottom 1px solid #e0e0e0
            .noLine
                border-bottom 0
            .pullLeft
                display flex
                align-items center
                width: 3.125rem
                color: #909090
            .pullRight
                flex: 1
                margin-right: 0.5rem
                p    
                    margin: 0.4688rem 0.5rem 0 0 
                    line-height 0.4375rem
                .userinfo
                    width: 100%
                    height 1.5625rem
                    margin-bottom: 0.25rem
                    .msg
                        display flex
                        flex-direction column
                        justify-content center
                        float: left
                        width: 3.75rem
                        height 1.5625rem
                        border-bottom 0
                        span:last-child
                            margin-top 0.3125rem
                    .write
                        margin-right: 0.5rem
                        float: right       
                        color: #ea6aa2
                        line-height:  1.9375rem
    .subscribe
        display: flex
        width: 100%
        height: 1.0938rem  
        line-height: 1.0938rem  
        background: #fff 
        border-top 1px solid #e0e0e0
        border-bottom 1px solid #e0e0e0
        div
            flex: 1
            font-size: fs - 0.0313rem
            color: #ea6aa2
            text-align: center
    .writeTab
        position fixed
        left 0 
        top 0
        width 100%
        height 100%
        background rgba(0,0,0,0.5)
        z-index 1001
        .write-wrapper
            margin 3.9063rem auto 0 auto
            width 90%
            height 6.2813rem
            background #fff
            border-radius 0.25rem
            .head
                width 100%
                height 2.0313rem
                line-height 2.0313rem
                font-size fs + 0.0313rem
                color #000
                text-align center
            .flexbox
                display flex
                font-size fs - 0.0313rem
                height 0.875rem
                line-height 0.875rem
                color #333
                input 
                    padding-right 0.3125rem
                    width 100%
                    height 100%
                    border 0.0313rem solid #e0e0e0
                    text-align right

                div:first-child
                    margin-left 0.5625rem
                    width 2.0313rem
                div:last-child    
                    margin-right 0.875rem
                    flex 1    
            .uname
                margin-bottom 0.5625rem
            .tlephone
                margin-bottom 0.625rem  
            .dump   
                width 100%
                height 1.3438rem  
                line-height 1.3438rem  
                background #ea68a2  
                font-size fs + 0.0313rem
                text-align center 
                color #fff
                border-radius 0 0 0.25rem 0.25rem
</style>

