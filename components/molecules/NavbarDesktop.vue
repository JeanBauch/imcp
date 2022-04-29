<template>
	<nav class="hidden md:flex mx-auto">
		<ul class="flex justify-center items-center gap-7 xl:gap-12 2xl:gap-16 border-t-2 border-b-2 border-gray border-opacity-20 w-full">
			<li v-for="(item, key) in dataHeader" :key="key" class="text-white hover:text-primary-yellow-500">
				<router-link :to="{ name: item.link }">
					<h5 class="py-4 border-t-2 border-transparent hover:border-t-primary-yellow-500 expect-border-header">
						{{ item.name }}
					</h5>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			dataHeader: [
				{
					name: 'Início',
					link: 'index',
				},
				{
					name: 'Instituto',
					link: 'instituto',
				},
				{
					name: 'Escola de Música',
					link: 'utilites',
				},
				{
					name: 'Midia',
					link: 'utilites',
				},
				{
					name: 'Noticias',
					link: 'noticias',
				},
				{
					name: 'Agenda',
					link: 'utilites',
				},
				{
					name: 'Contato',
					link: 'contato',
				},
				{
					name: 'Transparência',
					link: 'utilites',
				},
			],
		};
	},
});
</script>
