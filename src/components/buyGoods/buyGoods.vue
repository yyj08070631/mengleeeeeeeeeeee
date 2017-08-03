<template>
    <div class="buyGoods-wrapper">
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">确认订单</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div>
        <router-link to="/addrManage" class="userInfo">
            <div><img src="./location.png"></div>
            <div>
                <span>陈超成</span><span>15218348383</span>
                <p>广东省广州市番禺区番禺区大学城小谷围街道国家数字家庭基地A242</p>
            </div>
            <div><img src="./arrow_right.png"></div>
        </router-link>
        <div class="goodsInfo">
           <div><img src="./goodsMap.png"></div>
           <div>
               <span>男士休闲雪地靴</span>
               <p>数量：X1</p>
               <p>运费：0</p>
           </div>
           <div><span>￥42.80</span></div>
        </div>
        <div class="countInfo">
            <p>共1件（含运费）: ￥ 42.80</p>
        </div>
        <div class="footer">
            <div class="buy-tag">
                <div></div>
                <div>
                    <span>实付款：</span><span>￥32.80</span>
                    <p>已使用0张优惠券</p>
                </div>
                <router-link to="/orderFrom">提交订单</router-link>
            </div>
        </div>

    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
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
        }
    },
    computed: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.buyGoods-wrapper
    position: absolute
    top: 0
    bottom: 0
    margin: 1.25rem 0 0 0 
    background: #f0f0f0
    .header
        headerCss()
    .userInfo    
        display: flex
        height: 2.4688rem
        background: #fff
        font-size: 0
        align-items: center
        border-bottom-1px(#e0e0e0)
        margin-bottom: 0.3125rem
        span
            display: inline
            line-height: 0.5625rem
            font-size: 0.4063rem
        span:first-child
            margin-right: 0.4688rem    
        p
            font-size: 0.4063rem
            line-height: 0.5625rem
        div:first-child
            margin: 0 0.375rem 0 0.3438rem   
            img
                width: 0.5rem
                height: 0.625rem
        div:last-child
            width: 1.5938rem   
            img
                margin-left: 0.3125rem
                width: 0.2656rem 
                height: 0.4375rem
    .goodsInfo    
        display: flex
        height: 2.625rem
        background: #fff
        font-size: 0
        border-bottom-1px(#e0e0e0)
        div:nth-child(2)
            flex: 1
            padding-top: 0.2813rem
            align-item: flex-start
        div:last-child
            margin-right: 0.5rem
            padding-top: 0.2813rem
            width: 1.5rem
            align-item: flex-start
            
        img
            margin: 0.2813rem   
            vertical-align: top
        span,p            
            font-size: 0.375rem
            line-height: 0.5625rem
        span
            display: inline    
            color: #333  
        p 
            color: #909090  
    .countInfo
        width: 100%
        height: 1.1563rem
        background: #fff
        font-size: 0
        p
            margin-right: 0.5625rem
            text-align: right
            font-size: 0.375rem
            line-height: 1.1563rem
            color: #333
    .footer
        position: fixed
        bottom: -0.7031rem
        left: 0        
    .buy-tag
        display: flex
        height: 1.1563rem
        background: #fff
        font-size: 0
        border-top-1px(#e0e0e0)
        div:nth-child(1)
            flex: 1 
        div:nth-child(2)
            padding-top: 0.1875rem
            span:first-child
                color: #333
            span
                display: inline
                font-size: 0.375rem
                line-height: 0.4688rem
                color: red 
            p
                font-size: 0.3438rem  
                line-height: 0.4688rem 
                color: #909090
        a
            line-height: 1.1563rem 
            width: 2.5625rem
            font-size: 0.375rem  
            background: #ea68a2
            color: #fff
            text-align: center
</style>
