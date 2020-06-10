<template>
	<div id="table">
		<InfoGap :info="singleInfo" />
		<Element @element-hovered="showElement" @element-clicked="showSingle" v-for="(element, index) in elements" :key="index" :info="element" :temperature="temperature" />
		<div class="spacer one">57-71</div>
		<div class="spacer two">89-103</div>
	</div>
</template>

<script>
import elements from '@/assets/data'
import Element from '@/components/Element'
import InfoGap from '@/components/InfoGap'
export default {
	name: "Table",
	components: {Element, InfoGap},
	props: {info: {}},
	data() {
		return {
			elements,
			val: 50,
			temperature: 0,
			paused: false,
			lastElementClicked: 0,
			singleInfo: elements[0]
		}
	},
	methods: {
		showElement: function(e) {
			if (!this.paused) {
				this.singleInfo = e
			}
		},
		showSingle: function(e) {
			this.singleInfo = e;
			let currentElement = e.number;
			if (currentElement == this.lastElementClicked) {
				this.paused = false;
			} else {
				this.paused = true;
			}
			this.lastElementClicked = e.number;
		}
	},
	computed: {},
	watch: {
		val: function() {
			console.log(this.val)
		}
	}
}
</script>

<style lang="sass">
#table
	max-width: 100%
	display: grid
	margin: 0 auto
	border-radius: 0.25rem
	grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr 2fr 2fr
	grid-template-columns: repeat(18, 1fr)
	transition: all 0.25s ease-in-out
	background: var(--gray-three)
	@media (min-width: 56em)
		padding: 0.5rem
		margin: 0.25rem
	#info-gap
		@include flexCenter
		border-radius: 0.25rem
		border: 0.1rem solid rgba(white, 0.5)
		grid-column: 3/13
		grid-row: 1/4
		@media (min-width: 27em)
			margin: 0.25rem
	#info-gap-grid
		grid-column: 3/13
		grid-row: 1/4
		@media (min-width: 27em)
			margin: 0.25rem
	.spacer
		@include flexCenter
		grid-column: 3
		text-align: center
		font-size: 0.75rem
		&.one
			grid-row-start: 6
		&.two
			grid-row-start: 7
</style>
