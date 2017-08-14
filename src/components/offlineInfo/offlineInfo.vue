<template>
    <div class="offlineInfo-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <!-- 主体 -->
        <section class="main">
            <!--图片轮播-->
            <img :src="data.nearbyitem.mainmap[0].src" width="100%" height="100%" v-if="data.nearbyitem.mainmap.length == 1">
            <swiper :options="swiperOption" ref="mySwiper" v-else-if="data.nearbyitem.mainmap.length > 1">
                <swiper-slide v-for="(val,key) in data.nearbyitem.mainmap">
                    <img :src="val.src" width="100%" height="100%">
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="swiper-instead" v-else>找不到图片x_x</div>
            <!-- 线下信息 -->
            <div class="offlineInfo">
                <div class="rowUp">
                    <p>{{data.nearbyitem.name}}</p>
                    <a href="javascript:void(0)">
                        <img src="./images/share.png">
                        <span>分享</span>
                    </a>
                </div>
                <hr class="divider dividerMargin">
                <div class="rowMiddle">
                    <a :href="'tel:' + data.nearbyitem.phone" class="tel">{{data.nearbyitem.phone}}</a>
                    <p class="time">
                        营业时间：{{data.nearbyitem.trade_time}}，{{data.nearbyitem.day_time}}
                    </p>
                </div>
                <hr class="divider dividerMargin">
                <a class="rowDown" href="javascript:void(0)">
                    <div class="colLeft">
                        <p class="loc">{{data.nearbyitem.address}}</p>
                        <p class="dis">
                            <span>{{data.nearbyitem.distance}}公里</span>
                            <span class="verticalLine">|</span>
                            <span>{{data.nearbyitem.minute}}分钟</span>
                        </p>
                    </div>
                    <div class="colRight">
                        <img src="./images/arrow_right.png">
                    </div>
                </a>
            </div>
            <!--粗分割线-->
            <hr class="divider dividerBig">
            <!-- 线下服务 -->
            <div class="offlineServer">
                <h1>
                    <span>|</span>
                    <span>线下服务</span>
                </h1>
                <hr class="divider dividerMargin">
                <!-- 线下服务列表 -->
                <div class="noOffService" v-if="data.sericeitem.length == 0">对不起，该店尚无线下服务:-D</div>
                <router-link :to="{ path: '/digest', query: { sid: val.id,nid: $route.query.nid } }" v-for="(val,key) in data.sericeitem" v-else>
                    <span>{{val.name}}</span>
                    <span>￥{{parseFloat(val.price).toFixed(2)}}</span>
                </router-link>
            </div>
            <!--粗分割线-->
            <hr class="divider dividerBig">
            <!--评论详情-->
            <div class="comment">
                <div class="titleDown">
                    <div class="colLeft">
                        <p>|</p>
                        <p>看看大伙怎么说</p>
                    </div>
                    <div class="colRight">
                        共{{data.commentitem.count}}个评论
                    </div>
                </div>
                <hr class="divider">
                <div class="commentDetailContainer" v-for="(val,key) in data.commentitem.comment">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img :src="val.headimg">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>{{val.username}}</p>
                                <img :src="computeImg(val.level)">
                            </div>
                            <div class="rowDown">
                                {{val.content}}
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                 <div class="commentDetailContainer" v-for="(val,key) in msgData">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img :src="val.headimg">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>{{val.username}}</p>
                                <img :src="computeImg(val.level)">
                            </div>
                            <div class="rowDown">
                                {{val.content}}
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div> 
                <div class="viewMore">
                    <a href="javascript:void(0)" @click="addMsgMore">{{msgMore}}</a>
                </div>
            </div>
        </section>
    
    </div>
