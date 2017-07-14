    <template >
    <div class="home-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <h1 class="title">美丽搜索</h1>
                <img class="search" src="./search.png">
            </div>
        </div>
        <!-- banner轮播 -->
        <div class="bannerTitle">banner1</div>
        <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
        <div class="bannerTitle">banner2</div>
        <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
        <div class="bannerTitle">banner3</div>
        <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
        <!-- 查看更多活动 -->
        <a class="more-activity" href="#orderFrom">查看更多活动</a>
        <!-- logo & copyright -->
        <div class="footer">
            <div class="logo"></div>
            <p class="Copyright">Copyright © 2017 梦乐商城版权所有</p>
        </div>
    </div>
</template>
    <script type="ecmascript-6">
import view from '../../components/view/view';
import mySwiper from '../mySwiper/mySwiper'

export default {
    data() {
        return {
            dataApp: []
        }
    },
    created() {
        this.getDataFromBackend()
    },
    components: {
        'v-view': view,
        'mySwiper': mySwiper
    },
    methods: {
        getDataFromBackend() {
            let that = this
            this.$http({
                method: 'get',
                url: global.Domain + '/index/index',
                emulateJSON: true
            }).then(function (response) {
                let res = response.data
                that.dataApp = res.banneritem
                // console.log(that.dataApp.banner[0].src)
                console.log(res)
            })
        }
    },
}

</script>
    
    <style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .home-wrapper
        position: absolute
        top: 1.25rem
        left: 0
        padding-bottom: 1.3438rem
        width: 100%
        height: 100%
        overflow-x: hidden
        background: #f0f0f0
        .route-item
            footerCss()
        .header
            headerCss()
        .bannerTitle
            display flex
            justify-content center
            align-items center
            height 1.25rem
            font-size 0.5rem
    &.more-activity
        display: block
        width: 100%
        height: 1.3125rem
        line-height: 1.3125rem
        font-size: 0.4688rem
        text-align: center
        border-top-1px(rgba(0,0,0,0.1))
        color: #ea68a2
        background: #fff
    &.footer
        position: relative
        width: 100%
        height: 1.9063rem
        background: #f0f0f0
        .logo
            margin: 0.4688rem auto 0.1563rem auto
            width: 2.6563rem
            height: 0.625rem
            background: url("./logo.png")
            background-size: 2.6563rem 0.625rem
        .Copyright
            text-align: center
            font-size: 0.3438rem
            color: #909090
    </style>

