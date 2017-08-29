<template>
    <div class="cart-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack" @click="writeCart()">
                <!-- <a href="javascript:history.back(1)">
                        <img src="./images/arrow_left.png">
                        <span>返回</span> 
                    </a> -->
                <p v-show="writeType == 0 && mainView == 1" @click="canDel = true">删除</p>
                <p v-show="writeType == 1 && mainView == 1" @click="canDel = false">完成</p>
            </div>
            <div class="title">
                <!-- 我的购物袋 -->
                <div class="btnSeries">
                    <p :class="{ btnSwitch: true, btnActive: mainView == 0 }" @click="mainView = 1">购物袋</p>
                    <p :class="{ btnSwitch: true, btnActive: mainView == 1 }" @click="mainView = 0">待结算订单</p>
                </div>
            </div>
            <div class="search">
                <a href="javascript:void(0)" class="pay" @click="goodsToSession()" v-show="mainView == 1">结算</a>
                <!-- ({{Idarr.length}}) -->
                <!-- <a href="javascript:void(0)" class="pay" v-show="showWrite" @click="onShow">删除</a> -->
                <!-- <p v-show="mainView == 0" @click="mainView = 1">购物车</p>
                <p v-show="mainView == 1" @click="mainView = 0">未结账订单</p> -->
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 超大分割线 -->
            <!-- <div class="dividerBig"></div> -->
            <!-- 一个商品 -->
            <div class="goodsList" v-show="mainView == 1">
                <!-- 购物车为空 -->
                <p v-if="data.data.length < 1 " class="noGoods">购物车空空如也哦 :)</p>
                <div class="oneProduct" v-for="(val,key) in data.data">
                    <!-- 选择框 -->
                    <div class="colLeft" ref="allBox">
                        <!-- 选择那个圈圈 -->
                        <!-- <img src="./images/unchecked.png" ref="checkHook" @click="checkType(key, val.price, val.id, val.gid)" class="check-hook"> -->
                        <div class="delBtn" v-show="canDel" @click="show = true; setIdArr(val.id)">—</div>
                    </div>
                    <!-- 商品图片 -->
                    <router-link :to="{ path: '/goodDetail', query: { gid: val.gid } }" class="colMiddle">
                        <img :src="val.mainmap">
                    </router-link>
                    <!-- 信息 & 修改数量 -->
                    <div class="colRight">
                        <router-link :to="{ path: '/goodDetail', query: { gid: val.gid } }" class="rowUp">{{val.gname}}</router-link>
                        <div class="rowDown">
                            <span class="price">
                                <span>￥</span>
                                <span>{{val.price | numBig}}</span>
                                <span>.{{val.price | numSmall}}</span>
                            </span>
                            <div class="count">
                                <a href="javascript:void(0)" @click="numberSub(val.id)">-</a>
                                <input type="text" v-model="number[key].num">
                                <!-- :placeholder="val.number" -->
                                <a href="javascript:void(0)" @click="numberPlus(val.id)">+</a>
                            </div>
                            <!-- <div class="num" v-show="showPay">×{{number[key].num}}</div> -->
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 一个订单 -->
            <div class="orderList" v-show="mainView == 0">
                <div class="content-item" v-for="(item,key) in orderList.orderitem">
                    <div class="oneGood" v-for="(val,key) in item.good">
                        <div class="rowUp">
                            <img class="product" :src="val.mainmap" />
                            <div class="product-message">
                                <span class="desc">{{val.name}}</span>
                                <p class="num">单价:￥{{num(val.price)}}</p>
                                <!-- <p class="price">总价:￥{{num(val.total)}}</p> -->
                            </div>
                            <div>
                                <span class="for-to-paid">待付款</span>
                                <span class="orderPrice">数量：{{val.number}}</span>
                            </div>
                        </div>
                        <!-- <div class="rowDown"> -->
                            <!-- 左边的按钮 -->
                            <!-- <a href="javascript:void(0)" class="link" @click="showHideOnBlur = true; goodNowId = val.id; goodNowTotal = val.total">立即付款</a> -->
                            <!-- 右边的按钮 -->
                            <!-- <a href="javascript:void(0)" class="link" @click="cancOrder(item.id)">取消订单</a> -->
                        <!-- </div> -->
                    </div>
                    <div class="oneOrderTotal">
                        <div class="rowLeft">
                            <!-- 左边的按钮 -->
                            <a href="javascript:void(0)" class="link" @click="showHideOnBlur = true; goodNowId = item.id; goodNowTotal = item.total">立即付款</a>
                            <!-- 右边的按钮 -->
                            <a href="javascript:void(0)" class="link" @click="cancOrder(item.id)">取消订单</a>
                        </div>
                        <div class="rowRight">
                            <p class="totalPrice">总金额：<span>{{num(item.total)}}</span></p>
                            <p>运费：{{item.fee == 0 ? '免运费' : item.fee}}</p>
                        </div>
                    </div>
                </div>
                <p v-if="orderList.orderitem.length == 0" class="noGoods">没有未支付订单哦:-D</p>
            </div>
        </section>
        <!-- 脚部 -->
        <footer class="foot" v-show="mainView == 1">
            <div class="colLeft">
                <!-- <img src="./images/unchecked.png" @click="checkAllBox" ref="allCheckHook"> -->
                <p class="selAll">购物袋小计</p>
            </div>
            <div class="colMiddle">
                <p class="price">RMB&nbsp;{{num(totalPrice)}}</p>
            </div>
            <!-- <a href="javascript:void(0)" class="pay" v-show="showPay" @click="numberPlus()">结算({{Idarr.length}})</a> -->
            <!-- <a href="javascript:void(0)" class="pay" v-show="showPay" @click="goodsToSession()">结算({{Idarr.length}})</a> -->
            <!--  :to="{ path: '/buyGoods', query: JSON.parse(JSON.stringify(buyArr)) }" -->
            <!-- <a href="javascript:void(0)" class="del" v-show="showWrite" @click="onShow">删除</a> -->
        </footer>
        <!-- 页面所有弹窗 -->
        <div>
            <toast v-model="successAlert" type="text">已删除</toast>
        </div>
        <div>
            <toast v-model="errorAlert" type="text">删除失败</toast>
        </div>
        <div>
            <toast v-model="writeAfter" type="text">已修改</toast>
        </div>
        <alert v-model="show" title="提示">
            <button class="btn1" @click="onHide();delCartList();">确定</button>
            <button class="btn2" @click="onHide();">取消</button>
            请确认删除
        </alert>
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
        <confirm v-model="alert" title="确认支付" @on-confirm="payIt">
            <p style="text-align:center;">{{alertTxt}}</p>
        </confirm>
        <!-- 脚 -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Toast, Group, Alert } from 'vux'
