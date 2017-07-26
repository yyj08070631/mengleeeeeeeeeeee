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
			