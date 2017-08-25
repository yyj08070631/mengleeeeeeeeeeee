<template>
    <div class="goods-wrapper">
        <!--  v-title data-title="商品分类" -->
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <v-search-head></v-search-head>
        <el-amap vid="amap" :plugin="gaodeData.plugin" :center="gaodeData.center">
        </el-amap>
        <v-view class="route-item"></v-view>
        <!--主体-->
        <div class="main">
            <!--附近的项目实体店-->
            <a href="javascript:void(0)" class="loadingNear" v-if="locData.length == 0">正在加载附近商家信息....</a>
            <router-link :to="{ path: '/offlineInfo', query: { nid: locData.id } }" class="storeNearby" v-else>
                <div class="colLeft">
                    <p>
                        <span>附近的项目实体店</span>
                    </p>
                    <div>{{locData.name}}</div>
                    <p>
                        <span class="dis">{{locData.distance}}公里</span>
                        <span>|</span>
                        <span class="tim">{{locData.minute}}分钟</span>
                    </p>
                </div>
                <div class="colRight">
                    <img src="./images/arrow_right.png">
                </div>
            </router-link>
            <hr class="divider dividerThin">
            <!--查找其他项目实体店-->
            <router-link to="/nearbyStores" class="storeFind">
                <div class="colLeft">
                    <img src="./images/location.png">
                    <p>查找其他项目实体店</p>
                </div>
                <div class="colRight">
                    <p v-if="locData.length == 0">正在加载附近商家....</p>
                    <p v-else>附近有&nbsp;{{locData.id}}&nbsp;家</p>
                    <img src="./images/arrow_right.png">
                </div>
            </router-link>
            <hr class="divider dividerBig">
            <!--分类列表-->
            <div class="kindList">
                <router-link :to="{ path: '/goodsClassify', query: { cid: val.id } }" class="oneKind" v-for="(val,key) in data.cateitem">
                    <div class="oneKindMain">
                        <img :src="val.src">
                        <div>
                            <h1>{{val.name}}</h1>
                            <p>{{val.item}}</p>
                        </div>
                    </div>
                    <hr class="divider dividerLine">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import header from '../../components/header/header';
import searchHead from '../../commonComponents/searchHead/searchHead';
export default {
    components: {
        'v-view': view,
        // 'v-header': header
        'v-search-head': searchHead,
    },
    data() {
        return {
            data: [],
            // 定位数据
            locData: [],
            gaodeData: this.gaode(),
            coordinate: []
        }
    },
    created() {
        this.getDataFromBackend();
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            // 获取分类数据
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/category',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res
            });
        },
        // 获取高德地图定位
        gaode() {
            let self = this;
            let obj = {
                center: [121.59996, 31.197646],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            let arr = [];
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                    // 传坐标到后台
                                    self.$http({
                                        method: 'get',
                                        url: global.Domain + '/nearby/catenear?local=' + self.lng + ',' + self.lat,
                                        emulateJSON: true
                                    }).then(function (response) {
                                        let res = response.body;
                                        console.log(res);
                                        this.locData = res.nearbyitem;
                                    });
                                }
                                // console.log(self.lng, self.lat);
                            });
                        }
                    }
                }]
            };
            // console.log(obj);
            return obj
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../commom/stylus/mixin'
.goods-wrapper
    position absolute
    left 0
    width 100%
    background #fff
    padding-bottom 1.25rem
    // 脚部
    .route-item
        footerCss()
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
    .dividerLine
        border-width 1px  
        border-color #909090 
    // 细分割线no-margin
    .dividerThinNoMargin
        border-width 0.0313rem
    // 粗分割线
    .dividerBig
        border-width 0.3125rem
        border-color #f0f0f0
    // 主体
    .main
        margin-top 1.25rem
        a
            display block
        // 附近的项目实体店
        .loadingNear
            display flex
            justify-content center
            align-items center
            height 2.4375rem
            font-size fs
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
                    font-size fs - 0.0156rem
                p:first-child
                    display: inline-block
                    width: 4.0625rem
                    margin-bottom 0.2188rem
                p:last-child
                    margin-top 0.2188rem
                p
                    display flex
                    font-size fs - 0.0469rem
                    color #909090
                    span.dis
                        margin-right 0.0625rem
                    span.tim
                        margin-left 0.0625rem
            .colRight
                display flex
                align-items center
                margin-right 0.5rem
                img
                    width 0.2188rem
                    height 0.3906rem
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
                    font-size fs - 0.0469rem
                img
                    width 0.3594rem
                    height 0.3438rem
            .colRight
                display flex
                align-items center
                margin-right 0.5rem
                img   
                    width 0.2188rem
                    height 0.3906rem 
                p
                    font-size fs - 0.0469rem
                    margin-right 0.1875rem
                    line-height 1.3125rem 
                    color #909090
                
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
                    padding 0.1563rem 0
                    img
                        display block
                        margin-right 0.9375rem
                        width 4.625rem
                        height 3.5938rem
                    div
                        height 100%
                        text-align justify
                        margin-right 0.5rem
                        h1
                            margin-top 1.1563rem
                            font-size fs + 0.0156rem
                            line-height fs + 0.0625rem
                            font-weight normal
                            color #333
                        p
                            width 3.4375rem
                            font-size fs - 0.0469rem
                            line-height fs + 0.0625rem
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
        //脚注
        // .footer
        //     width: 100%
        //     height: 1.9063rem
        //     background: #f0f0f0
        //     padding 0.3125rem 0
        //     .rowUp
        //         display flex
        //         align-items center
        //         justify-content center
        //         padding-top 0.3125rem
        //         .logo  
        //             width: 2.6563rem
        //             height: 0.625rem
        //             background: url("./images/logo.png")
        //             background-size: 2.6563rem 0.625rem
        //     .rowDown
        //         display flex
        //         align-items center
        //         justify-content center
        //         padding-top 0.3125rem        
        //         .Copyright
        //             text-align: center
        //             font-size: 0.3438rem
        //             color: #909090    
</style>
