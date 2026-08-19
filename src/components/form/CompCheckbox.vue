<template>
    <label class="checkbox-box">
        <input v-model="value" type="checkbox" />
        <span><slot /></span>
    </label>
</template>

<script setup lang="ts">
    const value = defineModel<boolean>({ default: false });
</script>
