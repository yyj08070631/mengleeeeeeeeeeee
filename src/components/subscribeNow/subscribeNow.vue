<template>
    <div class="subscribeNow-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="activity-wrapper">
            <div class="mainmap">
                <img :src="data.servimg">
            </div>
            <div class="subscribe-item">
                <div class="colLeft">服务</div>
                <div class="colRight"><p>{{data.servname}}</p></div>
            </div>
             <div class="subscribe-item">
                <div class="colLeft noLine">预约人信息</div>
                <div class="colRight noLine">
                    <div class="userinfo">
                        <div class="msg">
                            <span>{{data.username}}</span>
                            <span>{{data.phone}}</span>
                        </div>
                        <!-- <a href="javascript:void(0)" class="write" @click="editInfo = true">编辑</a> -->
                    </div>
                </div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">时间</div>
                <div class="colRight"><p>{{data.atime}}</p></div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">地点</div>
                <div class="colRight"><p>{{data.province + data.city + data.area + data.address}}</p></div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">状态</div>
                <div class="colRight noLine"><p>{{data.status == 0 || data.status == 1 ? '已预约' : data.status == 2 ? '已完成' : data.status == 3 ? '已取消' : data.status == 4 ? '已评价' : '未接收到订单状态'}}</p></div>
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
            data: [],
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
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/appointmentDetail?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + this.$route.query.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res)
                this.data = res.data
            });
        }
    },
    mounted(){
        this.getDataFromBackend()
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../commom/stylus/mixin'

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
            display flex
            margin-left 0.5rem
            width 100%
            height 1.5625rem
            div
                font-size fs
                border-bottom 1px solid #e0e0e0
            .noLine
                border-bottom 0
            .colLeft
                display flex
                align-items center
                width: 3.125rem
                color: #909090
                font-size fs
            .colRight
                display flex
                align-items center
                width 6.875rem
                margin-right 0.5rem
                font-size fs
                .userinfo
                    width 100%
                    height 1.5625rem
                    margin-bottom: 0.25rem
                    p
                        margin 0.4688rem 0.5rem 0 0 
                        line-height 0.4375rem
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
                        line-height 1.9375rem
</style>