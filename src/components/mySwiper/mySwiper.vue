<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(val,key) in dataApp.product">
            <router-link :to="{ path: '/goodDetail', query: { gid: val.id } }" v-if="dataApp.linkType == 'gid'"> 
                <img :src="val.src" width="100%" heigh="100%">
            </router-link>
            <router-link to="/offlineInfo" v-else-if="dataApp.linkType == 'aid'"> 
                <img :src="val.src" width="100%" heigh="100%">
            </router-link>
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
        dataApp: []
    },
    created() {
        
    },
    data() {
        return {
            swiperOption: {
                notNextTick: true,
                autoplay: 3000,
                loop : true,
                paginationType: "bullets",
                pagination: '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                    let width = ( isFinite(100/(parseInt(swiper.imagesLoaded / 2))) ? 100/(parseInt(swiper.imagesLoaded / 2)) : 100 ) + '%';
                    // console.log(width);
                    return '<span class="' + className + '"' + 'style="width:'+ width +'"' + '></span>';
                }
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