<template>
	<q-page padding>
		<div class="q-my-xl text-center">
			<div class="text-h4">All Courses</div>
			<p class="q-mt-sm text-grey-8">웹 개발 입문부터 실천까지 학습</p>
		</div>
		<div class="row q-col-gutter-lg">
			<div v-for="i in 6" :key="i" class="col-12 col-md-4 col-sm-6">
				<!-- <course-card /> -->
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
