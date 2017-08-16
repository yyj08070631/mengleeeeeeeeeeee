<template>
    <div class="cart-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <!-- <a href="javascript:history.back(1)">
                        <img src="./images/arrow_left.png">
                        <span>返回</span> 
                    </a> -->
            </div>
            <div class="title">
                <!-- 我的购物袋 -->
            </div>
            <div class="search" @click="writeCart()">
                <p v-show="writeType == 0" @click="finish(false)">编辑</p>
                <p v-show="writeType == 1" @click="finish();changeNum()">完成</p>
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 超大分割线 -->
            <!-- <div class="dividerBig"></div> -->
            <!-- 购物车为空 -->
            <p v-show="data.data.length < 1 " class="noGoods">购物车空空如也哦 :)</p>
            <!-- 一个商品 -->
            <div class="oneProduct" v-for="(val,key) in data.data">
                <!-- 选择框 -->
                <div class="colLeft" ref="allBox">
                    <!-- 选择那个圈圈 -->
                    <img src="./images/unchecked.png" ref="checkHook" @click="checkType(key, val.price, val.id, val.gid)" class="check-hook">
                </div>
                <!-- 商品图片 -->
                <div class="colMiddle">
                    <img :src="val.mainmap">
                </div>
                <!-- 信息 & 修改数量 -->
                <div class="colRight">
                    <p class="rowUp">{{val.gname}}</p>
                    <div class="rowDown">
                        <span class="price">
                            <span>￥</span>
                            <span>{{val.price | numBig}}</span>
                            <span>.{{val.price | numSmall}}</span>
                        </span>
                        <div class="count" v-show="showWrite">
                            <a href="javascript:void(0)" @click="numberSub(val.id)">-</a>
                            <input type="text" v-model="number[key].num">
                            <!-- :placeholder="val.number" -->
                            <a href="javascript:void(0)" @click="numberPlus(val.id)">+</a>
                        </div>
                        <div class="num" v-show="showPay">×{{number[key].num}}</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 脚部 -->
        <footer class="foot">
            <div class="colLeft">
                <img src="./images/unchecked.png" @click="checkAllBox" ref="allCheckHook">
                <p class="selAll">全选</p>
            </div>
            <div class="colMiddle" v-show="showPay">
                <p class="total">合计：</p>
                <p class="price">￥{{totalPrice}}</p>
            </div>
            <!-- <a href="javascript:void(0)" class="pay" v-show="showPay" @click="numberPlus()">结算({{Idarr.length}})</a> -->
            <a href="javascript:void(0)" class="pay" v-show="showPay" @click="goodsToSession()">结算({{Idarr.length}})</a>
            <!--  :to="{ path: '/buyGoods', query: JSON.parse(JSON.stringify(buyArr)) }" -->
            <a href="javascript:void(0)" class="del" v-show="showWrite" @click="onShow">删除</a>
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
        <alert v-model="show" title="提示" @on-show="onShow" @on-hide="onHide">
            <button class="btn1" @click="onHide();delCartList();">确定</button>
            <button class="btn2" @click="onHide();">取消</button>
            请确认删除
        </alert>
        <!-- 脚 -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Toast, Group, Alert } from 'vux'
export default {
    components: {
        'v-view': view,
        Toast,
        Group,
        Alert
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
            buyArr: [] //用于提交购买列表的数组
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
            let narr = [] // 保存对比之前的数组
            let get = [] // 保存对比之后的数组
            for (let i = 0; i < this.number.length; i++) {
                narr.push({
                    num: this.data.data[i].number,
                    id: this.data.data[i].id
                })
                if ((this.number[i].num - narr[i].num) != 0) {
                    // get.push(comput)
                    get.push({
                        number: this.number[i].num,
                        id: this.number[i].id
                    })
                    this.saveData = get
                } else {
                    //get.pop()
                }
            }
            // console.log(this.buyArr)
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
            let narr = []//保存对比之前的数组
            let get = []//保存对比之后的数组
            for (let i = 0; i < this.number.length; i++) {
                narr.push({
                    num: this.data.data[i].number,
                    id: this.data.data[i].id
                })
                if ((this.number[i].num - narr[i].num) != 0) {
                    get.push({
                        number: this.number[i].num,
                        id: this.number[i].id
                    })
                    this.saveData = get
                } else {
                    this.saveData.pop()
                }
            }
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
                            this.$refs.allBox[i].getElementsByTagName('img')[0].src = require('./images/unchecked.png')
                            this.Idarr = []
                            this.isCheckAll = false
                            this.$refs.allCheckHook.src = require('./images/unchecked.png')
                        }
                        this.getDataFromBackend()
                    } else {
                        this.errorAlert = true
                    }
                })
        },
        //修改数量
        changeNum: function () {
            console.log(JSON.stringify(this.saveData));
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
                        console.log(response.body)
                    } else {
                        //console.log(response.body)
                    }
                })
            this.writeAfter = true
        },
        //获取数据
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/cartList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let moreComMore = response.body;
                console.log(moreComMore)
                let arr = [];
                this.data = moreComMore;
                for (let i = 0; i < moreComMore.data.length; i++) {
                    arr.push({
                        id: moreComMore.data[i].id,
                        num: moreComMore.data[i].number
                    });
                }
                this.number = arr;
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
                    number: this.number[key].num
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
                    gid: id,
                    number: this.number[key].num
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
                        number: this.number[i].num
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
			sessionStorage.setItem('list', JSON.stringify(this.buyArr));
			// console.log(JSON.parse(sessionStorage.getItem('list')));
			this.$router.push('buyGoods');
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
        //数组深复制，不考虑循环引用的情况
        cloneArr: function (from) {
            return from.map((n) => clone(n));
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    computed: {
        //计算总价
        totalPrice: function () {
            let sum = 0
            for (let i = 0; i < this.priceArr.length; i++) {
                sum += this.priceArr[i];
            }
            return sum
        }
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
                img
                    height 0.4688rem
                    width 0.4688rem
                    margin 0 0.3438rem
                    border-radius 50%
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
                    margin-top 0.3125rem
                    font-size fs - 0.0313rem
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
                            font-size fs - 0.0625rem
                        span:nth-child(2)
                            font-size fs
                    .count
                        display flex
                        margin-right 0.4063rem
                        border 0.0313rem solid #d6d6d6
                        border-radius 0.0938rem
                        a
                            display flex
                            justify-content center
                            align-items center
                            width 0.7188rem
                            height 0.6875rem
                            font-size fs + 0.0625rem
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
            padding 0.9375rem  0 
            font-size fs + 0.0313rem
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
            font-size fs - 0.0313rem
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
            font-size fs - 0.0313rem
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