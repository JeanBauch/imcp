<template>
	<label :for="forinput" class="mb-2 mt-4 text-base">
		{{ title }}
	</label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Label',
	props: {
		forinput: { type: String, required: true },
		title: { type: String, required: true },
	},
});
</script>
