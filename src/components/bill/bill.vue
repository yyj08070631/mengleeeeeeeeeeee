<template>
    <div class="bill-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的账单</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="title-wrapper">
            <span class="title">本月</span>
            <img class="more" width="16" height="16" src="./__more.png"/>
            <span class="checkBill">查看本月账单</span>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./add.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./add.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./add.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./add.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./add.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./minus.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bill-item">
            <div class="date">
                <span>今天</span>
                <span>08:00</span>
            </div>
            <img class="icon" width="37" height="37" src="./minus.png"/>
            <div class="details">
                <span class="money">+2000.00</span>
                <span>头衔奖-2017.06.14-收益发放</span>
            </div>
        </div>
        <div class="bottom-line"></div>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .bill-wrapper
        margin-top: 40px
        width: 100%
        height: 100%
        overflow: hidden
        .header
            headerCss()
        .title-wrapper
            width: 100%
            height: 36px
            line-height: 36px
            background: #f0f0f0
            .title
                margin-left: 16px
                font-size: 13px
                color: #333
            .more
                margin: 8px 13px 0 0
                float: right   
            .checkBill
                margin-right: 5px
                float: right 
                font-size: 12px
                color: #909090 
        .bill-item
            margin: 0 16px
            width: 100%
            height: 64px 
            border-bottom-1px(#e0e0e0)
            .date
                float: left
                width: 32px
                height: 100%
                text-align:center
                span:first-child
                    margin-top: 13px
                span:last-child
                    margin-top: 6px    
                span
                    display: block
                    font-size: 13px
                    color: #909090
            .icon
                float: left
                margin: 13px  20px 0  16px
            .details
                float: left
                height: 100%    
                .money
                    margin-top: 13px
                    font-size: 13px
                    color: #333
                span                      
                    display: block
                    margin-top: 6px
                    font-size: 13px
                    color: #909090
        .bottom-line
            width: 100%
            height: 100px
            background: #f0f0f0        

             
</style>
