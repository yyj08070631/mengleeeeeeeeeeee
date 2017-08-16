<template>
    <div class="team-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="title-board">
            <span class="rank-title">团队总收益（元）</span>
            <h1 class="myTitle">{{num(data.total_income)}}</h1>
        </div>
        <a href="#myTeam" class="get-title indent">
            <span class="title">我的团队</span>
            <div class="link-wrapper">
                <img class="more" src="./more.png">
            </div>
        </a>
        <a href="javascript:void(0)" class="title-computed">
            <span class="computed">本月</span>
            <div class="link-wrapper">
                <span>获得：</span>
                <span class="number">￥{{num(data.total)}}</span>
                <span class="state">未激活</span>
            </div>
        </a>
        <div class="title-item title-item-empty" v-if="data.list.length == 0">本月还没有团队收益哦:-D</div>
        <a href="javascript:void(0)" class="title-item" v-for="(val,key) in data.list" v-else>
            <div class="title-msg">
                <span class="from">{{val.username}}&nbsp;团队业绩</span>
                <span class="date">团队人数：{{val.total_people}}人</span>
            </div>
            <span class="get-number">￥{{num(val.total_money)}}</span>
        </a>
    </div>
</template>
<script type="ecmascript-6">
import header from '../../components/header/header';
export default {
    components: {
        'v-header': header
    },
    data() {
        return {
            data: []
        }
    },
    created() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/groupCountList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
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
    .title-board
        height 4.375rem
        background-color #ea68a2
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
    .indent
        margin-bottom: 0.3125rem
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
</style>

