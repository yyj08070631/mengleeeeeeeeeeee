<template>
	<div id="app">
		<my-loading v-show="isLoading"></my-loading>  
		<router-view></router-view>
	</div>
</template>

<script type="ecmascript-6"> 
import myLoading from './components/myLoading'
import { mapState } from 'vuex'

export default {
	created: function () {
		let test = window.location.href;
		if (test == 'http://localhost:8080/ ' || test == 'localhost:8080/#' || test == 'localhost:8080/#/' || test == 'http://192.168.0.123:8080/' || test == 'http://localhost:8080/#/orderFrom/home') {
			this.$router.push('home')
		} else {
			return
		}
	},
	components: {
		myLoading
	},
	computed: {
		...mapState({
			isLoading: state => (state.isLoading)
		})
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

		
</style>
			