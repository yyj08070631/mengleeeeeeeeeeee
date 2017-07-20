<template>
    <div class="settings-wrapper">
        <div class="header">
            <div class="header-content">
                <a href="javascript:history.back(-1)" class="goBack">
                    <img src="./arrow_left.png">
                    <span>返回</span>
                </a>
                <h1 class="title">个人设置</h1>
                <a href="#search">
                    <img class="search" src="./search.png" />
                </a>
            </div>
        </div>
        <div class="avatar-wrapper">
            <img class="avatar-cover" width="100%" height="100%" :src="data.headimg" />
            <div class="filter"></div>
            <img class="avatar" :src="data.headimg">
            <div class="message">
                <span class="name">{{data.username}}</span>
                <span class="mobile">{{data.phone}}</span>
                <img class="rank" :src="computeImg">
            </div>
        </div>
        <div class="content-wrapper">
            <a href="#myQRcode" class="message-item">
                <span class="title">我的二维码</span>
                <div class="link-wrapper">
                    <img class="qr-code" src="./QR_code.png">
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">昵称</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.username}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="#addrManage" class="message-item indent">
                <span class="title">收件信息</span>
                <div class="link-wrapper">
                    <span class="msg">已记录</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">星座</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.constellation}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">身高</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.height}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="javascript:void(0)" class="message-item indent">
                <span class="title">体重</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.weight}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">职业</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.career}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">收入</span>
                <div class="link-wrapper">
                    <span class="msg">{{data.gain}}</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
            <a href="javascript:void(0)" class="message-item">
                <span class="title">兴趣爱好</span>
                <div class="link-wrapper">
                    <span class="msg">未填写</span>
                    <img class="other" src="./more.png">
                </div>
            </a>
        </div>
        <!-- modal -->
    </div>
</template>
 <script type="ecmascript-6">
import { XDialog, TransferDomDirective as TransferDom } from 'vux'

export default {
    directives: {
        TransferDom
    },
    components: {
        XDialog,
    },
    data() {
        return {
            data: []
        }
    },
    created() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userDetail?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        }
    },
    mounted() {

    },
    computed: {
        computeImg: function () {
            // console.log(this.data.level)
            let level = parseInt(this.data.level);
            if (level == 1) {
                return require('./images/xiaobai.png')
            } else if (level == 2) {
                return require('./images/xingxing.png')
            } else if (level == 3) {
                return require('./images/zuanshi.png')
            } else if (level == 4) {
                return require('./images/jinguan.png')
            } else if (level == 5) {
                return require('./images/huangguan.png')
            } else {
                console.log('获取了无效的等级数据！');
                return '#'
            }
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
        padding-bottom: 0.6875rem
        .header
            headerCss()
        .avatar-wrapper
            position: relative
            margin-top: 1.0938rem
            width: 100% 
            height: 7.375rem
            overflow: hidden
            font-size: 0
            .avatar-cover
                position: absolute
                left: 0
                top: 0
                filter: blur(0.1563rem)
            .filter
                position: absolute
                left: 0
                top: 0
                width: width
                height: width
                filter: blur(0.1563rem)
                background: linear-gradient(rgba(0,0,0,0) 60%,rgba(255,255,255,0.3) 30%,rgba(255,255,255,1))
            .avatar
                position: absolute
                left: 50%
                margin: 1.3125rem 0 5.0016px -1.4219rem
                width: 3.0938rem
                height: 3.0938rem
                border: 0.0938rem solid #fff
            .message
                position: absolute
                top: 4.8125rem
                left: 50%
                margin-left: -2.9063rem
                width: 6.25rem
                text-align: center
                .name
                    display: block
                    font-size: 0.4375rem
                .mobile
                    display: block
                    margin: 0.1563rem 0 0.1875rem 0 
                    font-size: 0.3438rem
                    color: #909090
                 .rank
                    width: 1.125rem
                    height: 0.375rem
                    margin 0 auto
        .content-wrapper
            width: 100%
            height: 100%
            background: #fff
            overflow: hidden
            .message-item
                display: block
                position: relative
                margin-left: 0.5rem   
                width: 100%
                height: 1.3438rem
                line-height: 1.3438rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                .title
                    float: left 
                    font-size: 0.4063rem
                    color: #333
                .link-wrapper
                    float: right
                    margin: 0 1rem 0 0
                    height: 100%
                    .other
                        margin: 0.5rem 0 0 0.25rem
                        width: 0.375rem
                        height: 0.375rem
                    .msg
                        float: left
                        font-size: 0.3438rem
                        vertical-align: top
                    img        
                        display: inline-block
                        float: left
                    .qr-code
                        margin-top: 0.5rem 
                        width: 0.375rem
                        height: 0.375rem
            .indent
                border-bottom-none()               
            .line
                width: 100%
                height: 0.3125rem
                background: #f0f0f0            

</style>