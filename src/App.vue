<script setup lang="ts">
import MenuBar from '@/component/MenuBar.vue'
</script>

<template>
	<v-app>
		<menu-bar />
		<v-container class="router">
			<router-view />
		</v-container>
	</v-app>
</template>

<style lang="scss">
.router {
	margin: 4em 0 0 0;
}
</style>
