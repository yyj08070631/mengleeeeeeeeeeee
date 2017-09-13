<template>
    <div class="bill-wrapper">
        <!-- <v-header></v-header> -->
        <div class="tag-wrapper">
            <span class="title">{{getYearMonthNow == queryMonth ? '本月' : queryMonth}}</span>
            <div class="monthList">
                <div class="monthListChoose" v-if="data.list && data.list != ''">
                    <popup-picker :data="monthList" v-model="pickerMonth" placeholder="查看月账单" @on-change="showMonthBill"></popup-picker>
                    <img class="more" src="./__more.png" />
                </div>
                <p class="count">该月总收入：＋{{!(!data.list || data.list == '') ? monthCountList[queryMonth].income : 0}}</p>
                <p class="count">该月总支出：－{{!(!data.list || data.list == '') ? monthCountList[queryMonth].consume : 0}}</p>
            </div>
        </div>
        <div class="content-wrapper" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
            <div class="bill-item bill-item-empty" v-if="!data.list || data.list == ''">本月还没有账单数据哦:-D</div>
            <div class="bill-item" v-for="(val,key) in data.list" v-else>
                <div class="date">
                    <span>{{val.time | getDateUp}}</span>
                    <span>{{dateFormatYeah(val.time, 'MM-DD')}}</span>
                </div>
                <img class="icon" src="./images/minus.png" v-if="val.c == 1">
                <img class="icon" src="./images/bao.png" v-else-if="val.c == 4">
                <img class="icon" src="./images/add.png" v-else>
                <div class="details">
                    <span class="money">{{val.symbol}}&nbsp;{{val.money | num}}</span>
                    <span v-if="val.c == 1">由&nbsp;{{val.type}}&nbsp;消费</span>
                    <span v-else-if="val.c == 2">{{val.type}}&nbsp;-&nbsp;{{dateFormatYeah(val.time, 'YYYY.MM.DD')}}&nbsp;-&nbsp;收益发放</span>
                    <span v-else-if="val.c == 3 || val.c == 4">{{val.type}}&nbsp;-&nbsp;{{dateFormatYeah(val.time, 'YYYY.MM.DD')}}</span>
                </div>
            </div>
            <div class="loadMore" v-if="data.list && data.list != ''" @click="loadMore()">{{loadMoreMessage}}</div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import { dateFormat, PopupPicker } from 'vux';
