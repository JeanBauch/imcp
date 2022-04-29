<template>
	<div :class="[themeColors.borderColor, themeColors.beforeBackground]" class="py-6 px-6 xl:py-8 xl:px-8 2xl:py-14 2xl:px-14 rounded-3xl border flex items-center justify-center relative bg-white hover:border-transparent group transition-all ease-linear overflow-hidden duration-500 animate-fill-color z-0 cursor-pointer">
		<div class="h-[90%] w-11/12 rounded-3xl items-center justify-center absolute top-0 right-0  hidden group-hover:flex group-hover:border-0 transition ease-linear duration-150" style="border-radius: 56% 10% 0% 100% / 38% 10% 52% 65%; background: transparent linear-gradient(110deg, #FFFFFF33 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" />
		<div class="flex flex-col items-center justify-center gap-4 md:gap-6 relative px-2 md:px-0">
			<div class="relative flex items-center justify-center max-w-[60%] xl:max-w-[80%] 2xl:max-w-[70%]">
				<div
					:class="themeColors.borderColor"
					class="bg-white w-[140px] h-[100px] scale-75 md:scale-100 xl:flex justify-center items-center relative z-10 border bg-transparent group-hover:border-white"
					style="border-radius: 69% 31% 38% 62% / 60% 46% 54% 40%"
				/>
				<div
					:class="themeColors.borderColor"
					class="bg-white w-[130px] h-[100px] scale-75 md:scale-100 xl:flex justify-center items-center absolute z-0 top-1 bg-transparent group-hover:border-4 group-hover:border-white overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"
					style="border-radius: 76% 24% 23% 77% / 44% 45% 55% 56% "
				/>
			</div>
			<div class="absolute left-0 top-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="49.5" height="29.516" viewBox="0 0 49.5 29.516">
					<g id="aspas" transform="translate(-55.501 -55.484)">
						<g id="aspa02" transform="translate(58 57)">
							<path id="Caminho_1813" data-name="Caminho 1813" d="M21.87,152.544a16.665,16.665,0,0,1,10.145-15.569l.551-.189c1.311-.355,1.691.879.852,1.635s-1.726,1.23-1.726,3.3a4.74,4.74,0,0,0,.11,1.017,11.055,11.055,0,0,1,1.121-.057,10.851,10.851,0,0,1,6.753,2.348,10.991,10.991,0,1,1-17.411,11.2A17.141,17.141,0,0,1,21.87,152.544Z" transform="translate(3.131 -136.723)" :fill="color === 'blue'? '#eff8f9' : '#fcf7f9'" />
							<path id="Caminho_1814" data-name="Caminho 1814" d="M21.87,152.544a16.665,16.665,0,0,1,10.145-15.569l.551-.189c1.311-.355,1.691.879.852,1.635s-1.726,1.23-1.726,3.3a4.74,4.74,0,0,0,.11,1.017,11.055,11.055,0,0,1,1.121-.057,10.851,10.851,0,0,1,6.753,2.348,10.991,10.991,0,1,1-17.411,11.2A17.141,17.141,0,0,1,21.87,152.544Z" transform="translate(-21.869 -136.723)" :fill="color === 'blue'? '#eff8f9' : '#fcf7f9'" />
						</g>
						<g id="aspa01" transform="translate(56 56)">
							<path
								id="Caminho_1813-2"
								data-name="Caminho 1813"
								d="M21.87,152.544a16.665,16.665,0,0,1,10.145-15.569l.551-.189c1.311-.355,1.691.879.852,1.635s-1.726,1.23-1.726,3.3a4.74,4.74,0,0,0,.11,1.017,11.055,11.055,0,0,1,1.121-.057,10.851,10.851,0,0,1,6.753,2.348,10.991,10.991,0,1,1-17.411,11.2A17.141,17.141,0,0,1,21.87,152.544Z"
								transform="translate(3.131 -136.723)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								stroke-dasharray="71 4"
								:class="[themeColors.groupHoverFillSVG, themeColors.strokeSVG]"
							/>
							<path
								id="Caminho_1814-2"
								data-name="Caminho 1814"
								d="M21.87,152.544a16.665,16.665,0,0,1,10.145-15.569l.551-.189c1.311-.355,1.691.879.852,1.635s-1.726,1.23-1.726,3.3a4.74,4.74,0,0,0,.11,1.017,11.055,11.055,0,0,1,1.121-.057,10.851,10.851,0,0,1,6.753,2.348,10.991,10.991,0,1,1-17.411,11.2A17.141,17.141,0,0,1,21.87,152.544Z"
								transform="translate(-21.869 -136.723)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								stroke-dasharray="71 4"
								:class="[themeColors.groupHoverFillSVG, themeColors.strokeSVG]"
							/>
						</g>
					</g>
				</svg>
			</div>
			<div class="flex flex-col items-center justify-between gap-5">
				<p class="text-sm sm:text-base md:text-sm group-hover:text-white">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				</p>
				<h3 :class="themeColors.textColor" class="capitalize mt-2 font-semibold w-full text-base sm:text-lg xl:text-xl 2xl:text-2xl group-hover:text-white text-start">
					{{ title }}
					<br><span class="capitalize font-medium text-sm xl:text-lg"> {{ subtitle }} </span>
				</h3>
			</div>
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
				textColor: `text-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				beforeBackground: `before:bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				strokeSVG: `stroke-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				groupHoverFillSVG: `group-hover:fill-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-700`,
			},
		};
	},
	props: {
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
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
	},
});
</script>
