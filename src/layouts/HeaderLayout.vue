<template>
    <header id="header">
        <button v-if="isMobile" type="button" class="menu-button" @click="mobile.openSide">☰</button>
        <div class="header-title">
            <strong>{{ currentTitle }}</strong>
            <span>standard frontend</span>
        </div>
        <RouterLink class="login-link" :to="{ name: 'login' }">로그인</RouterLink>
    </header>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { storeToRefs } from 'pinia';

    import useMobileStore from '@/stores/mobile';
    import { menus } from '@/mappings/menus';

    const route = useRoute();
    const mobile = useMobileStore();
    const { isMobile } = storeToRefs(mobile);
    const currentTitle = computed(() => menus.find((menu) => menu.name === route.name)?.label ?? '메인');
</script>
