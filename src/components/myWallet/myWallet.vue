<template>
    <div class="myWallet-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <!--主体-->
        <section class="main">
            <!-- 乐宝余额 -->
            <div class="onePanel">
                <div class="dataBox">
                    <p>乐宝余额（点）</p>
                    <span>{{num(data.virtual)}}</span>
                </div>
                <div class="operatList">
                    <div class="operatItem">
                        <a href="javascript:void(0)" @click="showHideOnBlur=true">
                            我要充值
                            <img src="./images/arrow_right.png">
                        </a>
                    </div>
                </div>
            </div>
            <!-- 分割线 -->
            <div class="divider"></div>
            <!-- 可提现金额 -->
            <div class="onePanel bluePanel">
                <div class="dataBox">
                    <p>可提现金额（元）</p>
                    <span>{{num(data.wallet)}}</span>
                </div>
                <div class="operatList">
                    <div class="operatItem">
                        <a href="javascript:void(0)" @click="showTixian=true">
                            我要提现
                            <img src="./images/arrow_right.png">
                        </a>
                    </div>
                    <div class="operatItem">
                        <router-link to="/bill">
                            我的账单
                            <img src="./images/arrow_right.png">
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- 遮罩：选择充值金额 -->
        <div v-transfer-dom>
            <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>选择面额</p>
                    <checker v-model="moneyValue" default-item-class="valueUnsel" selected-item-class="valueSel">
                        <checker-item value="5">
                            5元
                        </checker-item>
                        <checker-item value="10">
                            10元
                        </checker-item>
                        <checker-item value="20" class="noMargin">
                            20元
                        </checker-item>
                        <checker-item value="50">
                            50元
                        </checker-item>
                        <checker-item value="100">
                            100元
                        </checker-item>
                        <checker-item value="200" class="noMargin">
                            200元
                        </checker-item>
                    </checker>
                    <div class="inputChongzhi">
                        <input type="text" v-model="moneyValueInput" placeholder="填写充值金额">
                    </div>
                    <div class="btnCont">
                        <div class="inSubmit" @click="chongZhi()">确定充值</div>
                        <div class="inSubmit inCancel" @click="showHideOnBlur = false">取消</div>
                    </div>
                </div>
            </x-dialog>
        </div>
        <!-- 遮罩：填写提现信息 -->
        <div v-transfer-dom>
            <x-dialog v-model="showTixian" class="dialog-demo" hide-on-blur>
                <div class="chooseValue">
                    <p>提现</p>
                    <label class="inputBox">
                        <span>提现金额：</span>
                        <input type="text" placeholder="请输入提现金额" v-model="tixianValue">
                    </label>
                    <label class="inputBox">
                        <span>账户类型：</span>
                        <select v-model="tixianAcouType">
                            <option value="1" selected>支付宝</option>
                            <option value="2">银行卡</option>
                        </select>
                    </label>
                    <label class="inputBox">
                        <span>账户账号：</span>
                        <input type="text" placeholder="请输入提现账户" v-model="tixianAcouTxt">
                    </label>
                    <div class="btnCont">
                        <div class="inSubmit" @click="tixian()">确定提现</div>
                        <div class="inSubmit inCancel" @click="showTixian = false">取消</div>
                    </div>
                </div>
            </x-dialog>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Checker, CheckerItem, Popup } from 'vux'
// import header from '../../components/header/header';