import { Confirm, XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Checker, CheckerItem, Popup } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        'v-view': view,
        Toast,
        Group,
        Alert,
        XDialog,
        XButton,
        Checker,
        CheckerItem,
        Popup,
        Confirm,
    },
    data() {
        return {
            writeType: 0,//编辑状态
            showWrite: false,//显示编辑所需组件
            showPay: true,//显示结账所需组件
            data: [],//获取数据
            number: [],//存储数字
            isCheck: false,//选中单个按钮
            isCheckAll: false,//选中所有按钮
            clearData: 0,//清楚数据
            Idarr: [],//获取Id数组
            getIdArr: [],//获取Id过滤数组
            priceArr: [],//价钱数组
            getPriceArr: [],//获取价钱过滤数组
            saveData: [],//保存修改数量后的数组
            successAlert: false,//获取成功弹窗
            errorAlert: false,//获取数据失败弹窗
            writeAfter: false,//编辑成功弹窗
            arr: [],
            show: false, //询问弹窗
            buyArr: [], //用于提交购买列表的数组
            orderList: [], // 订单列表
            mainView: 1, // main 块显示内容
            // 支付类型相关
            payTypeList: [],
            payType: '',
            showHideOnBlur: false,
            // 弹窗 & 弹窗文字
            alert: false,
            alertTxt: '',
            // 当前立即支付商品
            goodNowId: '',
            goodNowTotal: '',
            // 是否可以删除
            canDel: false,
            // 总价统计
            totalPrice: 0,
        }
    },
    methods: {
        //数量+=1
        numberPlus(id) {
            for (let i = 0; i < this.number.length; i++) {
                if (this.number[i].id == id) {
                    this.number[i].num++;
                }
            }
            // let narr = [] // 保存对比之前的数组
            let get = [] // 保存对比之后的数组
            for (let i = 0; i < this.number.length; i++) {
                // narr.push({
                //     num: this.data.data[i].number,
                //     id: this.data.data[i].id
                // })
                // if ((this.number[i].num - narr[i].num) != 0) {
                //     // get.push(comput)
                get.push({
                    number: this.number[i].num,
                    id: this.number[i].id
                })
                this.saveData = get
                // } else {
                //     //get.pop()
                // }
            }
            this.changeNum();
            // console.log(narr);
            // console.log(get);
        },
        //数量-=1
        numberSub(id) {
            for (let i = 0; i < this.number.length; i++) {
                if (this.number[i].id == id) {
                    if (this.number[i].num == 1) {
                        this.number[i].num = 1
                    } else {
                        this.number[i].num--;
                    }
                }
            }
            // let narr = []//保存对比之前的数组
            let get = []//保存对比之后的数组
            for (let i = 0; i < this.number.length; i++) {
                // narr.push({
                //     num: this.data.data[i].number,
                //     id: this.data.data[i].id
                // })
                // if ((this.number[i].num - narr[i].num) != 0) {
                get.push({
                    number: this.number[i].num,
                    id: this.number[i].id
                })
                this.saveData = get
                // } else {
                //     this.saveData.pop()
                // }
            }
            // console.log(get);
            this.changeNum();
            // console.log(this.buyArr)
        },
        //删除数据
        delCartList: function () {
            console.log(this.Idarr)
            for (let i = 0; i < this.Idarr.length; i++) {
                this.Idarr[i] = Number(this.Idarr[i]);
            }
            this.$http.post(
                global.Domain + '/Order/delcart',
                {
                    oid: JSON.stringify(this.Idarr)
                },
                {
                    emulateJSON: true
                }).then(response => {
                    let data = response.body;
                    if (data === 1) {
                        this.successAlert = true
                        for (let i = 0; i < this.$refs.allBox.length; i++) {
                            // this.$refs.allBox[i].getElementsByTagName('img')[0].src = require('./images/unchecked.png')
                            this.Idarr = []
                            this.isCheckAll = false
                            // this.$refs.allCheckHook.src = require('./images/unchecked.png')
                        }
                    } else {
                        this.errorAlert = true
                    }
                    this.getDataFromBackend()
                })
        },
        // 设置用于删除购物车商品的 IdArr
        setIdArr: function(oid){
            this.Idarr = [oid]
        },
        //修改数量
        changeNum: function () {
            // console.log(JSON.stringify(this.saveData));
            this.arr = {
                num: this.saveData
            }
            for (let i = 0; i < this.saveData.length; i++) {
                this.saveData[i].id = Number(this.saveData[i].id);
                this.saveData[i].number = Number(this.saveData[i].number);
            }
            this.$http.post(
                global.Domain + '/Order/chancart',
                {
                    num: JSON.stringify(this.saveData)
                },
                {
                    emulateJSON: true
                }).then(response => {
                    let data = response.body;
                    if (data === 1) {
                        this.getDataFromBackend()
                        // console.log(response.body)
                    } else {
                        //console.log(response.body)
                    }
                })
            // this.writeAfter = true
        },
        //获取数据
        getDataFromBackend: function () {
            // 购物车数据
            this.$http({
                method: 'get',
                url: global.Domain + '/user/cartList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let moreComMore = response.body;
                console.log(moreComMore)
                let arr = [];
                this.data = moreComMore;
                // 将所有商品存入操作提交订单的数组
                this.selAll(moreComMore.data);
                this.totalPrice = 0;
                for (let i = 0; i < moreComMore.data.length; i++) {
                    arr.push({
                        id: moreComMore.data[i].id,
                        num: moreComMore.data[i].number
                    });
                    // 计算总价
                    this.totalPrice += moreComMore.data[i].number * moreComMore.data[i].price;
                    // console.log(this.totalPrice);
                }
                this.number = arr;
            });
            // 订单数据
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/ordwait',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
                console.log(this.orderList)
            });
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
        //选中单个按钮
        checkType: function (key, data, id, gid) {
            let file = this.$refs.checkHook[key].src
            let reg = /unchecked/
            let result = this.number[key].num * this.data.data[key].price
            if (reg.test(file)) {
                this.$refs.checkHook[key].src = require('./images/checked.png')
                this.Idarr.push(id)
                this.priceArr.push(result)
                this.buyArr.push({ // 这是结算用的数组
                    gid: gid,
                    number: this.number[key].num,
                    cid: id
                })
            } else {
                this.$refs.checkHook[key].src = require('./images/unchecked.png')
                //删除数组中某个特定元素的方法
                Array.prototype.remove = function (val) {
                    var index = this.indexOf(val);
                    if (index > -1) {
                        this.splice(index, 1);
                    }
                };
                this.Idarr.remove(id)
                this.priceArr.remove(result)
                this.buyArr.remove({
                    gid: gid,
                    number: this.number[key].num,
                    cid: id
                })
            }
            // console.log(this.priceArr)
            console.log(JSON.parse(JSON.stringify(this.buyArr)))
        },
        //选中所有个按钮
        checkAllBox: function () {
            if (this.isCheckAll == false) {
                this.isCheckAll = true
                this.Idarr = []
                this.priceArr = []
                this.buyArr = [] // 这是结算用的数组
                this.$refs.allCheckHook.src = require('./images/checked.png')
            } else {
                this.isCheckAll = false
                this.$refs.allCheckHook.src = require('./images/unchecked.png')
            }
            for (let i = 0; i < this.$refs.allBox.length; i++) {
                // 构建选中商品数组
                if (this.isCheckAll == true) {
                    this.$refs.allBox[i].getElementsByTagName('img')[0].src = require('./images/checked.png')
                    this.Idarr.push(this.data.data[i].id)
                    this.priceArr.push(this.number[i].num * this.data.data[i].price)
                    this.buyArr.push({
                        gid: this.data.data[i].gid,
                        number: this.number[i].num,
                        cid: this.data.data[i].id
                    })
                    let arr = []
                    for (var i = 0; i < this.Idarr.length - 1; i++) {
                        if (arr.indexOf(this.Idarr[i]) == -1) {
                            arr.push(this.Idarr[i]);
                        }
                    }
                    this.getIdArr = arr
                    let arr2 = [];
                    for (var i = 0; i < this.priceArr.length - 1; i++) {
                        if (arr2.indexOf(this.priceArr[i]) == -1) {
                            arr2.push(this.priceArr[i]);
                        }
                    }
                    this.getPriceArr = arr2;
                } else {
                    this.$refs.allBox[i].getElementsByTagName('img')[0].src = require('./images/unchecked.png')
                    this.getIdArr = []
                    this.Idarr = []
                    this.priceArr = []
                    this.buyArr = []
                    this.getPriceArr = []
                }
            }
            //  console.log(this.priceArr)
            console.log(this.buyArr)
        },
        // (页面加载自动执行) 将所有购物车信息加入 buyArr 数组
        selAll: function(data){
            // console.log(data);
            this.buyArr = [];
            for (let i = 0; i < data.length; i++) {
                // 构建选中商品数组
                this.buyArr.push({
                    gid: data[i].gid,
                    number: data[i].number,
                    cid: data[i].id
                })
            }
            console.log(this.buyArr);
        },
        //编辑完成
        finish: function (type) {
            this.writeAfter = type
            for (let i = 0; i < this.$refs.allBox.length; i++) {
                this.$refs.allBox[i].getElementsByTagName('img')[0].src = require('./images/unchecked.png')
                this.Idarr = []
                this.isCheckAll = false
                this.$refs.allCheckHook.src = require('./images/unchecked.png')
            }
        },
        // 在session中存入下单商品列表，然后跳转到下单页面
		goodsToSession: function(){
            if(this.buyArr.length == 0){
                alert('请选择要结算的商品！');
            } else {
                sessionStorage.setItem('list', JSON.stringify(this.buyArr));
                // console.log(JSON.parse(sessionStorage.getItem('list')));
                this.$router.push({ path: '/buyGoods', query: { from: 'cart' } });
            }
        },
        // 取消订单方法
        cancOrder: function(oid){
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/ordesc?oid=' + oid,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                if(res == 1){
                    alert('取消订单成功！')
                    this.getDataFromBackend();
                } else {
                    alert('取消订单失败');
                }
            });
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
                    if(res.data.virtual >= this.goodNowTotal){
                        this.payIt();
                    } else if (res.data.virtual < this.goodNowTotal){
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
                    if(res.data.wallet >= this.goodNowTotal){
                        this.payIt();
                    } else if (res.data.wallet < this.goodNowTotal){
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
                    oid: this.goodNowId,
                    status: 2,
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
                        this.$router.push({ path: '/payResult', query: { price: this.num(this.goodNowTotal) } });
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
        },
        //显示编辑区块
        writeCart: function () {
            if (this.showWrite == false) {
                this.showWrite = true
                this.writeType = 1
                this.showPay = false
            } else {
                this.showWrite = false
                this.writeType = 0
                this.showPay = true
            }
        },
        onShow: function () {
            this.show = true
        },
        onHide: function () {
            this.show = false
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
        //计算总价
        // totalPrice: function () {
        //     let sum = 0
        //     console.log(this.buyArr);
        //     for (let i = 0; i < this.buyArr.length; i++) {
        //         sum += this.buyArr[i].number * this.buyArr[i].price;
        //     }
        //     return sum
        // }
    },
    filters: {
        numBig: function (value) {
            value = parseFloat(value).toFixed(2).split('.')[0];
            return value
        },
        numSmall: function (value) {
            value = parseFloat(value).toFixed(2).split('.')[1];
            return value
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// init
span, a, img, input, textarea
    display block

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
// 外层元素
.cart-wrapper
    position absolute
    top 0
    left 0
    width 100%
    height: 100%
    background #f0f0f0
    // 详情页header
    .header
        headerFlex()
        .btnSeries
            display flex
            justify-content center
            border 1px solid #ea68a2
            border-radius 0.0938rem
            .btnSwitch
                display flex
                align-items center
                justify-content center
                width 2.1875rem
                height 0.625rem
                background-color #ea68a2
                border-radius 0.0938rem
                font-size fs
                font-weight normal
                color #fff
            .btnActive
                background-color #fff
                border-radius 0.0938rem
                color #ea68a2
        .search
            display flex
            align-items center
            justify-content flex-end
            .pay
                display flex
                align-items center
                justify-content center
                height 60%
                width 0.9375rem
                margin-right 0.25rem
                border-radius 0.0938rem
                font-size fs - 0.0313rem
                color #fff
                background-color #ea68a2
    .route-item
        footerCss()
    // 主体
    .main
        margin-top 1.0625rem
        margin-bottom 2.75rem
        //没有商品
        .noGoods
            margin-top 50%
            font-size fs + 0.0313rem
            text-align center
            color #333
        // 大分割线    
        .dividerBig
            width 100%
            height 0.3125rem
            background-color #e0e0e0
        // 一个产品
        .oneProduct
            display flex
            width 100%
            padding 0.2188rem 0
            border-bottom 1px solid #e0e0e0
            background-color #fff
            img
                width 2.1875rem
                height 2.1875rem
            // 选择框
            .colLeft
                display flex
                justify-content center
                align-items center
                width 0.9688rem
                padding 0 .2rem 0 .3rem
                img
                    height 0.4688rem
                    width 0.4688rem
                    margin 0 0.3438rem
                    border-radius 50%
                .delBtn
                    display flex
                    justify-content center
                    align-items center
                    width 0.4688rem
                    height 0.4688rem
                    border-radius 50%
                    font-size 0.2813rem
                    font-weight bold
                    color #fff
                    background-color #ea68a2
            // 商品图片
            // ......
            // 信息 & 修改数量
            .colRight
                display flex
                flex-direction column
                justify-content space-between
                width 100%
                margin-left 0.2188rem
                .rowUp
                    width 4.8125rem
                    margin-top 0.3125rem
                    font-size fs
                    color #333
                    overflow hidden
                    text-overflow ellipsis
                    white-space  nowrap
                .rowDown
                    margin-bottom 0.3125rem
                    display flex
                    justify-content space-between
                    .price
                        display flex
                        align-items flex-end
                        margin-bottom 0.125rem
                        color #ea68a2
                        span:first-child, span:last-child
                            font-size fs - 0.0313rem
                        span:nth-child(2)
                            font-size fs + 0.0313rem
                    .count
                        display flex
                        margin-right 0.4063rem
                        border 0.0313rem solid #d6d6d6
                        border-radius 0.0938rem
                        a
                            display flex
                            justify-content center
                            width 0.7188rem
                            height 0.6875rem
                            font-size fs + 0.1875rem
                            line-height fs + 0.2656rem
                            color #333
                        input
                            display flex
                            justify-content center
                            align-items center
                            width 0.8125rem
                            height 0.6875rem
                            font-size fs + 0.0625rem
                            color #333
                            text-align center
                        a:first-child
                            border-right 0.0313rem solid #d6d6d6
                        a:last-child
                            border-left 0.0313rem solid #d6d6d6
                    .num
                        font-size fs + 0.0625rem
                        margin-right 0.5rem   
        //  一个订单
        .content-item
            border-bottom 1px solid #e0e0e0
            border-top 0.3125rem solid #e0e0e0
            background-color #fff
            .rowUp
                overflow hidden
                .product
                    display block
                    float: left
                    width: 1.625rem 
                    height: 1.625rem
                    margin: 0.5625rem 0.5625rem
                .product-message
                    margin-top: 0.5rem
                    float: left
                    width: 5.25rem
                    line-height: 0.625rem
                    font-size: fs - 0.0313rem
                    .desc
                        color: #333
                    .num
                        color: #909090
                    .price
                        color: #909090
                .for-to-paid
                    display: inline-block
                    margin: 0.5rem 0.5625rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0313rem
                    color: #ea6aa2
                .orderPrice
                    display: inline-block
                    margin: 0 0.5625rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0313rem
                    color: #909090
            .rowDown
                display flex
                justify-content flex-end
                width 100%
                height 1.1406rem
                .link
                    display block
                    width 1.8438rem
                    height 0.5625rem
                    margin-right 0.25rem
                    line-height 0.5625rem
                    font-size fs - 0.0625rem
                    text-align center
                    color #fff
                    border-radius 0.1563rem
                    background #ea6aa2
            // 单个订单样式
            .oneGood:not(:last-child)
                border-bottom 1px solid #e0e0e0
            // 订单统计
            .oneOrderTotal
                display flex
                justify-content space-between
                align-items center
                width 10rem
                height 1.5625rem
                border-top 1px solid #e0e0e0
                font-size fs - 0.0313rem
                .rowLeft
                    display flex
                    margin-left .5rem
                    .link
                        display block
                        width 1.8438rem
                        height 0.5625rem
                        margin-right 0.25rem
                        line-height 0.5625rem
                        font-size fs - 0.0625rem
                        text-align center
                        color #fff
                        border-radius 0.1563rem
                        background #ea6aa2
                .rowRight
                    margin-right 0.5rem
                    .totalPrice
                        display flex
                        span
                            color #ea68a2
                    p:not(:first-child)
                        margin-top 0.1563rem
    // 脚部
    .foot
        display flex
        align-items center
        justify-content space-between
        position fixed
        width 100%
        height 1.0938rem
        bottom 1.3438rem
        left 0
        background-color #fff
        .colLeft
            display flex
            align-items center
            height 100%
            margin-left 0.3125rem
            img
                width 0.4688rem
                height 0.4688rem
                margin-right 0.3125rem
            .selAll
                font-size fs + 0.0625rem
                color #333
        .colMiddle
            display flex
            align-items center
            height 100%
            margin-left 2.8125rem
            margin-right 0.5rem
            .total
                font-size fs + 0.0625rem
                color #333
            .price
                font-size fs + 0.0625rem
                color #ea68a2
        .pay
            display flex
            align-items center
            justify-content center
            height 100%
            width 2.5625rem
            font-size fs - 0.0313rem
            color #fff
            background-color #ea68a2
        .del
            display flex
            align-items center
            justify-content center
            height 100%
            width 2.5625rem
            font-size fs - 0.0313rem
            color #fff
            background-color #ea68a2    
    //弹窗组件        
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size fs - 0.0625rem
    .weui-dialog
        width 12.5rem!important
        min-width 80%
        background #fff
        border-radius 0.1875rem
        .weui-dialog__hd
            padding 0.3125rem 0 0 0 
            .weui-dialog__title
                font-size fs + 0.0625rem !important
        .weui-dialog__bd
            padding 0.625rem 0 0.9375rem 0
            font-size fs + 0.0625rem
            margin-bottom 0.5625rem
        .btn1
            position:absolute
            left:0px;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs + 0.0625rem
        .btn2
            position:absolute
            left:50%;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs + 0.0625rem
            .weui-dialog__title
                font-size fs - 0.0313rem !important
            .weui-dialog__ft
                background #3cf !important
                display none
                .weui-dialog__btn_primary
                    color #ff0  !important
                .weui-dialog__btn    
                    color #ff0  !important        
</style>