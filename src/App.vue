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
		},
		 mounted() {
		// if(this.$route.to != '/home'){
		// this.$refs.isShow.style.cssText="display: none"
		// }else{
		// this.$refs.isShow.style.cssText="display: block"	
		// }

    	}
	}
	</script>

	<style lang="stylus" rel="stylesheet/stylus">
 
			
	</style>
				