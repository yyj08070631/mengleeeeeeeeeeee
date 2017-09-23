<template>
    <div class="offlineInfo-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <!-- 主体 -->
        <section class="main">
            <!--图片轮播-->
            <img class="mainmap" :src="data.nearbyitem.mainmap[0].src" v-if="data.nearbyitem.mainmap.length == 1">
            <swiper :options="swiperOption" ref="mySwiper" v-else-if="data.nearbyitem.mainmap.length > 1">
                <swiper-slide v-for="(val,key) in data.nearbyitem.mainmap">
                    <img :src="val.src">
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="swiper-instead" v-else>找不到图片x_x</div>
            <!-- 线下信息 -->
            <div class="offlineInfo">
                <div class="rowUp">
                    <p>{{data.nearbyitem.name}}</p>
                    <a href="javascript:void(0)" @click="shareView = true">
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
                <router-link class="rowDown" :to="{ path: '/offlineInfoMap', query: { loc: data.nearbyitem.coordinate, name: data.nearbyitem.name, scale: '16' } }">
                    <div class="colLeft">
                        <p class="loc">{{data.nearbyitem.address}}</p>
                        <p class="dis">
                            <span>{{dis}}</span>
                            <span class="verticalLine">&nbsp;|&nbsp;</span>
                            <span>{{tim}}</span>
                        </p>
                    </div>
                    <div class="colRight">
                        <img src="./images/arrow_right.png">
                    </div>
                </router-link>
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
                    <span>￥{{val.price}}</span>
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
                <div class="noComment" v-if="data.commentitem.comment.length == 0">暂时没有评论:-D</div>
                <div class="commentDetailContainer" v-for="(val,key) in data.commentitem.comment" v-else>
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img :src="val.headimg">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>{{val.username}}</p>
                                <img :src="val.levsrc">
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
                <div class="viewMore" v-show="!data.commentitem.comment.length == 0">
                    <a href="javascript:void(0)" @click="addMsgMore">{{msgMore}}</a>
                </div>
            </div>
            <!-- 分享 -->
            <alert v-model="showShareTab" title="分享">
                <button class="btn1" @click="showShareTab = false; todoShare()">确认分享</button>
                <button class="btn2" @click="showShareTab = false">取消</button>
                <img :src="data.nearbyitem.mainmap[0].src">
                <div class="share-cxt">
                    <textarea type="text" placeholder="请输入标题" v-model="shareVal"></textarea>
                </div>
            </alert>
        </section>
		<!-- 分享到朋友圈或分享给朋友 src/commom/img/share.png -->
		<div class="share" v-show="shareView" @click.stop="shareView = false">
			<img src="../../commom/img/share.png">
		</div>
        <!-- footer -->
        <v-view></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { Alert } from 'vux';