export default {
    directives: {
        TransferDom
    },
    components: {
        'v-view': view,
        XDialog,
        XButton,
        Checker,
        CheckerItem,
        Popup,
        // 'v-header': header
    },
    data() {
        return {
            data: [],
            showHideOnBlur: false,
            showTixian: false,
            moneyValue: '',
            moneyValueInput: '',
            tixianValue: '',
            tixianAcouType: '',
            tixianAcouTxt: ''
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/myWallet?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        },
        // 充值
        chongZhi: function () {
            if(this.moneyValue == '' && this.moneyValueInput != ''){
                // alert('充值' + this.moneyValueInput + '元')
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/recharge?userId===tPtcNLZARXEuvDhRSFGkQX&fee=' + this.moneyValueInput,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    console.log(res)
                    if(res.code == 200){
                        location.href = res.url;
                    } else {
                        alert(res.msg);
                    }
                })
            } else if (this.moneyValueInput == '' && this.moneyValue != ''){
                // alert('充值' + this.moneyValue + '元')
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/recharge?userId===tPtcNLZARXEuvDhRSFGkQX&fee=' + this.moneyValue,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    console.log(res)
                    if(res.code == 200){
                        location.href = res.url;
                    } else {
                        alert(res.msg);
                    }
                })
            } else if (this.moneyValue == '' && this.moneyValueInput == ''){
                alert('没有获取到充值金额')
            } else {
                alert('请勿填写两种金额')
            }
        },
        // 提现
        tixian: function () {
            // alert('从' + this.tixianAcouType + ' ' + this.tixianAcouTxt + ' 账户中提取' + this.tixianValue + '元')
            if (this.tixianValue == ''){
                alert('请输入提现金额');
            } else if (this.tixianAcouType == ''){
                alert('请选择到账类型');
            } else if (this.tixianAcouTxt == ''){
                alert('请输入收款账号');
            } else {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/applyWithdrawals?userId===tPtcNLZARXEuvDhRSFGkQX&money=' + this.tixianValue + '&type=' + this.tixianAcouType + '&account=' + this.tixianAcouTxt,
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    console.log(res);
                    if (res.code == 200) {
                        alert('提现申请成功！');
                        this.showTixian = false;
                        this.getDataFromBackend()
                    } else {
                        alert('提现申请失败：' + res.msg)
                    }
                })
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
    computed: {

    },
    watch: {
        tixianValue: function (val) {
            if (/^[0-9]/.test(val) || val == '') {
                // console.log('提现金额输入正确');
            } else {
                alert('请输入正确的提现金额！');
                this.tixianValue = '';
            }
        }
    },
    filters: {
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 初始化样式
img, span, a
    display block

// 充值金额选择框：modal
.valueUnsel
    display flex !important
    justify-content center
    align-items center
    height 1.2813rem
    width 2.4063rem
    margin-right 0.4375rem
    margin-bottom 0.4063rem
    border .0313rem solid #ea68a2
    font-size fs + 0.0625rem
    color #333
    background-color #fff
.noMargin
    margin-right 0 !important
.valueSel
    color #fff
    background-color #ea68a2
.weui-dialog
    max-width none !important
    width auto !important
    text-align left !important
    border-radius 0.1875rem
    .chooseValue
        width 8.2813rem
        padding 0 0.4375rem
        // 充值金额
        .vux-checker-box
            display flex
            flex-wrap wrap
        .inputChongzhi
            width 8rem
            height 1.2813rem
            input
                width 8rem
                height 1.2813rem
                padding-right 0.2813rem
                border 1px solid #ea68a2
                font-size fs + 0.0313rem
                text-align right
                outline 0
        .btnCont
            display flex
            margin 1rem 0 0.4688rem 0
            .inSubmit
                display flex
                justify-content center
                align-items center
                width 100%
                height 1.25rem
                font-size fs + 0.0625rem
                color #fff
                background-color #ea68a2
            .inCancel
                color #353535
                background-color #f0f0f0
        p
            margin 0.4063rem 0 0.3438rem 0
            font-size fs
            color #555
        // 提现信息
        .inputBox
            display flex
            margin-bottom 0.5625rem
            span
                display flex
                align-items center
                width 3rem
                font-size fs - 0.0313rem
            input
                height 0.875rem
                width 100%
                padding-right 0.2813rem
                border 1px solid #e0e0e0
                outline 0
                font-size fs - 0.0313rem
                text-align right
            select
                height 0.875rem
                width 100%
                padding-right 0.2813rem
                border 1px solid #e0e0e0
                outline 0
                font-size fs - 0.0313rem
                color #909090
                appearance none 
                direction rtl
// wrapper
.myWallet-wrapper
    position absolute
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // footer
    .route-item
        footerCss()
    // 主体
    .main
        background-color #f0f0f0
        // 分割线
        .divider
            border-bottom 0.3125rem solid #e0e0e0
        // 一个面板
        .onePanel
            .dataBox
                height 4.375rem
                background-color #ea68a2
                p
                    padding .8438rem 0 .75rem .5rem
                    font-size fs - 0.0313rem
                    color #fff
                span
                    padding-left .5rem
                    font-size fs + 1.1875rem
                    color #fff
            .operatList
                .operatItem
                    height 1.3438rem
                    border-bottom-1px(#e0e0e0)
                    background-color #fff
                    a
                        display flex
                        align-items center
                        justify-content space-between
                        height 100%
                        margin 0 0.5rem 0 0.5rem
                        font-size fs - 0.0313rem
                        color #333
        // 改data面板的颜色
        .bluePanel
            .dataBox
                background-color #00b9ed
</style>

