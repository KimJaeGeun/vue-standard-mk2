<template>
    <CompModal v-model="modal.show" :title="modal.title" width="440px">
        <p class="message-text">{{ modal.message }}</p>
        <template #footer>
            <CompButton v-if="modal.type === 'confirm'" variant="sub" @click="modal.onButtonClick('cancel')">
                {{ modal.buttonName.cancel }}
            </CompButton>
            <CompButton @click="modal.onButtonClick('ok')">
                {{ modal.buttonName.ok }}
            </CompButton>
        </template>
    </CompModal>
</template>

<script setup lang="ts">
    import useMessageModalStore from '@/stores/messageModal';

    const modal = useMessageModalStore();
</script>
