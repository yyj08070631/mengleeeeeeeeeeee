<template>   
  <div class="settings-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title" @click="change">个人设置</h1>
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
        <div class="content-wrapper">
            <a href="#myQRcode" class="message-item">
                    <span class="title">我的二维码</span>
                    <div class="link-wrapper">
                        <img class="qr-code" width=16 height=16 src="./QR_code.png">
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a>  
            <a href="javascript:void(0)" class="message-item">
                    <span class="title">昵称</span>
                    <div class="link-wrapper">
                        <span class="msg">陈军宝</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a>   
            <a href="javascript:void(0)" class="message-item indent">
                    <span class="title">收件信息</span>
                    <div class="link-wrapper">
                        <span class="msg">已记录</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)offlineInfo" class="message-item">
                    <span class="title">星座</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
            <a href="javascript:void(0)" class="message-item">
                    <span class="title">身高</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
            <a href="javascript:void(0)" class="message-item indent">
                    <span class="title">体重</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
            <div class="line"></div>
            <a href="javascript:void(0)" class="message-item">
                    <span class="title">职业</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
            <a href="javascript:void(0)" class="message-item">
                    <span class="title">收入</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
            <a href="javascript:void(0)" class="message-item">
                    <span class="title">兴趣爱好</span>
                    <div class="link-wrapper">
                        <span class="msg">未填写</span>
                        <img class="other" width=16 height=16 src="./more.png">
                    </div>
            </a> 
        </div>

  </div>
</template>
<script type="ecmascript-6">

export default{
    props: {
        isShow: Boolean
    },
    methods: {
        change(){
            this.isShow = false
            console.log(this.isShow)
        }
    },
    mounted() {
        console.log(this.$refs.isShow )
    },
    created () {
        change()
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
        padding-bottom: 22px
        .header
            headerCss()
        .avatar-wrapper
            position: relative
            margin-top: 2.5rem
            width: 100% 
            height: 14.75rem
            overflow: hidden
            font-size: 0
            .avatar-cover
                position: absolute
                left: 0
                top: 0
                filter: blur(0.3125rem)
            .filter
                position: absolute
                left: 0
                top: 0
                width: width
                height: width
                filter: blur(0.3125rem)
                background: linear-gradient(rgba(0,0,0,0) 60%,rgba(255,255,255,0.3) 30%,rgba(255,255,255,1))
            .avatar
                position: absolute
                left: 50%
                margin: 2.6563rem 0 0.625rem -2.7813rem
                border: 0.1875rem solid #fff
            .message
                position: absolute
                top: 9.625rem
                left: 50%
                margin-left: -3.125rem
                width: 6.25rem
                text-align: center
                .name
                    display: block
                    font-size: 0.875rem
                .mobile
                    display: block
                    margin: 0.3125rem 0 0.375rem 0 
                    font-size: 0.6875rem
                    color: #909090
        .content-wrapper
            width: 100%
            height: 100%
            background: #fff
            overflow: hidden
            .message-item
                display: block
                position: relative
                margin-left: 16px   
                width: 100%
                height: 2.6875rem
                line-height: 2.6875rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                .title
                    float: left 
                    font-size: 0.8125rem
                    color: #333
                .link-wrapper
                    float: right
                    margin: 0 32px 0 0
                    height: 100%
                    .other
                        margin: 0.75rem 0 0 0.5rem
                    .msg
                        float: left
                        font-size: 0.6875rem
                        vertical-align: top
                    img        
                        display: inline-block
                        float: left
                    .qr-code
                        margin-top: 12px 
            .indent
                border-bottom-none()               
            .line
                width: 100%
                height: 10px
                background: #f0f0f0            

</style>