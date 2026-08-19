<template>
    <div class="date-picker input-box" :class="{ invalid }">
        <span v-if="label" class="label">{{ label }}</span>
        <div v-if="range" class="date-range">
            <input
                v-model="startValue"
                type="date"
                :min="min"
                :max="endValue || max"
                :disabled="disabled"
                :placeholder="startPlaceholder"
            />
            <span class="date-separator">~</span>
            <input
                v-model="endValue"
                type="date"
                :min="startValue || min"
                :max="max"
                :disabled="disabled"
                :placeholder="endPlaceholder"
            />
        </div>
        <input
            v-else
            v-model="singleValue"
            type="date"
            :min="min"
            :max="max"
            :disabled="disabled"
            :placeholder="placeholder"
        />
        <span v-if="invalid && invalidMessage" class="error">{{ invalidMessage }}</span>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    type DateRange = [string, string];
    type DateValue = string | DateRange | null;

    const props = withDefaults(
        defineProps<{
            label?: string;
            range?: boolean;
            placeholder?: string;
            startPlaceholder?: string;
            endPlaceholder?: string;
            min?: string;
            max?: string;
            disabled?: boolean;
            invalid?: boolean;
            invalidMessage?: string;
        }>(),
        {
            range: false,
            placeholder: '날짜 선택',
            startPlaceholder: '시작일',
            endPlaceholder: '종료일',
            disabled: false,
            invalid: false,
            invalidMessage: '',
        }
    );

    const model = defineModel<DateValue>({ default: null });

    const singleValue = computed({
        get: () => (typeof model.value === 'string' ? model.value : ''),
        set: (value: string) => {
            model.value = value || null;
        },
    });

    const startValue = computed({
        get: () => (Array.isArray(model.value) ? model.value[0] : ''),
        set: (value: string) => {
            const end = Array.isArray(model.value) ? model.value[1] : '';
            model.value = value || end ? [value, end] : null;
        },
    });

    const endValue = computed({
        get: () => (Array.isArray(model.value) ? model.value[1] : ''),
        set: (value: string) => {
            const start = Array.isArray(model.value) ? model.value[0] : '';
            model.value = start || value ? [start, value] : null;
        },
    });
</script>
