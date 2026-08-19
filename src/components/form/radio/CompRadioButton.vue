<template>
    <label class="radio-box" :class="{ disabled }">
        <input
            v-model="model"
            type="radio"
            :name="name"
            :value="value"
            :disabled="disabled"
        />
        <span class="radio-mark" aria-hidden="true"></span>
        <span class="radio-label"><slot>{{ label }}</slot></span>
    </label>
</template>

<script setup lang="ts">
    import type { InputValue } from '@/mappings/types/components';

    defineProps<{
        name: string;
        value: InputValue;
        label?: string;
        disabled?: boolean;
    }>();

    const model = defineModel<InputValue>({ default: '' });
</script>
