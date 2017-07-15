    <template >
    <div class="home-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content">
                <h1 class="title">美丽搜索</h1>
                <img class="search" src="./search.png">
            </div>
        </div>
        <!-- banner轮播 -->
        <!-- <div v-for="(val,key) in dataApp">
            <div class="bannerTitle">{{key}}</div>
            <mySwiper class="mySwiper" :dataApp="val"></mySwiper>
        </div> -->
        <!-- <div class="bannerTitle">banner1</div>
            <mySwiper class="mySwiper" :dataApp="banner1"></mySwiper>
            <div class="bannerTitle">banner2</div>
            <mySwiper class="mySwiper" :dataApp="banner2"></mySwiper>
             <div class="bannerTitle">banner3</div>
            <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
            <div class="bannerTitle">banner4</div>
            <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
            <div class="bannerTitle">banner5</div>
            <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>
            <div class="bannerTitle">banner6</div>
            <mySwiper class="mySwiper" :dataApp="dataApp"></mySwiper>  -->
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
        // 获取数据方法
        getDataFromBackend() {
            let that = this;
            let result = [];
            this.$http({
                method: 'get',
                url: global.Domain + '/index/index',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body
                // console.log(res)
                // console.log(response)
                for(var key in res){
                    if(res[key].banner){
                        result.push({
                            id: key,
                            name: 'banner图',
                            src: (function(){
                                let arr = [];
                                for(let i = 0; i < res[key].banner.length; i++){
                                    arr.push(res[key].banner[i].src);
                                }
                                // console.log(arr);
                                return arr
                            })()
                        });
                    } else if(res[key].good){
                        result.push({
                            id: key,
                            name: res[key].title,
                            src: (function(){
                                let arr = [];
                                for(let i = 0; i < res[key].good.length; i++){
                                    arr.push(res[key].good[i].mainmap);
                                }
                                // console.log(arr);
                                return arr
                            })()
                        });
                    } else if(res[key].src){
                        // console.log(1)
                    } else {
                        console.log('获取了无效的数据！')
                    }
                }
                console.log(result)
            })
        }
    }
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

