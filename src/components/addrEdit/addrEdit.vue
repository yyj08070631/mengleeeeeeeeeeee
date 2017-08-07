<template>
    <div class="addrEdit-wrapper">
        <!--头部-->
        <div class="header">
            <div class="header-content">
                <a href="javascript:history.back(-1)" class="goBack">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
                <h1 class="title">新增地址</h1>
            </div>
        </div>
        <!-- 主体 -->
        <section class="main">
            <!-- 收货人 -->
            <div class="infoBox">
                <div class="rowLeft">收货人：</div>
                <input class="rowRight" placeholder="请填写收货人姓名" maxlength="4" v-model="name">
            </div>
            <!-- 手机号码 -->
            <div class="infoBox">
                <div class="rowLeft">手机号码：</div>
                <input class="rowRight" placeholder="请填写手机号码" maxlength="11" v-model="phone">
            </div>
            <!-- 所在地区 -->
            <div class="infoBox loc">
                <vux-address @listenToChildEvent="showMsgFromChild"></vux-address>
            </div>
            <!-- 街道地址 -->
            <div class="infoBox locDetail">
                <div class="rowLeft">街道地址：</div>
                <textarea placeholder="请输入收货地址" class="rowRight textArea" maxlength="20" v-model="street"></textarea>
            </div>
            <!-- 默认地址 -->
            <a href="javascript:void(0)" class="selDefault">
                <input type="checkbox" v-model="defaultLoc">
                <p>默认地址</p>
            </a>
            <!-- 保存 -->
            <div class="saveAddr" @click="submitInfo()">
                <div class="saveAddrItem">保存</div>
            </div>
        </section>
    </div>
</template>
 <script type="ecmascript-6">
import vuxAddress from '../../commonComponents/vuxAddress/vuxAddress'

export default {
    components: {
        vuxAddress
    },
    data() {
        return {
            area: '',
            phone: '',
            name: '',
            street: '',
            defaultLoc: ''
        }
    },
    methods: {
        submitInfo: function () {
            console.log(this.phone, this.area, this.street, this.name, Number(this.defaultLoc));
            // -------------------------------------------------------------boolean---------
            this.$http({
                method: 'get',
                url: global.Domain + '/user/addressAdd?userId===tPtcNLZARXEuvDhRSFGkQX&phone=' + this.phone + '&name=' + this.name + '&province=' + this.area[0] + '&city=' + this.area[1] + '&area=' + this.area[2] + '&address=' + this.street + '&isDefault=' + Number(this.defaultLoc),
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res.data;
                if(res.code == 200){
                    alert('添加成功!');
                    this.$router.push('addrManage');
                } else {
                    alert('添加失败！');
                }
            })
        },
        // 展示子组件获取的数据 // 此处指vuxAddress传过来的地址字符串
        showMsgFromChild: function(data){
            data = data.split(' ');
            this.area = data;
            // console.log(this.area);
        }
    },
    mounted() {
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
.addrEdit-wrapper
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
        margin-top 1.0938rem
        // 一般
        .infoBox
            display flex
            align-items center
            height 1.3438rem
            font-size 0.4375rem
            background-color #fff
            border-bottom-1px(#e0e0e0)
            .rowLeft
                display flex
                justify-content flex-end
                width 2.3438rem !important
                margin 0 0.7188rem 0 0.3125rem
                color #525252
            .rowRight
                display flex
                align-items center
                width 6.4688rem
                height 95%
                color #262626
                outline 0
            textarea
                height 60% !important
                border 0
                font-size 0.4375rem
                color #262626
                resize none
            .weui-cell
                padding 0
                span
                    display inline
        // 特殊
        .locDetail
            height 2.0313rem
        .loc
            .rowRight
                display flex
                justify-content space-between
                width 6.0469rem
                img
                    width 0.2344rem
                    height 0.4063rem
        // 保存
        .saveAddr
            display flex
            justify-content center
            width 100%
            .saveAddrItem
                display flex
                justify-content center
                align-items center
                width 7.9688rem
                height 1.25rem
                margin-top 1.2344rem
                background-color #ea68a2
                border-radius 0.1563rem
                font-size 0.5rem
                color #fff
        // 默认地址
        .selDefault
            display flex
            margin-top 0.5625rem
            // img
            //     width 0.4688rem
            //     height 0.4688rem
            //     margin-left 0.2813rem
            p
                height 100%
                margin-left 0.2188rem
                font-size 0.4688rem
            input 
                width 0.4688rem
                height 0.4688rem
                margin-left 0.2813rem
</style>