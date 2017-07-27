<template>
    <div class="myTeam-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">我的团队</div>
            <div class="search">
                <a href="#search">
                    <img src="./images/search.png">
                </a>
            </div>
        </header>
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
                                    <img :src="computeImg(val.level)">
                                </div>
                                <div>
                                    加入时间-{{val.ctime}}
                                </div>
                            </div>
                        </div>
                        <div class="colRight">
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
export default {
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
        },
        // 计算等级图标
        computeImg: function (level) {
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
    top 1.25rem
    left 0
    width width
    height height
    background #f0f0f0
    overflow-x: hidden
    // 头部
    .header
        headerFlex()
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
                font-size: 0.4063rem
            div
                display flex
                margin-right 0.5rem
                font-size: 0.375rem
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
                                font-size: 0.4063rem
                                color #000
                                img
                                    margin-left 0.0938rem
                                    width 1.125rem
                                    height 0.3594rem
                            div:last-child
                                font-size: 0.3438rem
                                color #909090
                                margin-top 0.1563rem
                    .colRight
                        margin-left 0.5rem
                        img
                            width 0.2188rem
                            height 0.3906rem
                .line       
                    margin: -0.0313rem 0 0 0.5rem         
                    width: 100%
                    height: 0.0313rem
                    background: #e0e0e0
    
                    
                    
                            
</style>

