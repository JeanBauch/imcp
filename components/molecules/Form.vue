<template>
	<form class="w-11/12 lg:max-w-md flex flex-col mb-18">
		<h2 class="text-3xl lg:text-4xl font-semibold mb-2">
			Envie uma <span class="text-primary-bordo-700">mensagem</span>
		</h2>
		<div class="flex flex-col lg:pr-10">
			<Label target="Name" title="Nome" />
			<Input id="Name" type="Text" name="Name" />

			<Label target="Email" title="E-mail" />
			<Input id="Email" type="Email" name="Email" />

			<Label target="Subject" title="Assunto" />
			<Input id="Subject" type="Text" name="Subject" />

			<Label target="Message" title="Mensagem" />
			<textarea
				id="Message"
				rows="5"
				cols="33"
				class="bg-transparent border-primary-bordo-500 rounded-3xl border mb-4 p-2 focus:bg-white"
				name="Message"
				style="resize: none"
			/>

			<div class="flex flex-row-reverse justify-end mb-6 sm:items-start items-center">
				<Label
					target="Terms"
					title="Li e aceito os termos de política e privacidade"
					class="font-normal"
				/>
				<input id="Terms" type="checkbox" class="w-[22px] h-[22px] rounded-md mr-1 mb-2 mt-4 border-[#707070] bg-transparent accent-gray checked:text-white">
			</div>

			<button
				class="max-w-[155px] h-12 bg-primary-yellow-300 rounded-3xl font-semibold text-lg text-white hover:brightness-105 transition-all"
			>
				Enviar
			</button>
		</div>
	</form>
</template>

<script lang="ts">
import Vue from 'vue';
import Label from '~/components/atoms/Label.vue';
import Input from '~/components/atoms/Input.vue';
export default Vue.extend({
	components: {
		Label,
		Input,
	},
});
</script>
