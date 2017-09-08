<template>
    <div class="title-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <div class="title-board">
            <span class="rank-title">头衔总收益（元）</span>
            <h1 class="myTitle">{{num(data.total)}}</h1>
        </div>
        <router-link to="/myTeam" class="get-title">
            <span class="title">我的团队</span>
            <div class="link-wrapper">
                <img class="more" src="./more.png">
            </div>
        </router-link>
        <!-- 晋升收益记录 -->
        <div class="title-item-container" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
            <!-- list 为空时显示一个标头 -->
            <div class="line" v-if="!data.list || data.list.length == 0"></div>
            <a href="javascript:void(0)" class="title-computed" v-if="!data.list || data.list.length == 0">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>获得：</span>
                    <span class="number">￥&nbsp;0&nbsp;</span>
                    <span>已到账</span>
                </div>
            </a>
            <div class="title-item title-item-empty" v-if="!data.list || data.list == ''">本月还没有头衔收益哦:-D</div>
            <div v-for="(val,key) in data.list" v-else>
                <div class="line" v-if="val.t_day"></div>
                <a href="javascript:void(0)" class="title-computed" v-if="val.t_day">
                    <span class="computed">{{val.t_day}}</span>
                    <div class="link-wrapper">
                        <span>获得：</span>
                        <span class="number">￥&nbsp;{{num(val.t_income)}}&nbsp;</span>
                        <span>已到账</span>
                    </div>
                </a>
                <a href="javascript:void(0)" class="title-item">
                    <div class="title-msg">
                        <span class="from">{{val.susername}}晋升-{{val.levelName}}</span>
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
// import header from '../../components/header/header';
export default {
    components: {
        // 'v-header': header
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
        getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/upgradeList?userId===tPtcNLZARXEuvDhRSFGkQX&p=1',
                emulateJSON: true
            }).then(function(response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
                if (res.data.status == 0) {
                    this.loadMoreMessage = '没有更多了';
                    this.canScroll = false;
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
                    url: global.Domain + '/user/upgradeList?userId===tPtcNLZARXEuvDhRSFGkQX&p=' + this.page,
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
        // 1,020.00
        outputdollars: function(number) {
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
        outputcents: function(amount) {
            amount = Math.round(((amount) - Math.floor(amount)) * 100);
            return (amount < 10 ? '.0' + amount : '.' + amount);
        },
        num: function(number) {
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
// 初始化
span
    display block
// 主体
.title-wrapper
    position: absolute
    width: 100%
    height: 100%
    font-size: 0
    background: #f0f0f0
    .header
        headerCss()
    .line
        width: 100%
        height: 0.3125rem
        background: #f0f0f0
    .title-board
        padding: 0.8438rem 0 0 0.5rem
        width: 9.5rem
        height: 3.5313rem
        background: #ea6aa2
        color: #fff
        .rank-title
            font-size: fs
            vertical-align: top
        .myTitle
            margin-top: 0.75rem
            font-size: fs + 1.25rem
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
            margin-left: 0.5rem
            float: left 
            font-size: fs
            color: #333
        .link-wrapper
            float: right
            .more
                margin: 0.375rem 0.375rem 0 0.25rem   
                width: 0.375rem
                height: 0.375rem
    .title-computed
        display: block
        height: 1.1563rem
        background: #fff
        border-bottom 1px solid #e0e0e0
        .computed
            display: inline-block
            margin: 0.375rem 0 0 0.5rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: fs
            font-weight: bold
            text-indent: 0.1563rem
            color: #909090
        .link-wrapper
            float: right
            margin: 0 0.5rem 0 0
            height: 100%
            line-height: 1.1563rem
            font-size: fs
            span
                float: left
                color: #333
            .number
                float: left
                color: #ea68a2
    .title-item
        display flex
        align-items center
        justify-content space-between
        padding-left 0.5rem
        width 9.5rem
        height 1.6875rem
        background: #fff
        border-bottom 1px solid #e0e0e0
        .title-msg
            .from
                font-size: fs
                color: #333
            .date
                margin: 0.1875rem 0 0 0
                font-size: fs - 0.0625rem
        .get-number
            display flex
            align-items center
            margin-right: 0.5rem
            font-size: fs
            color: #333
    .title-item-empty
        display flex
        justify-content center
        align-items center
        font-size fs !important
    .loadMore
        display flex
        justify-content center
        align-items center
        width 100%
        height 1.25rem
        background-color #fff
        font-size fs + 0.0313rem
</style>