import { base64 } from 'vux';
// import header from '../../components/header/header';
export default {
    components: {
        'v-view': view,
        swiper,
        swiperSlide,
		Alert,
		base64,
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
                autoplayDisableOnInteraction : false,
                paginationBulletRender: function (swiper, index, className) {
                    let width = (isFinite(100 / (parseInt(swiper.imagesLoaded / 2))) ? 100 / (parseInt(swiper.imagesLoaded / 2)) : 100) + '%';
                    // console.log(width);
                    return '<span class="' + className + '"' + 'style="width:' + width + '"' + '></span>';
                }
            },
            data: [],
            msgData: [],
            para: 0,
            msgMore: '查看更多评论',
            // 传入的距离和时间
            dis: this.$route.query.dis,
            tim: this.$route.query.tim,
            // 分享弹窗
            showShareTab: false,
            shareVal: '',
			// 分享到朋友圈遮罩图的显示
			shareView: false
        }
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
                console.log(res);
                this.data = res;
                //console.log(this.data)
                this.shareVal = res.nearbyitem.name;
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
		// 向现有的URL末尾添加查询字符串
		addURLParam: function(url, name, value) {
			// 检验请求URL中是否有 "?" ，若无则用 "?" 添加查询字符串，若有则用 "&" 进行拼接
			url += (url.indexOf("?") == -1 ? "?" : "&");
			// 将查询字符串转换为URL格式
			url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
			return url;
		},
		// 分享链接
		todoShare: function() {
			let that = this.$wechat;
			this.$http({
				method: 'get',
				url: 'http://go.zs-mmall.com/dream/index.php/Api/uid/g',
				emulateJSON: true
			}).then(function(response) {
				let res = response.body;
				// console.log(res);
				that.ready(() => {
					that.onMenuShareAppMessage({
						title: this.shareVal,
						desc: '',
						link: 'http://go.zs-mmall.com/dream/index.php/Home/Index/test/surl/' + base64.encode(this.addURLParam(document.location.href, 'logo', res.logo)),
						imgUrl: this.data.nearbyitem.mainmap[0].src,
						success: function(res) {
							// console.log(res)
						},
						cancel: function(res) {
							// console.log(res)
						}
					});
					that.onMenuShareTimeline({
						title: this.shareVal,
						link: 'http://go.zs-mmall.com/dream/index.php/Home/Index/test/surl/' + base64.encode(this.addURLParam(document.location.href, 'logo', res.logo)),
						imgUrl: this.data.nearbyitem.mainmap[0].src,
						success: function(res) {
							// console.log(res)
						},
						cancel: function(res) { 
							// console.log(res)
						}
					});
				});
            })
            // this.showShareTab = false;
			// this.shareView = true;
		},
    },
    //定义这个sweiper对象  
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted() {
        this.getDataFromBackend()
        this.todoShare()
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
    // 分享到朋友圈
    .share
        display flex
        justify-content flex-end

        position fixed
        right 0
        top 0
        z-index 100

        width 100%
        height 100%

        background-color rgba(0, 0, 0, 0.5)
        img
            width 80%
            height (80 * (488 / 618))%
    // 主体
    .main
        margin-bottom 1.3594rem
        // 分割线
        .divider
            margin 0
            border-top 1px solid #e0e0e0
        // 主图
        .mainmap
            width 100%
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
            .noComment
                display flex
                justify-content center
                align-items center
                width 100%
                height 1.5625rem
                font-size fs
            .titleDown
                height 1.1563rem
                display flex
                align-items center
                justify-content space-between
                .colLeft
                    display flex
                    align-items center
                    margin-left 0.5rem
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
                margin .3125rem 0 .3438rem 0
                .colLeft
                    margin 0 .5938rem 0 .5rem
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
            height 0.3125rem
            background-color #e0e0e0
            border 0 !important
        // 分割线margin
        // .dividerMargin
        //     margin-left 0.5rem
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
    // 分享弹窗
    .weui-dialog
        width 12.5rem !important
        min-width 80%
        background #fff
        border-radius 0.1875rem
        .weui-dialog__hd
            padding 0.3125rem 0 0 0 
            .weui-dialog__title
                font-size fs + 0.0625rem !important
        .weui-dialog__bd
            display flex
            justify-content center
            align-items center
            padding 0.425rem 0.3rem 0.9375rem 0.3rem
            font-size fs + 0.0625rem
            margin-bottom 0.5625rem
            img
                width 1.5625rem
                height 1.5625rem	
                vertical-align top
            .share-cxt
                margin-left 0.5rem
                text-align left
                textarea 
                    width 100%
                    height 1.875rem
                    border 0
                    font-size 0.3125rem
                    color #ea6aa2
                    outline 0
                    resize none
                p
                    color #909090	
                    font-size 0.2813rem
                    
        .btn1
            position:absolute
            left:0px;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs + 0.0625rem
            outline 0
        .btn2
            position:absolute
            left:50%;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs + 0.0625rem
            outline 0
            .weui-dialog__title
                font-size fs - 0.0313rem !important
            .weui-dialog__ft
                background #3cf !important
                display none
                .weui-dialog__btn_primary
                    color #ff0  !important
                .weui-dialog__btn
                    color #ff0  !important
</style>