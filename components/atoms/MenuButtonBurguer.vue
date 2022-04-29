<template>
	<div class="menu-btn" @click="handleClickOpenMenu()">
		<div class="menu-burguer" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { toggleClass } from '~/utils';

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
				toggleClass(menuBtn, 'open');
				toggleClass(navList, 'open');
				this.menuOPen = true;
			} else {
				toggleClass(menuBtn, 'open');
				toggleClass(navList, 'open');
				this.menuOPen = false;
			}
		},
	},
});
</script>
