<template>
	<div class="goodDetail-wrapper">
		<!--头部-->
		<header class="myhead">
			<div class="goBack">
				<img src="./images/arrow_left.png" height="16">
				<span>返回</span>
			</div>
			<div class="title">商品详情</div>
			<div class="search">
				<img class="searchImg" src="./images/search.png" width="16" height="16">
			</div>
		</header>
		<!--图片轮播-->
		<swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
			<swiper-item class="swiper-demo-img" v-for="(item, index) in bannerImg" :key="index">
				<img :src="item" width="100%">
			</swiper-item>
		</swiper>
		<!--导航按钮-->
		<div class="detailNav">
			<a href="javascript:void(0)">图文详情</a>
			<a href="javascript:void(0)">商品参数</a>
		</div>
		<!--粗分割线-->
		<hr class="divider">
		<!--评论详情-->
		<div class="comment">
			<div class="titleUp">
				<div class="colLeft">
					<div class="rowUp">美悠斯 益生菌固体饮料 蔓越莓味 + 橙味</div>
					<div class="rowDown">
						<p>￥268.00</p>
						<p>已有 200 人购买</p>
					</div>
				</div>
				<div class="colRight" name="share" role="button">
					<img src="./images/share.png" width="20">
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
						<img src="./images/avatar00.png" width="38">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>Duke</p>
							<img src="./images/huangguan.png" height="12">
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
						<img src="./images/avatar01.png" width="38">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>友善猪</p>
							<img src="./images/xiaobai.png" height="12">
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
						<img src="./images/avatar02.png" width="38">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>A 欧阳飞刀</p>
							<img src="./images/xingxing.png" height="12">
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
						<img src="./images/avatar03.png" width="38">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>陈海浪</p>
							<img src="./images/jinguan.png" height="12">
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
						<img src="./images/avatar04.png" width="38">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>丹丹</p>
							<img src="./images/xiaobai.png" height="12">
						</div>
						<div class="rowDown">
							赞同~感觉有用~~
						</div>
					</div>
				</div>
				<hr class="divider dividerThin">
			</div>
			<div class="viewMore">
				<spinner :type="bubbles" slot="value" size="15px"></spinner>
				<span>查看更多评价</span>
			</div>
		</div>
		<!--超粗分割线-->
		<hr class="divider dividerBig">
		<!--继续拖动，查看图文详情-->
		<div class="dragToView">
			<img src="./images/arrow_up.png" height="11">
			<p>继续拖动，查看图文详情</p>
		</div>
		<!--脚部-->
		<footer class="myFooter">
			<a href="javascript:void(0)">
				<img src="./images/share.png" height="16">
				<p>分享</p>
			</a>
			<a href="javascript:void(0)">
				<img src="./images/collect.png" height="16">
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
			bannerImg: imgList
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../commom/stylus/mixin'

	// 隐藏首页footer
	.menu-wrapper
		display none

	width = 100%
	color = #fff
	// 外层元素
	.goodDetail-wrapper
			position absolute
			top 2.5rem
			left 0
			width width
			background #fff
			// 详情页header
			.myhead
				position fixed
				display flex
				top 0
				left 0
				justify-content space-between
				align-items center
				height 2.5rem
				width width
				background-color #f9f9f9
				z-index 1
				.goBack
					font-size 0.3125rem
					margin-left 16px
					flex 1
					width width
					display flex
					align-items center
					span
						display block
						color #ea68a2
						margin-left 5px
						font-size 0.8125rem
					img
						display block
				.title
					font-size 0.8125rem
					font-weight 800
					flex 1
					width width
					text-align center
				.search
					margin-right 16px
					flex 1
					width width
					text-align right
			// 详情页导航
			.detailNav
				display flex
				justify-content center
				align-items center
				width width
				height 2.3125rem
				a
					color #ea68a2
					width width
					height 100%
					display flex
					align-items center
					justify-content center
					border 1px solid #f6f6f6
					border-right 0
					font-size 0.6875rem
				a:first-child
					border-left 0
			// 分割线
			.divider
				margin 0
				border-left 0
				border-right 0
				border-bottom 0
				border-top 10px solid #f6f6f6
			// 评论
			.comment
				margin-left 16px
				.dividerThin
					border-width 1px
				.titleUp
					display flex
					justify-content space-around
					align-items center
					margin 16px 0
					.colLeft
						.rowUp
							font-size 0.8125rem
							font-weight bold
						.rowDown
							margin-top 5px
							display flex
							p
								font-size 0.6875rem
							p:first-child
								color #ea68a2
							p:last-child
								margin-left 0.5rem
								color #909090
					.colRight
						display flex
						flex-direction column
						width 4.1875rem
						justify-content center
						align-items center
						span
							display block
							font-size 0.6875rem
							margin-top 3px
							color #666
						img
							display block
				.titleDown
					height 37px
					display flex
					align-items center
					justify-content space-between
					.colLeft
						display flex
						align-items center
						p
							font-size 0.8125rem
							color #909090
							font-weight bold
						p:last-child
							margin-left 5px
					.colRight
						font-size 0.625rem
						color #ea68a2
						margin-right 20px
				.commentDetail
					display flex
					margin-top 10px
					margin-bottom 11px
					.colLeft
						margin-right 19px
					.colRight
						margin-top 5px
						.rowUp
							display flex
							align-items center
							img
								display block
								margin-left 3px
							p
								font-size 0.8125rem
						.rowDown
							font-size 0.6875rem
							margin-top 6px
							letter-spacing 1px
							line-height 1rem
							margin-right 20px
							text-align justify
							color #909090
				.viewMore
					color #ea68a2
					display flex
					justify-content center
					align-items center
					height 37px
					font-size 0.6875rem
					span
						display block
						margin-left 5px
			// 超粗分割线
			.dividerBig
				border-width 23px
			// 继续拖动，查看图文详情
			.dragToView
				display flex
				justify-content center
				align-items center
				height 49px
				margin-bottom 38px
				img
					display block
				p
					font-size 11px
					margin-left 5px
			// 脚部
			.myFooter
				position fixed
				bottom 0
				right 0
				display flex
				align-items center
				justify-content flex-end
				height 38px
				width width
				background-color #f9f9f9
				border-top 1px solid #e0e0e0
				>a:nth-child(1)
				>a:nth-child(2)
					display flex
					justify-content center
					align-items center
					flex-direction column
					border-left 1px solid #e0e0e0
					flex 1
					height 100%
					p
						color #646464
						font-size 0.5625rem
						margin-top 3px
				>a:nth-child(3)
					display flex
					width 5.875rem
					justify-content center
					align-items center
					font-size 0.875rem
					font-weight bold
					color #fff
					background-color #f19fc2
					height 100%
				>a:nth-child(4)
					display flex
					width 6.375rem
					justify-content center
					align-items center
					font-size 0.875rem
					font-weight bold
					color #fff
					background-color #ea6aa2
					height 100%
</style>