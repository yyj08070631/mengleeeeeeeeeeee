<template>
    <div class="bill-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的账单</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="tag-wrapper">
            <span class="title">本月</span>
            <img class="more" src="./__more.png"/>
            <span class="checkBill">查看本月账单</span>
        </div>
         <div class="content-wrapper">
            <div class="bill-item" v-for="(item,key) in appData">
                <div class="date">
                    <span>{{item.day}}</span>
                    <span>{{item.time}}</span>
                </div>
                <img class="icon" :src="item.img"/>
                <div class="details">
                    <span class="money">{{item.getMoney}}</span>
                    <span>{{item.desc}}</span>
                </div>
            </div> 
        </div>
    </div>
</template>
<script type="ecmascript-6">
export default {
    data(){
        return{
            appData: [{
                day: '今天',
                time: '08:00',
                img: require('./minus.png'),
                getMoney: '+2000.00',
                desc: '头衔奖-2017.06.14-收益发放'
            },
            {
                day: '明天',
                time: '08:00',
                img: require('./add.png'),
                getMoney: '+2000.00',
                desc: '头衔奖-2017.06.14-收益发放'
            },
            {
                day: '今天',
                time: '08:00',
                img: require('./minus.png'),
                getMoney: '+2000.00',
                desc: '头衔奖-2017.06.14-收益发放'
            },
            {
                day: '今天',
                time: '08:00',
                img: require('./add.png'),
                getMoney: '+2000.00',
                desc: '头衔奖-2017.06.14-收益发放'
            },
            {
                day: '今天',
                time: '08:00',
                img: require('./minus.png'),
                getMoney: '+2000.00',
                desc: '头衔奖-2017.06.14-收益发放'
            }
            ]
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .bill-wrapper
        margin-top: 1.0938rem
        width: 100%
        height: 100%
        overflow: hidden
        background: #fff
        .header
            headerCss()
        .tag-wrapper
            width: 100%
            height: 1rem
            line-height: 1rem
            background: #f0f0f0
            .title
                margin-left: 0.5rem
                float: left
                font-size: 0.4063rem
                color: #333
            .more
                display: block
                margin: 0.3125rem 0.5rem 0 0
                width: 0.375rem 
                height: 0.375rem
                float: right   
            .checkBill
                margin-right: 0.1563rem 
                float: right 
                font-size: 0.375rem
                color: #909090 
        .bill-item
            margin: 0 0.5rem
            width: 100%
            height: 1.6875rem 
            border-bottom-1px(#e0e0e0)

            .date
                float: left
                height: 100%
                text-align:center
                span:first-child
                    margin-top: 0.4063rem
                span:last-child
                    margin-top: 0.1875rem 
                    font-size: 0.3438rem   
                span
                    display: block
                    font-size: 0.4063rem
                    color: #909090
            .icon
                float: left
                margin: 0.2891rem  0.3125rem 0  0.25rem
                width: 1.1406rem
                height: 1.1406rem
            .details
                float: left
                height: 100%    
                .money
                    margin-top: 0.4063rem
                    font-size: 0.4063rem
                    color: #333
                span                      
                    display: block
                    margin-top: 0.1875rem
                    font-size: 0.3438rem
                    color: #909090
        .bottom-line
            width: 100%
            height: 100%
            background: #fff        
            .bill-item
                margin: 0 0.5rem 
                width: 100%
                height: 1.25rem 
                border-bottom-1px(#e0e0e0)
                background: #fff
                .date
                    float: left
                    height: 100%
                    text-align:center
                    span:first-child
                        margin-top: 0.2031rem
                    span:last-child
                        margin-top: 0.0938rem 
                        font-size: 0.3438rem   
                    span
                        display: block
                        font-size: 0.4063rem
                        color: #909090
                .icon
                    float: left
                    margin: 0.2891rem  0.3125rem 0  0.25rem
                    width: 0.5781rem
                    height: 0.5781rem
                .details
                    float: left
                    height: 100%    
                    .money
                        margin-top: 0.2031rem
                        font-size: 0.4063rem
                        color: #333
                    span                      
                        display: block
                        margin-top: 0.0938rem
                        font-size: 0.3438rem
                        color: #909090   

             
</style>
