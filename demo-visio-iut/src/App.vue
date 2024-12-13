<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
const text = ref<string>('');
</script>

<template>
  <div>
    <InputText v-model="text"></InputText>
    {{ text }}
  </div>
</template>
