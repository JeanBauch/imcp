<template>
	<input
		:id="id"
		:type="type"
		:name="name"
		:class="`bg-${background}`"
		:required="required ? 'required': null"
		class="rounded-[30px] border p-2 pl-7  focus:bg-white"
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
		required: { type: Boolean, required: true },
		background: {
			required: true,
			type: String,
			default: 'transparent',
		},
	},
});
</script>
