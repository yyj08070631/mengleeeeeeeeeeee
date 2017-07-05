<template>
  <div class="home-wrapper" ref="headerwrapper">
    <div class="content-item scroll-hook">
        <div class="activity-wrapper">
            <div class="activity-title">
                <a href="#"><img src="./activity-title01.png" width=100%></a>
            </div>
            <a href="#" class="buy">购买</a> 
            <div class="activity-content">
                <a href="#"><img src="./activity-content01.png" width=100%></a>
            </div>  
        </div>
        <div class="activity-wrapper">
            <div class="activity-title">
                <a href="#"><img src="./activity-title02.png" width=100%></a>
            </div>
            <a href="#" class="buy">购买</a> 
            <div class="activity-content">
                <a href="#"><img src="./activity-content02.png" width=100%></a>
            </div>  
        </div>
        <a class="more-activity border-top-1px" href="#">查看更多活动</a>
    </div>
  </div>
</template>
<script type="ecmascript-6">
// import BScroll from 'better-scroll';
//         export default{
//           data() {
//                 return {
//                     listHeight: [],
//                     scrollY: 0,
//                 }
//             },
//             created() {
//                         this.$nextTick(() => {
//                             this._initScroll();
//                             this._calculateHeight();
//                         })
//             },
//             methods: {
//                 _initScroll() {
//                     this.foodScroll = new BScroll(this.$refs.headerwrapper, {
//                         probeType: 3
//                     });
//                     //设置监听滚动位置
//                     this.foodScroll.on('scroll', (pos) => {
//                         //scrollY接收变量
//                         this.scrollY = Math.abs(Math.round(pos.y));
//                     })
//                 },
//                 _calculateHeight() {
//                     let foodList = this.$refs.headerwrapper.getElementsByClassName('scroll-hook');
//                     let height = 0;
//                     //把第一个高度送入数组
//                     this.listHeight.push(height);
//                     //通过循环foodList下的dom结构，将每一个li的高度依次送入数组
//                     for(let i = 0; i < foodList.length; i++) {
//                         let item = foodList[i]
//                         height += item.clientHeight
//                         this.listHeight.push(height);
//                     }
//                 },
//             }

//         }
            
     
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
    .activity-wrapper
      width: 100%
      height: auto
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
    line-height: 80rem
    font-size: 0.9375rem
    text-align: center
    border-top-1px(rgba(0,0,0,0.1))
    color: #ea68a2
     
</style>

