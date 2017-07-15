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
            <a href="javascript:void(0)">筛选</a>
            <select class="screen" v-show="false">
                <option>时间</option>
                <option>类型</option>
                <option>价格</option>
            </select>
            <a href="javascript:void(0)" @click="changeClass">排列方式</a>
        </div>
        <a class="goods-wrapper" href="#goodDetail">
            <div :class="changeStyle">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                    
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </div>
            <a :class="changeStyle" href="#goodDetail">
                <img class="collect"  width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                    
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </a>
            <a :class="changeStyle" href="#goodDetail">
                <img class="collect"  width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">                  
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </a>
            <a :class="changeStyle" href="#goodDetail">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">       
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </a>
            <a :class="changeStyle" href="#goodDetail">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#goodDetail"><img class="goodsMsg" width="159" height="121" src="./goods.png"/></a>
                <div class="text-wrapper">       
                    <p>美悠斯 益生菌固体饮料</p>
                    <p>蔓越莓味+橙味</p>
                    <span>¥ 268.00</span>
                    <span>免费送货 | 送达日期：有现货</span>
                </div>
            </a>
        </a>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    data()
        {
            return {
                changeStyle: 'goods-item1'
            }
        },
    components :{
        'v-view': view
    },
    methods: {
        changeClass: function(){
            
            if(this.changeStyle=='goods-item1'){
                this.changeStyle='goods-item2'
            }else{
                this.changeStyle='goods-item1'
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
        a:first-child
            color: #ea68a2
            margin-left: 0.5rem
            float: left
        .screen
            position: absolute
            left: 0.4688rem
            bottom: -55px  
            height: 50px     
            font-size: 42px
            color: #ea68a2     
        a:last-child
            color: #ea68a2
            margin-right: 0.5rem
            float: right
        .sort
            position: absolute
            right: 0.4688rem
            bottom: -55px  
            height: 50px     
            font-size: 42px
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
