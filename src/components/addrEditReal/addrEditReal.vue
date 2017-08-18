<template>
    <div class="addrEditReal-wrapper">
        <!--头部-->
         <!-- header -->
        <!-- <v-header></v-header> -->
        <!-- 主体 -->
        <section class="main">
            <!-- 收货人 -->
            <div class="infoBox">
                <div class="rowLeft">收货人：</div>
                <input type="text" class="rowRight" placeholder="请填写收货人姓名" maxlength="4" v-model="name">
            </div>
            <!-- 手机号码 -->
            <div class="infoBox">
                <div class="rowLeft">手机号码：</div>
                <input type="text" class="rowRight" placeholder="请输入手机号码" maxlength="11" v-model="phone">
            </div>
            <!-- 所在地区 -->
            <div class="infoBox loc">
                <vux-address @listenToChildEvent="showMsgFromChild" :locArr="area"></vux-address>
            </div>
            <!-- 街道地址 -->
            <div class="infoBox locDetail">
                <div class="rowLeft">街道地址：</div>
                <textarea placeholder="请输入收货地址" class="rowRight textArea" maxlength="20" v-model="street">{{data.address}}</textarea>
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
// import header from '../../components/header/header';
export default {
    components: {
        vuxAddress,
        // 'v-header': header
    },
    data() {
        return {
            area: [],
            phone: '',
            name: '',
            street: '',
            defaultLoc: '',
            data: [],
            canSel: this.$route.query.canSel
        }
    },
    methods: {
        submitInfo: function () {
            // console.log(this.phone, this.area, this.street, this.name, this.defaultLoc);
            // -------------------------------------------------------------boolean---------
            // 判断是否有数据修改，若无修改则不提交
            if(this.phone == this.data.phone && this.area.join() == [this.data.province, this.data.city, this.data.area].join() && this.street == this.data.address && this.name == this.data.name && this.defaultLoc == (this.data.isDefault == 1 ? true : false)){
                alert('您没有进行修改！')
            } else {
                this.$http({
                    method: 'get',
                    url: global.Domain + '/user/addressEdit?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + this.$route.query.id + '&phone=' + this.phone + '&name=' + this.name + '&province=' + this.area[0] + '&city=' + this.area[1] + '&area=' + this.area[2] + '&address=' + this.street + '&isDefault=' + Number(this.defaultLoc),
                    emulateJSON: true
                }).then(function (response) {
                    let res = response.body;
                    // console.log(res);
                    alert('修改成功!');
                    this.$router.push({ path: '/addrManage', query: { canSel: this.canSel } });
                })
            }
        },
        // 展示子组件获取的数据 // 此处指vuxAddress传过来的地址字符串
        showMsgFromChild: function(data){
            data = data.split(' ');
            this.area = data;
            // console.log(this.area);
        },
        // 展示当前收货地址数据
        getDataFromBackEnd: function () {
            // console.log(this.$route.query.id)
            this.$http({
                method: 'get',
                url: global.Domain + '/user/addressDetail?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + this.$route.query.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
                // 利用双向绑定传输数据到页面
                this.phone = this.data.phone; // 电话
                this.name = this.data.name; // 收件人
                if(this.data.isDefault == 1){ // 是否默认地址
                    this.defaultLoc = true
                } else {
                    this.defaultLoc = false
                }
                this.area = [this.data.province, this.data.city, this.data.area];
                this.street = this.data.address
                // console.log(this.area)
            })
        },
    },
    mounted() {
        this.getDataFromBackEnd()
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
.addrEditReal-wrapper
    position absolute
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // 主体
    .main
        border-top 0.3125rem solid #f0f0f0
        // 一般
        .infoBox
            display flex
            align-items center
            height 1.3438rem
            font-size fs
            background-color #fff
            border-bottom 1px solid #e0e0e0
            .rowLeft
                display flex
                justify-content flex-end
                width 2.8125rem !important
                margin 0 0.7188rem 0 0.3125rem
                color #525252
            .rowRight
                display flex
                align-items center
                width 6.4688rem
                height 95%
                font-size fs
                color #262626
                outline 0
            textarea
                height 60% !important
                border 0
                font-size fs
                font-family 'Microsoft YaHei'
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
                font-size fs + 0.0625rem
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
                font-size fs + 0.0313rem
            input 
                width 0.4688rem
                height 0.4688rem
                margin-left 0.2813rem
</style>