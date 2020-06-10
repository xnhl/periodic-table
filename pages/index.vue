<template>
	<div id="wrapper">
		<div id="table-wrapper">
			<div id="main-title">
				<p class="title-section small">The</p>
				<p class="title-section">Periodic Table</p>
				<p class="title-section small">of the</p>
				<p class="title-section">Elements</p>
			</div>
			<Key />
			<Table />
		</div>
	</div>
</template>

<script>
import Table from '@/components/Table'
import Key from '@/components/Key'
export default {
	components: {Table, Key},
	props: {info: {}},
	data() {return {}},
	methods: {},
	computed: {}
}
</script>

<style lang="sass">
#wrapper
	@include pageWrapper
	@include flexCenter
	flex-direction: column
	justify-content: flex-start
	position: absolute
	#table-wrapper
		#main-title
			@include flexCenter
			align-items: baseline
			margin: 0 auto
			padding: 1rem
			margin: 0.25rem
			border-radius: 0.25rem
			background: var(--gray-three)
			.title-section
				line-height: 1.25rem
				text-align: center
				margin: 0 0.5rem
				font-size: 1.5rem
				&.small
					font-size: 1.025rem
</style>
