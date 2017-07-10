<template>
    <div class="integral-wrapper">
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
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .integral-wrapper
        margin-top: 40px
        width: 100%
        height: 100%
        .header
            headerCss()
    
</style>

