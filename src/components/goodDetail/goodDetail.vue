<template>
	<div class="goodDetail-wrapper" ref="srcoll">
		<!--  v-infinite-scroll="loadDetail"  infinite-scroll-distance="10"-->
		<!-- 头部 -->
		<!-- <v-header></v-header> -->
		<!--图片轮播-->
		<div class="imgShow ifNoImg" v-if="detailItemList.albumitem.length == 0">该商品没有图片:-D</div>
		<img class="imgShow" :src="item.src" v-for="(item, index) in detailItemList.albumitem" v-else-if="detailItemList.albumitem.length == 1">
		<swiper :options="swiperOption" ref="mySwiper" v-else>
			<swiper-slide v-for="(item, index) in detailItemList.albumitem">
				<img :src="item.src" class="imgShow">
			</swiper-slide>
			<!-- 这是轮播的小圆点 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!--导航按钮-->
		<div class="detailNav" :style="detailItemList.albumitem.length == 1 ? borderTop : []">
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
					<div class="rowDown">
						<p>￥{{detailItemList.gooditem.price}}</p>
						<p>已有 {{detailItemList.gooditem.sale}} 人购买</p>
					</div>
				</div>
				<div class="colRight" name="share" role="button" @click="showShareTab = true">
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
			<div class="noComment" v-show="detailItemList.commentitem.comment.length == 0">还没有评论哦:-D</div>
			<div class="commentDetailContainer" v-for="(val,key) in detailItemList.commentitem.comment">
				<div class="commentDetail">
					<div class="colLeft">
						<img :src="val.headimg">
					</div>
					<div class="colRight">
						<div class="rowUp">
							<p>{{val.username}}</p>
							<img :src="val.levsrc">
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
							<img :src="item.levsrc">
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

		<div class="showImageText" v-if="imageTextList!=''" v-html="unescape(imageTextList.imageitem.content)"></div>
		<!--继续拖动，查看图文详情-->
		<!-- <div class="dragHelp" v-show="noDragToView"></div> -->
		<div class="dragToView" v-show="hideLoading" ref="moveTab">
			<!-- v-show="imageTextList == ''" -->
			<img src="./images/arrow_up.png">
			<p>继续拖动，查看图文详情</p>
		</div>
		<div class="dragToView" v-show="showLoading">
			<img src="./images/loading.gif">
			<p>拼命加载中...</p>
		</div>
		<!--脚部-->
		<footer class="myFooter">
			<router-link to="/home">
				<img src="./images/home.png">
				<p>返回首页</p>
			</router-link>
			<a href="javascript:void(0)">
				<img :src="detailItemList.iscolitems.pass == 0 ? require('./images/collect.png') : require('./images/collect-active.png')" ref="menuItem" @click="collectGood(detailItemList.gooditem.id, detailItemList.iscolitems.colid, detailItemList.iscolitems.pass)">
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
				<div @click="goodsToSession()" class="dumpBtn buyNow">立即购买</div>
				<!-- { path: '/buyGoods', query: [{ gid: detailItemList.gooditem.id, number: numBuy }] } -->
			</div>
		</div>
		<div>
			<toast v-model="on" type="text">收藏成功</toast>
		</div>
		<div>
			<toast v-model="off" type="text">已取消收藏</toast>
		</div>
		<div>
			<toast v-model="failedToCol" type="text">收藏失败</toast>
		</div>
		<div>
			<toast v-model="failedToCancCol" type="text">取消收藏失败</toast>
		</div>
		<div>
			<toast v-model="success" type="text">添加成功</toast>
		</div>
		<div>
			<toast v-model="error" type="text">添加失败</toast>
		</div>
		<alert v-model="showShareTab" title="分享">
			<button class="btn1" @click="onHide();todoShare()">确认分享</button>
			<button class="btn2" @click="onHide()">取消</button>
			<img :src="detailItemList.albumitem[0].src">
			<div class="share-cxt">
				<input type="text" placeholder="请输入标题" v-model="shareVal">
			</div>
		</alert>
	</div>
