<template>
    <div class="team-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="title-board" style="background-image:url('http://go.zs-mmall.com/dream/index.php/Api/bg/team')">
            <span class="rank-title">团队总收益（元）</span>
            <h1 class="myTitle">{{num(data.total)}}</h1>
        </div>
        <a href="#myTeam" class="get-title">
            <span class="title">我的团队</span>
            <div class="link-wrapper">
                <img class="more" src="./more.png">
            </div>
        </a>
        <div class="title-item-container" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
            <!-- list 为空时显示一个标头 -->
            <div class="line" v-if="!data.list || data.list == ''"></div>
            <a href="javascript:void(0)" class="title-computed" v-if="!data.list || data.list == ''">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>总业绩：</span>
                    <span class="number">￥0.00</span>
                    <span class="state stateYi" v-if="data.off == 1">已激活</span>
                    <span class="state" v-else @click="alertTxt = data.last_msg">未激活</span>
                </div>
            </a>
            <div class="title-item title-item-empty" v-if="!data.list || data.list == ''">本月还没有团队收益哦:-D</div>
            <!-- 遍历才是正道 -.- -->
            <div v-for="(val,key) in data.list" v-else>
                <div class="line" v-if="val.t_day"></div>
                <a href="javascript:void(0)" class="title-computed" v-if="val.t_day">
                    <span class="computed">{{val.t_day}}</span>
                    <div class="link-wrapper">
                        <span>总业绩：</span>
                        <span class="number">￥{{num(val.t_income)}}</span>
                        <!-- true -->
                        <span class="state" v-if="val.t_last_month && data.off == 1 && data.last_reward == 1" @click="alertTxt = data.last_msg; alert = true">未激活</span>
                        <span class="state" v-else-if="val.t_activation == 0" @click="key == 0 ? alertMsg(data.msg) : ''">未激活</span>
                        <span class="state stateYi" v-else>已激活</span>
                    </div>
                </a>
                <router-link :to="val.subnum > 0 ? { path: '/myTeamIndirect', query: { iid: val.iid } } : '/teamComputed'" class="title-item" v-if="val.iid">
                    <div class="title-msg">
                        <span class="from">{{val.susername}}&nbsp;团队业绩</span>
                        <span class="date">团队人数：{{val.subnum}}人</span>
                    </div>
                    <span class="get-number">￥{{num(val.money)}}</span>
                </router-link>
            </div>
            <div class="loadMore" v-if="data.list && data.list != ''" @click="loadMore()">{{loadMoreMessage}}</div>
        </div>
        <!-- 页面所有弹窗 -->
        <confirm v-model="alert" title="提示" @on-confirm="getTeamReward()">
            <p style="text-align:center;">{{alertTxt}}</p>
        </confirm>
    </div>
