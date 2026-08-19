<template>
    <section class="page-stack">
        <div class="page-title">
            <h1>테이블 목록</h1>
            <p>디폴트 유저 목록과 유저정보 편집 모달입니다.</p>
        </div>
        <CompTable>
            <template #th>
                <th>ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>권한</th>
                <th>상태</th>
                <th>관리</th>
            </template>
            <tr v-for="user in pagedUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td><CompButton variant="sub" @click="openEdit(user)">편집</CompButton></td>
            </tr>
        </CompTable>
        <CompPagination v-model:page="page" :total-page="totalPage" />
        <CompModal v-model="isEditOpen" title="유저정보 편집" width="520px">
            <div v-if="editingUser" class="form-grid">
                <CompInput v-model="editingUser.name" label="이름" />
                <CompInput v-model="editingUser.email" label="이메일" />
                <CompSelectBox v-model="editingUser.role" label="권한" :options="roleOptions" />
                <CompSelectBox v-model="editingUser.status" label="상태" :options="statusOptions" />
            </div>
            <template #footer>
                <CompButton variant="sub" @click="isEditOpen = false">취소</CompButton>
                <CompButton @click="saveUser">저장</CompButton>
            </template>
        </CompModal>
    </section>
</template>

<script setup lang="ts">
    import { computed, reactive, ref } from 'vue';
    import useMessageModalStore from '@/stores/messageModal';

    type User = { id: number; name: string; email: string; role: string; status: string };

    const messageModal = useMessageModalStore();
    const users = reactive<User[]>([
        { id: 1, name: '김민준', email: 'minjun@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: '이서연', email: 'seoyeon@example.com', role: 'Manager', status: 'Active' },
        { id: 3, name: '박도윤', email: 'doyun@example.com', role: 'User', status: 'Pending' },
        { id: 4, name: '최하린', email: 'harin@example.com', role: 'User', status: 'Inactive' },
        { id: 5, name: '정지호', email: 'jiho@example.com', role: 'Manager', status: 'Active' },
        { id: 6, name: '한유진', email: 'yujin@example.com', role: 'User', status: 'Active' },
    ]);
    const roleOptions = ['Admin', 'Manager', 'User'].map((value) => ({ label: value, value }));
    const statusOptions = ['Active', 'Pending', 'Inactive'].map((value) => ({ label: value, value }));
    const page = ref(1);
    const pageSize = 5;
    const isEditOpen = ref(false);
    const editingUser = ref<User | null>(null);
    const totalPage = computed(() => Math.ceil(users.length / pageSize));
    const pagedUsers = computed(() => users.slice((page.value - 1) * pageSize, page.value * pageSize));

    const openEdit = (user: User) => {
        editingUser.value = { ...user };
        isEditOpen.value = true;
    };
    const saveUser = () => {
        const nextUser = editingUser.value;
        if (!nextUser) return;
        const index = users.findIndex((user) => user.id === nextUser.id);
        if (index >= 0) users[index] = nextUser;
        isEditOpen.value = false;
        messageModal.open({ title: '저장 완료', message: '유저정보가 저장되었습니다.' });
    };
</script>
