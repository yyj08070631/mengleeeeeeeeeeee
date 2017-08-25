<template>
    <div class="myCollect-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <!-- 主体 -->
        <section class="main">
            <!-- 正常收藏件 -->
            <div v-if="orderList.collectitem.length == 0" class="noGoods">没有任何收藏哦<router-link to="/goods">去收藏</router-link>&nbsp;&nbsp;:) </div>
            <router-link :to="{ path: '/goodDetail', query: { gid: val.id } }" class="oneCollect oneBadCollect" v-for="(val,key) in orderList.collectitem" v-else>
                <div class="imgCont">
                    <img :src="val.mainmap">
                </div>
                <div class="badCollect" v-if="val.is_show == 0 || val.off == 0">已失效</div>
                <div class="info">
                    <div class="rowUp">{{val.name}}</div>
                    <div class="rowMiddle" v-if="val.type == 1">
                        <span>￥</span>  
                        <span>{{val.price | numBig}}</span>
                        <span>.{{val.price | numSmall}}</span>
                    </div>
                    <div class="rowDown">
                        <a href="javascript:void(0)" class="add" v-if="val.type == 1" @click.stop="selectCollect(val.id);showCartFn();"> 
                            加入购物车
                        </a>
                        <a href="javascript:void(0)" class="del" @click.stop="onShow();">删除</a>
                    </div>
                </div>
            </router-link>
        </section>
        <!-- 购物车组件 -->
        <div class="goodsCart-wrapper" v-show="showCart">
			<div class="addCart-container">
				<div class="goodsInfo">
					<div>
						 <div class="img-wrapper">
							<img :src="saveData.mainmap">     
						 </div>
					</div>
					<div>
                        <span>{{saveData.name}}</span>
                        <span>￥{{saveData.price | num}}</span>
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
		<!-- 购物车组件 -->
        <!-- 弹窗组 -->
        <div>
            <toast v-model="on" type="text">已添加</toast>
        </div>
        <div>
            <toast v-model="off" type="text">添加失败</toast>
        </div>
		<div>
            <toast v-model="success" type="text">删除成功</toast>
        </div>
		<div>
            <toast v-model="error" type="text">删除失败</toast>
        </div>
         <!-- 询问弹窗 -->
        <alert v-model="show" title="提示" @on-show="onShow"  @on-hide="onHide">
            <button class="btn1" @click="onHide();delCollect();">确定</button>
            <button class="btn2" @click="onHide();">取消</button>
            请确认删除
        </alert>
    </div>
