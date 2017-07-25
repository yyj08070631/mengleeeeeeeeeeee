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
				<img src="./collect.png" height="32">
				<p>加入收藏</p>
			</a>
			<a href="javascript:void(0)">加购物袋</a>
			<a href="javascript:void(0)">立即购买</a>
		</footer>
    </div>
</template>
<script type="ecmascript-6">
export default {
  data(){
      return {
          imageTextList: [],
          tag: 0,
        }
    },
  methods: {
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
    .header
        headerCss()
    .content-wrapper
        margin: 0.625rem 0 0.5938rem 0.25rem
        overflow-x: hidden
        .content-item
            padding: 0.2031rem 0.25rem 0.2031rem 0
            border-bottom-1px(#e0e0e0)
            .title
                font-size: 0.2031rem
                line-height: 0.3125rem
                font-weight: bold
                color: #333
            .desc   
                font-size: 0.1719rem
                line-height: 0.3125rem
                color: #909090
            ul
                margin-left: 0.25rem
                li
                    list-style: disc 
                    font-size: 0.1719rem
                    line-height: 0.3125rem
                    color: #909090    
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
</style>
