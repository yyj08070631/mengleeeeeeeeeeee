<template>
    <div class="addrManage-wrapper">
        <!--头部-->
        <!-- <v-header></v-header> -->
        <!-- 主体 -->
        <section class="main">
            <!-- 一个收货地址 -->
            <!-- 无值 -->
            <div class="emptyType" v-if="data.length == 0">请添加收货地址:-D</div>
            <!-- 有值且可选 -->
            <div class="oneAddr" v-for="(val,key) in data" v-else-if="data.length != 0 && canSel">
                <!--  :to="{ path: '/buyGoods', query: { group: orderArr(), name: val.name, phone: val.phone, addr: val.province + val.city + val.area + val.address } }" -->
                <div class="rowUp">
                    <div class="nameAndPhone" @click="addrToSession(val.name, val.phone, val.province + val.city + val.area + val.address, val.id)">
                        <p class="name">{{val.name}}</p>
                        <div class="phone default" v-if="val.isDefault == 1">{{val.phone}}</div>
                        <div class="phone" v-else>{{val.phone}}</div>
                    </div>
                    <div class="icon">
                        <router-link :to="{ path: '/addrEditReal', query: { id: val.id, canSel: 1 } }">
                            <img src="./images/edit.png">
                        </router-link>
                        <div @click="onShow">
                            <img src="./images/del.png">
                        </div>
                    </div>
                </div>
                <div class="rowDown" @click="addrToSession(val.name, val.phone, val.province + val.city + val.area + val.address, val.id)">
                    {{val.province + '&nbsp;' + val.city + '&nbsp;' + val.area + '&nbsp;' + val.address}}
                </div>
                <!-- 删除询问弹窗 -->
                <alert v-model="show" title="提示" @on-show="onShow" @on-hide="onHide">
                    <button class="btn1" @click="onHide();delReceInfo(val.id)">确定</button>
                    <button class="btn2" @click="onHide();">取消</button>
                    请确认删除
                </alert>
            </div>
            <!-- 有值且不可选 -->
            <div class="oneAddr" v-for="(val,key) in data" v-else-if="data.length != 0 && !canSel">
                <div class="rowUp">
                    <div class="nameAndPhone">
                        <p class="name">{{val.name}}</p>
                        <div class="phone default" v-if="val.isDefault == 1">{{val.phone}}</div>
                        <div class="phone" v-else>{{val.phone}}</div>
                    </div>
                    <div class="icon">
                        <router-link :to="{ path: '/addrEditReal', query: { id: val.id, canSel: 0 } }">
                            <img src="./images/edit.png">
                        </router-link>
                        <div @click="onShow">
                            <img src="./images/del.png">
                        </div>
                    </div>
                </div>
                <div class="rowDown">
                    {{val.province + '&nbsp;' + val.city + '&nbsp;' + val.area + '&nbsp;' + val.address}}
                </div>
                <!-- 删除询问弹窗 -->
                <alert v-model="show" title="提示" @on-show="onShow" @on-hide="onHide">
                    <button class="btn1" @click="onHide();delReceInfo(val.id)">确定</button>
                    <button class="btn2" @click="onHide();">取消</button>
                    请确认删除
                </alert>
            </div>
            <!-- 有值且无可不可选 -->
            <div class="emptyType" v-else>请从<a href="#myCenter" style="color:#ea68a2">个人中心</a>进入收件信息页面</div>
            <!-- 新建地址 -->
            <div class="newAddr">
                <router-link to="/addrEdit" class="newAddrItem">新建地址</router-link>
            </div>
        </section>
        <!-- 弹窗 -->
        <div>
            <toast v-model="success" type="text">删除成功</toast>
        </div>
        <div>
            <toast v-model="error" type="text">删除失败</toast>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import { Toast, Alert } from 'vux'
