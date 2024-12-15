<template>
    <div class="flex gap-3">
        <InputText v-model="user.username"></InputText>
        <InputText v-model="user.password"></InputText>
        <Button :label="label" @click="getUserConnecte()"></Button>
    </div>
</template>

<script setup lang="ts">
import { InputText, Button } from 'primevue';
import type { User } from '@/model/User.model';
import { ref } from 'vue';
import { useUserConnecteService } from '@/composables/user/userConnecteService';
import { useUserService } from '@/composables/user/userService';

const { authenticate } = useUserService();
const { userConnecte } = useUserConnecteService();
const user = ref<User>({id: -1, username: '', password: ''});
const label = "Connect";

async function getUserConnecte() {
    userConnecte.value = await authenticate(user.value);
}
</script>