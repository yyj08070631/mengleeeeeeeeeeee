<template>
    <div class="store-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">查找实体店</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
             </div>
        </div>
        <div class="store-message">
            <div href="javascript:void(0)" class="store-computed border-bottom-1px">
                <span class="computed">附近的项目实体店</span>
            </div>
            <a href="#offlineInfo" class="store-item">
                <div>
                    <img width="104" height="104" src="./stores.png">
                </div>
                <div>
                    <p class="title">完美尺寸 天誉花园</p>
                    <p>周一至周日，上午9:30-下午10:00</p>
                    <p>1.1公里 | 14分钟</p>
                </div>
                <div>
                    <img class="more" width="32" height="32" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
        </div>     
        
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    data(){
        return {
            showClass: true
        }
    },
    components :{
        'v-view': view
    } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .store-wrapper
        position: absolute
        top: 1.25rem
        left: 0
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .route-item
            footerCss()
        .header
            headerCss()
    .store-computed
        display: block
        width: 100%
        height: 1.1563rem
        background: #fff
        border-bottom-1px(#e0e0e0)
        .computed
            display: inline-block
            margin: 0.375rem 0 0 0.5625rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: 0.4063rem
            font-weight: bold
            text-indent: 0.1875rem
            color: #909090 
    .store-message
        width: 100%
        background: #fff         
        .store-item
                display: flex
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 2.8125rem
                algin-items: center
                justify-content: center
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0) 
                div:first-child
                    width: 1.9375rem
                    img
                        margin: 0.5313rem 0.3125rem 0.5313rem 0
                        width: 1.625rem
                        height: 1.625rem
                div:nth-child(2)
                    flex: 1
                    padding-top: 0.5313rem
                    p:first-child    
                        color: #333 
                        font-size: 0.375rem
                    p
                        font-size: 0.3438rem
                        line-height: 0.5625rem
                        color: #909090
                div:last-child
                    width: 1.375rem
                    img
                        margin-top: 1.0625rem
                        width: 0.5rem
                        height: 0.5rem           
        .line
            width: 100%
            height: 0.1563rem
            background: #f0f0f0
        .all-stores
            position: relative
            margin-left: 0.5rem
            height: 1.3438rem
            line-height: 1.3438rem
            font-size: 0.375rem
            color: #333
            .more
                position: absolute
                right: 0.375rem
                top: 50%
                margin-top: -0.25rem
                width: 0.5rem
                height: 0.5rem          

</style>

