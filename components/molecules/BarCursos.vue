<template>
	<div class="flex flex-col justify-center gap-3 md:gap-8">
		<h3 class="text-3xl text-black md:text-[40px] font-semibold mt-9">
			Nossos <span class="text-primary-bordo-500">cursos</span>
		</h3>
		<div
			class="snap-x snap-mandatory overflow-scroll 2xl:overflow-hidden h-52 2xl:h-56 flex justify-between lg:grid lg:grid-cols-6 lg:gap-2 xl:gap-4"
		>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[180px] lg:w-full mr-3"
				:title="'Escola de Aprendizes'"
				:icon="'passarinho'"
				:color="'yellow'"
				:is-nav-bar-cursos="true"
			/>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[180px] lg:w-full mr-3"
				:title="'Piano'"
				:icon="'piano'"
				:color="'orange'"
				:is-nav-bar-cursos="true"
			/>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[180px] lg:w-full mr-3"
				:title="'Regência'"
				:icon="'regencia'"
				:color="'bordo'"
				:is-nav-bar-cursos="true"
			/>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[180px] lg:w-full mr-3"
				:title="'Violino'"
				:icon="'violino'"
				:color="'beige'"
				:is-nav-bar-cursos="true"
			/>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[180px] lg:w-full mr-3"
				:title="'Violão'"
				:icon="'violao'"
				:color="'blue'"
				:is-nav-bar-cursos="true"
			/>
			<ButtonInstrument
				class="snap-center flex-shrink-0 w-[200px] lg:w-full mr-3"
				:title="'Órgão'"
				:icon="'orgao'"
				:color="'yellow'"
				:is-nav-bar-cursos="true"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonInstrument from '~/components/atoms/ButtonInstrument.vue';
export default Vue.extend({
	components: { ButtonInstrument },
});
</script>
