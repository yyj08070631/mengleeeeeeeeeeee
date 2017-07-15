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
                <img class="search" src="./search.png" width="16" height="16"/>
             </div>
        </div>
        <div class="store-message">
            <a href="javascript:void(0)" class="store-computed border-bottom-1px">
                <span class="computed">附近的项目实体店</span>
            </a>
            <a href="javascript:void(0)" class="store-item">
                <img width="104" height="104" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="32" height="32" src="./more.png">
            </a>  
            <a href="javascript:void(0)" class="store-item">
                <img width="104" height="104" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="32" height="32" src="./more.png">
            </a> 
            <a href="javascript:void(0)" class="store-item">
                <img width="104" height="104" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="32" height="32" src="./more.png">
            </a> 
            <a href="javascript:void(0)" class="store-item">
                <img width="104" height="104" src="./stores.png">
                <span class="title">完美尺寸 天誉花园</span>
                <span>周一至周日，上午9:30-下午10:00</span>
                <span>1.1公里 | 14分钟</span>
                <img class="more" width="32" height="32" src="./more.png">
            </a> 
            <div class="line"></div>
            <div class="all-stores">
                浏览所有线下项目实体店
                <img class="more" width="32" height="32" src="./more.png">
            </div>
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
        margin-top: 1.25rem
        padding-bottom: 20%
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
            margin: 24px 0 0 32px
            height: 28px
            border-left: 6px solid #909090
            font-size: 0.4063rem
            font-weight: bold
            text-indent: 0.1875rem
            color: #909090 
    .store-message
        width: 100%
        height: 100%  
        background: #fff         
        .store-item
                display: block
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 2.625rem
                line-height: 1.3438rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                img
                    float: left
                    margin-top: 0.4688rem
                .title
                    float: left
                    font-size: 0.375rem
                    color: #333
                    vertical-align: top
                span
                    display: inline-block
                    margin-left: 0.3125rem
                    height: 0.625rem
                    font-size: 0.3438rem
                    color: #909090
                    float: left
                .more
                    position: absolute
                    right: 0.875rem
                    top: 50%
                    margin-top: -0.25rem
        .line
            width: 100%
            height: 10px
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
                        

</style>

