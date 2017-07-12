<template>
    <div class="store-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">查找实体店</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
             </div>
        </div>
        <div class="store-message">
            <a href="#" class="store-computed border-bottom-1px">
                <span class="computed">附近的项目实体店</span>
            </a>
            <a href="#" class="store-item">
                <img width="52" height="52" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="16" height="16" src="./more.png">
            </a>  
            <a href="#" class="store-item">
                <img width="52" height="52" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="16" height="16" src="./more.png">
            </a> 
            <a href="#" class="store-item">
                <img width="52" height="52" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="16" height="16" src="./more.png">
            </a> 
            <a href="#" class="store-item">
                <img width="52" height="52" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="16" height="16" src="./more.png">
            </a> 
            <div class="line"></div>
            <div class="all-stores">
                浏览所有线下项目实体店
                <img class="more" width="16" height="16" src="./more.png">
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
    .store-wrapper
        margin-top: 40px
        padding-bottom: 20%
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .header
            headerCss()
    .store-computed
        display: block
        width: 100%
        height: 2.3125rem
        background: #fff
        border-bottom-1px(#e0e0e0)
        .computed
            display: inline-block
            margin: 0.75rem 0 0 1rem
            height: 0.875rem
            border-left: 0.1875rem solid #909090
            font-size: 0.8125rem
            font-weight: bold
            text-indent: 5px
            color: #909090 
    .store-message
        width: 100%
        height: 100%  
        background: #fff         
        .store-item
                display: block
                position: relative
                margin-left: 16px
                width: 100%
                height: 5.25rem
                line-height: 2.6875rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                img
                    float: left
                    margin-top: 15px
                .title
                    font-size: 12px
                    color: #333
                    vertical-align: top
                span
                    display: inline-block
                    margin-left: 10px
                    height: 20px
                    font-size: 11px
                    color: #909090
                    float: left
                .more
                    position: absolute
                    right: 32px
                    top: 50%
                    margin-top: -8px
        .line
            width: 100%
            height: 10px
            background: #f0f0f0
        .all-stores
            position: relative
            margin-left: 16px
            height: 43px
            line-height: 43px
            font-size: 12px
            color: #333
            .more
                position: absolute
                right: 16px
                top: 50%
                margin-top: -8px
                        

</style>

