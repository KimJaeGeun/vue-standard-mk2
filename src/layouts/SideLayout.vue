<template>
    <aside id="sideNav" :class="{ 'mobile-hide': isMobile && !isSideOpen }">
        <div class="side">
            <RouterLink class="logo" :to="{ name: 'main' }">vsmk2</RouterLink>
            <Navigation />
        </div>
    </aside>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    import useMobileStore from '@/stores/mobile';
    import Navigation from '@/layouts/Navigation.vue';

    const mobile = useMobileStore();
    const { isMobile, isSideOpen } = storeToRefs(mobile);
</script>
