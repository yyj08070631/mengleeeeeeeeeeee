    <template >
        <div class="home-wrapper ">
            <div class="header">
                <div class="header-content border-bottom-1px">
                    <h1 class="title">美丽搜索</h1>
                    <img class="search" src="./search.png" width="16" height="16"/>
                </div>
            </div>
            <div class="activity-wrapper">
                <div class="activity-title">
                    <a href="#"><img src="./activity01.png" width=100% height=auto></a>
                </div>
            </div>
            <div class="activity-wrapper">
                <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange" auto loop></swiper> 
                <div class="x-botton" style="position:absolute; bottom: -2px;width: 100%">
                    <x-button @click.native="demo01_index = key" v-for="(val,key) in demo01_list" class="x-item" :class="{active:demo01_index==key}">{{key}}</x-button>
                </div>
            </div>
            <div class="activity-wrapper">
                <swiper :list="demo02_list" v-model="demo02_index" @on-index-change="demo02_onIndexChange" auto loop></swiper> 
                <div class="x-botton" style="position:absolute; bottom: -2px;width: 100%">
                    <x-button @click.native="demo02_index = key" v-for="(val,key) in demo02_list" class="x-item" :class="{active:demo02_index==key}">{{key}}</x-button>
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
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux';
const imgList = [
	'http://img.dwstatic.com/www/1707/363289838921/1499336815305.jpg',
	'http://img.car.mianfeiapp.net/upload/20170527/14958505848030.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505847196.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505857898.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505851569.jpg'
]
const baseList = [{ 
   url: 'javascript:', 
   img: 'http://f12.baidu.com/it/u=2438918904,3021139008&fm=72',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'http://img.sc115.com/uploads/allimg/110518/201105181934451250.jpg',
   title:"圣雅琦 送到家里电视机分厘卡"
 }, { 
   url: 'javascript:', 
   img: 'http://pic.58pic.com/58pic/12/03/53/78d58PICIPR.jpg',
   title:"圣雅琦 阿斯顿撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://img3.redocn.com/20100327/Redocn_2010032702520247.jpg',
   title:"圣雅琦 似的撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://a4.att.hudong.com/46/84/300534043329134140848931667.png',
   title:"圣雅琦 阿斯顿撒旦撒旦"
 }
 ] 
  const baseList2 = [{ 
   url: 'javascript:', 
   img: 'http://img.sc115.com/uploads/allimg/110518/201105181934451250.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'http://f12.baidu.com/it/u=2438918904,3021139008&fm=72',
   title:"圣雅琦 送到家里电视机分厘卡"
 }, { 
   url: 'javascript:', 
   img: 'http://pic.58pic.com/58pic/12/03/53/78d58PICIPR.jpg',
   title:"圣雅琦 阿斯顿撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://img3.redocn.com/20100327/Redocn_2010032702520247.jpg',
   title:"圣雅琦 似的撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://a4.att.hudong.com/46/84/300534043329134140848931667.png',
   title:"圣雅琦 阿斯顿撒旦撒旦"
 }
 ] 

 
 const urlList = baseList.map((item, index) => ({ 
   url: 'http://m.baidu.com', 
   img: item.img, 
   title: `(可点击)${item.title}` 
 })) 
  
 const demoList = imgList.map((one, index) => ({ 
   url: 'javascript:', 
   img: one 
 })) 
 
 const only2ClickList = baseList.slice(0, 2).map(item => { 
 item.url = '#' 
   return item 
 }) 
  
 export default { 
   components: { 
    Swiper, 
     SwiperItem, 
     GroupTitle, 
     XButton, 
     Divider 
  }, 
   ready () { 
  
   }, 
   methods: { 
    onSwiperItemIndexChange (index) { 
      console.log('demo item change', index) 
     }, 
     demo01_onIndexChange (index) { 
       this.demo01_index = index 
     },
    demo02_onIndexChange (index) { 
    this.demo01_index = index 
    }
  }, 
   data () { 
     return { 
       demo01_list: baseList, 
       demo02_list: baseList2,
      demo01_index: 0,
      demo02_index: 0, 
       swiperItemIndex: 1 
     } 
   } 
} 

    </script>
    
    <style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .home-wrapper
        position: absolute
        top: 3.125rem
        left: 0
        padding-bottom: 2.6875rem
        width: 100%
        hieght: 100%
        overflow-x: hidden
        background: #f6f6f6
        .header
            headerCss()
        .activity-wrapper
            position: relative
            margin-bottom: 12px
            width: 100%
            .activity-title
                border: 0
            .buy
                display: inline-block
                width: widths()
                width: 100%
                font-size: 1rem
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
        display: inline-block
        width: 100%
        height: 42px
        line-height: 42px
        font-size: 0.9375rem
        text-align: center
        border-top-1px(rgba(0,0,0,0.1))
        color: #ea68a2
        background: #fff
    &.footer
        position: relative
        width: 100%
        height: 61px
        background: #f6f6f6
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

