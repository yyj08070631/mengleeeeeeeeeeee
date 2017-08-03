<template>
    <div class="expand-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
                    <img src="./arrow_left.png" height="16">
                    <span>返回</span>
                </a>
                <h1 class="title">拓展统计</h1>
                <a href="#search">
                    <img class="search" src="./search.png" />
                </a>
            </div>
        </div>
        <div class="expand-board">
            <span class="rank-title">拓展总收益（元）</span>
            <h1 class="myExpand">{{data.total_money | num}}</h1>
        </div>
        <div class="content-wrapper">
            <a href="javascript:void(0)" class="get-expand">
                <span class="title">我的团队</span>
                <div class="link-wrapper">
                    <img class="more" width=16 height=16 src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="expand-computed">
                <div class="content">
                    <span class="computed">|&nbsp;本月</span>
                    <div class="link-wrapper">
                        <span>获得：</span>
                        <span class="number">6880.00</span>
                        <span>已到账</span>
                    </div>
                </div>
            </a>
            <div class="expand-item expand-item-empty" v-if="data.list.length == 0">本月还没有拓展收益哦:-D</div>
            <a href="javascript:void(0)" class="expand-item" v-for="(val,key) in data.list" v-else>
                <div class="expand-msg">
                    <span class="from">{{val.tName}}</span>
                    <span class="date">{{val.ctime}}</span>
                </div>
                <span class="get-number">{{val.money}}</span>
            </a>
        </div>
    
    </div>
</template>
<script type="ecmascript-6">
export default {
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
        }
    },
    filters: {
        // 1,025.00
        num: function (value) {
            // console.log(value)
            let afterPt = value.toFixed(2).split('.')[1];
            // console.log(afterPt); // 00
            value = String(value.toFixed(2).split('.')[0]);
            let result = '';
            let i = 0;
            for (i = 3; i < value.length; i += 3) {
                result = ',' + value.slice(-i) + result;
            }
            result = value.slice(0, value.length % 3) + result + '.' + afterPt;
            return result
        }
    },
    computed: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    html, body, #app
        height 100%

    width = 100%
    .expand-wrapper
        width: 100%
        height: 100%
        font-size: 0
        background: #f0f0f0
        .header
            headerCss()
        .expand-board
            height 4.375rem
            padding-top 1.0938rem
            background-color #ea68a2
            .rank-title
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