</template>
<script type="ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import header from '../../components/header/header';
export default {
    components: {
        swiper,
        swiperSlide,
        // 'v-header': header
    },
    data() {
        return {
            swiperOption: {
                notNextTick: true,
                autoplay: 3000,
                loop: true,
                paginationType: "bullets",
                pagination: '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                    let width = (isFinite(100 / (parseInt(swiper.imagesLoaded / 2))) ? 100 / (parseInt(swiper.imagesLoaded / 2)) : 100) + '%';
                    // console.log(width);
                    return '<span class="' + className + '"' + 'style="width:' + width + '"' + '></span>';
                }
            },
            data: [],
            msgData: [],
            para: 0,
            msgMore: '查看更多评论'
        }
    },
    created() {
        
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/nearby/netail?nid=' + this.$route.query.nid,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res;
                //console.log(this.data)
            });
        },
        //获取更多评论数据
        getMsgMore: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Nearby/msgmore?para='+this.para+'&nid='+this.$route.query.nid,
                emulateJSON: true
            }).then(function (response) {
                let moreComMore = response.body;
                
                //console.log(moreComMore)
                if(moreComMore == 'err'){
                    this.msgMore = "没有更多评论了"
                    this.para = this.para-1
                   return
                }else{
                    this.msgMore = "查看更多评论"
                    moreComMore.commentitem.forEach((obj)=>{
                    this.msgData.push(obj)
					})
                }
            })
        },
        //添加数据机制
        addMsgMore: function(){
            this.para++
			this.getMsgMore()
        },
        //等级图标
        computeImg: function (level) {
            if (level == 1) {
                return require('./images/xiaobai.png')
            } else if (level == 2) {
                return require('./images/xingxing.png')
            } else if (level == 3) {
                return require('./images/zuanshi.png')
            } else if (level == 4) {
                return require('./images/jinguan.png')
            } else if (level == 5) {
                return require('./images/huangguan.png')
            } else {
                console.log('获取了无效的等级数据！');
                return '#'
            }
        }
    },
    //定义这个sweiper对象  
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted() {
        this.getDataFromBackend();
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
color = #fff
// 初始化样式
img, span, a
    display block
// 外层元素
.offlineInfo-wrapper
    position absolute
    left 0
    width width
    background #fff
    // 分页器
    .swiper-slide
        img
            width 100%
            height 100%
    .swiper-pagination
        display flex
        left 5% !important
        width 90% !important
        .swiper-pagination-bullet
            height 0.0938rem
            background-color #fff
            border-radius 0
        .swiper-pagination-bullet-active
            background #606060
    .swiper-container
        height 7.5rem
    .swiper-instead
        display flex
        justify-content center
        align-items center
        width 100%
        height 7.5rem
        background-color #fff
        font-size fs + 0.125rem
        color #333
        border-bottom 1px solid #e0e0e0
    // 主体
    .main
        // 分割线
        .divider
            margin 0
            border-top 1px solid #e0e0e0
        // 评论
        .swiper-container
            position: relative
            height: 8.125rem !important
            .swiper-pagination
                left 0% !important
                width 100% !important
            .swiper-wrapper
                .swiper-pagination-bullet
                img
                    width: 100% !important   
                    height: 100% !important
                p
                    margin-top: 0.3125rem 
                    width: 5.4063rem !important   
                    font-size: fs - 0.0313rem
                    text-align: center
            .swiper-pagination
                height: 0.0313rem  !important 
                background: #ccc
                bottom: 0 !important 
                margin 0 !important
                span
                    height: 0.0313rem
        .swiper-pagination-bullet
            margin 0 !important
            height 0.0156rem !important
        .swiper-pagination-bullet-active   
            height 0.0313rem !important      
        .comment
            margin-left 0.5rem
            .titleDown
                height 1.1563rem
                display flex
                align-items center
                justify-content space-between
                .colLeft
                    display flex
                    align-items center
                    p
                        font-size fs
                        color #909090
                        font-weight bold
                    p:last-child
                        margin-left 0.1563rem
                .colRight
                    font-size fs
                    color #ea68a2
                    margin-right 0.625rem
                    img
                        width 0.2188rem
                        height 0.3906rem
            .commentDetail
                display flex
                margin-top 0.3125rem
                margin-bottom 0.3438rem
                .colLeft
                    margin-right 0.5938rem
                    width 1.1719rem
                    height 1.1719rem
                    img
                        border-radius 50%
                        width 1.1719rem
                        height 1.1719rem
                .colRight
                    margin-top 0.1563rem
                    .rowUp
                        display flex
                        align-items center
                        img
                            display block
                            width 1.125rem
                            height 0.375rem
                            margin-left 0.0938rem
                        p
                            font-size fs + 0.0313rem
                    .rowDown
                        font-size fs + 0.0313rem
                        margin-top 0.1875rem
                        letter-spacing 0.0313rem
                        line-height 0.5rem
                        margin-right 0.625rem
                        text-align justify
                        color #909090
            .viewMore
                display flex
                justify-content center
                align-items center
                height 1.3438rem
                font-size fs + 0.0313rem
                a
                    display block
                    margin-left 0.1563rem
                    color #ea68a2
        // 粗分割线
        .dividerBig
            margin-bottom 0.3125rem
            &:after
                border-width 0.3125rem
                border-color #e0e0e0
        // 分割线margin
        .dividerMargin
            margin-left 0.5rem
        // 线下信息
        .offlineInfo
            .rowUp
                display flex
                height 1.6875rem
                justify-content space-between
                align-items center
                p
                    padding-left 0.5rem
                    font-size fs + 0.0625rem
                    color #333
                a
                    display flex
                    width 1.875rem
                    justify-content center
                    align-items center
                    flex-direction column
                    img
                        width (fs - 0.0625rem) * 2
                        margin-bottom 0.0938rem
                    span
                        font-size fs - 0.0625rem
            .rowMiddle
                display flex
                height 1.6875rem
                flex-direction column
                justify-content center
                margin-left 0.5rem
                .tel
                    color #ea68a2
                    font-size fs + 0.0313rem
                .time
                    margin-top 0.2813rem
                    color #909090
                    font-size fs - 0.0313rem
            .rowDown
                display flex
                height 1.6875rem
                justify-content space-between
                align-items center
                .colLeft
                    display flex
                    flex-direction column
                    justify-content center
                    margin-left 0.5rem
                    .loc
                        color #333
                        font-size fs
                    .dis
                        display flex
                        margin-top 0.2813rem
                        color #909090
                        font-size fs - 0.0313rem
                .colRight
                    padding-right 0.5rem
                    img
                        width 0.2188rem
                        height 0.3906rem
            .rowDown:active
                background-color #f0f0f0
        // 线下服务
        .offlineServer
            display flex
            flex-direction column
            h1
                display flex
                align-items center
                height 1.1875rem
                margin-left 0.5rem
                font-size fs
                color #909090
                span
                    font-weight bold
                span:first-child
                    margin-right 0.1563rem
            a
                display flex
                justify-content space-between
                align-items center
                height 1.6875rem
                margin-left 0.5rem
                font-size fs
                span:first-child
                    color #333
                span:last-child
                    display flex
                    justify-content center
                    margin-right 0.5rem
                    color #ea68a2
            .noOffService
                display flex
                justify-content center
                align-items center
                width 100%
                height 1.1875rem
                background-color #fff
                font-size fs
</style>