<template>
	<div id="app">
		<!-- <my-loading v-if="ifLoading"></my-loading> -->
		<router-view></router-view>
	</div>
</template>

<script type="ecmascript-6"> 
import myLoading from './components/myLoading'
import { mapState } from 'vuex'

export default {
	created: function () {
<<<<<<< HEAD
		 if(test == 'http://localhost:8080/ ' || test ==  'localhost:8080/#' || test ==  'localhost:8080/#/' || 'http://192.168.0.123:8080/'){
			 	this.$router.push('home')
		 }	//  else if(window.history.length == 0){
		// 	 	alert("没有记录")
		//  }
		// if(window.history.length >= 1){
		// 	this.$router.push('home')
		// }
		
	},
	mounted() {

	},
=======
		if (test == 'http://localhost:8080/ ' || test == 'localhost:8080/#' || test == 'localhost:8080/#/' || 'http://192.168.0.123:8080/') {
			this.$router.push('home')
		}
	}
	// name: 'app',
>>>>>>> 8c6570977a1b2b4c1c764b527ec1b23528858b11
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
			