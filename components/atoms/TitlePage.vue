<template>
	<div class="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
		<h1 :class="[themeColors.textColor, width]" class="text-4xl md:text-5xl xl:text-6xl font-semibold inline-block text-center xl:leading-tight">
			{{ title }}
		</h1>
		<div :class="themeColors.backgroundSeparetor" class="w-1/4 max-w-[4rem] h-1 rounded-full" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			themeColors: {
				textColor: `text-${this.titleColor === 'blue' ? 'secondary' : 'primary'}-${this.titleColor}-500`,
				backgroundSeparetor: `bg-${this.separetorColor === 'blue' ? 'secondary' : 'primary'}-${this.separetorColor}-500`,
			},
		};
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		titleColor: {
			type: String,
			default: 'orange',
			validator: (value: string) => [
				'yellow',
				'orange',
				'bordo',
				'beige',
				'blue',
			].includes(value.toLowerCase()),
		},
		separetorColor: {
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
		width: {
			type: String,
			default: 'w-min',
		},
	},
});
</script>
