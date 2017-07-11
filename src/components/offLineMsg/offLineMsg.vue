<template>
    <div class='msg-wrapper'>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">线下信息</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="banner"></div>
        <div class="message-wrapper">
            <div class="content-item">
                <h2 class="msg-title">完美尺寸 天誉花园店</h2>
                <div class="share">
                    
                </div>
            </div>
            <div class="content-item"></div>
            <div class="content-item indent"></div>
        </div>
        <div class="serve-wrapper">
            <div class="serve"></div>
            <div class="content-item indent"></div>
            <div class="comments-wrapper"></div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .msg-wrapper
        margin: 40px 0 43px 0
        width: 100%
        height: 100%
        .header
            headerCss()
        .banner
            width: 100%
            height: 214px
            background: url(./message.png)no-repeat
            background-size: cover
        .message-wrapper
            width: 100% 
            border-bottom: 10px solid #e0e0e0  
            .content-item
                margin-left: 16px
                width: 100%
                height: 54px
                line-height: 54px
                border-bottom-1px(#e0e0e0)
            .indent
                border-bottom-none()
            hr    
                width: 100%
                height: 10px
                background: #e0e0e0
                border: 0
            .serve
                margin-left: 16px
                height: 38px
                border-bottom-1px(#e0e0e0)
                .msg-title
                    font-size: 16px
                    color: #333
                    font-weight: bold   

</style>

