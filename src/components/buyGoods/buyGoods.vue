<template>
    <div class="buyGoods-wrapper">
        <!-- header -->
        <!-- <v-header></v-header> -->
        <!-- 判断session是否有地址，若有则使用，若无才用默认 -->
        <router-link :to="{ path: '/addrManage', query: { canSel: 1 } }" class="userInfo" v-if="locFromSession.name !== undefined">
            <!--  :to="{ path: '/addrManage', query: { group: orderArr() } }" -->
            <div>
                <img src="./location.png">
            </div>
            <div>
                <p>{{locFromSession.name}}&nbsp;&nbsp;&nbsp;{{locFromSession.phone}}</p>
                <p>{{locFromSession.addr}}</p>
            </div>
            <div>
                <img src="./arrow_right.png">
            </div>
        </router-link>
        <router-link :to="{ path: '/addrManage', query: { canSel: 1 } }" class="userInfo" v-else>
            <div>
                <img src="./location.png">
            </div>
            <div>
                <p>点击添加地址</p>
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
                    <!-- <p>运费：{{data.freightitems == 0 ? '免运费' : num(data.freightitems)}}</p> -->
                </div>
            </div>
            <div class="colRight">
                <span>￥{{num(val.price)}}</span>
            </div>
        </div>
        <div class="countInfo">
            <p>共{{computeGoods}}件（含运费）:&nbsp;￥&nbsp;{{num(computeMoney)}}</p>
        </div>
        <div class="footer">
            <div class="buy-tag">
                <div>
                    <span>实付款：</span>
                    <span>￥{{num(computeMoney)}}</span>
                </div>
                <a href="javascript:void(0)" @click="showHideOnBlur=true">提交订单</a>
            </div>
        </div>
        <!-- 遮罩：选择充值金额 -->
        <div v-transfer-dom>
            <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>选择支付方式</p>
                    <checker v-model="payType" default-item-class="valUnsel" selected-item-class="valSel" v-for="(val, key) in payTypeList">
                        <checker-item :value="val.id">
                            {{val.cn}}
                        </checker-item>
                    </checker>
                    <div class="submit" @click="payEvent()">确定</div>
                </div>
            </x-dialog>
        </div>
        <!-- 页面所有弹窗 -->
        <!-- <div>
                <toast v-model="alert" type="text">{{alertTxt}}</toast>
            </div> -->
        <confirm v-model="alert" title="确认支付" @on-confirm="payIt">
            <p style="text-align:center;">{{alertTxt}}</p>
        </confirm>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Confirm, XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Checker, CheckerItem, Popup } from 'vux'
