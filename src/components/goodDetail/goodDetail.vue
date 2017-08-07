<template>
	<div class="collect-wrapper">
		<!--头部  -->
        <v-header></v-header>
		<!--图片轮播-->
		<swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
			<swiper-item class="swiper-demo-img" v-for="(item, index) in detailItemList.albumitem" :key="index">
				<img :src="item.src" width="100%" height="100%">
			</swiper-item>
		</swiper>
		<!--导航按钮-->
		<div class="detailNav">
			<router-link :to="{path:'/imageText',query:{gid:$route.query.gid}}">图文详情</router-link>
			<router-link :to="{path:'/goodsData',query:{gid:$route.query.gid}}">商品参数</router-link>
		</div>
		<!--粗分割线-->
		<div class="divider"></div>
		<!--评论详情-->
		<div class="comment">
			<div class="titleUp">
				<div class="colLeft">
					<a href="javascript:void(0)" class="rowUp">{{detailItemList.gooditem.name}}</a>
					<!---->
					<div class="rowDown">
						<p>￥{{detailItemList.gooditem.price}}</p>
						<p>已有 {{detailItemList.gooditem.sale}} 人购买</p>
					</div>
				</div>
				<div class="colRight" name="share" role="button">
					<img src="./images/share.png">
					<span>分享</span>
				</div>
			</div>
			<hr class="divider dividerThin">
			<div class="titleDown">
				<div class="colLeft">
					<p>|</p>
					<p>看看大伙怎么说</p>
				</div>
				<div class="colRight">
					共{{detailItemList.commentitem.count}}个评论
				</div>
			</div>
			<hr class="divider dividerThin">
			<div class="commentDetailContainer" v-for="(val,key) in detailItemList.commentitem.comment">
				<div class="commentDetail">
					<div class="colLeft">
						<img :src="val.headimg">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>{{val.username}}</p>
							<img :src="imgList[val.level]">
						</div>
						<div class="rowDown">
							{{val.content}}
						</div>
					</div>
				</div>
				<div class="divider dividerThin"></div>
			</div>
			<div class="commentDetailContainer" v-for="(item,key) in comMoreList">
				<div class="commentDetail">
					<div class="colLeft">
						<img :src="item.headimg">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>{{item.username}}</p>
							<img :src="imgList[item.level]">
						</div>
						<div class="rowDown">
							{{item.content}}
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="viewMore" v-show="detailItemList.commentitem.comment.length > 0">
				<span @click="addComMore">{{comNode}}</span>
			</div>
		</div>
		<!--超粗分割线-->
		<hr class="divider dividerBig">
		<!--继续拖动，查看图文详情-->
		<div class="dragToView">
			<img src="./images/arrow_up.png">
			<p>继续拖动，查看图文详情</p>
		</div>
		<!--脚部-->
		<footer class="myFooter">
			<a href="javascript:void(0)">
				<img src="./images/share.png">
				<p>分享</p>
			</a>
			<a href="javascript:void(0)">
				<img :src="detailItemList.iscolitems == 0 ? require('./images/collect.png') : require('./images/collect-active.png')" ref="menuItem" @click="changSrc()">
				<p>加入收藏</p>
			</a>
			<a href="javascript:void(0)" @click="showCartFn">加购物袋</a>
			<a href="javascript:void(0)" @click="showBuy = true">立即购买</a>
		</footer>
		<!-- 加入购物车弹窗 -->
		<div class="goodsCart-wrapper" v-show="showCart">
			<div class="addCart-container">
				<div class="goodsInfo">
					<div>
						<div class="img-wrapper">
							<img :src="detailItemList.albumitem[0].src">
						</div>
					</div>
					<div>
						<span>{{detailItemList.gooditem.name}}</span>
						<span>￥{{detailItemList.gooditem.price}}</span>
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
		<!-- 立即购买弹窗 -->
		<div class="goodsCart-wrapper" v-show="showBuy">
			<div class="addCart-container">
				<div class="goodsInfo">
					<div>
						<div class="img-wrapper">
							<img :src="detailItemList.albumitem[0].src">
						</div>
					</div>
					<div>
						<span>{{detailItemList.gooditem.name}}</span>
						<span>￥{{detailItemList.gooditem.price}}</span>
					</div>
					<div>
						<img src="./images/close.png" @click="showBuy = false">
					</div>
				</div>
				<div class="goodsNumber">
					<span>请选择数量</span>
					<div class="count">
						<div class="sub" @click="numBuy--">-</div>
						<input type="text" v-model="numBuy">
						<div class="plus" @click="numBuy++">+</div>
					</div>
				</div>
				<router-link :to="{ path: '/buyGoods', query: [{ gid: detailItemList.gooditem.id, number: numBuy }] }" class="dumpBtn buyNow">立即购买</router-link>
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
import header from '../../components/header/header';
import { Swiper, SwiperItem, Divider, Toast, Group } from 'vux'
export default {
	components: {
		Swiper,
		SwiperItem,
		Divider,
		Toast,
		Group,
		'v-header': header
	},
	data() {
		return {
			imgList: [//等级划分对应数组
				'err',
				require('./images/xiaobai.png'),
				require('./images/xingxing.png'),
				require('./images/zuanshi.png'),
				require('./images/jinguan.png'),
				require('./images/huangguan.png')
			],
			detailItemList: [],
			comNode: '查看更多评论',
			comMoreList: [],//查看更多评论数组
			para: 0,
			on: false,
			off: false,
			showCart: false,
			showBuy: false,
			number: 1,
			numBuy: 1,
			success: false,
			error: false
		}
	},
	methods: {
		//改变收藏按钮样式函数
		onIndexChange(index) {
			this.bannerIndex = index
		},
		//收藏按钮
		changSrc: function () {
			let file = require('./images/collect.png');
			let file2 = require('./images/collect-active.png');
			let obj = this.$refs.menuItem
			if (obj.src == file) {
				obj.src = file2
				this.on = true
			} else {
				obj.src = file
				this.off = true
			}
		},
		// 获取数据
		getDataFromBackend: function () {
			this.$http({
				method: 'get',
				url: global.Domain + '/Cate/detail?gid=' + this.$route.query.gid,
				emulateJSON: true
			}).then(function (response) {
				this.detailItemList = response.body
				console.log('--------------------'+this.$route.query.gid)
				console.log(this.detailItemList)
			})
		},
		// 获取更多评论
		getMomMore: function () {
			this.$http({
				method: 'get',
				url: global.Domain + '/Cate/commore?para=' + this.para + '&gid=' + this.$route.query.gid,
				emulateJSON: true
			}).then(function (response) {
				let moreComMore = response.body;
				if (moreComMore == 'err') {
					this.comNode = "没有更多评论了"
					this.para = this.para - 1
					return
				} else {
					this.comNode = "查看更多评论"
					moreComMore.commentitem.forEach((obj) => {
						this.comMoreList.push(obj)
					})
				}
			})
		},
		// 添加评论
		addComMore: function () {
			this.para++
			this.getMomMore()
		},
		//显示购物车
		showCartFn: function () {
			if (this.showCart == false) {
				this.showCart = true
			} else {
				this.showCart = false
			}
		},
		// 隐藏购物车
		closeCart: function () {
			this.showCart = false
		},
		// 数量++
		numPlus: function () {
			this.number++
		},
		// 数量--
		numSub: function () {
			if (this.number == 1) {
				this.number = 1
			} else {
				this.number--
			}
		},
		//添加到购物车
		addCartList: function(){
                this.$http.post(
					global.Domain + '/Order/addcart',
					{
						gid:this.detailItemList.gooditem.id,
						number:this.number
					},
					{
						emulateJSON:true
					}).then(response=>{
                    let data = response.body;
                    if(data === 1){
						this.success = true
					} else {
						this.error = true
					}
				})
			this.closeCart()
		},
	},
	mounted() {
		this.$nextTick(function () {
			this.getDataFromBackend()
		})
	},
	watch: {
		numBuy: function(val){
			if(this.numBuy < 1 || typeof(this.numBuy) != 'number'){
				this.numBuy = 1
			}
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../commom/stylus/mixin'

	width = 100%
	color = #fff
	// 外层元素
	.collect-wrapper
		position absolute
		top 1.4063rem
		left 0
		width 100%
		height 100%
		background #f0f0f0
		// 详情页header
		.header
			height 1.0938rem!important
			headerFlex()
		// 详情页导航
		.detailNav
			display flex
			justify-content center
			align-items center
			width width
			height 1.3438rem
			background color	
			a
				color #ea68a2
				width width
				height 100%
				display flex
				align-items center
				justify-content center
				border-left 0.0313rem solid #e0e0e0
				font-size 0.4063rem
			a:first-child
				border-left 0
		// 分割线
		.divider
			margin 0
			border-left 0
			border-right 0
			border-bottom 0
			border-top 0.3125rem solid #f0f0f0
			background color
		// 评论
		
		.comment
			padding-left 0.5rem
			background color
			.dividerThin
				border-width 0.0313rem
				border-color #e0e0e0
			.titleUp
				display flex
				justify-content space-between
				align-items center
				padding 0.5rem 0
				.colLeft
					.rowUp
						font-size 0.4063rem
						font-weight bold
						color: #333
					.rowDown
						margin-top 0.1563rem
						display flex
						p
							font-size 0.4063rem
							color: #ff0
						p:first-child
							color #ea68a2
						p:last-child
							margin-left 0.25rem
							color #333
				.colRight
					display flex
					flex-direction column
					width 2.0938rem
					justify-content center
					align-items center
					span
						display block
						font-size 0.3438rem
						margin-top 0.0938rem
						color #666
					img
						display block
			.titleDown
				height 1.1563rem
				display flex
				align-items center
				justify-content space-between
				.colLeft
					display flex
					align-items center
					p
						font-size 0.4063rem
						color #909090
						font-weight bold
					p:last-child
						margin-left 0.1563rem
				.colRight
					font-size 0.4063rem
					color #ea68a2
					margin-right 0.625rem
			.commentDetail
				display flex
				margin-top 0.3125rem
				margin-bottom 0.3438rem
				.colLeft
					margin-right 0.5938rem
					img
						border-radius: 50%
						width: 1.1719rem
						height: 1.1719rem
				.colRight
					margin-top 0.1563rem
					.rowUp
						display flex
						align-items center
						img
							display block
							width: 1.125rem 
							height: 0.375rem	
							margin-left 0.0938rem
						p
							font-size 0.4063rem
							color: #909090
					.rowDown
						font-size 0.4063rem
						margin-top 0.1875rem
						letter-spacing 0.0313rem
						line-height 0.5rem
						margin-right 0.625rem
						text-align justify
						color #333
			.viewMore
				color #ea68a2
				display flex
				justify-content center
				align-items center
				height 1.3438rem
				font-size 0.4063rem
				span
					display block
					margin-left 0.1563rem
		// 超粗分割线
		.dividerBig
			border-width 23px
		// 继续拖动，查看图文详情
		.dragToView
			display flex
			justify-content center
			align-items center
			height 1.5313rem
			img
				display block
				width 0.3438rem
				height 0.375rem
			p
				font-size 0.375rem
				margin-left 0.1563rem
		// 脚部
		.myFooter
			position fixed
			bottom 0
			right 0
			display flex
			align-items center
			justify-content flex-end
			height 1.1875rem
			width width
			background-color #f9f9f9
			border-top 1px solid #e0e0e0
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
					font-size 0.2813rem
					margin-top 0.0938rem
			>a:nth-child(3)
				display flex
				width 2.9375rem
				justify-content center
				align-items center
				font-size 0.4375rem
				font-weight bold
				color #fff
				background-color #f19fc2
				height 100%
			>a:nth-child(4)
				display flex
				width 3.1875rem
				justify-content center
				align-items center
				font-size 0.4375rem
				font-weight bold
				color #fff
				background-color #ea6aa2
				height 100%
		//弹窗		
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
				.buyNow
					background-color #ea6aa2 !important
</style>
