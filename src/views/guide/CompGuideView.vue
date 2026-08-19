<template>
    <section class="page-stack">
        <div class="page-title">
            <h1>컴포넌트 가이드</h1>
            <p>공통 폼 컴포넌트와 기본 유틸 사용 예시입니다.</p>
        </div>

        <div class="guide-grid">
            <article class="guide-section">
                <h2>셀렉트 박스</h2>
                <CompSelectBox
                    v-model="form.select"
                    label="상태"
                    placeholder="상태 선택"
                    :options="statusOptions"
                />
                <div class="guide-value">value: {{ form.select }}</div>
            </article>

            <article class="guide-section">
                <h2>라디오 버튼</h2>
                <CompRadioGroup
                    v-model="form.radio"
                    name="guideRadio"
                    label="공개 여부"
                    :options="radioOptions"
                />
                <div class="guide-value">value: {{ form.radio }}</div>
            </article>

            <article class="guide-section">
                <h2>데이트피커</h2>
                <CompDatePicker v-model="form.date" label="단일 날짜" />
                <CompDatePicker v-model="form.range" label="기간" range />
                <div class="guide-value">date: {{ form.date || '-' }} / range: {{ rangeText }}</div>
            </article>

            <article class="guide-section">
                <h2>뱃지</h2>
                <div class="guide-row">
                    <CompBadge>진행중</CompBadge>
                    <CompBadge variant="success">완료</CompBadge>
                    <CompBadge variant="warning">대기</CompBadge>
                    <CompBadge variant="danger">실패</CompBadge>
                    <CompBadge variant="gray">비활성</CompBadge>
                </div>
            </article>

            <article class="guide-section">
                <h2>툴팁</h2>
                <div class="guide-row">
                    <span>업로드 정책</span>
                    <CompTooltip text="10MB 이하의 이미지 파일만 등록할 수 있습니다." />
                    <CompTooltip position="right">
                        상세 설명은 슬롯으로 넣을 수 있습니다.
                    </CompTooltip>
                </div>
            </article>

            <article class="guide-section">
                <h2>파일 업로드</h2>
                <CompUploadFile accept="image/*" @upload="onUpload" />
                <div class="guide-value">file: {{ uploadedFileName }}</div>
            </article>

            <article class="guide-section">
                <h2>탭 버튼</h2>
                <CompTabButton v-model="form.tab" :tabs="tabOptions" label="가이드 탭" />
                <div class="guide-value">value: {{ form.tab }}</div>
            </article>

            <article class="guide-section">
                <h2>기본 유틸</h2>
                <div class="guide-value">
                    {{ utilExample }}
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, reactive, ref } from 'vue';
    import type { InputOption, Option, TabOption } from '@/mappings/types/components';
    import formatDate from '@/utils/date/format';
    import isEmpty from '@/utils/isEmpty';
    import toCamelCase from '@/utils/string/toCamelCase';
    import toSnakeCase from '@/utils/string/toSnakeCase';
    import formatNumber from '@/utils/number/form';

    const statusOptions: Option[] = [
        { label: '활성', value: 'active' },
        { label: '대기', value: 'pending' },
        { label: '비활성', value: 'disabled', disabled: true },
    ];

    const radioOptions: InputOption[] = [
        { label: '공개', value: 'public' },
        { label: '비공개', value: 'private' },
    ];

    const tabOptions: TabOption[] = [
        { label: '전체', value: 'all' },
        { label: '검수', value: 'review', badge: '3' },
        { label: '완료', value: 'done' },
    ];

    const form = reactive({
        select: 'active',
        radio: 'public',
        date: formatDate(new Date()),
        range: ['', ''] as [string, string],
        tab: 'all',
    });

    const uploadedFileName = ref('-');
    const rangeText = computed(() => form.range.filter(Boolean).join(' ~ ') || '-');
    const utilExample = computed(
        () =>
            [
                `isEmpty([]): ${isEmpty([])}`,
                `toCamelCase('user_name'): ${toCamelCase('user_name')}`,
                `toSnakeCase('userName'): ${toSnakeCase('userName')}`,
                `formatNumber(1234567): ${formatNumber(1234567)}`,
            ].join(' / ')
    );

    const onUpload = (files: File | File[] | null) => {
        if (Array.isArray(files)) {
            uploadedFileName.value = files.map((file) => file.name).join(', ') || '-';
            return;
        }

        uploadedFileName.value = files?.name || '-';
    };
</script>
