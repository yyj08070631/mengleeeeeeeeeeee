<template>
    <div class="goods-wrapper">
        <v-view class="route-item"></v-view>
        <!--头部-->    
        <div class="header">
            <div class="header-content border-bottom-1px">
                <h1 class="title">商品分类{{message}}</h1>
                <a href="#search"><img class="search" src="./images/search.png"></a>
            </div>
        </div>
        <!--主体-->
        <div class="main">
            <!--附近的项目实体店-->
            <a href="#offlineInfo" class="storeNearby">
                <div class="colLeft">
                    <p>
                        <span>附近的项目实体店</span>
                    </p>
                    <div>天誉花园</div>
                    <p>
                        <span class="dis">1.1公里</span>
                        <span>|</span>
                        <span class="tim">14分钟</span>
                    </p>
                </div>
                <div class="colRight">
                    <img src="./images/arrow_right.png">
                </div>
            </a>
            <hr class="divider dividerThin">
            <!--查找其他项目实体店-->
            <router-link to="/nearbyStores" class="storeFind">
                <div class="colLeft">
                    <img src="./images/location.png">
                    <p>查找其他项目实体店</p>
                </div>
                <div class="colRight">
                    <p>附近有4家</p>
                    <img src="./images/arrow_right.png">
                </div>
            </router-link>
            <hr class="divider dividerBig">
            <!--分类列表-->
            <div class="kindList">
                <router-link :to="{path:'/goodsClassify',query:{cid:val.id}}" class="oneKind" v-for="(val,key) in cateItemList">
                    <div class="oneKindMain">
                        <img :src="val.src">
                        <div>
                            <h1>{{val.name}}</h1>
                            <p>{{val.item}}</p>
                        </div>
                    </div>
                    <hr class="divider dividerThinNoMargin">
                </router-link>
            </div>
            <hr class="divider dividerBig">
        </div>
        
    </div>
  
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    components :{
        'v-view': view,
    },
    data() {
        return {
            cateItemList: [],
            static: 1
            
        }
    },
    created () {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            let that = this;
            let result = [];
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/category?id='+this.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                this.cateItemList = res.cateitem
            })
        },
    },
    
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.goods-wrapper
    position absolute
    top 1.25rem
    left 0
    width 100%
    background #fff
    overflow hidden
    // 头部
    .route-item
        footerCss()
    .header
        headerCss()
    // 分割线
    .divider
        margin 0
        border-left 0
        border-right 0
        border-bottom 0
        border-top 0.3125rem solid #e0e0e0
    // 细分割线
    .dividerThin
        border-width 0.0313rem
        margin-left 0.5rem
    // 细分割线no-margin
    .dividerThinNoMargin
        border-width 0.0313rem
    // 粗分割线
    .dividerBig
        border-width 0.3125rem
        border-color #f0f0f0
    // 主体
    .main
        margin-bottom 1.3438rem
        a
            display block
        // 附近的项目实体店
        .storeNearby
            display flex
            justify-content space-between
            height 2.4375rem
            .colLeft
                display flex
                flex-direction column
                justify-content center
                margin-left 0.5rem
                div
                    color #333
                    font-size 0.375rem
                p:first-child
                    display: inline-block
                    width: 4.0625rem
                    margin-bottom 0.2188rem
                p:last-child
                    margin-top 0.2188rem
                p
                    display flex
                    font-size 0.3438rem
                    color #909090
                    span.dis
                        margin-right 0.0625rem
                    span.tim
                        margin-left 0.0625rem
            .colRight
                display flex
                align-items center
                margin-right 0.5rem
        // 查找其他项目实体店
        .storeFind
            display flex
            height 1.3125rem
            justify-content space-between
            align-items center
            .colLeft
                display flex
                align-items center
                margin-left 0.5rem
                p
                    margin-left 0.0938rem
                    line-height 1.3125rem 
                    color #333
                    font-size 0.3438rem
                img
                    width 0.3594rem
                    height 0.3438rem
            .colRight
                display flex
                align-items center
                margin-right 0.5rem
                p
                    font-size 0.3438rem
                    margin-right 0.1875rem
                    line-height 1.3125rem 
                    color #909090
                img   
                    width 0.2188rem
                    height 0.3281rem  
        // 分类列表
        .kindList
            display flex
            flex-direction column
            .oneKind
                display flex
                flex-direction column
                padding-left 0.5rem
                .oneKindMain
                    display flex
                    align-items center
                    height 3.7813rem
                    img
                        display block
                        margin-right 0.9375rem
                        width 4.625rem
                        height 3.125rem
                    div
                        text-align justify
                        overflow hidden
                        margin-right 0.5rem
                        h1
                            font-size 0.4063rem
                            color #333
                        p
                            font-size 0.3438rem
                            color #909090
                            margin-top 0.0938rem
            .oneKind:last-child
                hr
                    border 0
        // 所有块的点击效果
        .storeNearby
        .storeFind
        .oneKind
            // transition background-color 1s
            background-color #fff
        .storeNearby:active
        .storeFind:active
        .oneKind:active
            background-color #f0f0f0
</style>
