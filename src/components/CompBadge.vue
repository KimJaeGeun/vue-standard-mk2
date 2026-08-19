<template>
    <span class="comp-badge" :class="[variant, size]">
        <slot>{{ label }}</slot>
    </span>
</template>

<script setup lang="ts">
    withDefaults(
        defineProps<{
            label?: string;
            variant?: 'main' | 'success' | 'warning' | 'danger' | 'gray';
            size?: 'sm' | 'md';
        }>(),
        {
            label: '',
            variant: 'main',
            size: 'md',
        }
    );
</script>
