<template>
    <div class="goodDetail-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">收货地址</div>
            <div class="search">
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 收货人 -->
            <div class="infoBox">
                <div class="rowLeft">收货人：</div>
                <input class="rowRight" placeholder="请填写收货人姓名" maxlength="10">
            </div>
            <!-- 手机号码 -->
            <div class="infoBox">
                <div class="rowLeft">手机号码：</div>
                <input class="rowRight" placeholder="请填写手机号码" maxlength="11">
            </div>
            <!-- 所在地区 -->
            <div class="infoBox loc">
                <x-address title="所在地区：" v-model="value" :list="addressData" placeholder="请选择地址" class=""></x-address>
            </div>
            <!-- 街道地址 -->
            <div class="infoBox locDetail">
                <div class="rowLeft">街道地址：</div>
                <textarea placeholder="请输入收货地址" class="rowRight textArea" maxlength="20"></textarea>
            </div>
            <!-- 默认地址 -->
            <a href="javascript:void(0)" class="selDefault">
                <img src="./images/unchecked.png">
                <p>默认地址</p>
            </a>
            <!-- 保存 -->
            <div class="saveAddr">
                <router-link to="/home" class="saveAddrItem">保存</router-link>
            </div>
        </section>
    </div>
</template>
 <script type="ecmascript-6">
import { Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name } from 'vux';

export default {
    components: {
        Group,
        XAddress,
        XButton,
        Cell
    },
    data() {
        return {
            value: [],
            addressData: ChinaAddressV3Data,
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

width = 100%
color = #fff
// init
span, a, img, input, textarea
    display block

// 外层元素
.goodDetail-wrapper
    position absolute
    top 1.25rem
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // 详情页header
    .header
        headerFlex()
    // 主体
    .main
        // 一般
        .infoBox
            display flex
            align-items center
            height 1.3438rem
            font-size 0.4375rem
            background-color #fff
            border-bottom-1px(#e0e0e0)
            .rowLeft
                display flex
                justify-content flex-end
                width 2.1875rem
                margin 0 0.7188rem 0 0.3125rem
                color #525252
            .rowRight
                display flex
                align-items center
                width 6.4688rem
                height 95%
                color #262626
                outline 0
            textarea
                height 60% !important
                border 0
                font-size 0.4375rem
                font-family 'Microsoft YaHei'
                color #262626
                resize none
            .weui-cell
                padding 0
                span
                    display inline
            .vux-cell-box
                display flex
                align-items center
                position absolute
                top 0
                width 100%
                height 100%
                color #525252
                .weui-cell
                    width 100%
                    height 100%                    
                    .weui-cell__hd
                        margin 0 0.7188rem 0 0.3125rem
                    .vux-cell-primary
                        .vux-popup-picker-select
                            display flex
                    .weui-cell__ft
                        display none
                &:before
                    border 0
        // 特殊
        .locDetail
            height 2.0313rem
        .loc
            .rowRight
                display flex
                justify-content space-between
                width 6.0469rem
                img
                    width 0.2344rem
                    height 0.4063rem
        // 保存
        .saveAddr
            display flex
            justify-content center
            width 100%
            .saveAddrItem
                display flex
                justify-content center
                align-items center
                width 7.9688rem
                height 1.25rem
                margin-top 1.2344rem
                background-color #ea68a2
                border-radius 0.1563rem
                font-size 0.5rem
                color #fff
        // 默认地址
        .selDefault
            display flex
            margin-top 0.5625rem
            img
                width 0.4688rem
                height 0.4688rem
                margin-left 0.2813rem
            p
                height 100%
                margin-left 0.2188rem
                font-size 0.4688rem    
</style>