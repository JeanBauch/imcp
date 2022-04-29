<template>
	<div class="bg-background">
		<Header :is-home-to-blur="true" />
		<nuxt />
		<Footer />
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
