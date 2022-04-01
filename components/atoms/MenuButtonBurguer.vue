<template>
	<div class="menu-btn" @click="handleClickOpenMenu">
		<div class="menu-burguer" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			menuOPen: false,
		};
	},
	methods: {
		handleClickOpenMenu () {
			const menuBtn = document.querySelector('.menu-btn');
			const navList = document.getElementById('navList');
			if (!this.menuOPen) {
				menuBtn?.classList.add('open');
				navList?.classList.add('open');
				this.menuOPen = true;
			} else {
				menuBtn?.classList.remove('open');
				navList?.classList.remove('open');
				this.menuOPen = false;
			}
		},
	},
});
</script>
