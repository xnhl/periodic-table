<template>
	<div id="key">
		<div id="occurrence-list" class="list">
			<div @click="filterOccurrence" class="list-item occurrence" v-for="(item, index) in occurrence" :key="index" :data-content="item" :data-occurrence="item" v-text="item"></div>
		</div>
		<div id="states-list" class="list">
			<div @click="filterState" class="list-item state"  v-for="(item, index) in standardState" :key="index" :data-content="item" :data-standardState="item" v-text="item"></div>
		</div>
		<div id="groups-list" class="list">
			<div @click="filterGroup" class="list-item group"  v-for="(item, index) in groups" :key="index" :data-content="item" :data-group="item" v-text="item"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Key",
	components: {},
	props: {info: {}},
	data() {
		return {
			filteringInfo: false,
			filters: {
				solid: 0,
				liquid: 0,
				gas: 0,
				unknown: 0,
				primordial: 0,
				fromdecay: 0,
				synthetic: 0,
				reactivenonmetal: 0,
				alkalimetal: 0,
				alkalineearthmetal: 0,
				metalloid: 0,
				lanthanide: 0,
				actinide: 0,
				noblegas: 0,
				posttransitionmetal: 0,
				transitionmetal: 0,
				unknownchemicalproperties: 0
			},
			standardState: [
				"solid",
				"liquid",
				"gas",
				"unknown"
			],
			occurrence: [
				"primordial",
				"from decay",
				"synthetic"
			],
			groups: [
				"Reactive Nonmetal",
				"Alkali Metal",
				"Alkaline Earth Metal",
				"Metalloid",
				"Lanthanide",
				"Actinide",
				"Noble Gas",
				"Post-Transition Metal",
				"Transition Metal",
				"Unknown Chemical Properties"
			]
		}
	},
	methods: {
		filterOccurrence: function(e) {
			let which = e.target.dataset.content.replace(/[^a-z]/gi, "").toLowerCase()
			this.filters[which]++
			e.target.classList.toggle("active")
			let listItems = [...document.getElementsByClassName("list-item")]
			listItems.forEach(item => item.classList.remove("active"))
			let all = [...document.getElementsByClassName("element")]
			if (this.filters[which] % 2 == 0) {
				all.forEach(element => element.classList.remove("unselected"))
			} else {
				e.target.classList.add("active")
				let currentCount = this.filters[which]
				let prop = e.target.dataset.occurrence
				all.forEach(element => element.classList.remove("unselected"))
				let unselected = all.filter(element => element.dataset.occurrence !== prop)
				unselected.forEach(element => element.classList.add("unselected"))
			}
			let currentCount = this.filters[which]
			for (let filter in this.filters) {
				this.filters[filter] = 0
			}
			this.filters[which] = currentCount
		},
		filterState: function(e) {
			let which = e.target.dataset.content.replace(/[^a-z]/gi, "").toLowerCase()
			this.filters[which]++
			e.target.classList.toggle("active")
			let listItems = [...document.getElementsByClassName("list-item")]
			listItems.forEach(item => item.classList.remove("active"))
			let all = [...document.getElementsByClassName("element")]
			if (this.filters[which] % 2 == 0) {
				all.forEach(element => element.classList.remove("unselected"))
			} else {
				e.target.classList.add("active")
				let currentCount = this.filters[which]
				let prop = e.target.dataset.standardstate
				all.forEach(element => element.classList.remove("unselected"))
				let unselected = all.filter(element => element.dataset.standardstate !== prop)
				unselected.forEach(element => element.classList.add("unselected"))
			}
			let currentCount = this.filters[which]
			for (let filter in this.filters) {
				this.filters[filter] = 0
			}
			this.filters[which] = currentCount
		},
		filterGroup: function(e) {
			let which = e.target.dataset.content.replace(/[^a-z]/gi, "").toLowerCase()
			this.filters[which]++
			e.target.classList.toggle("active")
			let listItems = [...document.getElementsByClassName("list-item")]
			listItems.forEach(item => item.classList.remove("active"))
			let all = [...document.getElementsByClassName("element")]
			if (this.filters[which] % 2 == 0) {
				all.forEach(element => element.classList.remove("unselected"))
			} else {
				e.target.classList.add("active")
				let currentCount = this.filters[which]
				let prop = e.target.dataset.group
				all.forEach(element => element.classList.remove("unselected"))
				let unselected = all.filter(element => element.dataset.group !== prop)
				unselected.forEach(element => element.classList.add("unselected"))
			}
			let currentCount = this.filters[which]
			for (let filter in this.filters) {
				this.filters[filter] = 0
			}
			this.filters[which] = currentCount
		},
	},
	computed: {}
}
</script>

<style lang="sass">
#key
	@include flexCenter
	background: var(--gray-three)
	margin: 0 auto
	align-items: stretch
	max-width: 100%
	border-radius: 0.25rem
	@media (min-width: 56em)
		padding: 0.25rem
		margin: 0.25rem
	.list
		flex: 1
		font-size: 0.75rem
		min-width: 100%
		@include flexCenter
		align-items: stretch
		@media (min-width: 35em)
			min-width: 40%
		.list-item
			color: black
			cursor: pointer
			@include flexCenter
			@include properties
			flex: 1
			margin: 0.1rem
			border-radius: 0.15rem
			padding: 0.25rem
			font-size: 0.75rem
			text-align: center
			transition: all 0.25s ease-in-out
			&.active
				text-decoration: underline
	#occurrence-list
		.occurrence
			background: #ddd
			min-width: 30%
	#states-list
		.state
			background: #ddd
			min-width: 22%
	#groups-list
		.group
			min-width: 40%
			color: black
			@media (min-width: 28em)
				min-width: 30%
			@media (min-width: 35em)
				min-width: 23%
			@media (min-width: 42em)
				min-width: 19%
			@media (min-width: 73em)
				min-width: auto
</style>
