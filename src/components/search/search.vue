<template>
    <div class="search-wrapper">
        <div class="select-wrapper">
            <div>
                <a href="javascript:history.back(1)"><img src="./arrow_left.png"></a>
            </div>
            <div class="selectBox">
                <div class="select-content">
                    <div><img src="./search.png"></div>
                    <div><input type="text" name="selectGoods"></div>
                    <div>搜索</div>
                </div>
            </div>
            <div></div>
        </div>
        <div class="search-title">以下为查询结果</div>
        <a href="javascript:viod(0)" class="search-result">
            <div><img src="./result.png"></div>
            <div>
                <p>刺绣牛仔九分裤女s时尚牛仔裤显瘦分裤女s时尚牛仔裤</p>
                <p>免费送货</p>
                <p>￥55.8</p>
            </div>
        </a>
        <a href="javascript:viod(0)" class="search-result">
            <div><img src="./result.png"></div>
            <div>
                <p class="content">刺绣牛仔九分裤女s时尚牛仔裤显瘦分裤女s时尚牛仔裤</p>
                <p>免费送货</p>
                <p>￥55.8</p>
            </div>
        </a>
        <div class="search-title">已加载完毕</div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
   
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .search-wrapper
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: #f0f0f0
        .select-wrapper
            display: flex
            width: 100%
            background: #f0f0f0
            height: 1.1563rem
            align-items: center
            justify-content:center
            div:nth-child(1)
                width: 1.25rem
                img
                    margin-left: 0.4375rem
                    width: 0.3125rem
                    height: 0.5rem
            div:nth-child(3)
                width: 0.7813rem        
            .selectBox
                flex: 1
                margin-top 0.1875rem
                height: 0.9375rem
                background: #fff
                border-radius: 0.7813rem
                border: 0.0156rem solid #d0d0d0
                font-size: 0
                .select-content
                    display: flex
                    margin: 0.1875rem 0 0 -0.125rem
                    width: 7.8125rem
                    height: 0.5313rem
                    align-items: center
                    div:nth-child(1)
                        width: 0.9063rem
                        img
                            width: 0.4375rem
                            height: 0.4688rem
                    div:nth-child(2)    
                        flex: 1
                        input
                            margin-left: 0.25rem
                            height: 0.5313rem 
                            border-left: 0.0313rem solid #909090  
                            font-size: 0.375rem
                            text-indent: 0.375rem
                    div:nth-child(3)
                        display: block
                        width: 1.5625rem
                        height: 100%
                        line-height: 0.5313rem
                        margin-left: 0.1563rem
                        font-size: 0.375rem
                        text-align: center
                        border-left: 0.0313rem solid #909090  
                        color: #ea6aa2
        .search-title
            width: 100%
            height: 1.0313rem
            line-height: 1.0313rem
            font-size: 0.375rem
            color: #909090
            text-align: center
        .search-result
            display: flex
            width: 100%
            height: 2.8125rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            div:nth-child(1)
                margin: 0.2188rem 0.25rem 0.2188rem 0.5313rem
                width: 2.375rem
                height: 2.375rem
                img
                    width: 100%
                    height: 100%
            div:nth-child(2)
                flex: 1
                margin-right: 0.5313rem
                padding-top: 0.2188rem
                line-height: 0.7813rem
                overflow: hidden
                text-overflow:ellipsis
                white-space: nowrap   
                p
                    font-size: 0.375rem   
                p:first-child
                    color: #333
                p:nth-child(2)
                    color: #909090        
                p:last-child       
                    font-size: 0.4375rem              
                    color: red
        
</style>
