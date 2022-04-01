<template>
	<input
		:id="id"
		:type="type"
		:name="name"
		class="bg-transparent border-primary-bordo-500 rounded-3xl border p-2 focus:bg-white"
	>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Input',
	props: {
		id: { type: String, required: true },
		type: { type: String, required: true },
		name: { type: String, required: true },
	},
});
</script>
