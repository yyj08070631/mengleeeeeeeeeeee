<template>
    <div class="goodsClassify-wrapper">
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">营养食品</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="select-type">
            <a href="#">筛选</a>
            <a href="#">排列方式</a>
        </div>
        <div class="goods-wrapper">
            <div class="goods-item">
                <img class="collect" width="21" height="21" src="./collect.png"/>
                <img class="goods" width="159" height="121" src="./goods.png"/>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect" width="21" height="21" src="./collect.png"/>
                <img class="goods" width="159" height="121" src="./goods.png"/>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect" width="21" height="21" src="./collect.png"/>
                <img class="goods" width="159" height="121" src="./goods.png"/>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
            <div class="goods-item">
                <img class="collect" width="21" height="21" src="./collect.png"/>
                <img class="goods" width="159" height="121" src="./goods.png"/>
                <p>美悠斯 益生菌固体饮料</p>
                <p>蔓越莓味+橙味</p>
                <span>¥ 268.00</span>
                <span>免费送货 | 送达日期：有现货</span>
            </div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.menu-wrapper
    display: none
.goodsClassify-wrapper
    margin-top: 40px
    .header
        headerCss()
    .select-type
        width: 100%
        height: 31px
        line-height: 31px
        font-size: 13px
        z-index: 1000
        a:first-child
            color: #ea68a2
            margin-left: 16px
            float: left
        a:last-child
            color: #ea68a2
            margin-right: 16px
            float: right    
    .goods-wrapper
        margin: 31px auto 0 auto
        width: 100%
        .goods-item:nth-child(odd)
        .goods-item
            float: left
            width: 159px
            border-top-1px(#e0e0e0)     
            border-right: 1px solid #e0e0e0    
            .collect
                margin: 9px 14px 0 0 
                float: right
            p
                margin: 9px 0
                font-size: 11px
                color: #333
                text-align: center
            span
                display: block
                font-size: 11px
                text-align: center 
            span:last-child
                margin: 20px 0 13px 0
                font-size: 10px
                color: #909090           
</style>
