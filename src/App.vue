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
div{
	width
}
</style>
			