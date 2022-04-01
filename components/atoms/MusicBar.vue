<template>
	<div>
		<div class="flex justify-between">
			<p class="text-sm text-primary-beige-700 font-semibold">
				01:28
			</p>
			<p class="text-sm text-primary-beige-700 font-semibold">
				05:00
			</p>
		</div>
		<div class="flex-1 bg-primary-beige-300 h-2 rounded-3xl">
			<div class="relative bg-primary-beige-700 h-2 rounded-3xl" :style="{ width: `${progressMusic}%` }" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		progressMusicPlayed: { type: Number, required: true },
	},
	computed: {
		progressMusic () {
			return this.progressMusicPlayed;
		},
	},
});
</script>
