<template>
    <label class="input-box select-box" :class="{ invalid }">
        <span v-if="label" class="label">{{ label }}</span>
        <select v-model="value" :disabled="disabled">
            <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
            <option
                v-for="option in options"
                :key="String(option.value)"
                :value="option.value"
                :disabled="option.disabled"
            >
                {{ option.label }}
            </option>
        </select>
        <span v-if="invalid && invalidMessage" class="error">{{ invalidMessage }}</span>
    </label>
</template>

<script setup lang="ts">
    import type { Option, SelectValue } from '@/mappings/types/components';

    withDefaults(
        defineProps<{
            label?: string;
            options: Option[];
            placeholder?: string;
            disabled?: boolean;
            invalid?: boolean;
            invalidMessage?: string;
        }>(),
        {
            placeholder: '',
            disabled: false,
            invalid: false,
            invalidMessage: '',
        }
    );

    const value = defineModel<SelectValue>({ default: '' });
</script>
