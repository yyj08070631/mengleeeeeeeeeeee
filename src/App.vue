<template>
	<div id="app">
		<!-- <my-loading v-if="ifLoading"></my-loading> -->
		<router-view></router-view>
	</div>
</template>

<script type="ecmascript-6"> 
import myLoading from './components/myLoading'
//import { mapState } from 'vuex'

export default {
	created: function () {
		let test = window.location.href;
		if (test == 'http://localhost:8080/ ' || test == 'localhost:8080/#' || test == 'localhost:8080/#/' || 'http://192.168.0.123:8080/') {
			this.$router.push('home')
		}else{
			return
		}
	}
	// name: 'app',
	// components: {
	// 	myLoading
	// },
	// computed: {
	// 	...mapState({
	// 		ifloading: state => state.ifloading
	// 	})
	// }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

		
</style>
			