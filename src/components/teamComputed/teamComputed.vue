<template>
    <div class="title-wrapper">
         <!--头部  -->
        <v-header></v-header>
        <div class="title-board">
            <span class="rank-title">团队总收益（元）</span>
            <h1 class="myTitle">{{data.total | num}}</h1>
        </div>
        <a href="javascript:void(0)" class="get-title indent">
            <span class="title">我的团队</span>
            <div class="link-wrapper">
                <img class="more" src="./more.png">
            </div>
        </a>
        <a href="javascript:void(0)" class="title-computed">
            <span class="computed">本月</span>
            <div class="link-wrapper">
                <span>获得：</span>
                <span class="number">1500500.00</span>
                <span class="state">未激活</span>
            </div>
        </a>
        <div class="title-item title-item-empty" v-if="data.list.length == 0">本月还没有团队收益哦:-D</div>
        <a href="javascript:void(0)" class="title-item" v-for="(val,key) in data.list" v-else>
            <div class="title-msg">
                <span class="from">{{val.username}}</span>
                <span class="date">团队人数：{{val.total_people}}人</span>
            </div>
            <span class="get-number">{{val.total_money}}</span>
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
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    width = 100%
    .title-wrapper
        width: 100%
        height: 100%
        font-size: 0
        background: #f0f0f0
        .title-board
            height 4.375rem
            padding-top 1.0938rem
            background-color #ea68a2
            .rank-title
                padding .8438rem 0 .75rem .5rem
                font-size .4063rem
                color #fff
            .myTitle
                padding-left .5rem
                font-size 1.625rem
                color #fff
        .get-title
            display: block
            position: relative
            width: 100%
            height: 1.3438rem
            line-height: 1.3438rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .title
                margin-left: 0.5rem
                float: left 
                font-size: 0.4063rem
                color: #333   
            .link-wrapper
                float: right
                margin: 0 0.25rem 0 0
                height: 100% 
                .more
                    margin: 0.375rem 0 0 0.25rem 
                    width: 0.1875rem
                    height: 0.1875rem        
        .indent
            margin-bottom: 0.625rem
    .title-computed
        display: block
        width: 100%
        height: 1.1563rem
        background: #fff
        border-bottom-1px(#e0e0e0)
        overflow hidden
        .computed
            display: inline-block
            margin: 0.375rem 0 0 0.5rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: 0.4063rem
            font-weight: bold
            text-indent: 0.1563rem
            color: #909090
        .link-wrapper
            float: right
            margin: 0 -0.3125rem 0 0
            width: 5.625rem
            height: 100%
            line-height: 1.1563rem
            font-size: 0.4063rem
            span
                float: left
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
                font-size: 0.375rem
                color: #fff
                background: #909090
                border-radius: 0.0938rem
    .title-item-empty
        display flex !important
        justify-content center
        align-items center
        font-size 0.4063rem !important
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
        border-bottom-1px(#e0e0e0)
        .title-msg
            display: inline-block
            width: 3.75rem
            height: 100%
            overflow: hidden
            .from
                margin: -0.0938rem 0 0 0.5rem
                float: left 
                height: 0.4063rem
                font-size: 0.4063rem
                color: #333
            .date
                margin: 0.1875rem 0 0 0.5rem
                float: left
                font-size: 0.3438rem
        .get-number
            margin-right: 0.5rem
            float: right
            line-height: 1.6875rem 
            font-size: 0.4063rem    
            color: #333
    .title-item:last-child:after
            border 0
</style>