// import header from '../../components/header/header';
export default {
    components: {
        // 'v-header': header
        dateFormat,
        PopupPicker,
    },
    data() {
        return {
            data: [],
            // 分页页数
            page: 2,
            // 加载更多盒子的文字
            loadMoreMessage: '下拉加载更多',
            // 是否可以滚动加载
            canScroll: true,
            // 查询特定月的字符串
            queryMonth: this.dateFormatYeah((new Date()).getTime(), 'YYYY-MM'),
            // 选择查看月份
            pickerMonth: [],
            // 查看月份的列表
            monthList: [[]],
            // 整个查询出来的月份列表 (含两个统计)
            monthCountList: [],
        }
    },
    created() {
        this.getDataFromBackend(),
        this.getMonthList()
    },
    methods: {
        // 当月账单列表
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/recordList?userId===tPtcNLZARXEuvDhRSFGkQX&p=1&time=' + this.queryMonth,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
                if (res.data.status == 0) {
                    this.loadMoreMessage = '没有更多了';
                    this.canScroll = false;
                }
            });
        },
        // 月份列表
        getMonthList: function(){
            this.$http({
                method: 'get',
                url: global.Domain + '/User/monthList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                for(let key in res.data.list){
                    this.monthList[0].push(key);
                }
                this.monthCountList = res.data.list;
                // console.log(this.monthList)
            });
        },
        // 查询对应月份列表
        showMonthBill: function(val){
            // console.log(val);
            this.queryMonth = val[0];
            this.getDataFromBackend();
        },
        // 分页相关
        loadMore: function() {
            if (this.canScroll) {
                let self = this;
                self.loadMoreMessage = '努力加载中....'
                self.$http({
                    method: 'get',
                    url: global.Domain + '/user/recordList?userId===tPtcNLZARXEuvDhRSFGkQX&p=' + this.page + '&time=' + this.queryMonth,
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
        // 时间格式化
        dateFormatYeah: function(stamp, format){
            return dateFormat(stamp, format);
        },
    },
    filters: {
        // 1000.00
        num: function(val){
            val = parseFloat(val).toFixed(2)
            return val
        },
        // 根据ctime获取日期
        getDateUp: function(val){
            let staGet =  new Date(val);
            let day = staGet.getDay();
            if(day == 1){
                return '周一'
            } else if (day == 2){
                return '周二'
            } else if (day == 3){
                return '周三'
            } else if (day == 4){
                return '周四'
            } else if (day == 5){
                return '周五'
            } else if (day == 6){
                return '周六'
            } else if (day == 7){
                return '周日'
            }
        },
    },
    computed: {
        getYearMonthNow: function(){
            return this.dateFormatYeah((new Date()).getTime(), 'YYYY-MM')
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.bill-wrapper
    position: absolute
    top 0
    left 0
    width: 100%
    height: 100%
    background: #f0f0f0
    // .header
    //     headerCss()
    .tag-wrapper
        display flex
        align-items center
        justify-content space-between
        width: 100%
        height 2.1875rem
        line-height: 1rem
        background: #f0f0f0
        .title
            margin-left: 0.5rem
            float: left
            font-size: fs + 0.25rem
            color: #333
        .monthList
            display flex
            flex-direction column
            justify-content center
            height 100%
            margin-right .5rem
            .monthListChoose
                display flex
                align-items center
                justify-content flex-end
                height fs - 0.0313rem
                .more
                    display: block
                    width fs - 0.0313rem
                    height fs - 0.0313rem
                .vux-popup-picker-placeholder
                    display block
                    height 100%
                    margin-right 0.0938rem
                    font-size fs - 0.0313rem
                    color #909090
                .vux-popup-picker-value
                    display block
                    height 100%
                    margin-right 0.0938rem
                    font-size fs - 0.0313rem
                    color #909090
                .vux-cell-box 
                    display: flex;
                    align-items: center;
                    top: 0;
                    width 3.4688rem !important
                    height 1rem !important
                    color: #525252;
                    line-height: 0.94rem;
                    overflow: hidden;
                    .weui-cell 
                        display: flex;
                        width: 100%;
                        height: 100%;
                        .weui-cell__hd 
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            .weui-label 
                                width: 2.3438rem;
                        .vux-cell-primary 
                            display: flex;
                            align-items: center;
                            width: 100%;
                            .vux-popup-picker-select 
                                display: flex;
                        .weui-cell__ft 
                            display: none;
                        .vux-popup-picker-value 
                            font-size: 0.3125rem !important
            .count
                display flex
                align-items center
                height fs - 0.0313rem
                margin-top 0.25rem
                font-size fs - 0.0313rem
                color #909090
        .checkBill
            margin-right: 0.1563rem 
            float: right 
            font-size: fs - 0.0156rem
            color: #909090
    .content-wrapper
        background: #fff
        .bill-item-empty
            display flex
            justify-content center
            align-items center
            font-size fs + 0.0156rem
            margin-left 0 !important
        .bill-item
            display flex
            align-items center
            margin: 0 0.5rem
            width: 9.5rem
            height: 1.6875rem 
            border-bottom 1px solid #e0e0e0
            .date
                display flex
                flex-direction column
                justify-content center
                float: left
                height: 100%
                text-align:center
                span:last-child
                    margin-top: 0.1875rem 
                    font-size: fs - 0.0469rem
                span
                    display: block
                    font-size: fs + 0.0156rem
                    color: #909090
            .icon
                float: left
                margin: 0 .625rem 0 .5rem
                width 1.1563rem
                height 1.1563rem
            .details
                display flex
                flex-direction column
                justify-content center
                float: left
                height: 100%    
                .money
                    margin 0
                    font-size fs + 0.0156rem
                    color: #333
                span
                    display: block
                    margin-top: 0.1875rem
                    font-size: fs - 0.0469rem
                    color: #909090
        .bottom-line
            width: 100%
            height: 100%
            background: #fff        
            .bill-item
                margin: 0 0.5rem 
                width: 100%
                height: 1.25rem 
                border-bottom-1px(#e0e0e0)
                background: #fff
                .date
                    float: left
                    height: 100%
                    text-align:center
                    span:first-child
                        margin-top: 0.2031rem
                    span:last-child
                        margin-top: 0.0938rem 
                        font-size: fs - 0.0469rem
                    span
                        display: block
                        font-size: fs + 0.0156rem
                        color: #909090
                .icon
                    float: left
                    margin: 0.2891rem 0.3125rem 0 0.25rem
                    width: 0.5781rem
                    height: 0.5781rem
                .details
                    float: left
                    height: 100%    
                    .money
                        margin-top: 0.2031rem
                        font-size fs + 0.0156rem
                        color: #333
                    span                      
                        display: block
                        margin-top: 0.0938rem
                        font-size fs - 0.0469rem
                        color: #909090
    .loadMore
        display flex
        justify-content center
        align-items center
        width 100%
        height 1.25rem
        background-color #fff
        font-size fs + 0.0313rem
// -------------------------------
// 月份选择框样式
.scroller-component 
    height: 5.76rem !important;
.scroller-mask 
    background-size: 100% 2.55rem !important;
.scroller-content 
    top -0.12rem !important
.scroller-item 
    font-size 0.375rem !important
    height 0.66rem !important
    line-height 0.66rem !important
.scroller-indicator 
    height 0.66rem !important
    top 2.54rem !important
    font-size 0.4375rem !important
.vux-popup-picker-header 
    height 0.96rem !important
    line-height 0.96rem !important
.vux-popup-picker-header-menu 
    line-height 0.96rem !important
    text-align center !important
    color #333
    font-size 0.3125rem
    background #f6f6f6
.vux-popup-picker-header-menu-right 
    background #ea68a2
    color #fff
    font-size 0.3125rem
.vux-popup-dialog 
    overflow-y auto !important
</style>
