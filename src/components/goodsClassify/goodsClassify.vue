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
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="select-type">
            <a href="javascript:" @click="showList" class="screen">筛选</a>
            <a href="javascript:" @click="changeClass" class="sort">排列方式</a>
            <div id="screenType" v-show="isShow">
                <a href="javascript:" @click="isHidden">时间</a>
                <a href="javascript:" @click="isHidden">上架时间</a>
                <a href="javascript:" @click="isHidden">销量</a>
            </div>
        </div>
        <div class="goods-wrapper">
            <div :class="changeStyle">
                <img class="collect" width="42" height="42" :src="file"  @click="changSrc"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                    
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </div>
            <div :class="changeStyle" href="#goodDetail">
                <img class="collect"  width="42" height="42" :src="file"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                    
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </div>
            <div :class="changeStyle" href="#goodDetail">
                <img class="collect"  width="42" height="42" :src="file"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                  
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </div>
            <div :class="changeStyle" href="#goodDetail">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">       
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </div>
            <div :class="changeStyle" href="#goodDetail">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">       
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
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
                file: require('./collect.png')
            }
        },
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
        changSrc: function(){
            let file = require('./collect.png');
            let file2 = require('./collect-active.png');
            if(this.file == file){
                this.file = file2
                // alert('收藏成功')
            }else{
                this.file = file
                // alert('已取消收藏')
            }
        }
    } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

class1()
     margin-top: -0.0313rem   
     float: left
     width: 49.6%
     border-top-1px(#e0e0e0)
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
     margin-top: -0.0313rem
     width: 100%
     height: 3.7813rem
     border-top-1px(#e0e0e0) 
     border-bottom-1px(#e0e0e0)                 
     .collect
        position: absolute
        right: 0.25rem
        top: 0.25rem
    .goodsMsg
        float: left
        width: 4.9688rem 
        height: 3.7813rem  
    .text-wrapper
        float: right
        width: 50%
        height: 100%     
        p
            margin: 0.2813rem  0.625rem  0.2813rem 0
            font-size: 0.3438rem
            color: #333
            text-align: center
        p:first-child
            margin: 0.625rem 0.625rem 0 0    
        span
            display: block
            margin-right: 0.625rem
            text-align: center
            font-size: 0.3438rem
        span:last-child
            margin: 0.9375rem 0 0.4063rem 0
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
        margin: 0.9688rem auto 1.3438rem auto
        width: 100%
        .goods-item1:nth-child(odd),.goods-item2:nth-child(odd)
             border-right: 0.0313rem solid #e0e0e0  
        .goods-item1
            class1()
        .goods-item2
            class2()    
</style>
