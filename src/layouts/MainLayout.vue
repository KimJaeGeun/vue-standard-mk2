<template>
    <div v-if="isLogin" id="wrap" class="login-layout">
        <RouterView />
    </div>
    <div v-else id="wrap" class="main-layout" :class="{ 'mobile-hide': isMobile && !isSideOpen }">
        <SideLayout />
        <button
            v-if="isMobile && isSideOpen"
            type="button"
            class="side-backdrop"
            aria-label="사이드 메뉴 닫기"
            @click="mobile.closeSide"
        />
        <div class="container" :class="{ 'mobile-show': isMobile && isSideOpen }">
            <HeaderLayout />
            <div class="contents">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onBeforeUnmount, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { storeToRefs } from 'pinia';

    import useMobileStore from '@/stores/mobile';
    import HeaderLayout from '@/layouts/HeaderLayout.vue';
    import SideLayout from '@/layouts/SideLayout.vue';

    const route = useRoute();
    const mobile = useMobileStore();
    const { isMobile, isSideOpen } = storeToRefs(mobile);
    const isLogin = computed(() => route.name === 'login');

    const syncSize = () => mobile.sync(window.innerWidth);

    onMounted(() => {
        syncSize();
        window.addEventListener('resize', syncSize);
    });
    onBeforeUnmount(() => window.removeEventListener('resize', syncSize));
</script>
