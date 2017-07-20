<template>
    <div class="goodsClassify-wrapper">
         <v-view class="route-item"></v-view>
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">营养食品</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div>
        <div class="select-type">
            <a href="javascript:" @click="showList" class="screen">筛选</a>
            <a href="javascript:" @click="changeClass" class="sort">排列方式</a>
            <div id="screenType" v-show="isShow">
                <a href="javascript:" @click="isHidden();postTime()">价格</a>   
                <a href="javascript:" @click="isHidden();postPrice()">上架时间</a>
                <a href="javascript:" @click="isHidden();postNumber()">销量</a>
            </div>
        </div>
        <div class="goods-wrapper">
            <div :class="changeStyle" v-for="(item,key) in goodsItemList.gooditem">
                <img class="collect" width="42" height="42" :src="file"  ref="menuItem" @click="changSrc(key)"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" :src="item.mainmap"/></a>
                <div class="text-wrapper">                    
                    <p>{{item.name}}</p>
                    <span>¥{{item.price}}</span>
                    <span>运费{{item.freight}}元 | 库存{{item.stock}}件</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    data()
        {
            return {
                changeStyle: 'goods-item1',
                isShow: false,
                timeKey: 0,//传给服务器的字段
                priceKey: 0,//传给服务器的字段
                numberKey: 0,//传给服务器的字段
                getId: '',
                goodsItemList: [],
                file: require('./collect.png'),//收藏图片
            }
        },
        props: ['id'],
    components :{
        'v-view': view
    },
    methods: {
        changeClass: function(){
            
            if(this.changeStyle ===  'goods-item1'){
                this.changeStyle = 'goods-item2'
            }else{
                this.changeStyle='goods-item1'
            }    
        },
        showList: function(){
            if(this.isShow === false){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        isHidden: function(){
            if(this.isShow === true){
                this.isShow = false
            }
        },
        changSrc: function(index){
            let file = require('./collect.png');
            let file2 = require('./collect-active.png');
            let obj = this.$refs.menuItem
            if(obj[index].src == file){
                obj[index].src = file2
                setTimeout(function(){
                    alert('收藏成功')
                },1000)
            }else{
                obj[index].src = file
                setTimeout(function(){
                    alert('已取消收藏')
                 },1000)
                 }
            },
        postTime: function(){
            this.priceKey = 0
            this.numberKey = 0
            if(this.timeKey == 0){
                this.timeKey = 1
            }else{
                this.timeKey = 0
            }
            this.getDataFromBackend()//ajax
        },
        postPrice: function(){
            this.timeKey = 0
            this.numberKey = 0
            if(this.priceKey == 0){
                this.priceKey = 1
            }else{
                this.priceKey = 0
            }
            this.getDataFromBackend()//ajax
        },
        postNumber: function(){
            this.timeKey = 0
            this.priceKey = 0
            if(this.numberKey == 0){
                this.numberKey = 1
            }else{
                this.numberKey = 0
            }
            this.getDataFromBackend()//ajax
        },
        
        //ajax
         getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/goods?cid=1&&time_key='+this.timeKey+'&&price_key='+this.priceKey+'&&num_key='+this.numberKey,
                emulateJSON: true
            }).then(function (response) {
                this.goodsItemList = response.body
                // console.log(this.goodsItemList)
            })
        }

        //ajax
        
        },
        mounted () {
            this.$nextTick(function(){
                this.getDataFromBackend()
            })
        }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

class1()
     margin-top: -0.0313rem   
     float: left
     width: 49.6%
     border-bottom-1px(#e0e0e0)                  
     .collect
        margin: 0.2813rem 0.4375rem 0 0 
        float: right
        z-index: 1000
        .goodsMsg
            width: 4.9688rem 
            height: 3.7813rem 
     .text-wrapper
        float: left
        width: 100%
        height: 100%        
        p
            margin: 0.2813rem 0
            font-size: 0.3438rem
            color: #333
            text-align: center
        span
            display: block 
            font-size: 0.3438rem
            text-align: center 
        span:last-child
            margin: 0.625rem 0 0.4063rem 0
            font-size: 0.3125rem
            color: #909090   
class2()
     position: relative
     width: 100%
     height: 3.7813rem
     border-bottom-1px(#e0e0e0)                 
     .collect
        position: absolute
        right: 0.375rem
        top: 0.375rem
    .goodsMsg
        float: left
        width: 4.9688rem 
        height: 3.7813rem  
    .text-wrapper
        float: right
        width: 50%
        height: 100%     
        p
            margin: 0.2813rem  1.25rem  0.2813rem 0
            font-size: 0.3438rem
            color: #333
            text-align: center
        p:first-child
            margin: 0.625rem 0 0 0    
        span
            display: block
            margin: 0.3125rem
            text-align: center
            font-size: 0.3438rem
        span:last-child
            margin: 0.3125rem 0.4688rem 0 0
            font-size: 0.3125rem
            color: #909090              



.goodsClassify-wrapper
    margin-top: 1.25rem
    .route-item
        footerCss()
    .header
        headerCss()
    .select-type
        position: relative
        width: 100%
        height: 0.9688rem
        line-height: 0.9688rem
        font-size: 0.4063rem
        z-index: 1000
        border-bottom-1px(#e0e0e0)  
        .screen
            color: #ea68a2
            margin-left: 0.5rem
            float: left
        .sort
            color: #ea68a2
            margin-right: 0.5rem
            float: right
        #screenType
            display: flex
            position: absolute
            top: 0.9375rem
            width: 100%
            height: 0.9375rem
            line-height: 0.9375rem
            text-align: center
            background: #fff
            border-bottom: 0.0313rem solid #e0e0e0
            a
                flex: 1
                font-size: 0.3438rem
                color: #ea68a2
 
    .goods-wrapper
        margin: 0.9531rem auto 1.3438rem auto
        width: 100%
        .goods-item1:nth-child(odd),.goods-item2:nth-child(odd)
             border-right: 0.0313rem solid #e0e0e0  
        .goods-item1
            class1()
        .goods-item2
            class2()    
</style>
