<template>
    <span class="tooltip" :class="position">
        <slot name="trigger">
            <button type="button" class="tooltip-trigger" aria-label="도움말">?</button>
        </slot>
        <span class="tooltip-panel" role="tooltip">
            <slot>{{ text }}</slot>
        </span>
    </span>
</template>

<script setup lang="ts">
    withDefaults(
        defineProps<{
            text?: string;
            position?: 'top' | 'bottom' | 'left' | 'right';
        }>(),
        {
            text: '',
            position: 'top',
        }
    );
</script>
