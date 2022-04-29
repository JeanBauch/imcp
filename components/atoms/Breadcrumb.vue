<template>
	<nav id="breadcrumb">
		<ol class="flex">
			<li
				v-for="(item, index) in crumbs"
				:key="index"
			>
				<nuxt-link :to="`/${item.url}`">
					<p class="text-sm font-light inline-block pr-7 relative after:content-['>']" :class="(crumbs.length - 1 == index )? 'text-gray after:content-[i]' : 'after:align-bottom after:absolute after:bottom-0 after:right-3'">
						{{ item.name }}
					</p>
				</nuxt-link>
			</li>
		</ol>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		crumbs: {
			type: Array,
			required: true,
			default: () => [],
		},
	},
});
</script>
