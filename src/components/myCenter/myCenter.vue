<template>
    <div class="myCenter-wrapper">
        <!--头部  -->
        <v-header></v-header>
        <!--个人资料-->
        <a class="personal-wrapper" href="#settings">
            <img class="avator" :src="data.headimg">
            <div class="personal">
                <h2 class="name">{{data.username}}</h2>
                <span class="mobile">{{data.phone}}</span>
                <img class="rank" :src="computeImg">
            </div>
            <div class="more-link">
                <img class="qr-code" src="./QR_code.png">
                <img src="./more.png">
            </div>
        </a>
        <!--个人资料-->
        <!--购物车-->
        <div class="order-wrapper">
            <a href="#cart" class="item-cls">
                <p>我的购物车</p>
                <img class="more" src="./more.png">
            </a>
        </div>
        <!--购物车-->
        <!--账单积分-->
        <div class="notecase-wrapper">
            <a href="#bill" class="item-cls">
                <p>我的账单</p>
                <img class="more" src="./more.png">
            </a>
            <a href="#integral" class="item-cls">
                <p>我的积分</p>
                <div>
                    <span class="num">{{data.integral|num}}&nbsp;积分</span>
                    <img class="more" src="./more.png">
                </div>
            </a>
            <a href="#myWallet" class="item-cls">
                <p>我的钱包</p>
                <div>
                    <span class="num">{{data.wallet|num}}&nbsp;元</span>
                    <img class="more" src="./more.png">
                </div>
            </a>
        </div>
        <!--账单积分-->
        <!--我的预约-->
        <div class="order-wrapper">
            <a href="#subscribe" class="item-cls">
                <p>我的预约</p>
                <img class="more" src="./more.png">
            </a>
        </div>
        <div class="order-wrapper">
            <a href="#myCollect" class="item-cls">
                <p>我的收藏</p>
                <img class="more" src="./more.png">
            </a>
        </div>
        <!--我的预约-->
        <div class="team-wrapper">
            <a href="#myTeam" class="item-cls">
                <p>我的团队</p>
                <img class="more" src="./more.png">
            </a>
            <a href="#titleComputed" class="item-cls">
                <p>头衔统计</p>
                <img class="more" src="./more.png">
            </a>
            <a href="#expandComputed" class="item-cls">
                <p>拓展统计</p>
                <img class="more" src="./more.png">
            </a>
            <a href="#teamComputed" class="item-cls">
                <p>团队统计</p>
                <img class="more" src="./more.png">
            </a>
        </div>
        <!--我的预约-->
        <div class="helper">
            <a href="javascript:void(0)" class="item-cls">
                <p>获得帮助</p>
                <img class="more" src="./more.png">
            </a>
        </div>
        <div class="footer">
            <div class="rowUp">
                <div class="logo"></div>
            </div>
            <div class="rowDown">
                <p class="Copyright">Copyright&nbsp;©&nbsp;2017&nbsp;梦乐城版权所有</p>
            </div>
        </div>
    <!-- footer -->
    <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import header from '../../components/header/header';
export default {
    components: {
        'v-view': view,
        'v-header': header
    },
    data() {
        return {
            data: []
        }
    },
    created() {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            let that = this;
            let result = [];
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userInfo?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
            })
        }
    },
    filters: {
        num: function (value) {
            // console.log(value)
            value = String(value);
            let result = '';
            let i = 0;
            for (i = 3; i < value.length; i += 3) {
                result = ',' + value.slice(-i) + result;
            }
            result = value.slice(0, value.length % 3) + result;
            return result
        }
    },
    computed: {
        computeImg: function () {
            // console.log(this.data.level)
            if (this.data.level == 1) {
                return require('./images/xiaobai.png')
            } else if (this.data.level == 2) {
                return require('./images/xingxing.png')
            } else if (this.data.level == 3) {
                return require('./images/zuanshi.png')
            } else if (this.data.level == 4) {
                return require('./images/jinguan.png')
            } else if (this.data.level == 5) {
                return require('./images/huangguan.png')
            } else {
                console.log('获取了无效的等级数据！');
                return '#'
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
color = #fff
// 初始化样式
img, span, a
    display block
// 主容器
.myCenter-wrapper
    position: absolute
    top: 1.4063rem
    left: 0
    padding-bottom: 1.25rem
    width: width
    font-size: 0
    background: #f0f0f0
    .route-item
        footerCss()
.personal-wrapper
    display: block
    position: relative
    margin-bottom: 0.2813rem
    width: 100%
    height: 2.5625rem
    background: color
    .avator
        margin: 0.4688rem 0.3125rem 0.4688rem 0.5rem
        float: left
        width: 1.625rem
        height: 1.625rem
    .personal
        width: 6.25rem
        float: left
    .name
        display: inline-block
        margin: 0.4688rem 0 0.1875rem 0
        font-size: 0.4375rem
        color: #000
    .mobile
        display: block
        font-size: 0.375rem
        color: #909090
        margin-bottom: 0.2813rem
    .rank
        width: 1.125rem
        height: 0.375rem    
    .more-link
        position: absolute
        right: 0.5rem
        top: 50%
        margin-top: -0.1875rem
        .qr-code
            margin-right: 0.375rem
        img
            float: left
            margin-right 0.1563rem
            width: 0.375rem
            height: 0.375rem
.notecase-wrapper
    width: 100%
    background: color
.order-wrapper
    margin: 0.2813rem 0
    width: 100%
    font-size: 26px 
    background: color
// 单功能
.item-cls
    display flex
    justify-content space-between
    align-items center
    margin-left 0.5rem
    width 95%
    height 1.3438rem
    border-bottom 1px solid #e0e0e0
    font-size 0.4063rem
    color #333
    &:last-child
        border 0
    &>.more
        margin-right: 0.5rem
        width: 0.375rem
        height: 0.375rem
    div
        display flex
        margin-right: 0.5rem
        &>.more
            width: 0.375rem
            height: 0.375rem
        .num
            margin-right 0.3438rem
            color #909090
.team-wrapper 
    width: 100%
    background: color
.helper
    width: 100%
    background: color
    margin-top: 0.2813rem 
//脚注
.footer
    width: 100%
    height: 1.9063rem
    background: #f0f0f0
    padding 0.3125rem 0
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

