<template>
    <div class="pagination">
        <CompButton variant="sub" :disabled="page <= 1" @click="emit('update:page', page - 1)">이전</CompButton>
        <span>{{ page }} / {{ totalPage }}</span>
        <CompButton variant="sub" :disabled="page >= totalPage" @click="emit('update:page', page + 1)">다음</CompButton>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        page: number;
        totalPage: number;
    }>();

    const emit = defineEmits<{
        'update:page': [page: number];
    }>();
</script>
