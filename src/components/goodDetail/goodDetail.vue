<template>
	<div class="goodDetail-wrapper">
		<!--头部-->
		<header class="header">
			<a href="javascript:history.back(1)" class="goBack">
				<img src="./images/arrow_left.png">
				<span>返回</span>
			</a>
			<div class="title">商品详情</div>
			<div class="search">
				<img class="searchImg" src="./images/search.png">
			</div>
		</header>
		<!--图片轮播-->
		<swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
			<swiper-item class="swiper-demo-img" v-for="(item, index) in bannerImg" :key="index">
				<img :src="item" width="100%" height="100%">
			</swiper-item>
		</swiper>
		<!--导航按钮-->
		<div class="detailNav">
			<a href="javascript:void(0)">图文详情</a>
			<a href="#imageText">商品参数</a>
		</div>
		<!--粗分割线-->
		<hr class="divider">
		<!--评论详情-->
		<div class="comment">
			<div class="titleUp">
				<div class="colLeft">
					<a href="#goodsData" class="rowUp">美悠斯 益生菌固体饮料 蔓越莓味 + 橙味</a>
					<div class="rowDown">
						<p>￥268.00</p>
						<p>已有 200 人购买</p>
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
					共172个评论
				</div>
			</div>
			<hr class="divider dividerThin">
			<div class="commentDetailContainer">
				<div class="commentDetail">
					<div class="colLeft">
						<img src="./images/avatar00.png">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>Duke</p>
							<img src="./images/huangguan.png">
						</div>
						<div class="rowDown">
							Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具. 在前端开发的过程中，一大部分的工作是写 HTML、CSS 代码。特别是手动编写 HTML 代码的时候，效率会特别低下，因为需要敲打很多尖括号，而且很多标签都需要闭合标签等。于是，就有了 Emmet，它可以极大的提高代码编写的效率，它提供了一种非常简练的语法规则，然后立刻生成对应的 HTML 结构或者 CSS 代码，同时还有多种实用的功能帮助进行前端开发。	
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="commentDetailContainer">
				<div class="commentDetail">
					<div class="colLeft">
						<img src="./images/avatar01.png">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>友善猪</p>
							<img src="./images/xiaobai.png">
						</div>
						<div class="rowDown">
							我就是这段时间用了就减掉了两斤肉肉。真的很高兴、看到这么多激励的评论，现在又有减肥的动力了。
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="commentDetailContainer">
				<div class="commentDetail">
					<div class="colLeft">
						<img src="./images/avatar02.png">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>A 欧阳飞刀</p>
							<img src="./images/xingxing.png">
						</div>
						<div class="rowDown">
							没有做任何的配合运动就瘦了那么多，真的是不知道高兴的说什么好了，对现在的身材已经非常满意了
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="commentDetailContainer">
				<div class="commentDetail">
					<div class="colLeft">
						<img src="./images/avatar03.png">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>陈海浪</p>
							<img src="./images/jinguan.png">
						</div>
						<div class="rowDown">
							现在用了快半个月了吧，效果很理想，已经瘦了3斤了，以前也减过很多次肥，有过运动有过节食，效果都不怎么样，都不太成功，这次受了那么多，还这么轻松的瘦下来，真的感觉好惊讶，不用那么痛苦的去减肥。
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="commentDetailContainer">
				<div class="commentDetail">
					<div class="colLeft">
						<img src="./images/avatar04.png">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>丹丹</p>
							<img src="./images/xiaobai.png">
						</div>
						<div class="rowDown">
							赞同~感觉有用~~
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="viewMore">
				<spinner :type="ios" slot="value"></spinner>
				<span>查看更多评价</span>
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
				<img src="./images/collect.png">
				<p>加入收藏</p>
			</a>
			<a href="javascript:void(0)">加购物袋</a>
			<a href="javascript:void(0)">立即购买</a>
		</footer>
	</div>
</template>
<script type="ecmascript-6">
import { Swiper, SwiperItem, Divider } from 'vux'
import { Icon } from 'vux'
import { Spinner } from 'vux'

const imgList = [
	'http://www.pptbz.com/d/file/p/201701/smallffd423a3ab9e735686ff2f099adfe309.jpg',
	'http://img1.gamedog.cn/2011/11/22/14-111122102315-50.jpg',
	'http://www.pptbz.com/d/file/p/201701/small70188852ba4be2e23b26ddb7b14df6f3.jpg'
]

export default {
	components: {
		Swiper,
		SwiperItem,
		Divider,
		Icon,
		Spinner
	},
	ready() {

	},
	methods: {
		onIndexChange(index) {
			this.bannerIndex = index
		},
	},
	data() {
		return {
			bannerImg: imgList,
			isShow: false//隐藏底部tab
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../commom/stylus/mixin'


	width = 100%
	color = #fff
	// 外层元素
	.goodDetail-wrapper
		position absolute
		top 1.25rem
		left 0
		width width
		background #fff
		// 详情页header
		.header
			border-bottom-1px(#e0e0e0)
			position fixed
			display flex
			top 0
			left 0
			justify-content space-between
			align-items center
			height 1.25rem
			width width
			background-color #f9f9f9
			z-index 1
			.goBack
				font-size 0.1563rem
				margin-left 0.5rem
				flex 1
				width width
				display flex
				align-items center
				span
					display block
					color #ea68a2
					margin-left 0.1563rem
					font-size 0.4063rem
				img
					display block
			.title
				font-size 0.4063rem
				font-weight 800
				flex 1
				width width
				text-align center
			.search
				margin-right 0.5rem
				flex 1
				width width
				text-align right
		// 详情页导航
		.detailNav
			display flex
			justify-content center
			align-items center
			width width
			height 1.3438rem
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
		// 评论
		.comment
			margin-left 0.5rem
			.dividerThin
				border-width 0.0313rem
				border-color #e0e0e0
			.titleUp
				display flex
				justify-content space-around
				align-items center
				margin 0.5rem 0
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
						p:first-child
							color #ea68a2
						p:last-child
							margin-left 0.25rem
							color #909090
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
				.colRight
					margin-top 0.1563rem
					.rowUp
						display flex
						align-items center
						img
							display block
							margin-left 0.0938rem
						p
							font-size 0.4063rem
					.rowDown
						font-size 0.4063rem
						margin-top 0.1875rem
						letter-spacing 0.0313rem
						line-height 0.5rem
						margin-right 0.625rem
						text-align justify
						color #909090
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
			margin-bottom 1.1875rem
			img
				display block
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
</style>