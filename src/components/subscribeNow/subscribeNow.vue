<template>
    <div class="subscribeNow-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="activity-wrapper">
            <div class="mainmap">
                <img :src="data.servimg">
            </div>
            <div class="subscribe-item">
                <div class="colLeft">服务</div>
                <div class="colRight"><p>{{data.servname}}</p></div>
            </div>
             <div class="subscribe-item">
                <div class="colLeft noLine">预约人信息</div>
                <div class="colRight noLine">
                    <div class="userinfo">
                        <div class="msg">
                            <span>{{data.username}}</span>
                            <span>{{data.phone}}</span>
                        </div>
                        <!-- <a href="javascript:void(0)" class="write" @click="editInfo = true">编辑</a> -->
                    </div>
                </div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">时间</div>
                <div class="colRight"><p>{{data.atime}}</p></div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">地点</div>
                <div class="colRight"><p>{{data.province + data.city + data.area + data.address}}</p></div>
            </div>
            <div class="subscribe-item">
                <div class="colLeft noLine">状态</div>
                <div class="colRight noLine"><p>{{data.status == 0 || data.status == 1 ? '已预约' : data.status == 2 ? '已完成' : data.status == 3 ? '已取消' : data.status == 4 ? '已评价' : '未接收到订单状态'}}</p></div>
            </div>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    components :{
        'v-view': view
    },
    data(){
        return {
            data: []
        }
    },
    methods: {
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/user/appointmentDetail?userId===tPtcNLZARXEuvDhRSFGkQX&id=' + this.$route.query.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res)
                this.data = res.data
            });
        }
    },
    mounted(){
        this.getDataFromBackend()
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../commom/stylus/mixin'

.subscribeNow-wrapper
    position: absolute
    left: 0
    width: 100%
    font-size: 0
    overflow: hidden
    background: #efeff8
    .route-item
        footerCss()
    // .header
    //     headerCss()
    .activity-wrapper
        width: 100%
        height: 100%
        background: #fff
        margin-bottom 1.3594rem
        border-bottom 1px solid #e0e0e0
        // 活动主图容器
        .mainmap
            width 100%
            // height 10rem
            img
                width 100%
                // height 10rem
        .subscribe-item
            display flex
            margin-left 0.5rem
            width 100%
            height 1.5625rem
            div
                font-size fs
                border-bottom 1px solid #e0e0e0
            .noLine
                border-bottom 0
            .colLeft
                display flex
                align-items center
                width: 3.125rem
                color: #909090
                font-size fs
            .colRight
                display flex
                align-items center
                width 6.875rem
                margin-right 0.5rem
                font-size fs
                .userinfo
                    width 100%
                    height 1.5625rem
                    margin-bottom: 0.25rem
                    p
                        margin 0.4688rem 0.5rem 0 0 
                        line-height 0.4375rem
                    .msg
                        display flex
                        flex-direction column
                        justify-content center
                        float: left
                        width: 3.75rem
                        height 1.5625rem
                        border-bottom 0
                        span:last-child
                            margin-top 0.3125rem
                    .write
                        margin-right: 0.5rem
                        float: right
                        color: #ea6aa2
                        line-height 1.9375rem
</style>