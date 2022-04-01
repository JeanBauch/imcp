<template>
	<header class="bg-primary-bordo-500 w-full rounded-b-3xl md:rounded-none md:bg-white-glass md:backdrop-blur-lg absolute z-40 top-0">
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
});
</script>
