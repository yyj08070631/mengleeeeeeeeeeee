    <template >
    <div class="home-wrapper">
        <!--头部  -->
        <v-header></v-header>
        <!-- banner轮播 -->
        <div v-for="(val,key) in dataApp" :key="key">
            <!-- <div>{{val.groupId}}</div> -->
            <!-- title -->
            <div class="bannerTitle" v-if="val.name != '-' && val.product.length != 0">{{val.name}}</div>
            <div class="bannerDivider" v-else-if="key != 0"></div>
            <!-- main -->
            <router-link :to="{ path: '/goodDetail', query: { gid: val.product[0].id } }" v-if="val.product.length == 1 && val.linkType == 'gid'">
                <img :src="val.product[0].src" class="singleImg">
            </router-link>
            <router-link :to="{ path: '/offlineInfo', query: { nid: val.product[0].id } }" v-else-if="val.product.length == 1 && val.linkType == 'aid'">
                <img :src="val.product[0].src" class="singleImg">
            </router-link>
            <mySwiper class="mySwiper" :dataApp="val" v-else-if="val.product.length > 1 && val.linkType == 'gid'"></mySwiper>
            <mySwiper class="mySwiper" :dataApp="val" v-else-if="val.product.length > 1 && val.linkType == 'aid'"></mySwiper>
            <router-link to="/home" v-else-if="val.linkType == 'app'">
                <img :src="val.product.src" class="singleImg">
            </router-link>
        </div>
        <!-- 查看更多活动 -->
        <a class="more-activity" href="#nearbyStoresAll">查看更多活动</a>
        <!-- logo & copyright -->
        <div class="footerLogo">
            <div class="rowUp">
                <div class="logo"></div>
            </div>
            <div class="rowDown">
                <p class="Copyright">Copyright&nbsp;©&nbsp;2017&nbsp;梦乐城版权所有</p>
            </div>
            </footer>
            <!-- footer -->
            <v-view class="route-item"></v-view>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import mySwiper from '../mySwiper/mySwiper';
import header from '../../components/header/header';

export default {
    data() {
        return {
            dataApp: [],
        }
    },
    created() {
        this.getDataFromBackend()
    },
    components: {
        'v-view': view,
        'mySwiper': mySwiper,
        'v-header': header
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
                for (var key in res) {
                    if (res[key].banner) {
                        result.push({
                            groupId: key,
                            linkType: res[key].tip,
                            name: '-',
                            product: (function () {
                                let arr = [];
                                arr.push({
                                    id: res[key].tip == 'gid' ? res[key].banner.gid : res[key].tip == 'aid' ? res[key].banner.aid : 'err',
                                    src: res[key].banner.src
                                });
                                // console.log(arr);
                                return arr
                            })()
                        });
                    } else if (res[key].good) {
                        result.push({
                            groupId: key,
                            linkType: 'gid',
                            name: res[key].title,
                            product: (function () {
                                let arr = [];
                                for (let i = 0; i < res[key].good.length; i++) {
                                    arr.push({
                                        id: res[key].good[i].id,
                                        src: res[key].good[i].mainmap
                                    });
                                }
                                // console.log(arr);
                                return arr
                            })()
                        });
                    } else if (res[key].src) {
                        result.push({
                            groupId: key,
                            linkType: 'app',
                            name: '-',
                            product: {
                                src: res[key].src
                            }
                        });
                    } else if (res[key].copyright) {
                        console.log('获取了一个copyright！');
                    } else {
                        console.log('获取了无效的数据！')
                    }
                }
                console.log(result)
                this.dataApp = result
            })
        }
    }
}

</script>
    
    <style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .home-wrapper
        position: absolute
        top: 1.4063rem
        left: 0
        padding-bottom: 1.3438rem
        width: 100%
        height: 100%
        background: #f0f0f0
        .singleImg
            width 100%
            height 10rem
        .route-item
            footerCss()
        .bannerTitle
            display flex
            justify-content center
            align-items center
            padding 0.625rem 0
            font-size 0.8125rem
            color #000
            background-color #fff
        .bannerDivider
            width 100%
            height 0.3125rem
            background-color #f6f6f6
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
    //脚注
    .footerLogo
        width: 100%
        height: 1.9063rem
        background: #f0f0f0
        padding 0.3125rem 0 1.875rem 0
        .rowUp
            display flex
            align-items center
            justify-content center
            padding-top 0.3125rem
            .logo  
                width: 2.6563rem
                height: 0.625rem
                background: url("./logo.png")
                background-size: 2.6563rem 0.625rem
        .rowDown
            display flex
            align-items center
            justify-content center
            padding-top 0.3125rem        
            .Copyright
                text-align: center
                font-size: 0.3438rem
                color: #909090 
    </style>

