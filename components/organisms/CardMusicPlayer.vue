<template>
	<main class="px-6 sm:px-0 flex flex-col xl:flex-row gap-6">
		<ContentMusicPlayer />
		<div class="w-[24%] hidden xl:block">
			<ButtonDiscografia />
		</div>
		<div class="flex xl:hidden justify-center">
			<Button :title="'DISCOGRAFIA COMPLETA'" :color="'beige'" />
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonDiscografia from '../atoms/ButtonDiscografia.vue';
import Button from '../atoms/Button.vue';
import ContentMusicPlayer from '../molecules/ContentMusicPlayer.vue';

export default Vue.extend({
	components: { ContentMusicPlayer, ButtonDiscografia, Button },
});
</script>
