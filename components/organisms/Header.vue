<template>
	<header class="bg-primary-bordo-500 w-full rounded-b-3xl md:rounded-none absolute z-40 top-0" :class="(isHomeToBlur) ? 'md:bg-white-glass md:backdrop-blur-lg' : ''">
		<Navbar />
		<NavbarMobile />
		<NavbarDesktop />
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '../molecules/Navbar.vue';
import NavbarDesktop from '../molecules/NavbarDesktop.vue';
import NavbarMobile from '../molecules/NavbarMobile.vue';

export default Vue.extend({
	components: { Navbar, NavbarMobile, NavbarDesktop },
	props: {
		isHomeToBlur: {
			type: Boolean,
			default: false,
		},
	},
});
</script>
