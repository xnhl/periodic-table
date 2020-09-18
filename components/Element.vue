<template>
	<div class="element" @click="showOne" @mouseover="showInfo" :data-number="this.info.number" :data-group="this.info.group" :data-standardState="this.info.standardState" :data-occurrence="this.info.occurrence">
		<div class="element-main-info">
			<p class="element-number info" v-text="this.info.number"></p>
			<p class="element-symbol info" v-text="this.info.symbol"></p>
			<p class="element-name info" v-text="this.info.name"></p>
			<p class="element-mass info" v-text="this.info.atomic_mass"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Element",
	components: {},
	props: {
		info: {}, 
		mini: false, 
		temperature: 0 // celsuis STP
	},
	data() {return {count: 0}},
	methods: {
		showInfo: function(e) {
			const { number, name, symbol, phase, group, standardState, occurrence, appearance, source, summary, atomic_mass, shells } = this.info
			const wiki_appearance = this.info.wiki_info.info.appearance
			let newObj = {
				number, 
				name,
				symbol,
				phase,
				group,
				standardState,
				occurrence,
				appearance,
				wiki_appearance,
				source,
				summary,
				atomic_mass,
				shells
			}
			this.$emit("element-hovered", newObj)
		},
		showOne: function(e) {
			let elements = [...document.getElementsByClassName("element")]
			let alreadySelected = e.target.closest(".element").classList.contains("active") ? true : false
			elements.forEach(element => element.classList.remove("active"))
			if (!alreadySelected) {
				e.target.closest(".element").classList.add("active")
			}
			elements.forEach(element => element.classList.remove("unselected"))
			const { number, name, symbol, phase, group, standardState, occurrence, appearance, source, summary, atomic_mass, shells } = this.info
			const wiki_appearance = this.info.wiki_info.info.appearance
			let newObj = {
				number, 
				name,
				symbol,
				phase,
				group,
				standardState,
				occurrence,
				appearance,
				wiki_appearance,
				source,
				summary,
				atomic_mass,
				shells
			}
			this.$emit("element-clicked", newObj)
		}
	},
	computed: {
		mass() {
			return this.info.atomic_mass
		},
	},
	watch: {
		temperature: function() {
			const { meltingPointK, meltingPointC, meltingPointF, boilingPointK, boilingPointC, boilingPointF } = this.info.wiki_info.info
			
		}
	}
}
</script>

<style lang="sass">
.element
	@include flexCenter
	flex-wrap: no-wrap
	border-radius: 0.125rem
	margin: 0.05rem
	font-size: 0.75rem
	cursor: pointer
	position: relative
	transition: all 0.25s ease-in-out
	@include elements
	@include properties
	@media (max-width: 25em)
		padding: 0.1rem
	&:after
		opacity: 0
		transition: all 0.25s ease-in-out
	&.active
		z-index: 3
		&:after
			content: ''
			height: 100%
			width: 100%
			opacity: 1
			border-radius: 0.25rem
			position: absolute
			transform: scale(1.2)
			border: 0.25rem solid rgba(white, 0.8)
	&.unselected
		opacity: 0.25
	.element-main-info
		@include flexCenter
		flex-direction: column
		min-width: 75%
		flex: 1
		position: relative
		.info
			width: 100%
		.element-symbol
			text-align: center
			color: black
			flex: 1
			border-bottom: 0.1rem solid rgba(black, 0)
			font-size: 0.75rem
			transition: font-size 0.25s ease-in-out, padding 0.25s ease-in-out, transform 0.05s ease-in-out
			@media (min-width: 56em)
				font-size: 1.1rem
				padding: 0.5rem
		.element-name
			color: black
			flex: 1
			display: none
			word-break: break-word
			text-align: center
			transition: all 0.25s ease-in-out
			@media (min-width: 68.5em)
				display: block
				font-size: 0.5rem
			@media (min-width: 87.5em)
				font-size: 0.66rem
			@media (min-width: 100em)
				font-size: 0.75rem
		.element-number
			font-size: 0.66rem
			@media (max-width: 56em)
				text-align: center
		.element-mass
			color: black
			word-break: break-word
			font-size: 0.66rem
			margin-top: 0.25rem
			transition: all 0.25s ease-in-out
			@media (max-width: 100em)
				display: none
	.element-shells
		width: auto
		color: black
		font-size: 0.5rem
		.element-shell
			width: 100%
</style>
