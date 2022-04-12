<template>
	<div class="h-screen bg-background md:bg-black">
		<Header />
		<section
			class="bg-background flex flex-col items-center justify-center theme-imcp"
		>
			<div class="container grid grid-cols-1 justify-items-center">
				<p class="w-11/12 lg:w-9/12 my-8 text-xs">
					Início <bold>></bold> <span class="text-gray">Contato</span>
				</p>
				<h1 class="text-6xl font-semibold text-primary-orange-500">
					Contato
				</h1>
				<span class="my-8">Separador...</span>
				<div class="flex flex-col flex-wrap  lg:flex-row justify-center lg:justify-around w-11/12 xl:w-9/12">
					<Form />

					<div class="w-full lg:max-w-md flex flex-row lg:flex-col flex-wrap justify-around">
						<div class="grid grid-cols-1 lg:grid-cols-2 text-center justify-items-center">
							<i class="w-20 lg:w-52 h-20 lg:h-52 "><img src="../static/icons/large-colors/phone.svg" alt="" srcset=""></i>
							<span class="flex flex-col justify-center lg:text-left">
								<h2 class="font-semibold text-3xl lg:text-4xl pt-4 pb-2 lg:pb-4 lg:pt-0">Telefones</h2>
								<p>55 (24) 21044100</p>
								<p>55 (24) 21044100</p>
							</span>
						</div>
						<div class="grid grid-cols-1 lg:grid-cols-2 text-center justify-items-center lg:mb-16">
							<i class="w-20 lg:w-52 h-20 lg:h-52 "><img src="../static/icons/large-colors/local-icon.svg" alt="" srcset=""></i>
							<span class="flex flex-col justify-center lg:text-left">
								<h2 class="font-semibold text-3xl lg:text-4xl pt-4 pb-2 lg:pb-4 lg:pt-0">Telefones</h2>
								<p>55 (24) 21044100</p>
								<p>55 (24) 21044100</p>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full my-10">
				<img src="../static/maps/maps2x.png" alt="" srcset="">
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/organisms/Header.vue';
import Form from '~/components/molecules/Form.vue';
export default Vue.extend({
	name: 'ContactPage',
	components: {
		Header,
		Form,
	},
});
</script>
