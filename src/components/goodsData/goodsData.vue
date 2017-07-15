<template>
    <div class="goodsData-wrapper">
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">产品参数</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="content-item">
                <h2 class="title">美悠斯 益生菌固体饮料</h2>
                <p class="desc">2种益生菌+100亿个活性益生菌，超级活菌来自全球领先的益生菌生产商杜邦-丹尼斯克。</p>
            </div>
            <div class="content-item">
                <h2 class="title">美悠斯 益生菌固体饮料（蔓越莓味）</h2>
                <h2 class="title">营养成分表</h2>
                <ul>
                    <li>能量，每100克1801千焦，NRV21%；</li>
                    <li>蛋白质，每100克2.4克，NRV4%；</li>
                    <li>脂肪，每100克0克，NRV0%；</li>
                    <li>碳水化合物，每100克75.9克，NRV25%；</li>
                    <li>膳食纤维，每100克58.3克，NRV233%；</li>
                    <li>钠，每100克72毫克，NRV4%。</li>
                </ul>
            </div>
            <div class="content-item">
                <h2 class="title">配料表</h2>
                <p class="desc">菊粉、乳糖醇、低聚果糖、蔓越莓水果粉、嗜酸乳杆菌、乳双歧杆菌、硅酸钙。</p>
            </div>
            <div class="content-item">
                <h2 class="title">美悠斯 益生菌固体饮料（橙味）</h2>
                <h2 class="title">营养成分表</h2>
                <ul>
                    <li>能量，每100克1801千焦，NRV21%；</li>
                    <li>蛋白质，每100克2.4克，NRV4%；</li>
                    <li>脂肪，每100克0克，NRV0%；</li>
                    <li>碳水化合物，每100克75.9克，NRV25%；</li>
                    <li>膳食纤维，每100克58.3克，NRV233%；</li>
                    <li>钠，每100克72毫克，NRV4%。</li>
                </ul>
            </div>
            <div class="content-item">
                <h2 class="title">配料表</h2>
                <p class="desc">菊粉、乳糖醇、低聚果糖、蔓越莓水果粉、嗜酸乳杆菌、乳双歧杆菌、硅酸钙。</p>
            </div>
            <div class="content-item">
                <h2 class="title">注意事项</h2>
                <ul>
                    <li>本品不能代替药物；</li>
                    <li>存放于儿童不易接触到的地方；</li>
                    <li>不能与抗生素同时服用，如正服用了抗生素类药物，请与益生菌间隔2个小时以上再服用；</li>
                    <li>开封后请尽快食用完。</li>
                </ul>
            </div>
            <div class="content-item">
                <h2 class="title">食用方法</h2>
                <ul>
                    <li>每天早上（蔓越莓味）一次，每次2g，每条食用不少于100ml于37℃以下温水或牛奶冲调；</li>
                    <li>每天晚上（橙味）一次，每次2g，每条食用不少于100ml于37℃以下温水或牛奶冲调。</li>
                </ul>
            </div>
             <div class="content-item">
                <h2 class="title">储存方法</h2>
                <p class="desc">室内阴凉、干燥、避光处保存，冷藏更佳。</p>
            </div>
            <div class="content-item">
                <h2 class="title">生产信息</h2>
                <ul>
                    <li>委托单位：广州掌商网络科技有限公司</li>
                    <li>地址：广州市天河区中山大道中得悦街2、4、6、8号
201房之A80房</li>
                    <li>联系电话：400-0049129</li>
                    <li>开封后请尽快食用完。</li>
                    <li>被委托单位：杜邦营养食品配料（北京）有限公司</li>
                    <li>地址：北京市怀柔区雁栖经济开发区雁栖大街28号</li>
                    <li>联系电话：010-69639155</li>
                    <li>产地：北京市怀柔区</li>
                    <li>食品生产许可证：SC10611160411487</li>
                    <li>菌株专利号：US6653062</li>
                    <li>产品标准代号：Q/HRLRG0001</li>
                    <li>生产日期：见标示；保质期：18个月</li>
                </ul>
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
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.menu-wrapper
    display: none    
.goodsData-wrapper 
    width =  100%
    height = 100%
    .header
        headerCss()
    .content-wrapper
        margin: 1.25rem 0 1.1875rem 0.5rem
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
                margin-left: 0.3125rem
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
        border-top 0.0313rem solid #e0e0e0
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
