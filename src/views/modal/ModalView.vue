<template>
    <section class="page-stack">
        <div class="page-title">
            <h1>모달</h1>
            <p>메세지 모달과 기본 모달 샘플입니다.</p>
        </div>
        <div class="action-row">
            <CompButton @click="openAlert">메세지 모달</CompButton>
            <CompButton variant="sub" @click="openConfirm">확인 모달</CompButton>
            <CompButton variant="ghost" @click="isBasicOpen = true">기본 모달</CompButton>
        </div>
        <CompModal v-model="isBasicOpen" title="기본 모달">
            <div class="form-grid">
                <CompInput v-model="basicForm.title" label="제목" />
                <CompTextarea v-model="basicForm.memo" label="메모" />
            </div>
            <template #footer>
                <CompButton variant="sub" @click="isBasicOpen = false">닫기</CompButton>
                <CompButton @click="submitBasic">적용</CompButton>
            </template>
        </CompModal>
    </section>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import useMessageModalStore from '@/stores/messageModal';

    const messageModal = useMessageModalStore();
    const isBasicOpen = ref(false);
    const basicForm = reactive({
        title: '기본 모달',
        memo: '슬롯 기반으로 원하는 컨텐츠를 배치합니다.',
    });

    const openAlert = () => messageModal.open({ title: '메세지', message: '표준 메세지 모달입니다.' });
    const openConfirm = () =>
        messageModal.open({ title: '확인', type: 'confirm', message: '작업을 진행하시겠습니까?' });
    const submitBasic = () => {
        isBasicOpen.value = false;
        messageModal.open({ title: '적용 완료', message: basicForm.title + ' 내용이 적용되었습니다.' });
    };
</script>
