<template>
	<div :class="[themeColors.borderColor, themeColors.backgroundOnHover]" class="flex flex-col items-center justify-center px-9 py-8 md:px-12 md:py-11 lg:px-9 lg:py-8 xl:px-12 xl:py-11 rounded-[1.875rem] border bg-white cursor-pointer group">
		<div class="mb-4 md:mb-8 relative">
			<div v-if="icon.toLowerCase()" class="w-24 h-20 relative">
				<img :src="`icons/normal-colors/instituto/${icon}.svg`" class="block relative z-10" :alt="`icone ${title}`">
				<div class="absolute -inset-8 z-0 scale-[40%] md:scale-[60%]">
					<svg xmlns="http://www.w3.org/2000/svg" width="186" height="150" viewBox="0 0 186 150">
						<path
							id="palheta"
							:class="themeColors.backgroundPaletSVG"
							class="group-hover:fill-transparent transition-all ease-in-out"
							d="M73.724-8.847C30.131-8.847-36.2,4.243-40.255,52.624S48.427,141.153,92.02,141.153s53.6-30.144,53.6-73.616S117.317-8.847,73.724-8.847Z"
							transform="translate(40.384 8.847)"
						/>
					</svg>
				</div>
			</div>
		</div>
		<h3 :class="themeColors.textColor" class="capitalize font-ligth text-base md:text-lg 2xl:text-xl relative z-10 text-center">
			{{ title }}
		</h3>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			themeColors: {
				borderColor: `border-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				backgroundOnHover: `hover:bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-50`,
				textColor: `text-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				backgroundPaletSVG: `fill-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-50`,
			},
		};
	},
	props: {
		title: { type: String, required: true },
		icon: { type: String, required: true },
		color: {
			required: true,
			type: String,
			default: 'blue',
			validator: (value: string) => [
				'orange',
				'blue',
			].includes(value.toLowerCase()),
		},
	},
});
</script>
