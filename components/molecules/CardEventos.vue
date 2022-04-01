<template>
	<div class="flex flex-col p-4 bg-white rounded-2xl gap-4 border border-primary-beige-500 shadow-sm min-w-[46%] group">
		<div class="flex items-center box-border gap-4">
			<DateOnCardEventos :bg-color="bgColor" :date="content.date" />
			<h4 :class="textColor" class="text-lg sm:text-xl text-left">
				{{ content.title.toUpperCase() }}
			</h4>
		</div>
		<div class="flex items-center">
			<div>
				<img :src="`icons/small-icons-colors/${color}/location.svg`" alt="Icone de marcação de Localização">
			</div>
			<p :class="textColor" class="ml-4 text-sm sm:text-base">
				{{ content.location.address }}
			</p>
		</div>
		<div class="flex">
			<div>
				<img :src="`icons/small-icons-colors/${color}/clock.svg`" alt="Icone de Relógio">
			</div>
			<p :class="textColor" class="ml-4 text-sm sm:text-base">
				{{ content.date.hour }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import DateOnCardEventos from '../atoms/DateOnCardEventos.vue';

export default Vue.extend({
	data () {
		return {
			bgColor: `bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
			textColor: `text-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
			content: {
				date: {
					day: '24',
					month: 'abril',
					hour: '10h',
				},
				title: '33 ANOS DO CORAL DAS MENINAS CANTORAS DE PETRÓPOLIS',
				location: {
					address: 'Rua Santos Dumont, 355 | Petrópolis - RJ - Brasil',
				},
			},
		};
	},
	props: {
		color: {
			required: true,
			type: String,
			default: 'yellow',
			validator: (value: string) => [
				'bordo',
				'blue',
			].includes(value.toLowerCase()),
		},
	},
	components: { DateOnCardEventos },
});
</script>
