<template>
    <fieldset class="radio-group" :class="{ invalid }">
        <legend v-if="label" class="label">{{ label }}</legend>
        <div class="radio-list" :class="direction">
            <CompRadioButton
                v-for="option in options"
                :key="String(option.value)"
                v-model="model"
                :name="name"
                :value="option.value"
                :label="option.label"
                :disabled="option.disabled"
            />
        </div>
        <span v-if="invalid && invalidMessage" class="error">{{ invalidMessage }}</span>
    </fieldset>
</template>

<script setup lang="ts">
    import type { InputOption, InputValue } from '@/mappings/types/components';
    import CompRadioButton from '@/components/form/radio/CompRadioButton.vue';

    withDefaults(
        defineProps<{
            name: string;
            options: InputOption[];
            label?: string;
            direction?: 'row' | 'column';
            invalid?: boolean;
            invalidMessage?: string;
        }>(),
        {
            direction: 'row',
            invalid: false,
            invalidMessage: '',
        }
    );

    const model = defineModel<InputValue>({ default: '' });
</script>
