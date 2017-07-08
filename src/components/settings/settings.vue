<template>
  <div class="settings-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">个人设置</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="avatar-wrapper">
            <img class="avatar-cover" width="100%" height="100%" src="./avatar.png"/>
            <div class="filter"></div>         
            <img class="avatar" width="99" height="99" src="./avatar.png"/>
            <div class="message">
                <span class="name">陈军宝</span>
                <span class="mobile">13560433216</span>
                <img class="rank" width="36" height="12" src="./rank.png">
            </div> 
        </div>
        <a href="#" class="myQRcode">
                <span class="title">我的二维码</span>
                <div class="link-wrapper">
                    <img class="qr-code" width=16 height=16 src="./QR_code.png">
                    <img width=16 height=16 src="./more.png">
                </div>
        </a>    
  </div>
</template>
<script type="ecmascript-6">
export default{
    data: function(){
			return {
				isShow: false
			}
		}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    width = 100%
    .settings-wrapper
        width: 100%
        height: 100%
        background: #f0f0f0
        .header
            headerCss()
        .avatar-wrapper
            position: relative
            margin-top: 40px
            width: 100% 
            height: 236px
            overflow: hidden
            font-size: 0
            .avatar-cover
                position: absolute
                left: 0
                top: 0
                filter: blur(5px)
            .filter
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                filter: blur(5px)
                background: linear-gradient(rgba(0,0,0,0) 60%,rgba(255,255,255,0.3) 30%,rgba(255,255,255,1))
            .avatar
                position: absolute
                left: 50%
                margin: 42.5px 0 10px -44.5px
                border: 3px solid #fff
            .message
                position: absolute
                top: 154px
                left: 50%
                margin-left: -50px
                width: 100px
                text-align: center
                .name
                    display: block
                    font-size: 14px
                .mobile
                    display: block
                    margin: 5px 0 6px 0 
                    font-size: 11px
                    color: #909090
        .myQRcode
            display: block
            position: relative
            width: 100%
            height: 43px
            line-height: 43px
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .title
                margin-left: 16px
                float: left 
                font-size: 13px
                color: #333
            .link-wrapper
                position: absolute    
                right: 0
                top: 50%
                margin-top: -16px


</style>