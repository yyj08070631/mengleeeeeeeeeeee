<template>
    <div class="subscribe-wrapper">
         <!--头部  -->
        <v-header></v-header>
        <div class="activity-wrapper">
            <div class="subscribe-item">
                <div class="pullLeft">服务</div>
                <div class="pullRight"><P>单人泡澡+臀部疗保养+面部补水三项套餐</P></div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">预约人信息</div>
                <div class="pullRight">
                    <div class="userinfo">
                        <div class="msg">
                            <span>{{name}}</span>
                            <span>{{telphone}}</span>
                        </div>
                        <a href="javascript:;" class="write" @click="showWriteTab">编辑</a>
                    </div>
                </div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">时间</div>
                <div class="pullRight"><P>单人泡澡+臀部疗保养</P></div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">地点</div>
                <div class="pullRight noLine"><P>单人泡澡+臀部疗保养+面部补水三项套餐</P></div>
            </div>
        </div>
        <div class="subscribe">
                <div>确定预约</div>
                <div>取消预约</div>
        </div>
        <div class="writeTab" v-show="showTab">
            <div class="write-wrapper">
                <div class="msg">
                    <div class="head">预约人信息编辑</div>
                    <div class="uname flexbox">
                        <div>预约人:</div>
                        <div><input type="text" placeholder="预约人" :value="name" @click="textFocus1" ref="checkVal1"></div>
                    </div>
                    <div class="tlephone flexbox">
                        <div>电&nbsp;&nbsp;&nbsp;话:</div>
                        <div><input type="text" placeholder="请填写电话" :value="telphone" @click="textFocus2" ref="checkVal2"></div>
                    </div>
                </div>
                <div class="dump" @click="closeTab">确定</div>
            </div>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import header from '../../components/header/header';
export default {
    components :{
        'v-view': view,
        'v-header': header
    },
    data(){
        return {
            showTab: false,
            name: '陈军宝',
            telphone: '13560433216'
        }
    },
    methods: {
        showWriteTab: function(){
            this.showTab = true
        },
        closeTab: function(){
            this.showTab = false
        },
        textFocus1: function(){
            this.$refs.checkVal1.selectionStart = 0;
            this.$refs.checkVal1.selectionEnd = this.$refs.checkVal1.value.length
        },
        textFocus2: function(){
            this.$refs.checkVal2.selectionStart = 0;
            this.$refs.checkVal2.selectionEnd = this.$refs.checkVal2.value.length
        },
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
  width = 100%
  color = #fff
  .subscribe-wrapper
        position: absolute
        top: 1.4063rem
        left: 0
        margin-bottom: 0.6719rem
        width: width
        font-size: 0
        overflow: hidden
        background: #efeff8
        .route-item
            footerCss()
        .header
           headerCss()
        .activity-wrapper
            width: width
            height: 100%
            background: #fff
            .subscribe-item
                display: flex
                margin-left: 0.5rem
                width: 100%
                min-height: 1.9375rem
                div
                    font-size: 0.375rem
                    border-bottom-1px(#e0e0e0)
                .noLine
                    border-bottom-none()
                .pullLeft
                    width: 3.125rem
                    line-height: 1.9375rem
                    color: #909090
                .pullRight
                    flex: 1
                    margin-right: 0.5rem
                    p    
                        margin: 0.4688rem 0.5rem 0 0 
                        line-height 0.4375rem
                    .userinfo
                        width: 100%
                        margin-bottom: 0.25rem
                        .msg
                            float: left
                            width: 2.3438rem
                            height: 1.25rem
                            margin-top: 0.3125rem
                            border-bottom-none()
                            span   
                                height: 0.4688rem
                                display: inline-block
                                float: left   
                                line-height: 0.75rem !important
                         .write
                            margin-right: 0.5rem
                            float: right       
                            color: #ea6aa2
                            line-height:  1.9375rem
        .subscribe
            display: flex
            width: 100%
            height: 1.0938rem  
            line-height: 1.0938rem  
            background: #fff 
            border-top-1px(#e0e0e0)
            div:first-child
                color: #ea6aa2
                border-right: 1px solid #e0e0e0 
            div:last-child
                color: #909090  
            div
                flex: 1
                font-size: 0.4063rem 
                text-align: center
    .writeTab
        position fixed
        left 0 
        top 0
        width 100%
        height 100%
        background rgba(0,0,0,0.5)
        z-index 1001
        .write-wrapper
            margin 3.9063rem auto 0 auto
            width 90%
            height 6.2813rem
            background #fff
            border-radius 0.25rem
            .head
                width 100%
                height 2.0313rem
                line-height 2.0313rem
                font-size 0.4688rem
                color #000
                text-align center
            .flexbox
                display flex
                font-size 0.4063rem
                height 0.875rem
                line-height 0.875rem
                color #333
                input 
                    padding-right 0.3125rem
                    width 100%
                    height 100%
                    border 0.0313rem solid #e0e0e0
                    text-align right

                div:first-child
                    margin-left 0.5625rem
                    width 2.0313rem
                div:last-child    
                    margin-right 0.875rem
                    flex 1    
            .uname
                margin-bottom 0.5625rem
            .tlephone
                margin-bottom 0.625rem  
            .dump   
                width 100%
                height 1.3438rem  
                line-height 1.3438rem  
                background #ea68a2  
                font-size 0.4688rem
                text-align center 
                color #fff
                border-radius 0 0 0.25rem 0.25rem 





                    

</style>

