<template>
    <label class="input-box textarea-box">
        <span v-if="label" class="label">{{ label }}</span>
        <textarea v-model="value" :rows="rows" :placeholder="placeholder" />
    </label>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{ label?: string; rows?: number; placeholder?: string }>(), {
        rows: 4,
        placeholder: '',
    });

    const value = defineModel<string>({ default: '' });
</script>
