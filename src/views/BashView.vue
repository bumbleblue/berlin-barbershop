<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
	<div id="bash-view">
		<h1>{{ t('bash.title') }}</h1>
		<p v-for="(spiel, idx) in tm('bash.spiel')" :key="idx">{{ spiel }}</p>
		<p>
			<a>{{ t('bash.interest_form') }}</a>
			<br />
			<a>{{ t('bash.newsletter') }}</a>
		</p>
	</div>
</template>

<style lang="scss">
#bash-view {
	h1 {
		text-align: center;
	}
}
</style>
