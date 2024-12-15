<template>
    <Menubar :model="items"></Menubar>
</template>

<script setup lang="ts">
import { Menubar } from 'primevue';
import { ref } from 'vue';
import router from '@/router';


const items = ref([
    { 
        label: 'Auteur',
        icon: 'pi pi-user',
        command : () => router.push('/authors')
    }
])
</script>