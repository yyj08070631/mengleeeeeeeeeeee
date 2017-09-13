<template>
    <div class="expandComput-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="expand-board">
            <span class="rank-title">拓展总收益（元）</span>
            <h1 class="myExpand">{{num(data.total)}}</h1>
        </div>
        <a href="#myTeam" class="get-expand">
            <span class="title">我的团队</span>
            <div class="link-wrapper">
                <img class="more" src="./more.png">
            </div>
        </a>
        <div class="content-wrapper" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
            <!-- list 为空时显示一个标头 -->
            <div class="line" v-if="!data.list || data.list.length == 0"></div>
            <a href="javascript:void(0)" class="expand-computed" v-if="!data.list || data.list.length == 0">
                <div class="content">
                    <span class="computed">|&nbsp;本月</span>
                    <div class="link-wrapper">
                        <span>获得：</span>
                        <span class="number">￥0.00</span>
                        <span class="state" v-if="data.off == 0" @click="alertTxt = data.last_msg">未激活</span>
                        <span class="state stateYi" v-else>已激活</span>
                    </div>
                </div>
            </a>
            <div class="expand-item expand-item-empty" v-if="!data.list || data.list == ''">本月还没有拓展收益哦:-D</div>
            <!-- 遍历才是正道 -.- -->
            <div v-for="(val,key) in data.list" v-else>
                <div class="line" v-if="val.t_day"></div>
                <a href="javascript:void(0)" class="expand-computed" v-if="val.t_day">
                    <div class="content">
                        <span class="computed">|&nbsp;{{val.t_day}}</span>
                        <div class="link-wrapper">
                            <span>拓展奖：</span>
                            <span class="number">￥{{num(val.t_income)}}</span>
                            <span class="state" v-if="val.t_activation == 0" @click="key == 0 ? alertMsg(data.msg) : ''">未激活</span>
                            <span class="state stateYi" v-else>已激活</span>
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">{{val.susername}}&nbsp;-&nbsp;{{val.bind}}</span>
                        <span class="date">{{val.time}}</span>
                    </div>
                    <span class="get-number">+{{num(val.money)}}</span>
                </a>
            </div>
            <div class="loadMore" v-if="data.list && data.list.length != ''" @click="loadMore()">{{loadMoreMessage}}</div>
        </div>
    </div>
</template>
 <script type="ecmascript-6">
//  import { Scroller } from 'vux'
// import header from '../../components/header/header';
export default {
    components: {
        // 'v-header': header,
        // Scroller
    },
    data() {
        return {
            data: [],
            // 分页页数
            page: 2,
            // 加载更多盒子的文字
            loadMoreMessage: '下拉加载更多',
            // 是否可以滚动加载
            canScroll: true
        }
    },
    created() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/rewardList?userId===tPtcNLZARXEuvDhRSFGkQX&p=1',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
                if(res.data.off == 1 && res.data.remind == 1){
                    alert(res.data.msg)
                }
                if (res.data.status == 0) {
                    this.loadMoreMessage = '没有更多了';
                    this.canScroll = false;
                }
            })
        },
        // 分页相关
        loadMore: function() {
            // console.log(1)
            if (this.canScroll) {
                let self = this;
                self.loadMoreMessage = '努力加载中....'
                self.$http({
                    method: 'get',
                    url: global.Domain + '/user/rewardList?userId===tPtcNLZARXEuvDhRSFGkQX&p=' + this.page,
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
    computed: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.expandComput-wrapper
    width: 100%
    height: 100%
    font-size: 0
    background: #f0f0f0
    .expand-board
        height 4.375rem
        background-color #ea68a2
        .rank-title
            display block 
            padding .8438rem 0 .75rem .5rem
            font-size fs
            color #fff
        .myExpand
            padding-left .5rem
            font-size fs + 1.1875rem
            color #fff
    .get-expand
        display: block
        position: relative
        width: 100%
        height: 1.3438rem
        line-height: 1.3438rem
        background: #fff
        font-size: 0
        .title
            float: left 
            margin-left .5rem
            font-size: fs
            color: #333
        .link-wrapper
            float: right
            margin: 0 .5rem 0 0
            height: 100%
            .more
                margin: 0.4688rem 0 0 0.25rem
                width: 0.375rem
                height: 0.375rem
    .content-wrapper
        width: 100%
        background: #f0f0f0
    .line                     
        width: 100%
        height: 0.3125rem
        background: #f0f0f0
    .expand-computed
        display flex
        flex-direction column
        width: 100%
        background: #fff
        .content
            display flex
            justify-content space-between
            height: 1.1563rem
            margin-left .5rem
            border-bottom 1px solid #e0e0e0
            .computed
                display flex
                align-items center
                height: 100%
                font-size: fs
                font-weight: bold
                color: #909090
            .link-wrapper
                display flex
                align-items center
                height: 100%
                margin-right .5rem
                font-size: fs
                .number
                    color: #ea68a2
                .state
                    display: inline-block
                    margin: 0 0 0 0.1875rem
                    padding: 0 0.0625rem
                    height: 0.625rem
                    line-height: 0.625rem
                    font-size: fs - 0.0313rem
                    color: #fff
                    background: #909090
                    border-radius: 0.0938rem
                .stateYi
                    background-color #ea68a2
    .expand-item-empty
        justify-content center !important
        font-size fs !important
        padding 0 !important
        line-height inherit !important
    .expand-item
        display flex
        align-items center
        justify-content space-between
        position: relative
        width: 100%
        height: 1.6875rem
        line-height: 1.3438rem
        background: #fff
        font-size: 0
        border-bottom 1px solid #e0e0e0
        .expand-msg
            display flex
            flex-direction column
            width: 3.75rem
            height: 100%
            margin-left .5rem
            .from
                margin: -0.1875rem 0 0 0
                float: left 
                height: 0.4063rem
                font-size: fs
                color: #333
            .date
                margin: 0.1875rem 0 0 0
                float: left
                font-size: fs - 0.0625rem
        .get-number
            padding-right .5rem
            line-height: 1.6875rem 
            font-size: fs
            color: #333
    .expand-item:last-child:after
        border 0
    .loadMore
        display flex
        justify-content center
        align-items center
        width 100%
        height 1.25rem
        background-color #fff
        font-size fs + 0.0313rem
</style>

