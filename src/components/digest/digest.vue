<template>
    <div class="digest-wrapper">
        <!-- header -->
        <!-- <v-header></v-header> -->
        <div class="serve"></div>
        <div class="serve-desc">
            <h2 class="desc-title">{{appData.sericeitem.name}}</h2>
            <span class="desc-content">
                {{appData.sericeitem.descript}}
            </span>
        </div>
        <div class="divider"></div>
        <div class="serve-date-address">
            <span class="date">时间</span>
            <div class="details">
                <span>{{appData.timeitem.name}}</span>
                <span class="mg-top">{{appData.timeitem.date}}</span>
            </div>
        </div>
        <div class="divider dividerShort"></div>
        <div class="serve-date-address">
            <span class="date">地址</span>
            <div class="details">
                <span>{{appData.nearbyitem.name}}</span>
            <span class="mg-top">{{appData.nearbyitem.address}}</span>
            </div>
        </div>
        <div class="divider"></div>
        <a href="#subscribeNow" class="link">我要预约</a>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import header from '../../components/header/header';
export default {
    components :{
        'v-view': view,
        // 'v-header': header
    },
    data(){
        return {
            appData: []
        }
    },
    methods: {
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Nearby/serice?nid=' + this.$route.query.nid+'&sid='+this.$route.query.sid,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                 console.log(res)
                this.appData = res
                //console.log(this.appData.nearbyitem.address)
            });
        },
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
    // init
    *
        letter-spacing 1px
    img, span, a
        display block

    .digest-wrapper
        margin-bottom: 1.3438rem
        width: 100%
        height: 100%
        .divider
            border-top 1px solid #e0e0e0
        .dividerShort
            margin-left 3.8125rem
        .route-item
            footerCss()
        .serve
            width: 100%
            height: 6.6875rem
            background: url(./serve.png)
            background-size: 100% 6.6875rem
        .serve-desc
            display flex
            flex-direction column
            justify-content center
            margin 0 0.5rem
            .desc-title
                margin 0.5625rem 0 0.4375rem 0
                font-size 0.3438rem
                color #333
            .desc-content
                margin-bottom 0.4688rem
                font-size 0.3438rem
                color #909090
                line-height 0.4688rem
                text-align justify
        .serve-date-address
            display flex
            .date
                width 3.3125rem
                margin 0.5313rem 0 0 0.5rem
                font-size 0.3438rem
                color #909090
            .details
                height 1.9688rem
                width 5.6875rem
                margin-top 0.5313rem
                font-size 0.3438rem
                color #333
                .mg-top
                    margin-top 0.3125rem
                    line-height 0.4688rem
                    text-align justify
        .link
            display flex
            justify-content center
            height 1.4375rem
            padding-top 0.4375rem
            font-size 0.4063rem
            color #ea68a2
</style>
