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
                         <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper> 
                         <div class="x-botton" style="position:absolute; bottom: 40px;width: 100%">
                                <x-button @click.native="demo01_index = key" v-for="(val,key) in demo01_list" class="x-item" :class="{active:demo01_index==key}">{{key}}</x-button>
                        </div>
                    </div>
                    <!--<a class="more-activity border-top-1px" href="#">查看更多活动</a>-->
                    <div class="activity-wrapper">
                        <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper> 
                         <div class="x-botton" style="position:absolute; bottom: 40px;width: 100%">
                                <x-button @click.native="demo01_index = key" v-for="(val,key) in demo01_list" class="x-item" :class="{active:demo01_index==key}">{{key}}</x-button>
                        </div>
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
   img: 'https://static.vux.li/demo/1.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'https://static.vux.li/demo/2.jpg',
   title:"圣雅琦 送到家里电视机分厘卡"
 }, { 
   url: 'javascript:', 
   img: 'https://static.vux.li/demo/3.jpg',
   title:"圣雅琦 阿斯顿撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://img.car.mianfeiapp.net/upload/20170527/14958505851569.jpg',
   title:"圣雅琦 似的撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://img.car.mianfeiapp.net/upload/20170527/14958505857898.jpg',
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
     demo05_onIndexChange (index) { 
       this.demo05_index = index 
     }, 
     demo05_onLoad (id) { 
      this.demo05_list = id === 1 ? baseList : demoList 
     }, 
     demo06_onIndexChange (index) { 
       this.demo06_index = index 
     }, 
     demo07_onIndexChange (index) { 
       this.demo07_index = index 
     } 
  }, 
   data () { 
     return { 
       demo01_list: baseList, 
       demo02_list: demoList, 
       demo03_list: demoList, 
       demo04_list: imgList, 
       demo05_list: [], 
       demo06_list: urlList, 
      demo07_list: only2ClickList, 
      demo01_index: 0, 
      demo02_index: 1, 
      demo05_index: 0, 
       demo06_index: 0, 
      demo07_index: 0, 
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
        padding-bottom: 3.125rem
        width: 100%
        hieght: 100%
        overflow-x: hidden
        background: #f6f6f6
        .header
            display: block
            position: fixed
            left: 0
            top: 0
            width: 100%
            height: 2.5rem
            z-index: 450
            background: #f9f9f9
            overflow: hidden
            .header-content
                position: relative
                width: 100%
                height: 2.5rem
                line-height: 2.5rem
                border-bottom-1px(#e5e5e5)
                .search
                    position: absolute
                    right: 0.9375rem
                    top: 50%
                    margin-top: -0.5rem
                .title
                    text-align: center
                    font-size: 0.875rem
                    font-weight: 800
        .activity-wrapper
            width: 100%
            padding: 10px 0 0 0
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
        height: 5rem
        line-height: 5rem
        font-size: 0.9375rem
        text-align: center
        border-top-1px(rgba(0,0,0,0.1))
        color: #ea68a2

          
    </style>

