<template>
	<div class="flex justify-around my-10">
		<div v-for="(social, index) in content" :key="index">
			<ButtonSocialMidia :social-midia="social.socialMidia" :link="''" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonSocialMidia from '../atoms/ButtonSocialMidia.vue';

declare interface SocialMida {
	socialMidia: string,
	link: string
}

declare interface contentType {
	content: SocialMida[]
}

export default Vue.extend({
	data ():contentType {
		return {
			content: [
				{
					socialMidia: 'facebook',
					link: '',
				},
				{
					socialMidia: 'instagram',
					link: '',
				},
				{
					socialMidia: 'spotify',
					link: '',
				},
				{
					socialMidia: 'youtube',
					link: '',
				},
			],
		};
	},
	components: { ButtonSocialMidia },
});
</script>
