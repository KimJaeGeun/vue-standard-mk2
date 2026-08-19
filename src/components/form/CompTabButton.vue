<template>
    <div class="tab-buttons" role="tablist" :aria-label="label">
        <button
            v-for="tab in tabs"
            :key="String(tab.value)"
            type="button"
            role="tab"
            :class="{ active: model === tab.value }"
            :disabled="tab.disabled"
            :aria-selected="model === tab.value"
            @click="model = tab.value"
        >
            <span>{{ tab.label }}</span>
            <CompBadge v-if="tab.badge" size="sm" variant="gray">{{ tab.badge }}</CompBadge>
        </button>
    </div>
</template>

<script setup lang="ts">
    import CompBadge from '@/components/CompBadge.vue';
    import type { InputValue, TabOption } from '@/mappings/types/components';

    defineProps<{
        tabs: TabOption[];
        label?: string;
    }>();

    const model = defineModel<InputValue>({ default: '' });
</script>
