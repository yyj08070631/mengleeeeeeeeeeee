<template>
    <div class="myTeam-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">我的钱包</div>
            <div class="search">
                <a href="#search">
                    <img src="./images/search.png">
                </a>
            </div>
        </header>
        <!--主体-->
        <section class="main">
            <!-- 乐宝余额 -->
            <div class="onePanel">
                <div class="dataBox">
                    <p>乐宝余额（点）</p>
                    <span>3,480.00</span>
                </div>
                <div class="operatList">
                    <router-link to="/home">我要充值</router-link>
                </div>
            </div>
            <!-- 可提现金额 -->
            <div class="onePanel">
                <div class="dataBox">
                    <p>可提现金额（元）</p>
                    <span>99,999.00</span>
                </div>
                <div class="operatList">
                    <router-link to="/home">我要提现</router-link>
                    <router-link to="/bill">我的账单</router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script type="ecmascript-6">
export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        // this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/myTeam?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        }
    },
    computed: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 初始化样式
img, span, a
    display block
// wrapper
.myTeam-wrapper
    position absolute
    top 1.25rem
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // 头部
    .header
        headerFlex()
    // 主体
    .main
        background-color #f0f0f0
        .onePanel
            .dataBox
                background-color #ea68a2
</style>

