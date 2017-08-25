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
                    <p>直属：{{data.d_count}}</p>
                    <p>间接：{{data.i_count}}</p>
                </div>
            </div>
            <!--团队列表-->
            <div class="teammateList">
                <a href="javascript:void(0)" class="oneTeammate" v-for="(val,key) in data.d_arr">
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
                        <div class="colRight" v-show="data.i_count > 0">
                            <img src="./images/arrow_right.png">
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
                url: global.Domain + '/user/myTeam?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        }
    },
    computed: {

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

