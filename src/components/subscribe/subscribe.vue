<template>
    <div class="subscribe-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <section class="main">
            <div class="noSubs" v-if="data.length == 0">
                <p>您还没有预约的线下活动，</p>
                <a href="#nearbyStoresAll">赶快去预约吧！</a>
            </div>
            <div class="activity-wrapper" v-for="(val, key) in data" v-else>
                <router-link :to="{ path: '/subscribeNow', query: { id: val.id } }" class="activity-item">
                    <div class="picture">
                        <img :src="val.servimg"/>
                    </div>
                    <div class="content">
                        <p>{{val.servname}}</p>
                        <p>{{val.atime}}</p>
                        <p>{{val.nearname}}</p>
                    </div>    
                </router-link>
                <div class="info">
                    <!-- 左边 -->
                    <!--  -->
                    <div v-if="val.status == 2"><router-link :to="{ path: '/digest', query: { sid: val.sid, nid: val.nid, open: 1 } }">再次预约</router-link></div><!-- 已评价 -->
                    <!--  -->
                    <div v-else-if="val.status == 4"><router-link :to="{ path: '/digest', query: { sid: val.sid, nid: val.nid, open: 1 } }">再次预约</router-link></div>
                    <!-- 右边 -->
                    <div v-if="val.status == 0 || val.status == 1">已预约</div><!-- 已预约 -->
                    <div v-else-if="val.status == 2"><a href="javascript:void(0)" @click="showHideOnBlur = true; orderId = val.id">去评价</a></div><!-- 已完成 -->
                    <div v-else-if="val.status == 3"><router-link :to="{ path: '/digest', query: { sid: val.sid, nid: val.nid, open: 1 } }">再次预约</router-link></div><!-- 预约取消 -->
                    <div v-else-if="val.status == 4">已评价</div>
                </div>
                <div class="line"></div>
            </div>
        </section>
        <!-- 遮罩：选择充值金额 -->
        <div v-transfer-dom>
            <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                <div class="txtArea">
                    <p class="title">评价</p>
                    <textarea class="textContent" placeholder="请输入您的评论" v-model="comment"></textarea>
                    <div class="btnCont">
                        <div class="inSubmit" @click="subComment()">提交评价</div>
                        <div class="inSubmit inCancel" @click="showHideOnBlur = false">取消</div>
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
import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
// import header from '../../components/header/header';
export default {
    directives: {
        TransferDom
    },
    components :{
        'v-view': view,
        XDialog,
        XButton,
        // 'v-header': header
    },
    data(){
        return {
            data: [],
            showHideOnBlur: false,
            // 预约评论相关
            comment: '',
            orderId: '',
        }
    },
    methods: {
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/myAppointment?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res)
                this.data = res.data
            });
        },
        // 提交评价
        subComment: function(){
            console.log(this.orderId)
            this.$http({
                method: 'get',
                url: global.Domain + '/user/servmsgAdd?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + this.orderId + '&content=' + this.comment,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res)
            });
            this.showHideOnBlur = false;
            this.getDataFromBackend();
            this.comment = '';
        }
    },
    mounted(){
        this.getDataFromBackend()
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 大选择窗口
.v-transfer-dom
    .vux-x-dialog
        .weui-dialog
            max-width none !important
            width auto !important
            text-align left !important
            border-radius 0.1875rem
            z-index 4999 !important
            .txtArea
                width 8.2813rem
                padding 0 0.4375rem
                .title
                    margin 0.4063rem 0 0.3438rem 0
                    font-size fs
                    color #555
                .textContent
                    width 100%
                    height 5.3125rem
                    font-size fs + 0.0313rem
                    border 0
                    outline 0
                    resize none
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
// 主体
.subscribe-wrapper
    position: absolute
    left: 0
    margin-bottom: 0.6719rem
    width: 100%
    height: 100%
    font-size: 0
    overflow: hidden
    .route-item
        footerCss()
    // .header
    //     headerCss()
    .noSubs
        display flex
        justify-content center
        align-items center
        width 100%
        height 10rem
        p
            font-size fs + 0.125rem
        a
            font-size fs + 0.125rem
            color #ea68a2
    .main
        .activity-wrapper
            width: 100%
            background: #fff
            .activity-item
                display: flex
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 2.75rem
                .picture
                    margin: 0.4688rem 0.3125rem 0.4688rem 0
                    img
                        width: 2.0938rem
                        height: 2.0938rem
                .content
                    width: 100%
                    margin-top: 0.4688rem
                    margin-right: 0.4375rem
                    p:first-child
                        margin-bottom: 0.375rem
                        font-size: fs
                        color: #333
                        width: 90%
                        height: 0.5rem
                        white-space: nowrap
                        overflow: hidden
                        text-overflow: ellipsis
                    p
                        line-height: 0.5625rem
                        font-size: fs
                        color: #909090                          
                    div
                        margin-bottom:  -0.0781rem
                        width: 1.5625rem
                        height: 0.4688rem
                        line-height: 0.4688rem
                        font-size: fs - 0.0313rem
                        background: #ea68a2
                        border-radius: 0.0781rem
                        color: #fff
                        text-align: center
                        
            .info
                display flex
                justify-content flex-end
                width: 100%
                height: 1.125rem
                div:last-child
                    margin-right: 0.4375rem
                div
                    display flex
                    justify-content center
                    align-items center
                    width: 1.8438rem
                    height: 0.5625rem
                    padding 0.2188rem
                    font-size: fs
                    color: #ea68a2
                    a
                        font-size: fs
                        color: #fff
                        width: 1.8438rem
                        height: 0.5625rem
                        line-height: 0.5625rem
                        text-align: center
                        background: #ea68a2
                        border-radius: 0.1563rem
            .line
                margin-left: 0.4375rem
                width: 100%
                height: 1px  
                background: #e0e0e0
</style>

