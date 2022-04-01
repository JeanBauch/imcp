<template>
	<div class="container mx-auto flex items-center justify-between md:justify-center px-6 sm:px-9 py-4">
		<div class="text-white min-h-[35px]">
			<img src="logos/logo-canarinhos.svg" alt="Logo Canarinhos">
		</div>
		<MenuButtonBurguer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import MenuButtonBurguer from '../atoms/MenuButtonBurguer.vue';

export default Vue.extend({
	components: { MenuButtonBurguer },
});
</script>
