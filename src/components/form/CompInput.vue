<template>
    <label class="input-box" :class="{ invalid }">
        <span v-if="label" class="label">{{ label }}</span>
        <input v-model="value" :type="type" :placeholder="placeholder" :disabled="disabled" />
        <span v-if="invalid && invalidMessage" class="error">{{ invalidMessage }}</span>
    </label>
</template>

<script setup lang="ts">
    withDefaults(
        defineProps<{
            label?: string;
            type?: string;
            placeholder?: string;
            disabled?: boolean;
            invalid?: boolean;
            invalidMessage?: string;
        }>(),
        {
            type: 'text',
            disabled: false,
            invalid: false,
            invalidMessage: '',
        }
    );

    const value = defineModel<string | number>({ default: '' });
</script>
