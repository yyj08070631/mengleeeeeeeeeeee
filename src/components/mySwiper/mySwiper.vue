<template>
    <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide v-for="(val,key) in dataApp.product">
            <router-link :to="{ path: '/goodDetail', query: { gid: val.id } }" v-if="dataApp.linkType == 'gid'"> 
                <img :src="val.src" width="100%" heigh="100%">
                <div class="discribe">
                    <p>{{val.name}}</p>
                    <p>RMB&nbsp;{{num(val.price)}}</p>
                </div>
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
                autoplayDisableOnInteraction : false,
                paginationBulletRender: function (swiper, index, className) {
                    // console.log(swiper.bullets ? swiper.bullets.length : 0);
                    let width = ( isFinite(100/(parseInt(swiper.bullets ? swiper.bullets.length : 0))) ? 100/(parseInt(swiper.bullets ? swiper.bullets.length : 0)) : 100 ) + '%';
                    // console.log(width);
                    return '<span class="' + className + '"' + 'style="width:'+ width +'"' + '></span>';
                }
            }
        }
    },
    methods: {
        // 1,020.00
        outputdollars: function (number) {
            if (number.length <= 3)
                return (number == '' ? '0' : number);
            else {
                var mod = number.length % 3;
                var output = (mod == 0 ? '' : (number.substring(0, mod)));
                for (var i = 0; i < Math.floor(number.length / 3); i++) {
                    if ((mod == 0) && (i == 0))
                        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                    else
                        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                }
                return (output);
            }
        },
        outputcents: function (amount) {
            amount = Math.round(((amount) - Math.floor(amount)) * 100);
            return (amount < 10 ? '.0' + amount : '.' + amount);
        },
        num: function (number) {
            number = String(number).replace(/\,/g, "");
            if (isNaN(number) || number == "") return "";
            number = Math.round(number * 100) / 100;
            if (number < 0)
                return '-' + this.outputdollars(Math.floor(Math.abs(number) - 0) + '') + this.outputcents(Math.abs(number) - 0);
            else
                return this.outputdollars(Math.floor(number - 0) + '') + this.outputcents(number - 0);
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

// 初始化样式
img, span, a
    display block
// 分页器
.home-wrapper
    .swiper-slide
        position relative
        .discribe
            display flex
            align-items center
            justify-content center
            flex-direction column
            width 100%
            height 2.5rem
            font-size fs + 0.0313rem
            color #333
            p:last-child
                margin-top 0.3125rem
        img
            width 100%
            height 7.3438rem
    .swiper-pagination
        display flex
        left 50% !important
        margin-left -5rem - 0.1563rem !important
        bottom 0.0156rem !important
        .swiper-pagination-bullet
            margin 0 !important
            background-color rgba(255,255,255,0)
            border-radius 0
            height 0.0625rem !important 
            margin-left 0.3125rem !important
        .swiper-pagination-bullet-active
            background rgba(0,0,0,0.7)
            height 0.0625rem !important
</style>