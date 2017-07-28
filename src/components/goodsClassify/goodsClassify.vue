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
                <a href="javascript:" @click="changeActive()" ref="sort1"><div>价格</div><div><img src="./arrow_none.png" ></div></a>   
                <a href="javascript:" @click="changeActive1()" ref="sort2"><div>上架时间</div><div><img src="./arrow_none.png"></div></a>
                <a href="javascript:" @click="changeActive2()" ref="sort3"><div>销量</div><div ><img src="./arrow_none.png" ></div></a>
            </div>
        </div>
        <div class="goods-wrapper">
            <div :class="changeStyle" v-for="(item,key) in goodsItemList.gooditem">
                <img class="collect" width="42" height="42" :src="file"  ref="menuItem" @click="changSrc(key)"/>
                <router-link  :to="{path: '/goodDetail',query:{gid:item.id}}"><img class="goodsMsg" width="159" height="121" :src="item.mainmap"/></router-link>
                <div class="text-wrapper">                    
                    <p>{{item.name}}</p>
                    <span>¥{{item.price}}</span>
                    <span>运费{{item.freight}}元 | 销量{{item.sale}}件</span>
                </div>
            </div>
        </div>
        <div>
            <toast v-model="on" type="text">收藏成功</toast>
        </div>
        <div>
            <toast v-model="off" type="text">已取消收藏</toast>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Toast, Group } from 'vux'
export default {
    data()
        {
            return {
                now: this.$route.query.static,
                changeStyle: 'goods-item1',
                test1: true,
                test2: true,
                test3: true,
                isShow: false,
                timeKey: 0,//传给服务器的字段
                priceKey: 0,//传给服务器的字段
                numberKey: 0,//传给服务器的字段
                getId: '',
                goodsItemList: [],
                file: require('./collect.png'),//收藏图片
                on: false,
                off: false
            }
        },
        props: ['id'],
    components :{
        'v-view': view,
        Toast,
        Group,
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
                    this.on = true
            }else{
                obj[index].src = file
                    this.off = true
                 }
            },
        changeActive(){

            if(this.test1 == true){
                this.test1 = false
                this.now = 1
            }else{
                this.test1 = true
                this.now = 2
            }
            this.totalId()
            this.getDataFromBackend()
        },
        changeActive1(){
            if(this.test2 == true){
                this.test2 = false
                this.now = 3
            }else{
                this.test2 = true
                this.now = 4
            }
            this.totalId()
            this.getDataFromBackend()
        },
        changeActive2(){
            if(this.test3 == true){
                this.test3 = false
                this.now = 5
            }else{
                this.test3 = true
                this.now = 6
            } 
            this.totalId()
            this.getDataFromBackend()
        },
        totalId(){
            switch(this.now){
                case 1:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                break;
                case 2:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                break;  
                case 3:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                break;  
                case 4:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                break;  
                case 5:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_down.png');
                break; 
                case 6:
                    this.$refs.sort1.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort2.getElementsByTagName('img')[0].src = require('./arrow_none.png');
                    this.$refs.sort3.getElementsByTagName('img')[0].src = require('./arrow_up.png');
                break;  
            }
            this.getDataFromBackend()//ajax
        
        },
        //ajax
         getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/goods?cid='+this.$route.query.cid+'&static='+this.now,
                emulateJSON: true
            }).then(function (response) {
                this.goodsItemList = response.body
                console.log(this.goodsItemList)
            })
        },
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
        margin: 0.2813rem 0.4375rem 0.1563rem 0 
        float: right
        width 0.6563rem
        height 0.6563rem   
        .goodsMsg
            width: 4.9688rem 
            height: 4.625rem 
            margin-top: 0.3125rem
     .text-wrapper
        margin-top: 0rem
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
     height: 4.625rem  
     border-bottom-1px(#e0e0e0)                 
     .collect
        position: absolute
        right: 0.375rem
        top: 0.375rem
        width 0.6563rem
        height 0.6563rem    
    .goodsMsg
        float: left
        width: 4.9688rem 
        height: 4.625rem  
    .text-wrapper
        margin-top: 0.7813rem
        float: right
        width: 50%
        p
            margin: 0.5625rem  1.25rem  0.2813rem 0
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
        z-index: 100
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
            text-align: right
            background: #fff
            border-bottom: 0.0313rem solid #e0e0e0
            a
                display: flex
                flex: 1
                font-size: 0.3438rem
                color: #ea68a2
                align-items: center
                div:first-child
                    flex: 1
                div:last-child
                    flex: 1 
                    img
                        margin-left: 0.3125rem
                        width: 0.25rem

    .goods-wrapper
        margin: 0.9531rem auto 1.3438rem auto
        width: 100%
        .goods-item1:nth-child(odd),.goods-item2:nth-child(odd)
             border-right: 0.0313rem solid #e0e0e0  
        .goods-item1
            class1()
        .goods-item2
            class2()
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size 0.375rem            
</style>
