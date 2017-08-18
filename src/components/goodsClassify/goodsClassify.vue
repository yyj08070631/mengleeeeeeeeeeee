<template>
    <div class="goodsClassify-wrapper">
        <!-- header -->
        <!-- <v-header></v-header> -->
        <v-search-head></v-search-head>
        <div class="screenWrapper">
            <div class="select-type">
            <a href="javascript:" @click="showList" class="screen">筛选</a>
            <a href="javascript:" @click="changeClass" class="sort">排列方式</a>
        </div>
        </div>
        <!-- 筛选方式选择 -->
        <div id="screenType" v-show="isShow">
            <a href="javascript:" @click="changeActive()" ref="sort1">
                <div>价格</div>
                <div>
                    <img src="./arrow_none.png">
                </div>
            </a>
            <a href="javascript:" @click="changeActive1()" ref="sort2">
                <div>上架时间</div>
                <div>
                    <img src="./arrow_none.png">
                </div>
            </a>
            <a href="javascript:" @click="changeActive2()" ref="sort3">
                <div>销量</div>
                <div>
                    <img src="./arrow_none.png">
                </div>
            </a>
        </div>
        <!-- 商品列表容器 -->
        <div class="good-wrapper">
            <div v-if="goodsItemList.gooditem.length < 1" class="noGoods">暂无商品&nbsp;:) <router-link to="/goods">->随便逛逛<-</router-link></div>
            <div :class="changeStyle" v-for="(item,key) in goodsItemList.gooditem">
                <img class="collect" :src="item.iscolitems == 1 ? collected : collect" ref="menuItem" @click="collectGood(item.id,item.colid,item.iscolitems)" />
                <router-link :to="{path: '/goodDetail',query: { gid: item.id } }">
                    <img class="goodsMsg" :src="item.mainmap" />
                </router-link>
                <div class="text-wrapper">
                    <router-link :to="{ path: '/goodDetail', query: { gid: item.id } }">{{item.name}}</router-link>
                    <span>¥{{item.price}}</span>
                    <span>{{item.freight == 0 ? '不包邮' : item.freight == 1 ? '包邮' : '无邮费信息'}}&nbsp;|&nbsp;销量{{item.sale}}件</span>
                </div>
            </div>
        </div>
        <!-- footer -->
         <v-view class="route-item"></v-view>
        <div>
            <toast v-model="on" type="text">收藏成功</toast>
        </div>
        <div>
            <toast v-model="off" type="text">已取消收藏</toast>
        </div>
        <div>
            <toast v-model="failedToCol" type="text">收藏失败</toast>
        </div>
        <div>
            <toast v-model="failedToCancCol" type="text">取消收藏失败</toast>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import header from '../../components/header/header';
import searchHead from '../../commonComponents/searchHead/searchHead';
import { Toast, Group } from 'vux'
export default {
    data() {
        return {
            now: this.$route.query.static,
            changeStyle: 'goods-item1',
            test1: true,
            test2: true,
            test3: true,
            isShow: false,
            timeKey: 0,//传给服务器的字段
            priceKey: 0,//传给服务器的字段
            numberKey: 0,//传给服务器的字段
            getId: '',
            goodsItemList: [],
            collect: require('./collect.png'), // 收藏图片
            collected: require('./collect-active.png'), // 收藏图片
            on: false,
            off: false,
            failedToCol: false,
            failedToCancCol: false
        }
    },
    props: ['id'],
    components: {
        'v-view': view,
        // 'v-header': header,
        Toast,
        Group,
        'v-search-head': searchHead,
    },
    methods: {
        changeClass: function () {
            if (this.changeStyle === 'goods-item1') {
                this.changeStyle = 'goods-item2'
            } else {
                this.changeStyle = 'goods-item1'
            }
        },
        showList: function () {
            if (this.isShow === false) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        },
        isHidden: function () {
            if (this.isShow === true) {
                this.isShow = false
            }
        },
        // 收藏商品
        collectGood: function (id,colid,iscol) {
            let collect = require('./collect.png');
            let collected = require('./collect-active.png');
            let col=(iscol == 1?'colid='+colid:'gid='+id)//colid or gid
            this.$http({
                method: 'get',
                url: global.Domain + '/order/iscol?iscol=' + (iscol == 1 ? 0 : 1) + '&'+col+ '&type=1',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body
                // console.log(res)
                if (res == 1) {
                    if (iscol == 1) {
                        this.failedToCancCol = false;
                        this.failedToCol = false;
                        this.on = false;
                        this.off = false;
                        this.off = true
                    } else {
                        this.failedToCancCol = false;
                        this.failedToCol = false;
                        this.off = false;
                        this.on = false;
                        this.on = true
                    }
                    this.getDataFromBackend()
                } else {
                    if (iscol == 1) {
                        this.off = false;
                        this.on = false;
                        this.failedToCancCol = false;
                        this.failedToCol = false;
                        this.failedToCol = true
                    } else {
                        this.off = false;
                        this.on = false;
                        this.failedToCol = false;
                        this.failedToCancCol = false;
                        this.failedToCancCol = true
                    }
                }
            })
        },
        changeActive() {
            if (this.test1 == true) {
                this.test1 = false
                this.now = 1
            } else {
                this.test1 = true
                this.now = 2
            }
            this.totalId()
            this.getDataFromBackend()
        },
        changeActive1() {
            if (this.test2 == true) {
                this.test2 = false
                this.now = 3
            } else {
                this.test2 = true
                this.now = 4
            }
            this.totalId()
            this.getDataFromBackend()
        },
        changeActive2() {
            if (this.test3 == true) {
                this.test3 = false
                this.now = 5
            } else {
                this.test3 = true
                this.now = 6
            }
            this.totalId()
            this.getDataFromBackend()
        },
        totalId() {
            switch (this.now) {
                case 1:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    break;
                case 2:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    break;
                case 3:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    break;
                case 4:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    break;
                case 5:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                    break;
                case 6:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                    break;
            }
        },
        // 从后台获取数据
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/goods?cid=' + this.$route.query.cid + '&static=' + this.now,
                emulateJSON: true
            }).then(function (response) {
                this.goodsItemList = response.body
                console.log(this.goodsItemList)
            })
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getDataFromBackend()
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

