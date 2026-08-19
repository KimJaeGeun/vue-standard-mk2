<template>
    <main class="login-view">
        <form class="login-box" @submit.prevent="onSubmit">
            <div class="login-head">
                <h1>vsmk2</h1>
                <p>Standard admin project</p>
            </div>
            <CompInput v-model="form.email" label="이메일" type="email" placeholder="admin@example.com" />
            <CompInput v-model="form.password" label="비밀번호" type="password" placeholder="password" />
            <CompCheckbox v-model="form.remember">로그인 유지</CompCheckbox>
            <CompButton type="submit">로그인</CompButton>
        </form>
    </main>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const form = reactive({
        email: 'admin@example.com',
        password: 'password',
        remember: true,
    });

    const onSubmit = () => router.push({ name: 'main' });
</script>