</template>
 <script type="ecmascript-6">
// import header from '../../components/header/header';
import { Swiper, SwiperItem, Divider, Toast, Group, Alert } from 'vux'
export default {
	components: {
		Toast,
		Group,
		Alert,
		// 'v-header': header
	},
	data() {
		return {
			showLoading: false,
			hideLoading: true,
			detailItemList: [],
			comNode: '查看更多评论',
			comMoreList: [],//查看更多评论数组
			para: 0,
			// 收藏相关
			on: false,
			off: false,
			failedToCol: false,
			failedToCancCol: false,
			showCart: false,
			showBuy: false,
			number: 1,
			numBuy: 1,
			success: false,
			error: false,
			showShareTab: false,
			windowUrl: location.href,
			shareVal: '',
			imageTextList: [],//图文详情信息
			swiperOption: {
				notNextTick: true,
				autoplay: 3000,
				loop: true,
				paginationType: "bullets",
				pagination: '.swiper-pagination',
				autoplayDisableOnInteraction: false,
				paginationBulletRender: function(swiper, index, className) {
					// console.log(swiper.bullets ? swiper.bullets.length : 0);
					let width = (isFinite(100 / (parseInt(swiper.bullets ? swiper.bullets.length : 0))) ? 100 / (parseInt(swiper.bullets ? swiper.bullets.length : 0)) : 100) + '%';
					// console.log(width);
					return '<span class="' + className + '"' + 'style="width:' + width + '"' + '></span>';
				}
			},
			noDragToView: true,
			// 若只有一张图片没有分页器则加一个上边框
			borderTop: { 'border-top': '1px solid #e0e0e0' }
		}
	},
	methods: {
		//改变收藏按钮样式函数
		onIndexChange(index) {
			this.bannerIndex = index
		},
		//收藏按钮
		collectGood: function(id, colid, iscol) {
			let file = require('./images/collect.png');
			let file2 = require('./images/collect-active.png');
			let obj = this.$refs.menuItem
			let col = (iscol == 1 ? 'colid=' + colid : 'gid=' + id) // colid or gid
			this.$http({
				method: 'get',
				url: global.Domain + '/order/iscol?iscol=' + (iscol == 1 ? 0 : 1) + '&' + col + '&type=1',
				emulateJSON: true
			}).then(function(response) {
				let res = response.body
				// console.log(res)
				if (res == 1) {
					if (iscol == 1) {
						this.failedToCancCol = false;
						this.failedToCol = false;
						this.on = false;
						this.off = false;
						this.off = true;
						obj.src = file
					} else {
						this.failedToCancCol = false;
						this.failedToCol = false;
						this.off = false;
						this.on = false;
						this.on = true;
						obj.src = file2
					}
					this.getDataFromBackend()
				} else {
					if (iscol == 1) {
						this.off = false;
						this.on = false;
						this.failedToCancCol = false;
						this.failedToCol = false;
						this.failedToCol = true
					} else {
						this.off = false;
						this.on = false;
						this.failedToCol = false;
						this.failedToCancCol = false;
						this.failedToCancCol = true
					}
				}
			})
		},
		// 获取数据
		getDataFromBackend: function() {
			this.$http({
				method: 'get',
				url: global.Domain + '/Cate/detail?gid=' + this.$route.query.gid,
				emulateJSON: true
			}).then(function(response) {
				let res = response.body;
				this.detailItemList = res;
				// console.log('--------------------'+this.$route.query.gid)
				// console.log(this.detailItemList)
				this.shareVal = res.gooditem.name;
			})
		},
		// 获取更多评论
		getMomMore: function() {
			this.$http({
				method: 'get',
				url: global.Domain + '/Cate/commore?para=' + this.para + '&gid=' + this.$route.query.gid,
				emulateJSON: true
			}).then(function(response) {
				let moreComMore = response.body;
				console.log(moreComMore);
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
		addComMore: function() {
			this.para++
			this.getMomMore()
		},
		//显示购物车
		showCartFn: function() {
			if (this.showCart == false) {
				this.showCart = true
			} else {
				this.showCart = false
			}
		},
		// 隐藏购物车
		closeCart: function() {
			this.showCart = false
		},
		// 数量++
		numPlus: function() {
			this.number++
		},
		// 数量--
		numSub: function() {
			if (this.number == 1) {
				this.number = 1
			} else {
				this.number--
			}
		},
		//添加到购物车
		addCartList: function() {
			this.$http.post(
				global.Domain + '/Order/addcart',
				{
					gid: this.detailItemList.gooditem.id,
					number: this.number
				},
				{
					emulateJSON: true
				}).then(response => {
					let data = response.body;
					if (data === 1) {
						this.success = true
					} else {
						this.error = true
					}
				})
			this.closeCart()
		},
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		scrollFun: function() {
			let it = this
			var i = 0; // 分页值，用于select记录时给limit赋值

			var containerHeight = window.innerHeight // 容器高度 + 容器top至文档top的距离
			//    (containerHeight)
			var distance = window.innerHeight + document.body.scrollTop; // 视口高度 + 滚动距离
			// console.log("这是scrollTop"+distance)
			// console.log(containerHeight)
			if (distance >= containerHeight - 100) {
				this.dragToView = true
				let startY = 0;
				let endY = 0;
				this.$refs.moveTab.addEventListener("touchstart", function(e) {
					e.preventDefault();
					startY = e.touches[0].pageY
					// console.log(startY+ "It is in here!")
				});
				this.$refs.moveTab.addEventListener("touchmove", function(e) {
					e.preventDefault();
					endY = e.touches[0].pageY
				});
				this.$refs.moveTab.addEventListener("touchend", function(e) {
					if (endY - startY < -200) {
						it.showLoading = true
						it.hideLoading = false
						setTimeout(function() {
							it.showImageDataList()
						}, 1000)

					} else {
						distance = distance - 200
					}
				});

			}
		},
		showImageDataList: function() {
			this.dragToView = false
			let it = this
			var containerHeight = window.innerHeight // 容器高度 + 容器top至文档top的距离
			//    (containerHeight)
			var distance = window.innerHeight + document.body.scrollTop; // 视口高度 + 滚动距离
			console.log("这是scrollTop" + distance)
			console.log(containerHeight)

			if (distance >= containerHeight) {
				it.getImageTextData()
				if (it.imageTextList != '') {
					containerHeight = containerHeight - 100
				}
			}
		},
		// 分享链接
		getShareFn: function() {
			// config 移到main.js去了
			const urlNow = document.location.href;// 当前url
			// const urlNow = encodeURIComponent(location.href.split('#')[0]);// 当前url
			console.log(urlNow);
			this.$http({
				method: 'get',
				url: global.Domain + '/Index/sign?url=' + urlNow,
				emulateJSON: true
			}).then(function(response) {
				let data = response.body
				this.$wechat.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
					appId: data.sdkitem.appId, // 必填，公众号的唯一标识
					timestamp: data.sdkitem.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.sdkitem.nonceStr, // 必填，生成签名的随机串data.sdkitem.nonceStr
					signature: data.sdkitem.signature,// 必填，签名，见附录1
					jsApiList: [
						"onMenuShareTimeline",
						"onMenuShareAppMessage"
					] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				this.$wechat.error(function(res) {
					console.log("error");
					console.log(res);
				});
				console.log("-----------------------------------");
				console.log(data)
			})
		},
		todoShare: function() {
			// this.getShareFn()
			// console.log("exe")
			let that = this.$wechat;
			this.$http({
				method: 'get',
				url: 'http://dde.dgxinn.cn/dream/index.php/Api/uid/g',
				emulateJSON: true
			}).then(function(response) {
				let res = response.body;
				// console.log(res);
				that.ready(() => {
					that.onMenuShareAppMessage({
						title: this.shareVal,
						desc: '',
						link: this.addURLParam(document.location.href, 'logo', res.logo),
						imgUrl: this.detailItemList.gooditem.mainmap,
						success: function(res) {
							// console.log(res)
						},
						cancel: function(res) {
							// console.log(res)
						}
					});
					that.onMenuShareTimeline({
						title: this.shareVal,
						link: this.addURLParam(document.location.href, 'logo', res.logo),
						imgUrl: this.detailItemList.gooditem.mainmap,
						success: function(res) {
							// console.log(res)
						},
						cancel: function(res) { 
							// console.log(res)
						}
					});
				});
			})
		},
		// 向现有的URL末尾添加查询字符串
		addURLParam: function(url, name, value) {
			// 检验请求URL中是否有 "?" ，若无则用 "?" 添加查询字符串，若有则用 "&" 进行拼接
			url += (url.indexOf("?") == -1 ? "?" : "&");
			// 将查询字符串转换为URL格式
			url += encodeURIComponent(name) + "=" + encodeURIComponent(name);
			return url;
		},
		//获取图文信息
		getImageTextData: function() {
			this.$http({
				method: 'get',
				url: global.Domain + '/Cate/image?gid=' + this.$route.query.gid,
				emulateJSON: true
			}).then(function(response) {
				this.imageTextList = response.body
				this.showLoading = false
				//console.log(this.imageTextList)                  
			})
		},
		// 在session中存入下单商品列表，然后跳转到下单页面
		goodsToSession: function() {
			sessionStorage.setItem('list', JSON.stringify([{ gid: this.detailItemList.gooditem.id, number: this.numBuy }]));
			// console.log(JSON.parse(sessionStorage.getItem('list')));
			this.$router.push({ path: '/buyGoods', query: { from: 'goodDetail' } });
		},
		onShow: function() {
			this.showShareTab = true
		},
		onHide: function() {
			this.showShareTab = false
		},
		clearText: function() {
			this.shareVal = "";
		},
		unescape: function(html) {
			return html
				.replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&quot;/g, "\"")
				.replace(/&#39;/g, "\'");
		},
	},
	mounted() {
		var it = this
		var fun = null//存储滚动函数
		this.$nextTick(function() {
			this.getDataFromBackend()

			window.addEventListener('scroll', function() {
				if (it.$route.path == '/goodDetail') {
					fun = it.scrollFun()
				} else {
					fun = null
				}
			})
		})
	},
	watch: {
		numBuy: function(val) {
			if (this.numBuy < 1 || typeof (this.numBuy) != 'number') {
				this.numBuy = 1
			}
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

// 外层元素
.goodDetail-wrapper
	position absolute
	left 0
	width 100%
	background #f0f0f0
	// 最后一个元素撑开footer
	.lastElem
		padding-bottom 1.2031rem !important
	// 轮播边界
	.imgShow
		width 100%
		height 10rem
	.ifNoImg
		display flex
		justify-content center
		align-items center
	// 分页器
	.swiper-pagination
		display flex
		width 9.5rem !important
		left 50% !important
		margin-left -5rem + 0.25rem !important
		bottom 0.0156rem !important
		background-color #e0e0e0
		.swiper-pagination-bullet
			margin 0 !important
			background-color rgba(255,255,255,0)
			border-radius 0
			height 0.0313rem !important 
		.swiper-pagination-bullet-active
			background rgba(0,0,0,0.7)
			height 0.0313rem !important
	// 详情页header
	.header
		height 1.0938rem!important
		headerFlex()
	.vux-slider
		margin-top 1.0938rem
	// 详情页导航
	.detailNav
		display flex
		justify-content center
		align-items center
		width 100%
		height 1.3438rem
		background #fff	
		a
			color #ea68a2
			width 100%
			height 100%
			display flex
			align-items center
			justify-content center
			border-left 1px solid #e0e0e0
			font-size fs + 0.0313rem
		a:first-child
			border-left 0
	// 分割线
	.divider
		margin 0
		border-left 0
		border-right 0
		border-bottom 0
		border-top 0.3125rem solid #f0f0f0
		background #fff
	// 评论
	.comment
		padding-left 0.5rem
		background #fff
		.dividerThin
			border-width 1px
			border-color #e0e0e0
		.titleUp
			display flex
			justify-content space-between
			align-items center
			padding 0.5rem 0
			.colLeft
				display flex
				flex-direction column
				justify-content center
				.rowUp
					font-size fs - 0.0313rem + 0.0938rem
					font-weight bold
					color: #333
				.rowDown
					margin-top 0.1563rem
					display flex
					p
						font-size fs - 0.0313rem + 0.0938rem
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
					font-size fs - 0.0625rem
					margin-top 0.0938rem
					color #666
				img
					display block
					width (fs - 0.0938rem) * 2
		.titleDown
			height 1.1563rem
			display flex
			align-items center
			justify-content space-between
			.colLeft
				display flex
				align-items center
				p
					font-size fs - 0.0313rem
					color #909090
					font-weight bold
				p:last-child
					margin-left 0.1563rem
			.colRight
				font-size fs - 0.0313rem
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
						height: fs - 0.0313rem + 0.0625rem
						margin-left 0.0938rem
					p
						font-size fs - 0.0313rem + 0.0625rem
						color: #333
				.rowDown
					font-size fs - 0.0313rem
					margin-top 0.1875rem
					line-height 0.5rem
					margin-right 0.625rem
					color #797878
		// 没有评论
		.noComment
			display flex
			align-items center
			justify-content center
			height 1.5313rem
			width 100%
			font-size fs - 0.0313rem
		.viewMore
			color #ea68a2
			display flex
			justify-content center
			align-items center
			height 1.3438rem
			font-size fs - 0.0313rem
			span
				display block
				margin-left 0.1563rem
	// 超粗分割线
	.dividerBig
		border-width 0.3594rem
	// 继续拖动，查看图文详情
	.dragHelp
		width 100%
		height 1.2031rem
		background-color #f0f0f0
	.dragToView
		display flex
		justify-content center
		align-items center
		height 1.5313rem
		margin-bottom 1.1875rem
		background-color #f0f0f0
		img
			display block
			width 0.3438rem
			height 0.375rem
		p
			font-size fs - 0.0625rem
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
		width 100%
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
				font-size fs - 0.1563rem + 0.1563rem
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
	//弹窗		
	.weui-toast  
		width auto!important 
		height 0.9375rem
		line-height 0.7813rem
		top 50%!important
		p
			padding 0.0625rem 0.3125rem 0 0.3125rem
			font-size fs - 0.0625rem
	.weui-dialog
		width 12.5rem!important
		min-width 80%
		background #fff
		border-radius 0.1875rem
		.weui-dialog__hd
			padding 0.3125rem 0 0 0 
			.weui-dialog__title
				font-size fs + 0.0625rem !important
		.weui-dialog__bd
			display flex
			justify-content center
			align-items center
			padding 0.425rem 0.3rem 0.9375rem 0.3rem
			font-size fs + 0.0625rem
			margin-bottom 0.5625rem
			img
				width 1.5625rem
				height 1.5625rem	
				vertical-align top
			.share-cxt
				margin-left 0.5rem
				text-align left
				input 
					padding 0.0625rem 0
					width 100%
					margin-bottom 0.2rem
					color #ea6aa2
					font-size 0.3125rem
					white-space: nowrap
					overflow: hidden
					text-overflow: ellipsis
					outline 0
				p
					color #909090	
					font-size 0.2813rem
					
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
			font-size fs + 0.0625rem
			outline 0
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
			font-size fs + 0.0625rem
			outline 0
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
						text-align center
						width 0.6875rem
					input 
						width 0.6875rem	
						font-size fs
						text-align center
						border-left 0.0313rem solid #d6d6d6
						border-right 0.0313rem solid #d6d6d6
			.dumpBtn
				display flex
				justify-content center
				align-items center
				width 10rem
				height 1.25rem
				font-size fs + 0.0469rem
				color #fff
				background #ea68a2
			.buyNow
				background-color #ea6aa2 !important
	.showImageText
		margin-bottom 0.9375rem	
		img
			width 100%
</style>
