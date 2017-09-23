<template>
	<div class="menu-tag">
		<div class="tag-list">
			<router-link to="/home" :style="$route.path == '/home' ? iconTxtActive : []">
				<div class="bg-container" :style="iconHome"></div>
				{{iconHomeTxt}}
			</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/goods" :style="$route.path == '/goods' ? iconTxtActive : []">
				<div class="bg-container" :style="iconGoods"></div>
				{{iconGoodsTxt}}
			</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/myCenter" :style="$route.path == '/myCenter' ? iconTxtActive : []">
				<div class="bg-container" :style="iconMyCenter"></div>
				{{iconMyCenterTxt}}
			</router-link>
		</div>
		<div class="tag-list">
			<router-link to="/cart" :style="$route.path == '/cart' ? iconTxtActive : []">
				<div class="bg-container" :style="iconCart"></div>
				{{iconCartTxt}}
			</router-link>
		</div>
	</div>
</template>
<script type="ecmascript-6">
export default {
	components: {
        // 'v-header': header
    },
    data() {
        return {
			data: [],
			// 四个图标的样式
			iconHome: [],
			iconGoods: [],
			iconMyCenter: [],
			iconCart: [],
			// 四个文字的内容
			iconHomeTxt: '',
			iconGoodsTxt: '',
			iconMyCenterTxt: '',
			iconCartTxt: '',
			// 活跃的图标文字颜色
			iconTxtActive: {'color': '#ea68a2'}
        }
    },
    created() {
        this.getDataFromBackend()
    },
    methods: {
        getDataFromBackend: function () {
			let nav = sessionStorage.nav;
			let timeNow = (new Date()).getTime();
			if(nav && (timeNow - nav.stamp < 600000)){
				nav = JSON.parse(nav);
				// 判断路由来决定显示图片
				this.iconHome = {
					'background-image': this.$route.path == '/home' ? `url(${nav.foot[0].on})` : `url(${nav.foot[0].over})`,
					'background-size': '0.625rem 0.625rem',
					'opacity': '.95'
				};
				this.iconGoods = {
					'background-image': this.$route.path == '/goods' ? `url(${nav.foot[1].on})` : `url(${nav.foot[1].over})`,
					'background-size': '0.625rem 0.625rem',
					'opacity': '.95'
				};
				this.iconMyCenter = {
					'background-image': this.$route.path == '/myCenter' ? `url(${nav.foot[2].on})` : `url(${nav.foot[2].over})`,
					'background-size': '0.625rem 0.625rem',
					'opacity': '.95'
				};
				this.iconCart = {
					'background-image': this.$route.path == '/cart' ? `url(${nav.foot[3].on})` : `url(${nav.foot[3].over})`,
					'background-size': '0.625rem 0.625rem',
					'opacity': '.95'
				};
				// 修改显示文字
				this.iconHomeTxt = nav.foot[0].title;
				this.iconGoodsTxt = nav.foot[1].title;
				this.iconMyCenterTxt = nav.foot[2].title;
				this.iconCartTxt = nav.foot[3].title;
			} else {
				this.$http.post(
					'http://go.zs-mmall.com/dream/index.php/Api/nav',
					{
						
					},
					{
						emulateJSON: true
					}).then(response => {
						let res = response.body;
						console.log(res);
						this.data = res;
						// 缓存footer的信息（与时间戳）
						sessionStorage.nav = JSON.stringify({
							foot: res,
							stamp: (new Date()).getTime()
						});
						// 判断路由来决定显示图片
						this.iconHome = {
							'background-image': this.$route.path == '/home' ? `url(${res[0].on})` : `url(${res[0].over})`,
							'background-size': '0.625rem 0.625rem',
							'opacity': '.95'
						};
						this.iconGoods = {
							'background-image': this.$route.path == '/goods' ? `url(${res[1].on})` : `url(${res[1].over})`,
							'background-size': '0.625rem 0.625rem',
							'opacity': '.95'
						};
						this.iconMyCenter = {
							'background-image': this.$route.path == '/myCenter' ? `url(${res[2].on})` : `url(${res[2].over})`,
							'background-size': '0.625rem 0.625rem',
							'opacity': '.95'
						};
						this.iconCart = {
							'background-image': this.$route.path == '/cart' ? `url(${res[3].on})` : `url(${res[3].over})`,
							'background-size': '0.625rem 0.625rem',
							'opacity': '.95'
						};
						// 修改显示文字
						this.iconHomeTxt = res[0].title;
						this.iconGoodsTxt = res[1].title;
						this.iconMyCenterTxt = res[2].title;
						this.iconCartTxt = res[3].title;
					})
			}
				
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.menu-tag
	display flex
	width: 100%
	height: 1.3438rem
	font-size: 0
	border-top 1px solid #e0e0e0
	background rgba(255, 255, 255, .95)
	footerCss()
	.tag-list
		flex: 1
		font-size: fs - 0.0938rem
		text-align: center
		.bg-container
			margin: 0.1563rem auto 0.1563rem auto
			width: 0.625rem
			height: 0.625rem
		a
			display inline-block
			color rgba(0, 0, 0, .6)
</style>
