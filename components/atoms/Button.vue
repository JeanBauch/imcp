<template>
	<div>
		<button v-if="mediumSize" type="button" :name="title" :class="themeColors.background" class="flex items-center justify-center px-6 py-2 md:px-9 md:py-3 rounded-full">
			<h4 class="text-white font-medium text-base md:text-lg">
				{{ title.toUpperCase() }}
			</h4>
		</button>
		<button v-else type="button" :name="title" :class="themeColors.background" class="flex items-center justify-center px-4 py-2 rounded-full">
			<h5 class="text-white font-medium text-base">
				{{ title.toUpperCase() }}
			</h5>
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			themeColors: {
				background: `bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				backgroundOnHover: `hover:bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
			},
		};
	},
	props: {
		title: { type: String, required: true },
		mediumSize: {
			type: Boolean,
			default: true,
		},
		color: {
			required: true,
			type: String,
			default: 'yellow',
			validator: (value: string) => [
				'yellow',
				'orange',
				'bordo',
				'beige',
				'blue',
			].includes(value.toLowerCase()),
		},
	},
});
</script>
