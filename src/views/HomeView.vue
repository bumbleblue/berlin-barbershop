<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
	<div id="home-view">
		<h1>{{ t('home.title') }}</h1>
		<p v-for="(spiel, idx) in tm('home.spiel')" :key="idx">{{ spiel }}</p>
	</div>
</template>

<style lang="scss">
#home-view {
	h1 {
		text-align: center;
	}
}
</style>
