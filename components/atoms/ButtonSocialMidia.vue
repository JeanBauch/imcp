<template>
	<div class="h-14 w-14 flex items-center justify-center bg-primary-orange-500 rounded-full shadow-md">
		<img class="w-8" :src="`icons/small-icons-colors/white/${socialMidia}.svg`" :alt="`Icone Rede Social - ${socialMidia}`">
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		link: { type: String, required: true },
		socialMidia: {
			required: true,
			type: String,
			validator: (value: string) => [
				'facebook',
				'instagram',
				'spotify',
				'youtube',
			].includes(value.toLowerCase()),
		},
	},
});
</script>
