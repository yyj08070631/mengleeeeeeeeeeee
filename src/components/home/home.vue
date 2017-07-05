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
                            <a href="#"><img src="./activity-title01.png" width=100% height=auto></a>
                        </div>
                        <a href="#" class="buy">购买</a> 
                        <div class="activity-content">
                            <a href="#"><img src="./activity-content01.png" width=100% height=auto></a>
                        </div>  
                    </div>
                    <div class="activity-wrapper">
                        <div class="activity-title">
                            <a href="#"><img src="./activity-title02.png" width=100% height=auto></a>
                        </div>
                        <a href="#" class="buy">购买</a> 
                        <div class="activity-content">
                            <a href="#"><img src="./activity-content02.png" width=100% height=auto></a>
                        </div>  
                    </div>
                    <a class="more-activity border-top-1px" href="#">查看更多活动</a>
                </div>
        </div>
    </template>
    <script type="ecmascript-6">
    // import BScroll from 'better-scroll'
    // export default{
    //     data() {
    //             return {
    //                 listHeight: [],
    //                 scrollY: 0,
    //             }
    //         },
    //         mounted() {
    //                     this.$nextTick(() => {
    //                         this._initScroll();
    //                         //计算高度
    //                         this._calculateHeight();
    //                     })
    //         },       
    //         methods: {
    //             _initScroll() {
    //                 this.scroll = new BScroll(this.$refs.headerwrapper, {
    //                     probeType: 3
    //                 });
    //                 //设置监听滚动位置
    //                 this.scroll.on('scroll', (pos) => {
    //                     //scrollY接收变量
    //                     this.scrollY = Math.abs(Math.round(pos.y));
    //                     this.scrollX = Math.abs(Math.round(pos.x));
    //                     console.log(this.scrollY)
    //                 })
    //             },
    //             _calculateHeight() {
    //                 let list = this.$refs.headerwrapper.getElementsByClassName('hook');
                   
    //                 let height = 0;
    //                 //把第一个高度送入数组
    //                 this.listHeight.push(height);
                     
    //                 //通过循环foodList下的dom结构，将每一个li的高度依次送入数组
    //                 for(let i = 0; i < list.length; i++) {
    //                     let item = list[i]
    //                     height += item.clientHeight
    //                     this.listHeight.push(height);
                       
    //                 }
    //                  console.log(this)
    //             },
    //         }
    // }
            

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
        overflow: hidden
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
            padding: 3rem 0 3.125rem 0
            .activity-title
                border: 0
            .buy
                display: inline-block
                width: widths()
                width: 100%
                font-size: 1rem
                text-align: center
                color: #ea68a2  
        
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

