<template>
	<div class="goodDetail-wrapper">
		<!--头部-->
		<header class="myhead">
			<div class="goBack">&lt;&nbsp;返回</div>
			<div class="title">商品详情</div>
			<div class="search">
				<img class="search" src="./images/search.png" width="16" height="16">
			</div>
		</header>
		<!--图片轮播-->
		<swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
			<swiper-item class="swiper-demo-img" v-for="(item, index) in bannerImg" :key="index"><img :src="{item}"/>{{item}}</swiper-item>
		</swiper>
		<!--导航按钮-->
		<div class="detailNav">
			<p>图文详情</p>
			<p>商品参数</p>
		</div>
		<!--粗分割线-->
		<hr class="divider">
		<!--评论详情-->
		<div class="comment">
			<div class="titleUp">
				<div></div>
				<div></div>
			</div>
			<div class="titleDown"></div>
			<div class="commentDetail"></div>
			<div class="viewMore"></div>
		</div>
	</div>
</template>
<script type="ecmascript-6">
import { Swiper, SwiperItem, Divider } from 'vux'

const imgList = [
	'./images/banner_img.png',
	'./images/banner_img.png',
	'./images/banner_img.png'
]

export default {
	components: {
		Swiper,
		SwiperItem,
		Divider
	},
	ready () {

	},
	methods: {
		onIndexChange (index) {
			this.bannerIndex = index
		},
	},
	data () {
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
			position: absolute
			top: 2.5rem
			left: 0
			width: width
			background: #fff
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
				.goBack
					font-size 0.3125rem
					margin-left 16px
				.title
					font-size 0.8125rem
					font-weight 800
				.search
					margin-right 13px
			// 详情页导航
			.detailNav
				display flex
				justify-content center
				align-items center
				width width
				height 2.3125rem
				p
					color #ea68a2
					width width
					height 100%
					display flex
					align-items center
					justify-content center
					border 1px solid #f6f6f6
					border-right 0
				p:first-child
					border-left 0
			// 分割线
			.divider
				margin 0
				border-left 0
				border-right 0
				border-bottom 0
				border-top 10px solid #f6f6f6
</style>