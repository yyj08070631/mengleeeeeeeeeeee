<template>
	<div id="app">
		<!-- <loading v-model="isLoading"></loading> -->
		<router-view></router-view>
	</div>
</template>

<script type="ecmascript-6"> 
import { Loading } from 'vux'
import { mapState } from 'vuex'

export default {
	data: function () {
	},
	created: function () {
		this.$router.push('home')
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
			