<template>
    <nav class="navigation">
        <RouterLink v-for="menu in menus" :key="menu.name" :to="{ name: menu.name }" @click="mobile.closeSide">
            {{ menu.label }}
        </RouterLink>
    </nav>
</template>

<script setup lang="ts">
    import useMobileStore from '@/stores/mobile';
    import { menus } from '@/mappings/menus';

    const mobile = useMobileStore();
</script>
