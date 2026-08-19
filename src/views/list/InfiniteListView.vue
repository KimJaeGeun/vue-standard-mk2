<template>
    <section class="page-stack">
        <div class="page-title">
            <h1>무한 스크롤 목록</h1>
            <p>스크롤 하단 도달 시 샘플 항목을 추가합니다.</p>
        </div>
        <CompInfiniteScroll :is-loading="isLoading" :has-more="hasMore" @load-more="loadMore">
            <article v-for="item in items" :key="item.id" class="list-row">
                <strong>{{ item.title }}</strong>
                <span>{{ item.description }}</span>
                <small>{{ item.createdAt }}</small>
            </article>
        </CompInfiniteScroll>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const makeItem = (id: number) => ({
        id,
        title: '목록 항목 ' + id,
        description: '표준 무한 스크롤 컴포넌트 샘플 데이터입니다.',
        createdAt: '2026-07-16',
    });

    const items = ref(Array.from({ length: 18 }, (_, index) => makeItem(index + 1)));
    const isLoading = ref(false);
    const hasMore = ref(true);

    const loadMore = () => {
        if (isLoading.value || !hasMore.value) return;
        isLoading.value = true;
        window.setTimeout(() => {
            const start = items.value.length + 1;
            items.value.push(...Array.from({ length: 8 }, (_, index) => makeItem(start + index)));
            hasMore.value = items.value.length < 50;
            isLoading.value = false;
        }, 300);
    };
</script>
