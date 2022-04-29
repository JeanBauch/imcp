<template>
	<div :class="[themeColors.borderColor, themeColors.backgroundOnHover]" class="py-5 md:py-12 lg:py-14 xl:py-16 2xl:py-24 rounded-3xl border flex items-center justify-center relative bg-white hover:border-0 group transition ease-linear overflow-hidden duration-150">
		<div class="h-[90%] w-11/12 rounded-3xl items-center justify-center absolute top-0 right-0 z-10 hidden group-hover:flex group-hover:border-0 transition ease-linear duration-150" style="border-radius: 56% 10% 0% 100% / 38% 10% 52% 65%; background: transparent linear-gradient(110deg, #FFFFFF33 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" />
		<div class="flex flex-col items-center justify-center gap-4 relative px-2 md:px-0 xl:max-w-[80%] 2xl:max-w-[70%]">
			<div :class="isNavBarCursos? 'scale-90':''" class="mb-2 md:mb-6 relative">
				<div v-if="icon.toLowerCase()" class="w-24 h-20 relative">
					<img :src="`icons/large-colors/instrument/${icon}.svg`" class="group-hover:hidden block relative z-10" :alt="icon">
					<img :src="`icons/large-white/instrument/${icon}.svg`" class="hidden group-hover:block relative z-10" :alt="icon">
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
			<h2 :class="[themeColors.textColor, isNavBarCursos? 'md:text-2xl lg:text-lg 2xl:text-2xl':'md:text-3xl 2xl:text-4xl']" class="font-medium w-full text-xl group-hover:text-white relative z-10 text-center">
				{{ title.toUpperCase() }}
			</h2>
		</div>
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			themeColors: {
				borderColor: `border-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				backgroundOnHover: `hover:bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
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
			default: 'yellow',
			validator: (value: string) => [
				'yellow',
				'orange',
				'bordo',
				'beige',
				'blue',
			].includes(value.toLowerCase()),
		},
		isNavBarCursos: { type: Boolean, default: false },
	},
});
</script>
