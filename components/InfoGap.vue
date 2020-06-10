<template>
	<div id="info-gap-grid" :data-group="this.info.group" :data-standardState="this.info.standardState" :data-occurrence="this.info.occurrence">
		<p class="grid-item number" v-text="this.info.number"></p>
		<p class="grid-item name" v-text="this.info.name"></p>
		<p class="grid-item symbol" v-text="this.info.symbol"></p>
		<p class="grid-item group" v-text="this.info.group"></p>
		<p class="grid-item appearance" v-if="this.info.appearance" v-text="this.info.appearance"></p>
		<p class="grid-item appearance" v-if="!this.info.appearance" v-text="this.info.wiki_appearance"></p>
		<p class="grid-item summary" v-text="summary"></p>
		<p class="grid-item atomic_mass" v-text="mass"></p>
		<a class="grid-item wiki" :href="this.info.source" target="_blank">Wikipedia</a>
		<div class="shells">
			<p class="shell" v-for="(shell, index) in this.info.shells" :key="index" v-text="shell"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: "InfoGapGrid",
	components: {},
	props: {info: {}},
	data() {return {}},
	methods: {},
	computed: {
		slug: function() {
			return this.info.name.toLowerCase()
		},
		mass: function() {
			return ((parseFloat(this.info.atomic_mass) * 100) / 100).toFixed(2)
		},
		summary: function() {
			let len = this.info.summary.length;
			if (len > 425) {
				let newSummary = this.info.summary.substring(0, 480);
				return `${newSummary}...`
			} else return this.info.summary
		},
		occurs: function() {
			if (this.info.occurence) {
				let first = this.info.occurence.substring(0, 1).toUpperCase();
				let rest = this.info.occurence.substring(1);
				return `${first}${rest}`
			}
		}
	}
}
</script>

<style lang="sass">
#info-gap-grid
	border-radius: 0.25rem
	display: grid
	overflow: hidden
	grid-template-columns: repeat(20, 1fr)
	grid-template-rows: repeat(7, 1fr)
	@include properties
	color: black
	transition: all 0.25s ease-in-out
	.grid-item
		padding: 0.25rem
		color: black
		@include flexCenter
		transition: all 0.25s ease-in-out
		justify-content: flex-start
	.number
		grid-row: 1/2
		grid-column: 1/4
	.symbol
		font-size: 2rem
		grid-row: 2/5
		grid-column: 1/4
		transition: all 0.25s ease-in-out
		@media (max-width: 25em)
			@include flexCenter
			font-size: 3rem
			grid-row: 2/6
			grid-column: 5/16
	.name
		grid-row: 1/2
		grid-column: 5/18
		@media (min-width: 38em)
			grid-column: 3/15
		@media (min-width: 75em)
			grid-column: 2/15
	.atomic_mass
		grid-row: 5/6
		grid-column: 1/4
		font-size: 0.9rem
	.group
		grid-row: 6/7
		grid-column: 1/19
		font-size: 0.8rem
	.summary, .appearance
		@include flexCenter
		text-indent: 0.5rem
		grid-row: 2/6
		grid-column: 5/20
		font-size: 0.66rem
		padding: 0 0.25rem
		transition: all 0.25s ease-in-out
		@media (max-width: 25em)
			display: none
		@media (min-width: 40em)
			grid-column: 4/20
		@media (min-width: 56em)
			grid-column: 3/20
		@media (min-width: 68.5em)
			font-size: 0.75rem
		@media (min-width: 87.5em)
			font-size: 1rem
	.summary
		@media (max-width: 60em)
			display: none
	.appearance
		@media (min-width: 60em)
			display: none
	.shells
		grid-row: 1/8
		font-size: 0.75rem
		grid-column: 19/21
		@media (min-width: 32em)
			grid-column: 20/21
		.shell
			color: black
			padding: 0.15rem
			text-align: center
	.page, .wiki
		@include flexCenter
		padding: 0.25rem
		text-decoration: none
		margin: 0.25rem
		border-radius: 0.25rem
		background: rgba(#444, 0.25)
		grid-row: 7/8
		font-size: 0.8rem
		transition: background 0.25s ease-in-out
		&:hover
			background: rgba(#444, 0.33)
	.page
		grid-column: 1/11
	.wiki
		grid-column: 15/21
</style>
