<template>
    <div
        class="upload-file"
        :class="{ dragging: isDragging, disabled }"
        @dragenter.prevent="onDragEnter"
        @dragover.prevent="onDragEnter"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
    >
        <input
            ref="fileInput"
            class="upload-native"
            type="file"
            :accept="accept"
            :multiple="multiple"
            :disabled="disabled"
            @change="onChange"
        />
        <CompButton variant="sub" :disabled="disabled" @click="openDialog">파일 선택</CompButton>
        <div class="upload-info">
            <strong>{{ fileText || placeholder }}</strong>
            <small v-if="multiple && files.length">등록된 파일 수: {{ files.length }}</small>
        </div>
        <CompButton v-if="files.length" variant="ghost" :disabled="disabled" @click="clear">
            삭제
        </CompButton>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import CompButton from '@/components/form/CompButton.vue';

    const props = withDefaults(
        defineProps<{
            accept?: string;
            multiple?: boolean;
            disabled?: boolean;
            placeholder?: string;
        }>(),
        {
            accept: '',
            multiple: false,
            disabled: false,
            placeholder: '파일을 선택하거나 끌어오세요.',
        }
    );

    const emit = defineEmits<{
        upload: [files: File | File[] | null];
    }>();

    const fileInput = ref<HTMLInputElement | null>(null);
    const files = ref<File[]>([]);
    const isDragging = ref(false);

    const fileText = computed(() => files.value.map((file) => file.name).join(', '));

    const matchesAccept = (file: File) => {
        if (!props.accept) return true;

        return props.accept.split(',').some((item) => {
            const accept = item.trim().toLowerCase();
            if (!accept) return true;
            if (accept.startsWith('.')) return file.name.toLowerCase().endsWith(accept);
            if (accept.endsWith('/*')) return file.type.toLowerCase().startsWith(accept.slice(0, -1));
            return file.type.toLowerCase() === accept;
        });
    };

    const setFiles = (nextFiles: FileList | File[]) => {
        const validFiles = Array.from(nextFiles).filter(matchesAccept);
        files.value = props.multiple ? validFiles : validFiles.slice(0, 1);
        emit('upload', props.multiple ? files.value : files.value[0] || null);
    };

    const openDialog = () => fileInput.value?.click();
    const clear = () => {
        files.value = [];
        if (fileInput.value) fileInput.value.value = '';
        emit('upload', props.multiple ? [] : null);
    };
    const onChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files) setFiles(input.files);
    };
    const onDragEnter = () => {
        if (!props.disabled) isDragging.value = true;
    };
    const onDragLeave = () => {
        isDragging.value = false;
    };
    const onDrop = (event: DragEvent) => {
        isDragging.value = false;
        if (!props.disabled && event.dataTransfer?.files) setFiles(event.dataTransfer.files);
    };
</script>
