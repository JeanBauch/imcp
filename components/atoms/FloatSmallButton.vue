<template>
	<div class="p-[10px] bg-primary-orange-500 md:hover:bg-primary-bordo-500 md:hover:cursor-pointer transition-colors rounded-full flex item scale-[85%] md:scale-100">
		<img :src="`icons/small-icons-colors/white/${icon}.svg`" :alt="`Icone botão ${icon}`">
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
		};
	},
	props: {
		icon: {
			type: String,
			default: 'compartilhar',
			validator: (value: string) => [
				'compartilhar',
				'calendario',
			].includes(value.toLowerCase()),
		},
	},
});
</script>
