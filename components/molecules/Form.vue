<template>
	<div class="w-full md:max-w-[570px]">
		<form class="flex flex-col mb-18 text-black" :class="width" @submit.prevent="showModal">
			<h2 v-if="mensagem" class="text-3xl lg:text-[40px] font-semibold mb-6">
				Envie uma <span :class="themeColors.textColor">mensagem</span>
			</h2>
			<h2 v-else class="text-3xl lg:text-[40px] font-semibold mb-2">
				Entre em <span :class="themeColors.textColor">contato</span>
			</h2>
			<div v-if="text" class="text-lg leading-6">
				Entre em contato via telefone, ou encaminhe uma mensagem diretamente pelo formulário abaixo.
			</div>
			<div v-if="tel" :class="themeColors.textColor" class="mb-2 mt-4 flex gap-4">
				<i><svg xmlns="http://www.w3.org/2000/svg" width="19.501" height="19.502" viewBox="0 0 19.501 19.502">
					<path
						id="Icon_feather-phone"
						data-name="Icon feather-phone"
						d="M21.167,16.476v2.71a1.809,1.809,0,0,1-1.973,1.806,17.933,17.933,0,0,1-7.81-2.773A17.631,17.631,0,0,1,5.954,12.8,17.852,17.852,0,0,1,3.175,4.969,1.808,1.808,0,0,1,4.976,3H7.691A1.809,1.809,0,0,1,9.5,4.554a11.579,11.579,0,0,0,.634,2.538A1.8,1.8,0,0,1,9.728,9L8.578,10.145a14.466,14.466,0,0,0,5.43,5.419l1.149-1.147a1.813,1.813,0,0,1,1.91-.406,11.64,11.64,0,0,0,2.543.632,1.808,1.808,0,0,1,1.557,1.834Z"
						transform="translate(-2.417 -2.25)"
						fill="none"
						:stroke="telcolor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					/>
				</svg>
				</i>	(24) 2104-4100 | (24) 2104-4141
			</div>

			<div class="flex flex-col lg:pr-10">
				<Label forinput="Name" title="Nome" :class="`font-${labelweight}`" />
				<Input
					id="Name"
					type="Text"
					name="Name"
					:background="`${ inputbg }`"
					:required="true"
					:class="`border-primary-${bordercolor}-500`"
					class="opacity-80"
				/>

				<Label forinput="Email" title="E-mail" :class="`font-${labelweight}`" />
				<Input
					id="Email"
					v-model="teste"
					type="Email"
					name="Email"
					:background="`${ inputbg }`"
					:required="true"
					:class="`border-primary-${bordercolor}-500`"
					class="opacity-80"
				/>

				<Label forinput="Subject" title="Assunto" :class="`font-${labelweight}`" />
				<Input
					id="Subject"
					type="Text"
					name="Subject"
					:background="`${ inputbg }`"
					:required="true"
					:class="`border-primary-${bordercolor}-500`"
					class="opacity-80"
				/>

				<Label forinput="Message" title="Mensagem" :class="`font-${labelweight}`" :required="true" />
				<textarea
					id="Message"
					rows="5"
					cols="33"
					class="rounded-3xl border mb-4 p-2 pl-7 focus:bg-white opacity-80"
					name="Message"
					style="resize: none"
					:class="`bg-${ inputbg } border-primary-${bordercolor}-500`"
					:required="true"
				/>

				<div class="flex flex-row-reverse justify-end mb-4 sm:items-start items-center">
					<Label
						forinput="Terms"
						title="Li e aceito os termos de política e privacidade"
					/>
					<input id="Terms" type="checkbox" class="w-[22px] h-[22px] rounded-md mr-1 mt-4 border-[#707070] accent-gray  after:bg-white" :required="true">
				</div>

				<input
					id="submit"
					:class="`bg-${btncolor === 'blue' ? 'secondary' : 'primary'}-${btncolor}-${bgcolorweight}`"
					class="max-w-[116px] md:max-w-[155px] min-w-[116px] h-12 rounded-3xl font-semibold text-base md:text-lg text-white hover:brightness-125 transition-all cursor-pointer"
					type="submit"
					value="ENVIAR"
				>
			</div>
		</form>
		<transition name="modal">
			<div v-if="show" class="modal-mask fixed z-50 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] table transition-all">
				<div class="modal-wrapper table-cell align-middle">
					<div class="modal-container w-3/4 lg:w-1/4 m-auto p-5 bg-white  flex flex-col items-center rounded-3xl">
						<img src="../../static/icons/normal-colors/check-modal.svg" class="w-20">
						<p class="my-8">
							Sua mensagem foi enviada com sucesso.
						</p>
						<button class="modal-default-button min-w-[30%] max-w-[155px] h-12 rounded-3xl font-semibold text-lg text-white hover:brightness-105 transition-all bg-primary-bordo-500" @click="showModal">
							OK
						</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Label from '~/components/atoms/Label.vue';
import Input from '~/components/atoms/Input.vue';
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
	components: {
		Label,
		Input,
	},
	methods: {
		showModal () {
			const email = document.getElementById('Email') as HTMLInputElement;
			const nome = document.getElementById('Name') as HTMLInputElement;
			const assunto = document.getElementById('Subject') as HTMLInputElement;
			const mensagem = document.getElementById('Message') as HTMLInputElement;
			const emailvalue = email.value;
			const regex = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;
			if ((emailvalue !== '' && regex.test(emailvalue) === true) && nome.value !== '' && assunto.value !== '' && mensagem.value !== '') {
				this.show = !this.show;
			} else {
				alert('Verifique seu E-mail');
			};
		},
	},
	props: {
		color: {
			required: true,
			type: String,
			default: 'bordo',
			validator: (value: string) => [
				'yellow',
				'orange',
				'bordo',
				'beige',
				'blue',
			].includes(value.toLowerCase()),
		},
		bgcolorweight: {
			required: false,
			type: String,
			default: '500',
		},
		text: {
			required: false,
			type: Boolean,
			default: false,
		},
		tel: {
			required: false,
			type: Boolean,
			default: false,
		},
		telcolor: {
			required: false,
			type: String,
			default: '#991C3A',
		},
		inputbg: {
			required: false,
			type: String,
			default: 'transparent',
		},
		labelweight: {
			required: false,
			type: String,
			default: 'normal',
		},
		mensagem: {
			required: false,
			type: Boolean,
			default: false,
		},
		btncolor: {
			required: false,
			type: String,
			default: 'bordo',
		},
		bordercolor: {
			required: false,
			type: String,
			default: 'bordo',
		},
		width: {
			required: false,
			type: String,
			default: 'w-full',
		},
	},
});
</script>
