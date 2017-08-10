<template>
    <div class="expand-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <div class="expand-board">
            <span class="rank-title">拓展总收益（元）</span>
            <h1 class="myExpand">{{num(data.total_money)}}</h1>
        </div>
        <div class="content-wrapper">
            <a href="javascript:void(0)" class="get-expand">
                <span class="title">我的团队</span>
                <div class="link-wrapper">
                    <img class="more" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="expand-computed">
                <div class="content">
                    <span class="computed">|&nbsp;本月</span>
                    <div class="link-wrapper">
                        <span>获得：</span>
                        <span class="number">￥6880.00</span>
                    </div>
                </div>
            </a>
            <div class="expand-item expand-item-empty" v-if="data.list.length == 0">本月还没有拓展收益哦:-D</div>
            <a href="javascript:void(0)" class="expand-item" v-for="(val,key) in data.list" v-else>
                <div class="expand-msg">
                    <span class="from">{{val.sname}}{{val.tName}}&nbsp;-&nbsp;{{val.bind}}</span>
                    <span class="date">{{String(val.ctime).split(' ')[0]}}</span>
                </div>
                <span class="get-number">+{{num(val.money)}}</span>
            </a>
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
                url: global.Domain + '/user/rewardList?userId===tPtcNLZARXEuvDhRSFGkQX',
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
    computed: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.expand-wrapper
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
            font-size .4063rem
            color #fff
        .myExpand
            padding-left .5rem
            font-size 1.625rem
            color #fff
    .content-wrapper
        width: 100%
        background: #f0f0f0
        overflow-x: hidden        
        .get-expand
            display: block
            position: relative
            padding-left: 0.5rem
            width: 100%
            height: 1.3438rem
            line-height: 1.3438rem
            background: #fff
            font-size: 0
            .title
                float: left 
                font-size: 0.4063rem
                color: #333
            .link-wrapper
                float: right
                margin: 0 0.875rem 0 0
                height: 100%
                .more
                    margin: 0.375rem 0 0 0.25rem
                    width: 0.375rem
                    height: 0.375rem
    .line                     
        width: 100%
        height: 0.3125rem
        background: #f0f0f0
    .expand-computed
        display flex
        flex-direction column
        padding-left: 0.5rem
        width: 100%
        background: #fff
        .content
            display flex
            justify-content space-between
            height: 1.1563rem
            border-bottom 1px solid #e0e0e0
            .computed
                display flex
                align-items center
                height: 100%
                font-size: 0.4063rem
                font-weight: bold
                color: #909090
            .link-wrapper
                display flex
                align-items center
                height: 100%
                margin-right 1rem
                font-size: 0.4063rem
                .number
                    color: #ea68a2
    .expand-item-empty
        display flex !important
        justify-content center
        align-items center
        font-size 0.4063rem !important
        padding 0 !important
        line-height inherit !important
    .expand-item
        display: block
        position: relative
        padding-left: 0.5rem
        width: 100%
        height: 1.6875rem
        line-height: 1.3438rem
        background: #fff
        font-size: 0
        border-bottom-1px(#e0e0e0)
        .expand-msg
            display: inline-block
            width: 3.75rem
            height: 100%
            overflow: hidden
            .from
                margin: -0.1875rem 0 0 0
                float: left 
                height: 0.4063rem
                font-size: 0.4063rem
                color: #333
            .date
                margin: 0.1875rem 0 0 0
                float: left
                font-size: 0.3438rem
        .get-number
            margin-right: 1.125rem
            float: right
            line-height: 1.6875rem 
            font-size: 0.4063rem    
            color: #333
    .expand-item:last-child:after
        border 0
</style>

