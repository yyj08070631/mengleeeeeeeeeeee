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
<<<<<<< HEAD
	}
=======
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
>>>>>>> 730a8298ad2a155cc58ec8d3a82e0df8855bc83d
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

		
</style>
			