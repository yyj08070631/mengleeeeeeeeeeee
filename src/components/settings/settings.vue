<template>
  <div class="settings-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">个人设置</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="avatar-wrapper">
            <div class="filter"></div>         
            <div class="avatar"></div>
        </div>
  </div>
</template>
<script type="ecmascript-6">
export default{
    data: function(){
			return {
				isShow: false
			}
		}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    width = 100%
    .settings-wrapper
        width: 100%
        height: 100%
        background: #f6f6f6
        .header
            headerCss()
        .avatar-wrapper
            margin-top: 40px
            width: 100% 
            height: 210px
            filter: blur(5px)
            background: url(./avatar.png)no-repeat   
            background-size: cover
            overflow: hidden
            .filter
                width: 100%
                height: 100%
                background: -webkit-linear-gradient(rgba(0,0,0,0) 60%,rgba(255,255,255,0.3) 30%,rgba(255,255,255,1)); /* Safari 5.1 - 6.0 */

</style>