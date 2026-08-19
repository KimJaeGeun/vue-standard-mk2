<template>
    <section class="page-stack">
        <div class="page-title">
            <h1>메인</h1>
            <p>AVIP 전용 기능을 제외한 표준 관리자 시작 화면입니다.</p>
        </div>
        <div class="metric-grid">
            <article v-for="item in metrics" :key="item.label" class="metric-card">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
                <small>{{ item.caption }}</small>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metrics = [
        { label: 'Users', value: '1,248', caption: '활성 사용자' },
        { label: 'Sessions', value: '3,912', caption: '오늘 접속' },
        { label: 'Tasks', value: '86%', caption: '처리율' },
    ];
</script>
