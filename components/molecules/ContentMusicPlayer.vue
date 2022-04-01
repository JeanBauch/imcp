<template>
	<div class="flex flex-col sm:flex-row rounded-2xl border border-primary-beige-500 p-8 gap-4 sm:gap-4 flex-1 xl:w-[76%]">
		<div class="flex w-full justify-center sm:w-5/12 md:max-w-xs">
			<div class="w-full max-w-[280px] h-72 rounded-2xl bg-cover bg-center bg-[url('https://p16.resso.me/img/tos-alisg-i-0000/f2d7a5eff91f4c45913e44cbb8d0e1a3~c5_500x500.jpg')]" />
		</div>
		<div class="flex flex-col sm:justify-between md:flex-1">
			<div class="flex flex-col">
				<h4 class="text-xl lg:text-2xl font-medium">
					Freu Euch, Ihr Lieben Christen
				</h4>
				<h6 class="text-sm sm:text-base text-primary-bordo-500">
					CHRISTUS EST NATUS
				</h6>
			</div>
			<div class="flex flex-col mt-5 gap-1 md:pr-8 lg:pr-12">
				<MusicBar :progress-music-played="38" />
				<div class="flex justify-center md:justify-start items-center gap-4 w-full h-9 mt-6">
					<div class="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer">
						<img src="icons/small-icons-colors/bordo/musicaAnterior.svg" alt="Icone - Voltar uma música">
					</div>
					<div class="w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer">
						<img src="icons/small-icons-colors/bordo/play.svg" alt="Icone - Tocar uma música">
					</div>
					<div class="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer">
						<img src="icons/small-icons-colors/bordo/proximaMusica.svg" alt="Icone - Próxima música">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicBar from '../atoms/MusicBar.vue';

export default Vue.extend({
	components: { MusicBar },
});
</script>
