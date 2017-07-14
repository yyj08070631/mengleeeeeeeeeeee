    <template >
        <div class="home-wrapper ">
            <v-view class="route-item"></v-view>
            <div class="header">
                <div class="header-content border-bottom-1px">
                    <h1 class="title">美丽搜索</h1>
                    <img class="search" src="./search.png" />
                </div>
            </div>
            <div class="activity-wrapper">
                <div class="activity-title">
                    <a href="#imageText"><img :src="dataApp.banneritem.banner[0].src" width=100% height=auto></a>
                </div>
            </div>
            <div class="activity-wrapper">
                <swiper  auto loop>
                    <swiper-item v-for="(val,key) in dataApp.banneritem.banner"><img :src="val.src" width="100%" heigh="100%"></swiper-item>
                </swiper> 
                <div class="x-botton" style="position:absolute; bottom: -2px;width: 100%">
                    <x-button  v-for="(val,key) in dataApp.banneritem.banner" class="x-item"></x-button>
                </div>
            </div>
            <div class="activity-wrapper">
                <swiper  auto loop>
                    <swiper-item v-for="(val,key) in dataApp.banneritem.banner"><img :src="val.src" width="100%" heigh="100%"></swiper-item>
                </swiper> 
                <div class="x-botton" style="position:absolute; bottom: -2px;width: 100%">
                    <x-button  v-for="(val,key) in dataApp.banneritem.banner" class="x-item" :class="{active: dataApp.banneritem.banner == key}"></x-button>
                </div>
            </div>
            <a class="more-activity border-top-1px" href="#orderFrom">查看更多活动</a>
            <div class="footer">
                <div class="logo"></div>
                    <p class="Copyright">Copyright © 2017 梦乐商城版权所有</p>
                </div>
            </div>
        </div>
    </template>
    <script type="ecmascript-6">
    import view from '../../components/view/view';
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'; 
  
 export default {
    data: function(){
            return {
                 dataApp: []
            }
        },  
   created () { 
        this.$http.get('http://dde.dgxinn.cn/dream/index.php/Home/index/index').then(function(res){
            this.dataApp = res.body
            
        })
   },
    components: { 
     Swiper, 
     SwiperItem, 
     GroupTitle, 
     XButton, 
     Divider,
     'v-view': view 
  }, 
} 

    </script>
    
    <style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .home-wrapper
        position: absolute
        top: 50px
        left: 0
        padding-bottom: 43px
        width: 100%
        hieght: 100%
        overflow-x: hidden
        background: #f0f0f0
        .route-item
            footerCss()
        .header
            headerCss()
        .activity-wrapper
            position: relative
            margin-bottom: 0.75rem
            width: 100%
            .activity-title
                border: 0
            .buy
                display: inline-block
                width: widths()
                width: 100%
                font-size: 16px
                text-align: center
                color: #ea68a2 
            .vux-slider
                position: relative
                overflow: visible
                width: 100%
                height: 299px
                .vux-swiper
                    overflow: visible 
                    position: relative
                    margin: 0 auto
                    width: 100%
                    height: 299px
                    .active
                        background: none
                    .vux-img
                       width: 100%
                       height: 299px
                    .vux-swiper-desc
                        display: none           
                .vux-indicator 
                    display: none
            .x-item
                float: left  
                width: 20%
                height: 1.5px 
                margin: 0
            .active
                background: #606060         
        
    &.more-activity
        display: block
        width: 100%
        height: 42px
        line-height: 42px
        font-size: 15px
        text-align: center
        border-top-1px(rgba(0,0,0,0.1))
        color: #ea68a2
        background: #fff
    &.footer
        position: relative
        width: 100%
        height: 61px
        background: #f0f0f0
        .logo
            margin: 15px auto 5px auto
            width: 85px
            height: 20px
            background: url("./logo.png")
            background-size: 85px 20px
        .Copyright
            text-align: center
            font-size: 11px
            color: #909090
    </style>

