<template>
	<q-card class="my-card">
		<img :src="$props.thumbnail" />

		<q-card-section>
			<div class="text-h6 ellipsis">{{ $props.title }}</div>
			<div class="text-subtitle2 ellipsis text-grey-8">{{ $props.subTitle }}</div>
		</q-card-section>
	</q-card>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		thumbnail?: string
		title: string
		subTitle: string
	}>(),
	{
		thumbnail: ''
	}
)

defineEmits(['click'])
</script>
