	<template>
		<div id="app">
			<div class="menu-wrapper" v-if="isShow">
				<div class="menu-tag border-top-1px"> 
					<div class="tag-list">
						<router-link to="/home" active-class="home-link--Active"><div class="home"></div>美丽探索</router-link>
					</div>
					<div class="tag-list">
						<router-link to="/goods" active-class="goods-link--Active"><div class="goods"></div>商品分类</router-link>
					</div>
					<div class="tag-list">
						<router-link to="/myCenter" active-class="myCenter-link--Active"><div class="myCenter"></div>个人中心</router-link>
					</div>
					<div class="tag-list">
						<router-link to="/orderFrom" active-class="orderFrom-link--Active"><div class="orderFrom"></div>查看订单</router-link>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</template>

	<script type="ecmascript-6"> 
	import myCenter from './components/myCenter/myCenter';
	export default {
		data: function(){
			return {
				isShow: true
			}
		},
		components: {
			myCenter
		},
		created: function(){
			this.$router.push('home')
		}
	}
	</script>

	<style lang="stylus" rel="stylesheet/stylus">
	@import './commom/stylus/mixin'
	active-color = #ea68a2 
	.menu-wrapper
		position: fixed
		left: 0
		bottom:0
		width: 100%
		z-index: 450
		.menu-tag
			display: flex
			width: 100%
			height: 1.3438rem
			font-size: 0
			border-top-1px(#e5e5e5)
			background: rgba(255,255,255,0.95)
		.tag-list
			display flex
			justify-content center
			align-items center
			flex: 1
			getFontsize(20)
			text-align: center
			.home-link--Active
				color: active-color
				.home
					bg-change(home)
			.myCenter-link--Active
				color: active-color
				.myCenter
					bg-change(myCenter)
			.goods-link--Active
				color: active-color
				.goods
					bg-change(goods)
			.orderFrom-link--Active
				color: active-color
				.orderFrom
					bg-change(orderFrom)             
		.home,.goods,.myCenter,.orderFrom      
			margin: 0 auto 0.0313rem auto
			width: 0.6875rem
			height: 0.6875rem
			background: #909090
		.home
			background:url('../resource/home.png')
		.goods
			background:url('../resource/goods.png')
		.myCenter
			background:url('../resource/myCenter.png')
		.orderFrom 
			background:url('../resource/orderFrom.png')
		.home,.goods,.myCenter,.orderFrom     
			background-size 0.6875rem
		a
			display: inline-block 
			
	</style>
				