<template>
    <div class="myTeam-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <!--主体-->
        <section class="main">
            <!--概览-->
            <div class="overview">
                <p>概况</p>
                <div>
                    <p>队员直属：{{data.count}}</p>
                </div>
            </div>
            <!--团队列表-->
            <div class="teammateList">
                <div v-if="data.d_arr.length == 0" class="noMan">没有直属会员哦:-D</div>
                <a href="javascript:void(0)" class="oneTeammate" v-for="(val,key) in data.d_arr" v-else>
                    <div class="oneTeammateBody">
                        <div class="colLeft">
                            <div class="boxLeft">
                                <img :src="val.headimg">
                            </div>
                            <div class="boxRight">
                                <div>
                                    <p>{{val.username}}</p>
                                    <img :src="val.grade">
                                </div>
                                <div>
                                    加入时间-{{val.ctime}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                </a>
            </div>
        </section>
    </div>
</template>
 <script type="ecmascript-6">
// import header from '../../components/header/header';
export default {
    components: {
        // 'v-header': header
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
                url: global.Domain + '/user/myTeamI?userId===tPtcNLZARXEuvDhRSFGkQX&iid=' + this.$route.query.iid,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
height = 100%
color = #fff
// 初始化样式
img, span, a
    display block
// wrapper
.myTeam-wrapper
    position absolute
    left 0
    width 100%
    height 100%
    background #f0f0f0
    // 头部
    // .header
    //     headerFlex()
    // 主体
    .main
        // 总览
        .overview
            display flex
            height 1.125rem
            background-color #f0f0f0
            justify-content space-between
            align-items center
            > p
                padding-left 0.5rem
                color #333
                font-size: fs - 0.0313rem
            div
                display flex
                margin-right 0.5rem
                font-size: fs - 0.0625rem
                color #909090
                p
                    margin-left 0.4688rem
        // 团队列表
        .teammateList
            // .oneTeammate:last-child .oneTeammateBody::after
            //     border 0
            .noMan
                display flex
                justify-content center
                align-items center
                width 100%
                font-size fs + 0.0938rem
                margin-top 60%
            .oneTeammate:active
                background-color #e0e0e0
            .oneTeammate
                .oneTeammateBody
                    display flex
                    height 1.75rem
                    justify-content space-between
                    align-items center
                    padding 0 0.5rem
                    background #fff
                    .colLeft
                        display flex
                        align-items center
                        .boxLeft img
                            width 1.1719rem
                            height 1.1719rem
                            border-radius 50%
                        .boxRight
                            display flex
                            flex-direction column
                            margin-left 0.5625rem
                            div:first-child
                                display flex
                                font-size: fs - 0.0313rem
                                color #000
                                img
                                    margin-left 0.0938rem
                                    width 1.125rem
                                    height 0.3594rem
                            div:last-child
                                font-size: fs - 0.0938rem
                                color #909090
                                margin-top 0.1563rem
                    .colRight
                        margin-left 0.5rem
                        img
                            width 0.2188rem
                            height 0.3906rem
                .line       
                    margin: 0 0 0 0.5rem         
                    width: 9.5rem
                    height: 1px
                    background: #e0e0e0
</style>

