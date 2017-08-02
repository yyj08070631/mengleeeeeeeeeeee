<template>
    <div class="goodDetail-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">我的收藏</div>
            <div class="search">
                <a href="#search">
                    <img src="./images/search.png">
                </a>
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 正常收藏件 -->
            <div class="oneCollect oneBadCollect" v-for="(val,key) in orderList.collectitem">
                <img :src="val.mainmap">
                <div class="badCollect" v-if="val.is_show == 0 || val.off == 0">已失效</div>
                <div class="info">
                    <div class="rowUp">{{val.name}}</div>
                    <div class="rowMiddle" v-if="val.type == 1">
                        <span>￥</span>
                        <span>{{val.price}}</span>
                    </div>
                    <div class="rowDown">
                        <a href="javascript:void(0)" class="add" v-if="val.type == 1"> 
                            <img src="./images/cart.png" @click="showCartFn(key)">
                        </a>
                        <a href="javascript:void(0)" class="del">删除</a>
                    </div>
                </div>
            </div>
        </section>
        <div class="goodsCart-wrapper" v-show="showCart">
			<div class="addCart-container">
				<div class="goodsInfo">
					<div>
						 <div class="img-wrapper">
							   <img :src="orderList.collectitem[index].mainmap">   
						 </div>
					</div>
					<div>
						  <span>{{orderList.collectitem[index].name}}</span>  
						  <span>￥{{orderList.collectitem[index].price}}</span>  
					</div>
					<div>
						<img src="./images/close.png" @click="closeCart">
					</div>
				</div>
				<div class="goodsNumber">
					<span>请选择数量</span>
					<div class="count">
						<div class="sub" @click="numSub">-</div>
						<input type="text" :value="number">
						<div class="plus" @click="numPlus">+</div> 
					</div>
				</div>
				<a href="javascript:void(0)" class="dumpBtn" @click="addCartList">加入购物车</a>
			</div>
		</div>
		<div>
            <toast v-model="on" type="text">收藏成功</toast>
        </div>
        <div>
            <toast v-model="off" type="text">已取消收藏</toast>
        </div>
		<div>
            <toast v-model="success" type="text">添加成功</toast>
        </div>
		<div>
            <toast v-model="error" type="text">添加失败</toast>
        </div>
    </div>
</template>
 <script type="ecmascript-6">
 import { Toast, Group } from 'vux'
export default {
    components: {
        Toast,
        Group
    },
    data() {
        return {
            orderList: [],
            on: false,
            off: false,
			showCart: false,
			number: 1,
			success: false,
            error: false,
            index: 0
        }
    },
    methods: {
        getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/colall',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
                console.log(this.orderList)
            })
        },
        showCartFn: function(key){
            this.index = key
			if(this.showCart == false){
				this.showCart = true
			}else{
				this.showCart = false
			}
		},
		// 隐藏购物车
		closeCart: function(){
            this.showCart = false
		},
		// 数量++
		numPlus: function(){
			this.number ++
		},
		// 数量--
		numSub: function(){
			if(this.number == 1){
				this.number = 1
			}else{
				this.number -- 
			}
		},
		//添加到购物车
		addCartList: function(){
                this.$http.post(
					global.Domain + '/Order/addcart',
					{
						gid:this.orderList.collectitem[this.index].id,
						number:this.number
					},
					{
						emulateJSON:true
					}).then(response=>{
                    let data = response.body;
                    if(data === 1){
						this.success = true
					}else{
						this.error = true
					}
                })
        this.closeCart()
		},
    },
    mounted(){
        this.$nextTick(function(){
            this.getDataFromBackend()
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

width = 100%
color = #fff
// 外层元素
.goodDetail-wrapper
    padding 1.0938rem 0 0  0
    margin 0.3125rem 0 1.0938rem 0
    width width
    height width
    background #fff
    // 详情页header
    .header
        headerFlex()
    // 主体
    .main
        // 正常收藏件
        .oneCollect
            display flex
            width 100%
            margin-top 0.3125rem
            & > img
                margin-left 0.5rem
                width 3.25rem
                height 3.25rem
            .info
                width 100%
                .rowUp
                    padding 0.3125rem 0 1.0625rem 0.25rem
                    font-size 0.4063rem
                    color #333
                .rowMiddle
                    display flex
                    align-items flex-end
                    padding 0 0 0.3125rem 0.25rem
                    color #ea68a2
                    span:first-child, span:last-child
                        font-size 0.4375rem
                    span:nth-child(2)
                        font-size 0.5rem
                .rowDown
                    display flex
                    justify-content flex-end
                    .add
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.5469rem
                        border 0.0313rem solid #ea68a2
                        border-radius 0.0938rem
                    .del
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.5469rem
                        margin 0 0.4063rem 0 0.2813rem
                        border 0.0313rem solid #ababab
                        border-radius 0.0938rem
                        font-size 0.3438rem
                    img
                        width 0.5rem
                        height 0.5rem
        // 失效收藏件
        .oneBadCollect
            position relative
            .badCollect
                display flex
                justify-content center
                align-items center
                position absolute
                left 1.0938rem 
                top 0.5rem
                width 2.25rem
                height 2.25rem
                border-radius 50%
                font-size 0.4063rem
                color rgba(255,255,255,0.8)
                background-color rgba(0, 0, 0, 0.3)
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size 0.375rem 		
		//购物车			
    .goodsCart-wrapper
        position fixed
        top 0
        left 0
        width 100%
        height 100%		
        background rgba(0,0,0,0.5)
        z-index 1000  
        .addCart-container
            position absolute
            bottom 0
            width 100%
            height 6.0938rem
            background #fff
            .goodsInfo
                display flex
                width 100%
                height 2.8438rem
                border-bottom-1px(#e0e0e0)
                font-size 0.375rem
                div:first-child
                    position relative
                    width 2.9688rem
                    .img-wrapper
                        position absolute
                        margin 0
                        padding 0.1563rem
                        left 0.3125rem
                        bottom 0.4688rem
                        width 2.5313rem
                        height 2.5313rem
                        background #fff
                        border-radius 0.1563rem
                        img
                            width 2.5313rem
                            height 2.5313rem
                div:nth-child(2)
                    flex 1
                    span:first-child
                        margin-top 0.2813rem
                        line-height 0.9375rem
                        text-indent 0.4688rem	
                        color #ea6aa2
                    span:last-child	
                        line-height 0.9375rem	
                        text-indent 0.4688rem
                        color #909090	
                div:last-child
                    margin 0.2813rem 0.2813rem 0 0
                    width 0.625rem
                    height 0.625rem

            .goodsNumber
                display flex
                width 100%
                height 2rem
                line-height 2rem
                font-size 0.4063rem
                span
                    flex 1
                    margin-left 0.3438rem
                .count
                    display flex
                    margin 0.625rem 0.2813rem 0 0
                    height 0.6875rem
                    line-height  0.6875rem
                    border 0.0313rem solid #d6d6d6
                    .sub,.plus
                        text-align center
                        width 0.6875rem
                    input 
                        width 0.6875rem	
                        text-align center
                        border-left 0.0313rem solid #d6d6d6
                        border-right 0.0313rem solid #d6d6d6
            .dumpBtn
                width 100%
                height 1.25rem
                line-height 1.25rem
                font-size 0.4219rem
                color #fff
                text-align center
                background #fe9333        

</style>