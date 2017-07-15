<template>
    <div class="goodsClassify-wrapper">
         <v-view class="route-item"></v-view>
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="32">
				    <span>返回</span>
			    </a>
                <h1 class="title">营养食品</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="select-type">
            <a href="javascript:void(0)">筛选</a>
            <a href="javascript:void(0)">排列方式</a>
        </div>
        <div class="goods-wrapper">
            <div class="goods-item">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#imageText"><img class="goods" width="159" height="121" src="./goods.png"/></a>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect"  width="42" height="42" src="./collect.png"/>
                <a href="#imageText"><img class="goods" width="159" height="121" src="./goods.png"/></a>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect"  width="42" height="42" src="./collect.png"/>
                <a href="#imageText"><img class="goods" width="159" height="121" src="./goods.png"/></a>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect" width="42" height="42" src="./collect.png"/>
                <a href="#imageText"><img class="goods" width="159" height="121" src="./goods.png"/></a>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    components :{
        'v-view': view
    } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.goodsClassify-wrapper
    margin-top: 1.25rem
    .route-item
        footerCss()
    .header
        headerCss()
    .select-type
        width: 100%
        height: 0.9688rem
        line-height: 0.9688rem
        font-size: 0.4063rem
        z-index: 1000
        a:first-child
            color: #ea68a2
            margin-left: 0.5rem
            float: left
        a:last-child
            color: #ea68a2
            margin-right: 0.5rem
            float: right    
    .goods-wrapper
        margin: 0.9688rem auto 1.3438rem auto
        width: 100%
        .goods-item:nth-child(odd)
             border-right: 0.0313rem solid #e0e0e0  
        .goods-item
            float: left
            width: 49.6%
            border-top-1px(#e0e0e0)                
            .collect
                margin: 0.2813rem 0.4375rem 0 0 
                float: right
            .goods
                width: 4.9688rem 
                height: 3.7813rem    
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
</style>
