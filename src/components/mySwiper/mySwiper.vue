<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
            <img src="http://www.pptbz.com/d/file/p/201701/smallffd423a3ab9e735686ff2f099adfe309.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="http://img1.gamedog.cn/2011/11/22/14-111122102315-50.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="http://www.pptbz.com/d/file/p/201701/small70188852ba4be2e23b26ddb7b14df6f3.jpg" alt="">
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script type="ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
    },
    data() {
        return {
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                // direction: 'vertical',
                // effect:"coverflow",
                // grabCursor : true,
                // setWrapperSize :true,
                // autoHeight: true,
                loop : true,
                paginationType: "bullets",
                pagination: '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                    let width = (100/(swiper.imagesLoaded / 2 + 0.5)) + '%';
                    console.log(swiper.bullets);
                    return '<span class="' + className + '"' + 'style="width:'+ width +'"' + '></span>';
                }
                // paginationClickable :true,
                // prevButton:'.swiper-button-prev',
                // nextButton:'.swiper-button-next',
                // scrollbar:'.swiper-scrollbar',
                // mousewheelControl : true,
                // observeParents:true,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                // debugger: true,
                // swiper callbacks
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                // onTransitionStart(swiper){
                //   console.log(swiper)
                // },
                // more Swiper configs and callbacks...
                // ...
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
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
        // this.swiper.slideTo(0, 0, false);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
color = #fff
changeHeight($height)
    height $height
// 初始化样式
img, span, a
    display block
// 分页器
.swiper-slide
    img
        width 100%
        height 100%
.swiper-pagination
    display flex
    left 5% !important
    bottom 0.3125rem !important
    width 90% !important
    .swiper-pagination-bullet
        changeHeight(0.0938rem)
        margin 0 !important
        background-color #fff
        border-radius 0
    .swiper-pagination-bullet-active
        background #606060
</style>