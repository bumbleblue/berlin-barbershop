<script setup lang="ts">
import EventCard from '@/component/EventCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
	<div id="event-view">
		<h1>{{ t('event.title') }}</h1>
		<v-container class="event-container">
			<event-card :title="t('event.bbb2027.title')" />
		</v-container>
	</div>
</template>

<style lang="scss">
#event-view {
	h1 {
		text-align: center;
	}
	.event-container {
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
		gap: 8px;
	}
}
</style>
