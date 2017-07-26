<template>
	<div id="app">
		<!-- <loading v-model="isLoading"></loading> -->
		<router-view ></router-view>
	</div>
</template>

<script type="ecmascript-6"> 
// import { Loading } from 'vux'
// import { mapState } from 'vuex'
var test = window.location.href;
//alert(test);
export default {
	data: function () {
	},
	created: function () {
		 if(test == 'http://localhost:8080/'){
			 	this.$router.push('home')
		 }
		// if(!this.route.path){
		// 	this.$router.push('home')
		// }else{
		// 	return
		// }
		//this.$router.push('home')
	},
	mounted() {

	},
	// components: {
	// 	Loading
	// },
	// computed: {
	// 	...mapState({
	// 		isLoading: state => state.vux.isLoading
	// 	})
	// }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

		
</style>
			