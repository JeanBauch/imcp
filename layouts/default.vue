<template>
	<div class="bg-background relative">
		<Header />
		<div class="w-full h-24 bg-primary-bordo-500 md:bg-background md:h-52 xl:h-60 relative z-30 md:visible mb-4">
			<div class="relative before:content-[''] before:w-full before:md:h-52 before:xl:h-60 before:inset-0 before:absolute before:bg-cover before:bg-no-repeat before:bg-[url('~/static/complement/background.svg')]" />
			<div class="block md:hidden absolute z-30 bottom-0 w-full h-8 -rotate-180 bg-background clip-path-waves-mobile" />
		</div>
		<nuxt />
		<Footer class="relative" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/organisms/Header.vue';
import Footer from '~/components/organisms/Footer.vue';

export default Vue.extend({
	components: { Header, Footer },
});
</script>
