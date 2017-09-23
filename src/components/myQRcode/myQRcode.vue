<template>
  <div class="myQRcode-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <div class="fuild-filter" :style="bgStyle">
            <img class="avator" :src="data.headimg">
            <div class="personal">
                <h2 class="name">{{data.username}}</h2>
                <span class="mobile">{{data.phone}}</span>
                <img class="rank" :src="data.internal == 1 ? require('./images/neibu.png') : data.levelName">
            </div>
            <img class="append" src="./images/append.png" @click="bgChange()"/>
            <img class="QRcode" src="http://go.zs-mmall.com/dream/index.php/Api/qrcode"/>
            <p class="desc">识别二维码，加入我的梦乐城</p>
            <!-- <img class="avatorOver" :src="data.headimg"> -->
        </div>
  </div>
</template>
<script type="ecmascript-6">
// import header from '../../components/header/header'; 
export default {
    components: {
    //  'v-header': header
    },
    data() {
        return {
            data: [],
            bgStyle: {
                'background-image': 'url(http://go.zs-mmall.com/dream/index.php/Api/code/img)'
            }
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/userInfo?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
            })
        },
        bgChange: function(){
            this.bgStyle = {
                'background-image': 'url(http://go.zs-mmall.com/dream/index.php/Api/code/img?v' + parseInt(Math.random() * 1000000) + ')'
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

.myQRcode-wrapper
    display flex
    justify-content center
    align-items center
    width 100%
    height 100%
    background-color #f0f0f0
    // 盖在最上面的头像
    .avatorOver
        position absolute
        top 50%
        left 50%
        width 1.5938rem
        height 1.5938rem
        margin -1.5938rem 0 0 -0.7969rem
        padding 0.0938rem
        border-radius 0.0938rem
        background-color #fff
        z-index 10
    .fuild-filter
        position: relative
        width 9.0625rem
        height 14.0625rem
        background-repeat no-repeat
        background-size 12.1875rem 14.0625rem
        background-position 0 0
        box-shadow: 0 0 0.1563rem #909090
        border-radius: 0.1563rem
        .avator
            margin: 0.4688rem 0.3125rem 0.4688rem 0.4688rem
            float: left
            width: 1.625rem
            height: 1.625rem
        .personal
            width: 6.25rem
            float: left
        .name
            display: inline-block
            margin: 0.4688rem 0 0.1875rem 0
            font-size: fs + 0.0313rem
            font-weight normal
            color: #000
        .mobile
            display: block
            font-size: fs
            color: #909090
            margin-bottom: 0.2813rem
        .rank  
            float: left
            height: 0.375rem   
        .append
            position: absolute
            top: 0
            right: 0
            width 1.6875rem
            height 1.6875rem
        .QRcode
            display block
            width 6.9688rem
            height 6.9688rem
            padding 0.2813rem
            margin 0 auto 
            background #fff
        .desc
            margin: 2.375rem 0 1.25rem 0
            text-align: center
            font-size: fs + 0.0313rem
            color: #909090
</style>
