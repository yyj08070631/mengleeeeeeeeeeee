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
            <div class="title">我的购物袋</div>
            <div class="search" @click="writeCart"><p>{{writeType}}</p></div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
            <!-- 一个商品 -->
            <div class="oneProduct" v-for="(val,key) in data.data">
                <!-- 选择框 -->
                <div class="colLeft" ref="allBox">
                    <!-- 选择那个圈圈 -->
                    <img src="./images/unchecked.png" ref="checkHook" @click="checkType(key,val.price,val.gid)" class="check-hook">
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
                            <span>{{val.price}}</span>
                        </span>
                        <div class="count" v-show="showWrite">
                            <a href="javascript:void(0)" @click="numberSub(val.id)">-</a>
                            <input type="text" v-model="number[key].num">
                             <!-- :placeholder="val.number" -->
                            <a href="javascript:void(0)" @click="numberPlus(val.id)">+</a>
                        </div>
                        <div class="num" v-show="showPay">×{{val.number}}</div>
                    </div>
                </div>
            </div>
            <!-- 一个商品 -->
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
        </section>
        <!-- 脚部 -->
        <footer class="footer">
            <div class="colLeft">
                <img src="./images/unchecked.png" @click="checkAllBox" ref="allCheckHook">
                <p class="selAll">全选</p>
            </div>
            <div class="colMiddle" v-show="showPay">
                <p class="total">合计：</p>
                <p class="price">￥{{totalPrice}}</p>
            </div>
            <a href="javascript:void(0)" class="pay" v-show="showPay" @click="numberPlus()">结算({{Idarr.length}})</a>
            <a href="javascript:void(0)" class="del" v-show="showWrite" @click="delCartList">删除</a>
        </footer>
    </div>
