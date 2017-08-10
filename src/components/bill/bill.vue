<template>
    <div class="bill-wrapper">
        <!-- <v-header></v-header> -->
        <div class="tag-wrapper">
            <span class="title">本月</span>
            <img class="more" src="./__more.png" />
            <span class="checkBill">查看月账单</span>
        </div>
        <div class="content-wrapper">
            <div class="bill-item bill-item-empty" v-if="data.length == 0">本月还没有账单数据哦:-D</div>
            <div class="bill-item" v-for="(val,key) in data" v-else>
                <div class="date">
                    <span>{{val.ctime | getDateUp}}</span>
                    <span>{{val.ctime | getDateDown}}</span>
                </div>
                <img class="icon" src="./images/add.png" v-if="val.symbol == '+'">
                <img class="icon" src="./images/minus.png" v-else>
                <div class="details">
                    <span class="money">{{val.symbol}}&nbsp;{{val.money | num}}</span>
                    <span>{{val.type}}</span>
                </div>
            </div>
        </div>
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
                url: global.Domain + '/user/recordList?userId===tPtcNLZARXEuvDhRSFGkQX',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data
            })
        }
    },
    filters: {
        // 1000.00
        num: function(val){
            val = parseFloat(val).toFixed(2)
            return val
        },
        // 根据ctime获取日期
        getDateUp: function(val){
            let staGet =  new Date(val);
            let day = staGet.getDay();
            if(day == 1){
                return '周一'
            } else if (day == 2){
                return '周二'
            } else if (day == 3){
                return '周三'
            } else if (day == 4){
                return '周四'
            } else if (day == 5){
                return '周五'
            } else if (day == 6){
                return '周六'
            } else if (day == 7){
                return '周日'
            }
        },
        getDateDown: function(val){
            val = String(val).split(' ')[0].split('-')[1] + '-' + String(val).split(' ')[0].split('-')[2];
            return val
        }
    },
    computed: {
        // getStampUp: function(){
        //     let now = new Date();
        //     console.log(now.getTime());
        //     // for(let i = 0; i < this.data.length; i++){
        //     //     // console.log(this.data.ctime.getTime())
        //     // }
        // },
        // getStampDown: function(){

        // }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.bill-wrapper
    position: absolute
    top 0
    left 0
    width: 100%
    height: 100%
    overflow: hidden
    background: #f0f0f0
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
    .content-wrapper
        background: #fff
        .bill-item-empty
            display flex
            justify-content center
            align-items center
            font-size 0.4063rem
            margin-left 0 !important
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