</template>
<script type="ecmascript-6">
import { Toast,Alert } from 'vux'
// import header from '../../components/header/header';
export default {
    components: {
        Toast,
        Alert,
        // 'v-header': header
    },
    data() {
        return {
            orderList: [],
            on: false,
            off: false,
			showCart: false,
            showAlert: true,
			number: 1,
			success: false,
            error: false,
            show: false,
            index: 0,
            delCollectList: [],
            saveData: [],// 数组重构，添加购物车，删除收藏等
        }
    },
    methods: {
        // 获取数据
        getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/colall',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
            })
        },
        // 展示购物车组件
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
		addCartList: function(id){
            if( this.orderList.collectitem.length > 0){
                for(let i = 0; i < this.orderList.collectitem.length; i++){
                    if(this.orderList.collectitem[i].id == id){
                        this.saveData = {
                            id: this.orderList.collectitem[i].id,
                            mainmap: this.orderList.collectitem[i].mainmap,
                            price: this.orderList.collectitem[i].price,
                        }
                    }
                }
            } 
            this.$http.post(
                global.Domain + '/Order/addcart',
                {
                    gid:this.saveData.id,
                    number:this.number
                },
                {
                    emulateJSON:true
                }).then(response=>{
                let data = response.body;
                if(data === 1){
                    this.on = true
                }else{
                    this.off = true
                }
            })      
            this.closeCart()
            this.number = 1
		},
        // 删除收藏
        delCollect: function () {
            for(let i = 0; i < this.orderList.collectitem.length; i++){
                this.saveData = {
                    id: this.orderList.collectitem[i].id,
                    mainmap: this.orderList.collectitem[i].mainmap,
                    price: this.orderList.collectitem[i].price,
                    colid: this.orderList.collectitem[i].colid,
                    type: this.orderList.collectitem[i].type,
                }
            }
            this.$http({
                method: 'get',
                url: global.Domain + '/order/iscol?iscol=0&colid=' + this.saveData.colid + '&type=' + this.saveData.type,
                emulateJSON: true
            }).then((response)=>{
                this.delCollectList = response.body
                if(this.delCollectList ==  1 ){
                    this.success = true
                    this.getDataFromBackend()
                }else{
                    this.error = true
                    return
                }
            })
        },
        // 查找id对应商品
        selectCollect: function(id){
            if( this.orderList.collectitem.length > 0){
                for(let i = 0; i < this.orderList.collectitem.length; i++){
                    if(this.orderList.collectitem[i].id == id){
                        this.saveData = {
                            id: this.orderList.collectitem[i].id,
                            name: this.orderList.collectitem[i].name,
                            mainmap: this.orderList.collectitem[i].mainmap,
                            price: this.orderList.collectitem[i].price,
                        }
                    }
                }
            } 
        },
        //显示弹窗    
        onHide () {
            this.show = false
            },
        //隐藏弹窗
        onShow () {
            this.show = true  
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.getDataFromBackend()
        })
    },
    filters: {
        numBig: function (value) {
            value = parseFloat(value).toFixed(2).split('.')[0];
            return value
        },
        numSmall: function(value){
            value = parseFloat(value).toFixed(2).split('.')[1];
            return value
        },
        // 1025.00
        num: function(value){
            value = parseFloat(value).toFixed(2);
            return value
        },
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 外层元素
.myCollect-wrapper
    width 100%
    height 100%
    background #fff
    // 主体
    .main
        height 100%
        background #fff
        .noGoods
            padding-top 60%
            font-size fs + 0.0313rem
            text-align center
            color #333
            a
                color #ea68a2
                margin-top 0.3125rem
                font-size fs
        // 正常收藏件
        .oneCollect
            display flex
            width 100%
            border-bottom 1px solid #ccc
            background-color #fff
            .imgCont
                width 3.25rem
                height 3.25rem
                padding 0.25rem
                img
                    width 3.25rem
                    height 3.25rem
            .info
                width 100%
                .rowUp
                    width 5.75rem
                    padding 0.5313rem 0 0.9375rem 0
                    font-size fs + 0.0313rem
                    color #333
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                .rowMiddle
                    display flex
                    align-items flex-end
                    justify-content flex-end
                    width 5.75rem
                    padding 0 0 0.9688rem 0
                    color #ea68a2
                    span:first-child, span:last-child
                        font-size fs
                    span:nth-child(2)
                        font-size fs + 0.0625rem
                .rowDown
                    display flex
                    justify-content flex-end
                    padding-bottom 0.3125rem
                    .add
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.7188rem
                        border 0.0313rem solid #ea68a2
                        border-radius 0.0938rem
                        font-size fs
                        color #ea68a2
                        z-index 10
                    .del
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.7188rem
                        margin 0 0.4063rem 0 0.2813rem
                        border 0.0313rem solid #ababab
                        border-radius 0.0938rem
                        font-size fs
                        z-index 10
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
                font-size fs - 0.0313rem
                color rgba(255,255,255,0.8)
                background-color rgba(0, 0, 0, 0.3)
    // 弹窗
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
    .weui-dialog
        min-width 80%
        background #fff
        border-radius 0.1875rem
        .weui-dialog__hd
            padding 0.3125rem 0 0 0
            text-align center
            .weui-dialog__title
                font-size fs + 0.0625rem !important
        .weui-dialog__bd
            padding 0.9375rem 0 
            font-size fs + 0.0313rem
            margin-bottom 0.5625rem
            text-align center
             
        .btn1
            position:absolute
            left:0px;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs - 0.0313rem
        .btn2
            position:absolute
            left:50%;
            bottom:0px;
            background:#fff;
            width:50%;
            color:#ea6aa2;
            height:1.25rem;
            line-height: 40px;
            z-index: 1000;
            border:0;
            border-top:1px solid #909090
            font-size fs - 0.0313rem
            .weui-dialog__title
                font-size fs - 0.0313rem !important
            .weui-dialog__ft
                background #3cf !important
                display none
                .weui-dialog__btn_primary
                    color #ff0  !important
                .weui-dialog__btn    
                    color #ff0  !important

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
                border-bottom 1px solid #e0e0e0
                font-size fs
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
                    display flex
                    flex-direction column
                    span:first-child
                        margin-top 0.2813rem
                        line-height 0.9375rem
                        text-indent 0.4688rem	
                        color #333
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
                font-size fs + 0.0313rem
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
                        width 0.6875rem
                        font-size fs + 0.125rem
                        line-height fs + 0.2813rem
                        text-align center
                    input 
                        width 0.6875rem	
                        font-size fs
                        text-align center
                        border-left 0.0313rem solid #d6d6d6
                        border-right 0.0313rem solid #d6d6d6
            .dumpBtn
                width 100%
                height 1.25rem
                line-height 1.25rem
                font-size fs + 0.0469rem
                color #fff
                text-align center
                background #ea68a2
</style>