<template>
    <div ref="rootElement" class="infinite-host" :style="{ maxHeight }">
        <slot />
        <p v-if="isLoading" class="status loading">Loading...</p>
        <p v-else-if="!hasMore" class="status">마지막 항목입니다.</p>
    </div>
</template>

<script setup lang="ts">
    import { onBeforeUnmount, onMounted, ref } from 'vue';

    withDefaults(
        defineProps<{
            isLoading?: boolean;
            hasMore?: boolean;
            maxHeight?: string;
        }>(),
        {
            isLoading: false,
            hasMore: true,
            maxHeight: '620px',
        }
    );

    const emit = defineEmits<{
        'load-more': [];
    }>();

    const rootElement = ref<HTMLElement | null>(null);

    const onScroll = () => {
        const element = rootElement.value;
        if (!element) return;
        if (element.scrollTop + element.clientHeight >= element.scrollHeight - 4) {
            emit('load-more');
        }
    };

    onMounted(() => rootElement.value?.addEventListener('scroll', onScroll, { passive: true }));
    onBeforeUnmount(() => rootElement.value?.removeEventListener('scroll', onScroll));
</script>
