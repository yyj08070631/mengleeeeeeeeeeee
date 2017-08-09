<template>
	<div class="menu-tag border-top-1px">
		<div class="tag-list">
			<router-link to="/home" active-class="home-link--Active">
				<div class="home"></div>美丽探索</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/goods" active-class="goods-link--Active" :class="{'goods-link--Active':$route.path=='/nearbyStores' || $route.path=='/digest' || $route.path=='/goodsClassify'}">
				<div class="goods"></div>商品分类</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/myCenter" active-class="myCenter-link--Active" :class="{'myCenter-link--Active':$route.path=='/subscribe'|| $route.path=='/subscribeNow'}">
				<div class="myCenter"></div>个人中心</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/orderFrom" active-class="orderFrom-link--Active">
				<div class="orderFrom"></div>查看订单</router-link>
		</div>
	</div>
</template>
<script type="ecmascript-6">
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
	active-color = #ea68a2 
		.menu-tag
			display: flex
			width: 100%
			height: 1.3438rem
			font-size: 0
			border-top-1px(#e5e5e5)
			background: rgba(255,255,255,0.95)
		.tag-list
			flex: 1
			font-size: 0.25rem
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
			margin: 0.1563rem auto 0.1563rem auto
			width: 0.625rem
			height: 0.625rem
			background: #909090
		.home
			background:url('./home.png')       
		.goods
			background:url('./goods.png')
		.myCenter
			background:url('./myCenter.png')
		.orderFrom 
			background:url('./orderFrom.png')
		.home,.goods,.myCenter,.orderFrom     
			background-size: 0.625rem 0.625rem
		a
			display: inline-block

</style>

