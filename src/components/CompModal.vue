<template>
    <Teleport to="body">
        <div v-if="model" class="modal-wrap" @click.self="closeOnBackdrop && close()">
            <section class="modal-box" :style="{ width }" role="dialog" aria-modal="true">
                <div class="title">
                    <h2>{{ title }}</h2>
                    <CompButton v-if="showClose" variant="ghost" icon aria-label="닫기" @click="close">×</CompButton>
                </div>
                <div class="message">
                    <slot />
                </div>
                <div v-if="$slots.footer" class="button-bar">
                    <slot name="footer" />
                </div>
            </section>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
    withDefaults(
        defineProps<{
            title: string;
            width?: string;
            showClose?: boolean;
            closeOnBackdrop?: boolean;
        }>(),
        {
            width: '560px',
            showClose: true,
            closeOnBackdrop: true,
        }
    );

    const model = defineModel<boolean>({ default: false });
    const close = () => {
        model.value = false;
    };
</script>
