<script setup lang="ts">
defineProps<{ title: string; date?: Date; location?: string }>()
</script>

<template>
	<v-card class="event">
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>{{ date ? date.toLocaleDateString() : 'Unkown' }}</v-card-subtitle>
		<v-card-text>{{ location ?? 'Unknown' }}</v-card-text>
	</v-card>
</template>

<style lang="scss"></style>