</template>
<script type="ecmascript-6">
export default {
    components: {

    },
    data() {
        return {
            writeType: '编辑',
            showWrite: false,
            showPay: true,
            data: [],
            number: [],
            isCheck: false,
            isCheckAll: false,
            clearData: 0,
            Idarr: [],
            getIdArr: [],
            priceArr: [],
            getPriceArr: []
            
        }
    },
    methods: {
        //数量+1
        numberPlus(id){
            for(let i = 0; i < this.number.length; i++){
                if(this.number[i].id == id){
                    this.number[i].num ++;
                }
            }
        },
        //数量-1
        numberSub(id){
            for(let i = 0; i < this.number.length; i++){
                if(this.number[i].id == id){
                    if(this.number[i].num == 1){
                        this.number[i].num = 1
                    }else{
                        this.number[i].num --;
                    }
                }
            }
            
        },
        //删除数据
        delCartList: function(){
            this.$http({
                method: 'post',
                url: global.Domain + '/Order/delcart',
                emulateJSON: true,
                oid: this.Idarr
            }).then((result)=>{
            })
        },
        //获取数据
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/cartList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let moreComMore = response.body;
                let arr = [];
                this.data = moreComMore;
                for(let i = 0; i < moreComMore.data.length; i++){
                    arr.push({
                        id: moreComMore.data[i].id,
                        num: moreComMore.data[i].number
                    });
                }
                this.number = arr
            })
        },
        //选中单个按钮
        checkType: function(key,data,id){
             let  file = this.$refs.checkHook[key].src
             let reg = /unchecked/
             let result =  this.number[key].num*this.data.data[key].price
            if(reg.test(file)){
                this.$refs.checkHook[key].src = require('./images/checked.png')
                this.Idarr.push(id)   
                this.priceArr.push(result)
            }else{
                this.$refs.checkHook[key].src = require('./images/unchecked.png')
                //删除数组中某个特定元素的方法
                Array.prototype.remove = function(val) {
                var index = this.indexOf(val);
                if (index > -1) {
                    this.splice(index, 1);
                    }
                };
                this.Idarr.remove(id)
                this.priceArr.remove(result)
                
            }
       // console.log(this.priceArr)
       console.log(this.Idarr)
        },
        //选中所有个按钮
        checkAllBox: function(){
                
                if(this.isCheckAll == false){
                    this.isCheckAll = true
                    this.Idarr = []
                    this.priceArr = [] 
                    this.$refs.allCheckHook.src = require('./images/checked.png')
                }else{
                    this.isCheckAll = false
                    this.$refs.allCheckHook.src = require('./images/unchecked.png')
                }
                 
               for(let i=0;i<this.$refs.allBox.length;i++){ 
                    if(this.isCheckAll == true){              
                       this.$refs.allBox[i].getElementsByTagName('img')[0].src=require('./images/checked.png')
                       this.Idarr.push(this.data.data[i].gid)
                       this.priceArr.push(this.number[i].num * this.data.data[i].price)
                       let arr = []
                       for(var i =0;i<this.Idarr.length-1;i++){
                    　　 if(arr.indexOf(this.Idarr[i]) == -1){
                            arr.push(this.Idarr[i]);
                    　　      }
                        }
                        this.getIdArr = arr
                       let arr2 = [];
                         for(var i =0;i<this.priceArr.length-1;i++){
                    　　 if(arr2.indexOf(this.priceArr[i]) == -1){
                            arr2.push(this.priceArr[i]);
                    　　      }
                        }
                        this.getPriceArr = arr2;
                    }else{
                        this.$refs.allBox[i].getElementsByTagName('img')[0].src=require('./images/unchecked.png')
                        this.getIdArr = []
                        this.Idarr = []        
                        this.priceArr = []     
                        this.getPriceArr = []      
                }
            }
          //  console.log(this.priceArr)
           console.log(this.Idarr)
        },
        //显示编辑区块
        writeCart: function(){
            if(this.showWrite == false){
               this.showWrite = true
               this.writeType = '完成'
               this.showPay = false
            }else{
               this.showWrite = false
               this.writeType = '编辑'
               this.showPay = true
            }
        },
    },
    mounted() {
        this.getDataFromBackend()
    },
    computed: {
        //计算总价
        totalPrice: function(){
           let sum = 0
           for(let i=0;i<this.priceArr.length;i++){
               sum += this.priceArr[i];
           }
           return sum
        }
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
    top 1.0938rem
    left 0
    width width
    height: 100%
    background #f0f0f0
    // 详情页header
    .header
       headerFlex()
    // 主体
    .main
        margin-bottom 1.4063rem
        // 分割线
        .dividerBig
            width 100%
            height 0.3125rem
            background-color #f0f0f0
        // 一个产品
        .oneProduct
            display flex
            width 100%
            padding 0.2813rem 0
            border-bottom-1px(#e0e0e0)
            background-color #fff
            img
                width 2.9375rem
                height 2.9375rem
            // 选择框
            .colLeft
                display flex
                justify-content center
                align-items center
                img
                    height 0.5938rem
                    width 0.5938rem
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
                    font-size 0.4063rem
                .rowDown
                    display flex
                    justify-content space-between
                    .price
                        display flex
                        align-items flex-end
                        margin-bottom 0.125rem
                        color #ea68a2
                        span:first-child, span:last-child
                            font-size 0.4375rem
                        span:nth-child(2)
                            font-size 0.5rem
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
                            font-size 0.5rem
                            color #333
                        input
                            display flex
                            justify-content center
                            align-items center
                            width 0.8125rem
                            height 0.6875rem
                            font-size 0.5rem
                            color #333
                            text-align center
                        a:first-child
                            border-right 0.0313rem solid #d6d6d6
                        a:last-child
                            border-left 0.0313rem solid #d6d6d6
                    .num
                        font-size 0.5rem
                        margin-right 0.5rem    
    // 脚部
    .footer
        display flex
        align-items center
        justify-content space-between
        position fixed
        width 100%
        height 1.4063rem
        bottom 0
        left 0
        background-color #fff
        .colLeft
            display flex
            align-items center
            height 100%
            margin-left 0.3125rem
            img
                width 0.6719rem
                height 0.6719rem
                margin-right 0.3125rem
            .selAll
                font-size 0.4063rem
                color #333
        .colMiddle
            display flex
            align-items center
            height 100%
            margin-left 1.25rem
            .total
                font-size 0.5rem
                color #333
            .price
                font-size 0.5rem
                color #ea68a2
        .pay
            display flex
            align-items center
            justify-content center
            height 100%
            width 2.5625rem
            font-size 0.4063rem
            color #fff
            background-color #ea68a2
        .del
            display flex
            align-items center
            justify-content center
            height 100%
            width 2.5625rem
            font-size 0.4063rem
            color #fff
            background-color #ea68a2    
</style>