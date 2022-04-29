<template>
	<div class="flex flex-col justify-center">
		<h3 class="text-3xl text-black md:text-[40px] mb-6 mt-10 md:my-10 font-semibold">
			Escola de música <span :class="themeColors.textColor">em ação</span>
		</h3>
		<img
			class="rounded-3xl max-h-[189px] md:max-h-[800px]"
			src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			alt=""
			srcset=""
		>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data () {
		return {
			themeColors: {
				textColor: `text-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
			},
			show: false,
			teste: '',
		};
	},
	props: {
		color: {
			required: false,
			type: String,
			default: 'orange',
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
