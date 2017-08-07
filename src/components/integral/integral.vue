<template>
    <div class="integral-wrapper">
         <!--头部  -->
        <v-header></v-header>
        <div class="integral-board" v-for="dataItem in appData">
            <span class="rank-title">{{dataItem.rank}}</span>
            <span class="rank-question">等级特权?</span>
            <h1 class="myIntegral">{{dataItem.integral}}</h1>
        </div>
        <div class="content-wrapper" v-for="dataItem in appData">
            <a href="javascript:void(0)" class="get-expand">
                <router-link to="/myTeam" class="title">我的团队</router-link>
                <div class="link-wrapper">
                    <img class="more" width=16 height=16 src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="expand-computed border-bottom-1px">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>获得：</span>
                    <span class="number">{{dataItem.countIntegral}}</span>
                    <span @click="getDataFromBackend">已到账</span>
                </div>
            </a>
            <!-- 积分获取详情 -->
            <div class="expand-item expand-item-empty" v-if="data.length == 0">本月还没有积分进账哦:-D</div>
            <a href="javascript:void(0)" class="expand-item" v-for="(val,key) in data" v-else>
                <div class="expand-msg">
                    <span class="from">{{item.expense}}</span>
                    <span class="date">{{item.date}}</span>
                </div>
                <span class="get-number">{{item.getMoney}}</span>
            </a>
        </div>
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

    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Nearby/serice?sid=1&nid='+this.$route.query.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
            })
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
    width = 100%
    .integral-wrapper
        position: absolute
        top: 1.0938rem
        width: 100%
        height: 100%
        font-size: 0
        background: #f0f0f0
        .integral-board
            padding: 0.75rem 0 0 0.5rem
            width: width
            height: 3.5rem
            background: #ea6aa2
            color: #fff
            .rank-title
                float: left    
                font-size: 0.4063rem
                vertical-align: top
            .rank-question
                display: inline-block
                margin-left: 5px
                margin-top: -1.5px
                padding: 2px
                width: 1.75rem
                font-size: 0.3438rem
                text-align: center
                border: 1px solid #fff
                border-radius: 0.3125rem   
                vertical-align: top
            .myIntegral
                margin-top: 0.75rem
                font-size: 1.6875rem
        .get-integral
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
                margin: 0 0.5rem 0 0
                height: 100%
                .more
                    margin: 12px 0 0 0
        .indent
            margin-bottom: 10px
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
                border-bottom-1px(#e0e0e0)
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
            display: block
            margin-left: 0.5rem
            width: 100%
            height: 1.1563rem
            background: #fff
            border-bottom-1px(#e0e0e0)
            .computed
                display: inline-block
                margin: 0.375rem 0 0 0
                height: 0.4375rem
                border-left: 0.0938rem solid #909090
                font-size: 0.4063rem
                font-weight: bold
                text-indent: 0.1563rem
                color: #909090
            .link-wrapper
                float: right
                margin: 0 1rem 0 0
                height: 100%
                line-height: 1.1563rem
                font-size: 0.4063rem
                span 
                    float: left
                    color: #333
                .number
                    float: left
                    color: #ea68a2
        .expand-item
            display: block
            position: relative
            margin-left: 0.5rem
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
        .expand-item-empty
            display flex
            justify-content center
            align-items center
            margin-left 0 !important
            font-size 0.4063rem !important
</style>

