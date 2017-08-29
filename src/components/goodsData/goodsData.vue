<template>
    <div class="goodsData-wrapper">
         <div class="noGoods" v-if="unescape(dataList.dataitem.parameter) == ''">暂无图文信息&nbsp;:)</div>
         <div class="content-wrapper" v-html="unescape(dataList.dataitem.parameter)"  v-else>
        </div>
        <div class="goodsCart-wrapper" v-show="showCart">
			<div class="addCart-container">
				<div class="goodsInfo">
					<div>
						 <div class="img-wrapper">
							 <img :src="goodsInfo.gooditem.mainmap"> 
						 </div>
					</div>
					<div>
						<span>{{goodsInfo.gooditem.name}}</span>
						<span>￥{{goodsInfo.gooditem.price}}</span>
					</div>
					<div>
						<img src="./close.png" @click="closeCart">
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
        <!-- toast -->
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
// import header from '../../components/header/header';
export default {
  components: {
        Toast,
        Group,
        // 'v-header': header
    },
  data(){
      return {
        dataList: '',
        on: false,
        off: false,
        showCart: false,
        number: 1,
        success: false,
        error: false,
        goodsInfo: []
      }
  },
  methods: {
      getContentData: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Cate/data?gid='+this.$route.query.gid,
                emulateJSON: true
            }).then(function (response) {
                this.dataList = response.body
                console.log(this.dataList)
            })
        },
         //获取商品信息（购物车专用接口）
        getGoodsInfo: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/cate/headimg?gid='+this.$route.query.gid,
                emulateJSON: true
            }).then(function (response) {
                this.goodsInfo = response.body
				console.log(this.goodsInfo)
            })
        },
        //转义html
        unescape : function (html) {
            return html
            .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#39;/g, "\'");
        },
        // 收藏按钮
        changSrc: function(){
            let file = require('./collect.png');
            let file2 = require('./collect-active.png');
            let obj = this.$refs.menuItem
            if(obj.src == file){
                    obj.src = file2
                    this.on = true
            }else{
                    obj.src = file
                    this.off= true
				}
		},
         //显示购物袋
        showCartFn: function(){
			if(this.showCart == false){
				this.showCart = true
			}else{
				this.showCart = false
			}
		}, 
        //隐藏购物袋
        closeCart: function(){
			this.showCart = false
		},
        //数量++
        numPlus: function(){
			this.number ++
		},
        //数量—-
		numSub: function(){
			if(this.number == 1){
				this.number = 1
			}else{
				this.number -- 
			}
		},
        // 添加到购物车
        addCartList: function(){
                this.$http.post(
					global.Domain + '/Order/addcart',
					{
						gid:this.goodsInfo.gooditem.id,
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
          this.getContentData()
          this.getGoodsInfo()
      })
  },
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.menu-wrapper
    display: none    
.goodsData-wrapper
    // .header
    //     headerCss()
    .noGoods
        margin-top 60%
        font-size fs + 0.0313rem
        text-align center
        color #333
        a
            color #ea68a2
            margin-top 0.3125rem
            font-size fs
    .content-wrapper
        padding 0.5rem
        font-size fs + 0.0625rem !important
        background-color #fff
    .myFooter
        position fixed
        bottom 0
        right 0
        display flex
        align-items center
        justify-content flex-end
        height 1.1875rem
        width 100%
        background-color #f9f9f9
        border-top 0.0313rem solid #e0e0e0
        >a:nth-child(1)
        >a:nth-child(2)
            display flex
            justify-content center
            align-items center
            flex-direction column
            border-left 0.0313rem solid #e0e0e0
            flex 1
            height 100%
            p
                color #646464
                font-size fs - 0.1563rem
                margin-top 0.0938rem
        >a:nth-child(3)
            display flex
            width 2.9375rem
            justify-content center
            align-items center
            font-size fs
            font-weight bold
            color #fff
            background-color #f19fc2
            height 100%
        >a:nth-child(4)
            display flex
            width 3.1875rem
            justify-content center
            align-items center
            font-size fs
            font-weight bold
            color #fff
            background-color #ea6aa2
            height 100%
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size fs - 0.0625rem 
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
                font-size fs - 0.0625rem
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
                font-size fs - 0.0313rem
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
                font-size fs - 0.0156rem
                color #fff
                text-align center
                background #fe9333             
</style>
