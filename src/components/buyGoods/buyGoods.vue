<template>
    <div class="buyGoods-wrapper">
        <!-- header -->
        <v-header></v-header>
        <router-link to="/addrManage" class="userInfo">
            <div>
                <img src="./location.png">
            </div>
            <div>
                <p>{{data.addressitems.name}}&nbsp;&nbsp;&nbsp;{{data.addressitems.phone}}</p>
                <p>{{data.addressitems.province + data.addressitems.city + data.addressitems.area + data.addressitems.address}}</p>
            </div>
            <div>
                <img src="./arrow_right.png">
            </div>
        </router-link>
        <div class="goodsInfo" v-for="(val,key) in data.gooditems">
            <div class="colLeft">
                <div class="col1">
                    <img :src="val.mainmap">
                </div>
                <div class="col2">
                    <p>{{val.name}}</p>
                    <p>数量：X{{val.number}}</p>
                    <p>运费：{{data.freightitems == 0 ? '免运费' : (data.freightitems|num)}}</p>
                </div>
            </div>
            <div class="colRight">
                <span>￥{{val.price|num}}</span>
            </div>
        </div>
        <div class="countInfo">
            <p>共{{computeGoods}}件（含运费）:&nbsp;￥&nbsp;{{computeMoney|num}}</p>
        </div>
        <div class="footer">
            <div class="buy-tag">
                <div>
                    <span>实付款：</span>
                    <span>￥32.80</span>
                    <p>已使用0张优惠券</p>
                </div>
                <a href="javascript:void(0)" @click="showHideOnBlur=true">提交订单</a>
            </div>
        </div>
        <!-- 遮罩：选择充值金额 -->
        <div v-transfer-dom>
            <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>选择支付方式</p>
                    <checker v-model="payType" default-item-class="valueUnsel" selected-item-class="valueSel" v-for="(val, key) in payTypeList">
                        <checker-item :value="val.id">
                            {{val.cn}}
                        </checker-item>
                    </checker>
                    <div class="submit" @click="payIt()">确定</div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Checker, CheckerItem, Popup } from 'vux'
import header from '../../components/header/header';
export default {
    directives: {
        TransferDom
    },
    components: {
        XDialog,
        XButton,
        Checker,
        CheckerItem,
        Popup,
        'v-header': header
    },
    data() {
        return {
            data: [],
            payTypeList: [],
            showHideOnBlur: false,
            payType: '',
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            // console.log(JSON.stringify(this.$route.query));
            let arr = [];
            for (let key in this.$route.query) {
                arr.push(this.$route.query[key]);
            }
            // 获取订单信息
            this.$http.post(
                global.Domain + '/order/ordsure',
                {
                    sall: JSON.stringify(arr)
                },
                {
                    emulateJSON: true
                }).then(response => {
                    let res = response.body;
                    console.log(res);
                    this.data = res
                })
            // 获取支付类型信息
            this.$http({
                method: 'get',
                url: global.Domain + '/order/payment',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.payTypeList = res.payitem
            })
        },
        payIt: function(){
            alert('用' + this.payType + '支付');
        }
    },
    computed: {
        // 计算商品总数
        computeGoods: function () {
            let count = 0;
            let list = this.data.gooditems;
            for (let i = 0; i < list.length; i++) {
                count += list[i].number
            }
            return count
        },
        // 计算总价：含运费
        computeMoney: function () {
            let count = 0;
            let list = this.data.gooditems;
            for (let i = 0; i < list.length; i++) {
                count += parseFloat(list[i].price)
            }
            count += parseFloat(this.data.freightitems);
            return count
        },
    },
    filters: {
        // 1,025.00
        num: function (value) {
            // console.log(value)
            let afterPt = parseFloat(value).toFixed(2).split('.')[1];
            // console.log(afterPt); // 00
            value = String(parseFloat(value).toFixed(2).split('.')[0]);
            let result = '';
            let i = 0;
            for (i = 3; i < value.length; i += 3) {
                result = ',' + value.slice(-i) + result;
            }
            result = value.slice(0, value.length % 3) + result + '.' + afterPt;
            return result
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 支付类型选择框：modal
.valueUnsel
    display flex !important
    justify-content center
    align-items center
    height 1.2813rem
    width 100%
    margin-bottom 0.25rem
    border .0313rem solid #ff8b00
    font-size .5rem
    color #d54600
    background-color #fff
.noMargin
    margin-right 0 !important
.valueSel
    color #fff
    background-color #ff8b00
.weui-dialog
    max-width none !important
    width auto !important
    text-align left !important
    border-radius 0.1875rem
    .chooseValue
        width 8.2813rem
        padding 0 0.4375rem
        .vux-checker-box
            display flex
            flex-wrap wrap
        .submit
            display flex
            justify-content center
            align-items center
            width 100%
            height 1.25rem
            margin 1rem 0 0.4688rem 0
            font-size 0.5rem
            color #fff
            background-color #ff8b00
        p
            margin 0.4063rem 0 0.3438rem 0
            font-size 0.4375rem
            color #555

.buyGoods-wrapper
    position: absolute
    top: 0
    bottom: 0
    width 100%
    background: #f0f0f0
    .userInfo    
        display: flex
        height: 2.4688rem
        background: #fff
        font-size: 0
        align-items: center
        border-bottom-1px(#e0e0e0)
        padding-top 1.0938rem
        margin-bottom: 0.3125rem
        div:not(:nth-child(2))
            display flex
            align-items center
            height 100%
        p
            font-size: 0.4063rem
            line-height: 0.5625rem
        div:first-child
            margin: 0 0.375rem 0 0.3438rem
        div:nth-child(2)
            width 7.9063rem
        div:last-child
            justify-content center
            width: 1.5938rem
    .goodsInfo    
        display: flex
        justify-content space-between
        height: 2.625rem
        background: #fff
        font-size: 0
        border-bottom-1px(#e0e0e0)
        .colLeft
            display flex
            padding-top: 0.2813rem
            .col1
                img
                    width 2.0781rem
                    height 2.0781rem
                    margin: 0.2813rem
            .col2
                p
                    font-size: 0.375rem
                    line-height: 0.5625rem
                    color: #909090
                p:first-child
                    color #333
        .colRight
            padding-right 0.5rem
            padding-top: 0.2813rem
            font-size: 0.375rem
            line-height: 0.5625rem
    .countInfo
        width: 100%
        height: 1.1563rem
        background: #fff
        font-size: 0
        p
            margin-right: 0.5625rem
            text-align: right
            font-size: 0.375rem
            line-height: 1.1563rem
            color: #333
    .footer
        position: fixed
        height 1.1563rem !important
        bottom 0
        left: 0
        .buy-tag
            display: flex
            justify-content flex-end
            height: 1.1563rem
            background: #fff
            font-size: 0
            border-top-1px(#e0e0e0)
            div
                padding-top 0.1875rem
                padding-right 0.25rem
                color #333
                p
                    font-size 0.3438rem  
                    line-height 0.4688rem
                    color #909090
                span
                    display inline
                    font-size 0.375rem
                    line-height 0.4688rem
                    color red
            a
                line-height: 1.1563rem 
                width: 2.5625rem
                font-size: 0.375rem  
                background: #ea68a2
                color: #fff
                text-align: center
</style>