</template>
<script type="ecmascript-6">
import header from '../../components/header/header';
import { Confirm, XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        Confirm,
        'v-header': header
        // Toast,
        // Group,
        // Alert
        // 'v-header': header
    },
    data() {
        return {
            data: [],
            off: '',
            // 分页页数
            page: 2,
            // 加载更多盒子的文字
            loadMoreMessage: '下拉加载更多',
            // 是否可以滚动加载
            canScroll: true,
            // 弹窗 & 弹窗文字
            alert: false,
            alertTxt: '',
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/groupCountList?userId===tPtcNLZARXEuvDhRSFGkQX&p=1',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                if (res.data.status == 0) {
                    this.loadMoreMessage = '没有更多了';
                    this.canScroll = false;
                }
                this.data = res.data;
                // --表示当月已激活团队奖励--------------------
                if (res.data.off == 1 && res.data.bool == 1) {
                    alert(res.data.msg);
                }
            })
        },
        // 分页相关
        loadMore: function() {
            if (this.canScroll) {
                let self = this;
                self.loadMoreMessage = '努力加载中....'
                self.$http({
                    method: 'get',
                    url: global.Domain + '/user/groupCountList?userId===tPtcNLZARXEuvDhRSFGkQX&p=' + this.page ? this.page : 2,
                    emulateJSON: true
                }).then(function(response) {
                    // console.log(2);
                    let res = response.body;
                    console.log(res);
                    if (!res.data.list || res.data.list == '') {
                        // console.log(2.1);
                        self.loadMoreMessage = '没有更多了';
                        self.canScroll = false;
                    } else {
                        // console.log(3);
                        res.data.list.map(function(val, key) {
                            self.data.list.push(val);
                        });
                        if (res.data.status == 0) {
                            // console.log(3.1);
                            self.loadMoreMessage = '没有更多了';
                            self.canScroll = false;
                        } else {
                            // console.log(3.2);
                            // console.log('* ' + res.data.status)
                            self.page++;
                            self.loadMoreMessage = '下拉加载更多';
                        }
                    }
                });
            } else {
                return
            }
        },
        // 确认领取上月团队奖励------------ on-confirm 回调
        getTeamReward: function(){
            this.$http({
                method: 'get',
                url: global.Domain + '/User/ActivateLastMonthReward?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                if(res.status == 1 || res.status == 3 || res.status == 4){
                    alert(res.msg);
                } else {
                    return
                }
            })
        },
        // 弹窗
        alertMsg: function(msg){
            alert(msg);
        },
        // 1,020.00
        outputdollars: function (number) {
            if (number.length <= 3)
                return (number == '' ? '0' : number);
            else {
                var mod = number.length % 3;
                var output = (mod == 0 ? '' : (number.substring(0, mod)));
                for (var i = 0; i < Math.floor(number.length / 3); i++) {
                    if ((mod == 0) && (i == 0))
                        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                    else
                        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                }
                return (output);
            }
        },
        outputcents: function (amount) {
            amount = Math.round(((amount) - Math.floor(amount)) * 100);
            return (amount < 10 ? '.0' + amount : '.' + amount);
        },
        num: function (number) {
            number = String(number).replace(/\,/g, "");
            if (isNaN(number) || number == "") return "";
            number = Math.round(number * 100) / 100;
            if (number < 0)
                return '-' + this.outputdollars(Math.floor(Math.abs(number) - 0) + '') + this.outputcents(Math.abs(number) - 0);
            else
                return this.outputdollars(Math.floor(number - 0) + '') + this.outputcents(number - 0);
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.team-wrapper
    width: 100%
    height: 100%
    font-size: 0
    background: #f0f0f0
    .line
        width: 100%
        height: 0.3125rem
        background: #f0f0f0
    .title-board
        height 4.375rem
        background-color #fff
        background-size 10rem 4.375rem
        .rank-title
            display block !important
            padding .8438rem 0 .75rem .5rem
            font-size fs
            color #fff
        .myTitle
            padding-left .5rem
            font-size fs + 1.1875rem
            color #fff
    .get-title
        display: block
        position: relative
        width: 100%
        height: 1.3438rem
        line-height: 1.3438rem
        background: #fff
        font-size: 0
        border-bottom 1px solid #e0e0e0
        .title
            margin-top 0 !important
            margin-left: 0.5rem
            float: left 
            font-size: fs
            color: #333   
        .link-wrapper
            display flex
            align-items center
            float: right
            margin: 0 0.25rem 0 0
            height: 100% 
            .more
                width: 0.375rem
                height: 0.375rem
    .title-computed
        display flex
        justify-content space-between
        align-items center
        width: 100%
        height: 1.1563rem
        background: #fff
        border-bottom 1px solid #e0e0e0
        overflow hidden
        .computed
            display flex
            align-items center
            margin: 0 0 0 0.5rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: fs
            font-weight: bold
            text-indent: 0.1563rem
            color: #909090
        .link-wrapper
            display flex
            margin: 0 .5rem 0 0
            height: 100%
            line-height: 1.1563rem
            font-size: fs
            span
                color: #333
            .number
                float: left
                color: #ea68a2
            .state
                display: inline-block
                margin: 0.25rem 0 0 0.1875rem
                padding: 0 0.0625rem
                height: 0.625rem
                line-height: 0.625rem
                font-size: fs - 0.0313rem
                color: #fff
                background: #909090
                border-radius: 0.0938rem
            .stateYi
                background-color #ea68a2
    .title-item-empty
        display flex !important
        justify-content center
        align-items center
        font-size fs !important
        padding 0 !important
        line-height inherit !important
    .title-item
        display: block
        position: relative
        width: 100%
        height: 1.6875rem
        line-height: 1.3438rem
        background: #fff
        font-size: 0
        border-bottom 1px solid #e0e0e0
        .title-msg
            display: inline-block
            width: 3.75rem
            height: 100%
            overflow: hidden
            .from
                margin: -0.0938rem 0 0 0.5rem
                float: left 
                height: 0.4063rem
                font-size: fs
                color: #333
            .date
                margin: 0.1875rem 0 0 0.5rem
                float: left
                font-size: fs - 0.0938rem
        .get-number
            margin-right: 0.5rem
            float: right
            line-height: 1.6875rem 
            font-size: fs
            color: #333
    .title-item:last-child:after
        border 0
    .loadMore
        display flex
        justify-content center
        align-items center
        width 100%
        height 1.25rem
        background-color #fff
        font-size fs + 0.0313rem
    // confirm 样式
    .vux-x-dialog
        .weui-dialog
            max-width 7rem !important
            width 80% !important
            text-align center !important
            .weui-dialog__hd
                padding 1.1rem 1.6rem 0.5rem !important
                .weui-dialog__title
                    font-size fs + 0.0938rem !important
            .weui-dialog__bd
                padding-bottom 1.2rem !important
                p
                    font-size fs + 0.0313rem !important
            .weui-dialog__ft
                line-height 1.25rem
                .weui-dialog__btn
                    font-size fs + 0.0625rem !important
</style>

