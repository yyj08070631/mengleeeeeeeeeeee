<template>
	<div class="goodDetail-wrapper">
		<!--头部-->
		<div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./images/arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">商品详情</h1>
                <a href="#search"><img class="search" src="./images/search.png"/></a>
            </div>
        </div>
		<!--图片轮播-->
		  <swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
			   <swiper-item class="swiper-demo-img" v-for="(item, index) in detailItemList.albumitem" :key="index">
				<img :src="item.src" width="100%" height="100%">
			</swiper-item>   
		</swiper>  
		<!--导航按钮-->
		<div class="detailNav">
			<a href="#imageText">图文详情</a>
			<a href="#goodsData">商品参数</a>
		</div>
		<!--粗分割线-->
		<hr class="divider">
		<!--评论详情-->
		<div class="comment">
			<div class="titleUp">
				<div class="colLeft">
					<a href="javascript:void(0)" class="rowUp">{{detailItemList.gooditem[0].name}}</a><!---->
					<div class="rowDown">
						<p>￥{{detailItemList.gooditem[0].price}}</p>
						<p>已有 {{detailItemList.gooditem[0].sale}} 人购买</p>
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
				<hr class="divider dividerThin">
			</div>
			<div class="viewMore">
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
				<img src="./images/collect.png" ref="menuItem" @click="changSrc()">
				<p>加入收藏</p>
			</a>
			<router-link to="/cart">加购物袋</router-link>
			<router-link to="/buyGoods">立即购买</router-link>
		</footer>
	</div>
</template>
<script type="ecmascript-6">
import { Swiper, SwiperItem, Divider } from 'vux'
export default {
	components: {
		Swiper,
		SwiperItem,
		Divider,
	},
	data() {
		return {
			imgList: [
				'',
				require('./images/xiaobai.png'),
				require('./images/xingxing.png'),
				require('./images/zuanshi.png'),
				require('./images/jinguan.png'),
				require('./images/huangguan.png')
					],
			detailItemList: []
		}	
	},
	methods: {
		onIndexChange(index) {
			this.bannerIndex = index
		},
		changSrc: function(){
            let file = require('./images/collect.png');
            let file2 = require('./images/collect-active.png');
            let obj = this.$refs.menuItem
            if(obj.src == file){
                obj.src = file2
                setTimeout(function(){
                    alert('收藏成功')
                },1000)
            }else{
                obj.src = file
                setTimeout(function(){
                    alert('已取消收藏')
                 },1000)
				 }
		},		 
		
		getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Cate/detail?gid='+this.$route.query.gid,
                emulateJSON: true
            }).then(function (response) {
                this.detailItemList = response.body
				console.log(this.detailItemList)
            })
        }
	
	
	},
	mounted(){
		this.$nextTick(function(){
			this.getDataFromBackend()
		})
	},
	
	
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../commom/stylus/mixin'


	width = 100%
	color = #fff
	// 外层元素
	.goodDetail-wrapper
		position absolute
		top 1.0938rem
		left 0
		width width
		background #fff
		// 详情页header
		.header
			headerCss()
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
						img
							width: 1.125rem !important
							height: 0.375rem !important
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