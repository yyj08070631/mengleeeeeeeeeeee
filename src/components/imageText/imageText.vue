<template>
    <div class="goodsData-wrapper">
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">图文详情</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div>
        <div class="activity-wrapper">
                <div class="activity-title" v-html="unescape(imageTextList.imageitem.content)">
                    <!-- {{ | unescape}} -->
                </div>
        </div>
        <footer class="myFooter">
			<a href="javascript:void(0)">
				<img src="./share.png" height="32">
				<p>分享</p>
			</a>
			<a href="javascript:void(0)">
				<img src="./collect.png"ref="menuItem" @click="changSrc()">
				<p>加入收藏</p>
			</a>
			<router-link to="/cart">加购物袋</router-link>
			<router-link to="/buyGoods">立即购买</router-link>
		</footer>
        <div>
            <toast v-model="on" type="text">收藏成功</toast>
        </div>
        <div>
            <toast v-model="off" type="text">已取消收藏</toast>
        </div>
    </div>
</template>
 <script type="ecmascript-6">
 import { Toast, Group } from 'vux'
export default {
  data(){
      return {
          imageTextList: [],
          tag: 0,
          on: false,
          off: false
        }
    },
    components: {
        Toast,
        Group
    },
  methods: {
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
        getImageTextData: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Cate/image?gid='+this.$route.query.gid,
                emulateJSON: true
            }).then(function (response) {
                this.imageTextList = response.body                  
            })
        },
        unescape : function (html) {
            return html
            .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#39;/g, "\'");
        } 
    },
    mounted(){
        this.$nextTick(function(){
            this.getImageTextData()
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.goodsData-wrapper 
    width =  100%
    height = 100%
    padding: 1.0938rem 0 1.25rem 0
    .header
        headerCss()
    .content-wrapper
        img
            width: 100%
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
        border-top 0.0156rem solid #e0e0e0
        >a:nth-child(1)
        >a:nth-child(2)
            display flex
            justify-content center
            align-items center
            flex-direction column
            border-left 0.0156rem solid #e0e0e0
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
    .weui-toast  
        width auto!important 
        height 0.9375rem
        line-height 0.7813rem
        top 50%!important
        p
            padding 0.0625rem 0.3125rem 0 0.3125rem
            font-size 0.375rem 	
</style>
