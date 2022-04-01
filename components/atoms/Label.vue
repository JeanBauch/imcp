<template>
	<label :for="target" class="font-semibold mb-2 mt-4">
		{{ title }}
	</label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Label',
	props: {
		target: { type: String, required: true },
		title: { type: String, required: true },
	},
});
</script>
