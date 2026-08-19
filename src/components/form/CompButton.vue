<template>
    <button class="comp-button" :class="[variant, { icon }]" :type="type" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
    withDefaults(
        defineProps<{
            type?: 'submit' | 'button' | 'reset';
            variant?: 'main' | 'sub' | 'ghost' | 'danger';
            disabled?: boolean;
            icon?: boolean;
        }>(),
        {
            type: 'button',
            variant: 'main',
            disabled: false,
            icon: false,
        }
    );
</script>
