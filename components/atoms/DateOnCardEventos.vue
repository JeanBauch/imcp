<template>
	<div :class="bgColor" class="flex flex-col items-center justify-center group-hover:opacity-80 rounded-3xl py-4 px-2 sm:p-4 min-w-[6.5rem] sm:min-w-[20%] md:min-w-[35%] lg:min-w-[30%] xl:min-w-[25%] 2xl:min-w-[19%]">
		<h2 class="text-white text-5xl font-semibold">
			{{ date.day }}
		</h2>
		<h5 class="text-white text-xl font-medium">
			{{ date.month }}
		</h5>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		date: { type: Object, required: true },
		bgColor: { type: String, required: true },
	},
});
</script>
