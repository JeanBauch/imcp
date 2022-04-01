<template>
	<nav class="flex flex-col gap-3">
		<h4 class="text-white text-lg font-semibold">
			{{ title }}
		</h4>
		<ul class="flex flex-col gap-3">
			<li v-for="(item, key) in content" :key="key" class="text-white text-sm font-light">
				<nuxt-link :to="item.link">
					{{ item.name }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		title: { type: String, required: true },
		content: { type: Array, required: true },
	},
});
</script>