class1()
    margin-top: -0.0313rem
    width: 4.9688rem
    border-bottom 1px solid #e0e0e0
    &:nth-child(odd)
        border-right 1px solid #e0e0e0
    .collect
        position relative
        float: right
        height 0.6563rem
        padding 0.2813rem 0.4375rem 0.2813rem 0
    .goodsMsg
        width: 4.9688rem
        height: 4.625rem
    .text-wrapper
        margin-top: 0rem
        float: left
        width: 100%
        a
            display block
            margin: 0.2813rem 0
            font-size: fs - 0.0938rem
            color: #333
            text-align: center
        span
            display: block 
            font-size: fs - 0.0938rem
            text-align: center
        span:last-child
            margin: 0.625rem 0 0.4063rem 0
            font-size: fs - 0.125rem
            color: #909090   
class2()
    position: relative
    width: 100%
    height: 4.625rem  
    border-bottom 1px solid #e0e0e0
    .collect
        position: absolute
        right: 0.375rem
        top: 0.375rem
        width 0.6563rem
        height 0.6563rem    
    .goodsMsg
        float: left
        width: 4.9688rem 
        height: 4.625rem  
    .text-wrapper
        margin-top: 0.7813rem
        float: right
        width: 50%
        p
            margin: 0.5625rem  1.25rem  0.2813rem 0
            font-size: fs - 0.0938rem
            color: #333
            text-align: center
        p:first-child
            margin: 0.625rem 0 0 0    
        span
            display: block
            margin: 0.3125rem
            text-align: center
            font-size: fs - 0.0938rem
        span:last-child
            margin: 0.3125rem 0.4688rem 0 0.4688rem
            font-size: fs - 0.125rem
            color: #909090
// 筛选选项
#screenType
    display: flex
    top: 0.9375rem
    width: 100%
    height: 0.9375rem
    line-height: 0.9375rem
    text-align: right
    background: rgba(255,255,255,1)
    border-bottom 1px solid #e0e0e0
    a
        display: flex
        justify-content center
        flex: 1
        font-size: fs - 0.0938rem
        color: #ea68a2
        align-items: center
        div:first-child
            margin-right 0.0938rem
        div:last-child
            img
                width: 0.25rem
// 主体
.goodsClassify-wrapper
    margin-top 2.2344rem
    padding-bottom 1.25rem
    .route-item
        footerCss()
    .header
        headerCss()
    .screenWrapper
        position fixed
        top 1.25rem
        width 100%
        background rgba(255,255,255,0.4)
        z-index 1000
    .select-type
        position: relative
        top 0 
        left 0
        width: 100%
        height: 0.9688rem
        line-height: 0.9688rem
        font-size: fs - 0.0313rem
        border-bottom 1px solid #e0e0e0
        .screen
            color: #ea68a2
            margin-left: 0.5rem
            float: left
        .sort
            color: #ea68a2
            margin-right: 0.5rem
            float: right
    .good-wrapper
        width: 100%
        display flex
        flex-wrap wrap
        .noGoods
            margin-top 60%
            width 100%
            font-size fs + 0.0313rem
            text-align center
            color #333
            a
                color #ea68a2
                margin-top 0.3125rem
                font-size fs
        // .goods-item1:nth-child(odd),.goods-item2:nth-child(odd)
        //     border-right: 0.0313rem solid #e0e0e0  
        .goods-item1
            class1()
        .goods-item2
            class2()
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size fs - 0.0625rem
</style>
