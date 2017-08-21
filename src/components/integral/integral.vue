<template>
    <div class="integral-wrapper">
         <!--头部  -->
        <!-- <v-header></v-header> -->
        <div class="integral-board">
            <span class="rank-title">皇冠会员</span>
            <a href="#integralHelp" class="rank-question">等级特权?</a>
            <h1 class="myIntegral">{{outputdollars(data.total)}}</h1>
        </div>
        <div class="content-wrapper">
            <a href="#myTeam" class="get-expand">
                <a href="javascript:void(0)" class="title">我的团队</a>
                <div class="link-wrapper">
                    <img class="more" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="expand-computed">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>获得：</span>
                    <span class="number">{{outputdollars(data.total_integral)}}</span>
                </div>
            </a>
            <!-- 积分获取详情 -->
            <div class="expand-item expand-item-empty" v-if="data.list.length == 0">本月还没有积分进账哦:-D</div>
            <a href="javascript:void(0)" class="expand-item" v-else v-for="(val, key) in data.list">
                <div class="expand-msg">
                    <span class="from">{{val.type}}</span>
                    <span class="date">{{String(val.ctime).split(' ')[0]}}</span>
                </div>
                <span class="get-number">+{{val.money}}</span>
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

    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/integralList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
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
    mounted(){
        this.$nextTick(function(){
             this.getDataFromBackend()
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
// 初始化
span
    display block
// 主体
.integral-wrapper
    position: absolute
    width: 100%
    height: 100%
    font-size: 0
    background: #f0f0f0
    .integral-board
        padding: 0.75rem 0 0 0.5rem
        width: 9.5rem
        height: 3.5rem
        background: #ea6aa2
        color: #fff
        .rank-title
            float: left    
            font-size: fs + 0.0313rem
            vertical-align: top
        .rank-question
            display: inline-block
            margin-left: 0.1563rem
            margin-top: -0.0469rem
            padding: 0.0625rem
            width: 1.75rem
            font-size: fs - 0.0313rem
            color #fff
            text-align: center
            border: 1px solid #fff
            border-radius: 0.3125rem   
            vertical-align: top
        .myIntegral
            margin-top: 0.75rem
            font-size: fs + 1.25rem
    .get-integral
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
            margin: 0 0.5rem 0 0
            height: 100%
            .more
                margin: 0.375rem 0 0 0
    .indent
        margin-bottom: 0.3125rem
    .content-wrapper
        width: 100%
        background: #fff
        overflow-x: hidden        
        .get-expand
            display: block
            position: relative
            margin-left: 0.5rem
            width: 100%
            height: 1.3438rem
            line-height: 1.3438rem
            background: #fff
            font-size: 0
            border-bottom 1px solid #e0e0e0
            .title
                float: left 
                font-size: fs
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
            justify-content space-between
            align-items center
            margin-left: 0.5rem
            width: 100%
            height: 1.1563rem
            background: #fff
            border-bottom 1px solid #e0e0e0
            .computed
                display flex
                align-items center
                height: 0.4375rem
                border-left: 0.0938rem solid #909090
                font-size: fs
                font-weight: bold
                text-indent: 0.1563rem
                color: #909090
            .link-wrapper
                float: right
                margin: 0 1rem 0 0
                height: 100%
                line-height: 1.1563rem
                font-size fs
                span 
                    float: left
                    color: #333
                .number
                    float: left
                    color: #ea68a2
        .expand-item
            display flex
            align-items center
            justify-content space-between
            margin-left 0.5rem
            width 9.5rem
            height 1.6875rem
            background: #fff
            border-bottom 1px solid #e0e0e0
            .expand-msg
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
        .expand-item-empty
            display flex
            justify-content center
            align-items center
            width 100% !important
            margin-left 0 !important
            font-size fs !important
</style>