// import { Toast, Group, Alert } from 'vux'
// import header from '../../components/header/header';
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
        Confirm,
        // Toast,
        // Group,
        // Alert
        // 'v-header': header
    },
    data() {
        return {
            data: [],
            payTypeList: [],
            showHideOnBlur: false,
            payType: '',
            payResult: [],
            locFromSession: [],
            listFromSession: [],
            cidFromSession: this.getCid(),
            // 弹窗 & 弹窗文字
            alert: false,
            alertTxt: '',
        }
    },
    methods: {
        // 获取数据
        getDataFromBackend: function () {
            // console.log(this.$route.query.group)
            // console.log(JSON.stringify(this.$route.query));
            // let arr = [];
            // for (let key in this.$route.query) {
            //     arr.push(this.$route.query[key]);
            // }
            // 获取订单信息
            this.$http.post(
                global.Domain + '/order/ordsure',
                {
                    sall: sessionStorage.getItem('list')
                },
                {
                    emulateJSON: true
                }).then(response => {
                    let res = response.body;
                    console.log(res);
                    this.data = res;
                    this.getLoc();
                    this.getList();
                })
            // 获取支付类型信息
            this.$http({
                method: 'get',
                url: global.Domain + '/order/payment',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.payTypeList = res.payitem
            })
        },
        // 支付事件
        payEvent: function () {
            if (this.payType == 1) {
                this.payIt();
            } else if (this.payType == 2) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/myWallet?userId===tPtcNLZARXEuvDhRSFGkQX',
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log(res);
                    if(res.data.virtual >= this.computeMoney){
                        this.payIt();
                    } else if (res.data.virtual < this.computeMoney){
                        // 弹窗选择，是否使用部分余额补足不够的乐宝点，若选确定，则调用payIt()，若选取消，则什么都不做，关闭弹窗
                        // console.log('是否使用部分余额补足不够的乐宝点')
                        this.alertTxt = '是否使用部分余额补足不够的乐宝点？';
                        this.showHideOnBlur = false;
                        this.alert = true;
                    }
                })
            } else if (this.payType == 3) {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/myWallet?userId===tPtcNLZARXEuvDhRSFGkQX',
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log(res);
                    if(res.data.wallet >= this.computeMoney){
                        this.payIt();
                    } else if (res.data.wallet < this.computeMoney){
                        // 弹窗选择，是否使用部分乐宝点补足不够的余额，若选确定，则调用payIt()，若选取消，则什么都不做，关闭弹窗
                        // console.log('是否使用部分乐宝点补足不够的余额')
                        this.alertTxt = '是否使用部分乐宝点补足不够的余额？';
                        this.showHideOnBlur = false;
                        this.alert = true;
                    }
                })
            } else {
                alert('请选择支付方式！')
            }
        },
        // 支付接口 !important
        payIt: function () {
            this.$http.post(
                global.Domain + '/order/pay',
                {
                    pay: this.payType,
                    gid: this.listFromSession[0].gid,
                    number: this.listFromSession[0].number,
                    status: this.$route.query.from == 'goodDetail' ? 1 : 3,
                    cid: this.cidFromSession,
                    address: this.locFromSession.addr,
                    name: this.locFromSession.name,
                    phone: this.locFromSession.phone,
                    remark: '测试留言'
                },
                {
                    emulateJSON: true
                }).then(response => {
                    let res = response.body;
                    console.log(res);
                    if (res.pass == 1) {
                        location.href = res.url
                    } else if (res == 1) {
                        this.$router.push({ path: '/payResult', query: { price: this.num(this.computeMoney) } });
                    } else if (res == 2) {
                        alert('该商品库存不足');
                        this.getDataFromBackend();
                    } else if (res == 3) {
                        alert('收货信息不正确');
                    } else if (res == 4) {
                        alert('插入记录表失败');
                    } else if (res == 5) {
                        alert('生成订单失败');
                    } else if (res == 6) {
                        alert('更换订单号失败');
                    } else if (res == 7) {
                        alert('您的余额不足');
                        this.$router.push('orderFrom');
                    }
                })
            this.payType = '';
        },
        // 从session中获取商品列表
        getList: function () {
            let resArr = [];
            let arr = JSON.parse(sessionStorage.getItem('list'));
            for(let i = 0; i < arr.length; i++){
                resArr.push({
                    gid: arr[i].gid,
                    number: arr[i].number,
                    // cid: this.data.data[i].id
                })
            }
            console.log(resArr)
            this.listFromSession = resArr
        },
        // 从session中获取购物车id: cid
        getCid: function () {
            let resArr = [];
            let arr = JSON.parse(sessionStorage.getItem('list'));
            for(let i = 0; i < arr.length; i++){
                resArr.push({
                    // gid: arr[i].gid,
                    // number: arr[i].number,
                    cid: arr[i].cid
                })
            }
            // console.log(resArr)
            return JSON.stringify(resArr)
        },
        // 从session中获取地址信息：JSON 数组
        getLoc: function () {
            // console.log(JSON.parse(sessionStorage.getItem('loc')));
            if(sessionStorage.getItem('loc')){
                this.locFromSession = JSON.parse(sessionStorage.getItem('loc'));
            } else {
                let addrFromBackend = {
                    "name": this.data.addressitems.name,
                    "phone": this.data.addressitems.phone,
                    "addr": this.data.addressitems.province + this.data.addressitems.city + this.data.addressitems.area + this.data.addressitems.address
                };
                // console.log(addrFromBackend);
                this.locFromSession = addrFromBackend;
            }
        },
        // 从session中获取地址信息：JSON 字符串
        getBaseLoc: function () {
            // console.log(sessionStorage.getItem('loc'));
            if(sessionStorage.getItem('loc')){
                return sessionStorage.getItem('loc');
            } else {
                let addrFromBackend = {
                    "name": this.data.addressitems.name,
                    "phone": this.data.addressitems.phone,
                    "addr": this.data.addressitems.province + this.data.addressitems.city + this.data.addressitems.area + this.data.addressitems.address
                };
                // console.log(addrFromBackend);
                return JSON.stringify(addrFromBackend);
            }
        },
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
    mounted() {
        this.getDataFromBackend()
    },
    computed: {
        // 计算商品总数
        computeGoods: function () {
            let count = 0;
            let list = this.data.gooditems;
            for (let i = 0; i < list.length; i++) {
                count += parseInt(list[i].number)
            }
            return count
        },
        // 计算总价：含运费
        computeMoney: function () {
            let count = 0;
            let list = this.data.gooditems;
            // console.log(list)
            for (let i = 0; i < list.length; i++) {
                count += parseFloat(list[i].price) * parseInt(list[i].number)
            }
            count += parseFloat(this.data.freightitems);
            return count
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 支付类型选择框：modal
.valUnsel
    display flex !important
    justify-content center
    align-items center
    height 1.2813rem
    width 100%
    margin-bottom 0.25rem
    border .0313rem solid #ff8b00
    font-size fs + 0.0625rem
    color #d54600
    background-color #fff
.noMargin
    margin-right 0 !important
.valSel
    color #fff
    background-color #ff8b00
// 大选择窗口
.v-transfer-dom
    .vux-x-dialog
        .weui-dialog
            max-width none !important
            width auto !important
            text-align left !important
            border-radius 0.1875rem
            z-index 4999 !important
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
                    font-size fs + 0.0625rem
                    color #fff
                    background-color #ff8b00
                p
                    margin 0.4063rem 0 0.3438rem 0
                    font-size fs
                    color #555
// confirm 样式
.vux-x-dialog
    .weui-dialog
        max-width 5.625rem !important
        width 80% !important
        text-align center !important
        .weui-dialog__hd
            padding-top 0.1rem !important
            .weui-dialog__title
                font-size fs !important
        .weui-dialog__bd
            padding-bottom .6rem !important
            p
                font-size fs - 0.0313rem !important
        .weui-dialog__ft
            .weui-dialog__btn
                font-size fs !important
// 主体
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
        border-bottom 1px soild #e0e0e0
        margin-bottom: 0.3125rem
        div:not(:nth-child(2))
            display flex
            align-items center
            height 100%
        p
            font-size: fs
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
        border-bottom 1px solid #e0e0e0
        .colLeft
            display flex
            .col1
                img
                    width 2.0781rem
                    height 2.0781rem
                    padding 0.2813rem
            .col2
                padding-top 0.2813rem
                p
                    font-size fs - 0.0313rem
                    line-height: 0.5625rem
                    color: #909090
                p:first-child
                    color #333
        .colRight
            padding-right 0.5rem
            padding-top: 0.2813rem
            font-size: fs - 0.0313rem
            line-height: 0.5625rem
    .countInfo
        width: 100%
        height: 1.1563rem
        background: #fff
        font-size: 0
        p
            margin-right: 0.5625rem
            text-align: right
            font-size: fs - 0.0313rem
            line-height: 1.1563rem
            color: #333
    .footer
        position: fixed
        height 1.1563rem !important
        width 100%
        bottom 0
        left: 0
        .buy-tag
            display: flex
            justify-content flex-end
            height: 1.1563rem
            width 100%
            background: #fff
            font-size: 0
            border-top 1px solid #e0e0e0
            div
                display flex
                align-items center
                height 100%
                padding-right 0.25rem
                span
                    font-size fs + 0.0313rem
                    color red
            a
                line-height: 1.1563rem 
                width: 2.5625rem
                font-size: fs
                background: #ea68a2
                color: #fff
                text-align: center
</style>