import vuxAddress from '../../commonComponents/vuxAddress/vuxAddress'
// import header from '../../components/header/header';
export default {
    components: {
        Toast,
        Alert,
        // 'v-header': header

    },
    data() {
        return {
            data: [],
            show: false,
            success: false,
            error: false,
            canSel: this.$route.query.canSel == 0 ? false : this.$route.query.canSel == 1 ? true : ''
        }
    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/addressList?userId===tPtcNLZARXEuvDhRSFGkQX&page=',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        },
        // 删除收件信息
        delReceInfo: function (id) {
            let loc = JSON.parse(sessionStorage.getItem('loc'));
            this.$http({
                method: 'get',
                url: global.Domain + '/user/addressDel?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                if (res.code == 200) {
                    this.success = true
                    if(loc.id == id){
                        sessionStorage.removeItem('loc');
                    }
                    this.getDataFromBackend()
                } else {
                    this.error = true
                }
            })
        },
        // 获取订单数组
        orderArr: function () {
            // console.log(this.$route.query.group)
            return this.$route.query.group
        },
        // 地址设置到session中
        addrToSession: function (name, phone, addr, id) {
            sessionStorage.setItem('loc', JSON.stringify({ name: name, phone: phone, addr: addr, id: id }));
            this.$router.push('buyGoods');
        },
        onShow: function () {
            this.show = true
        },
        onHide: function () {
            this.show = false
        }
    },
    mounted() {
        this.getDataFromBackend()
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

width = 100%
color = #fff
// init
span, a, img, input, textarea
    display block

// 外层元素
.addrManage-wrapper
    position absolute
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // 详情页header
    .header
       headerCss()
    // 主体
    .main
        // 无收货地址
        .emptyType
            display flex
            justify-content center
            align-items center
            width 100%
            height 3.125rem
            background-color #fff
            font-size fs + 0.0938rem
            a
                color #ea68a2
        // 分割线
        .dividerBig
            width 100%
            height 0.3125rem
            background-color #ddd
        // 一个收货地址
        .oneAddr
            display flex
            flex-direction column
            justify-content center
            align-items center
            padding-bottom 0.3125rem
            border-bottom 1px solid #e0e0e0
            background-color #fff
            .rowUp
                display flex
                justify-content space-between
                align-items center
                width 9rem
                height 1.7813rem
                z-index 10
                .nameAndPhone
                    display flex
                    align-items center
                    height 100%
                    .name
                        width 1.875rem
                        font-size fs + 0.0313rem
                        color #333
                        margin-right 0.9375rem
                    // 电话
                    .phone
                        display flex
                        position relative
                        font-size fs + 0.0313rem
                        color #333
                    // 带 "默认" 的电话
                    .default:after
                        content ''
                        position absolute
                        top 0
                        right -1.2031rem
                        width 1.0781rem
                        height 0.4219rem
                        background url('./images/default.png') no-repeat
                        background-size 1.0781rem 0.4219rem
                .icon
                    display flex
                    align-items center
                    height 100%
                    a
                        flex 1
                        justify-content center
                        align-items center
                        img
                            width 0.6875rem
                            height 0.6875rem
                    div
                        flex 1
                        margin-left 0.6875rem
                        img
                            width 0.5625rem
                            height 0.5625rem        
            .weui-mask
                background rgba(0,0,0,0.1)
            .weui-dialog
                width 12.5rem!important
                min-width 80%
                background #fff
                border-radius 0.1875rem
                .weui-dialog__hd
                    padding 0.3125rem 0 0 0 
                    .weui-dialog__title
                        font-size fs + 0.0938rem !important
                .weui-dialog__bd
                    padding 0.9375rem  0 
                    font-size fs + 0.0625rem
                    margin-bottom 0.5625rem
                    
                .btn1
                    position:absolute
                    left:0px;
                    bottom:0px;
                    background:#fff;
                    width:50%;
                    color:#ea6aa2;
                    height:1.25rem;
                    line-height: 40px;
                    z-index: 1000;
                    border:0;
                    border-top:1px solid #909090
                    font-size fs
                .btn2
                    position:absolute
                    left:50%;
                    bottom:0px;
                    background:#fff;
                    width:50%;
                    color:#ea6aa2;
                    height:1.25rem;
                    line-height: 40px;
                    z-index: 1000;
                    border:0;
                    border-top:1px solid #909090
                    font-size fs
                    .weui-dialog__title
                        font-size fs !important
                    .weui-dialog__ft
                        background #3cf !important
                        display none
                        .weui-dialog__btn_primary
                            color #ff0  !important
                        .weui-dialog__btn    
                            color #ff0  !important        
            .rowDown
                width 9rem
                font-size fs - 0.0313rem
                color #909090
                text-align justify
                line-height 1.5
        // 新建地址
        .newAddr
            display flex
            justify-content center
            width 100%
            .newAddrItem
                display flex
                justify-content center
                align-items center
                width 7.9688rem
                height 1.25rem
                margin-top 1.2344rem
                background-color #ea68a2
                border-radius 0.1563rem
                font-size fs + 0.0313rem
                color #fff
        .weui-toast  
            width auto!important 
            height 0.9375rem
            line-height 0.7813rem
            top 50%!important
            p
                padding 0.0625rem 0.3125rem 0 0.3125rem        
</style>