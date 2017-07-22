<template>
	<div id="app">			
		<router-view></router-view>
	</div>
</template>

<script type="ecmascript-6"> 

export default {
	data: function(){
	},	
	created: function(){
		this.$router.push('home')
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

		
</style>
			