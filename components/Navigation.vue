<template>
	<div id="navigation" @click="toggleTheme">
		Nav
	</div>
</template>

<script>
export default {
	name: 'Navigation',
	methods: {
		toggleTheme: function() {
			this.$emit("toggle-theme")
		}
	}
}
</script>

<style lang="sass">
#navigation
	border: 1px solid blue
</style>
