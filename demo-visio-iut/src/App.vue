<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const text = ref<string>('');
const label = "Reset";

function intialisation() {
  text.value = "Texte initialisé";
}
</script>

<template>
  <div>
    <InputText v-model="text"></InputText>
    {{ text }}

    <Button :label="label" @click="intialisation()"></Button>
  </div>
</template>
