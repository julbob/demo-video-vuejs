<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const text = ref<string>('');
const label = "Reset";
const textDefault = "Texte initialisé";

const isResetComputed = computed(() => {
  console.log("Appel compute isReset");
  return text.value === textDefault;
})

function intialisation() {
  text.value = textDefault;
}

function isReset(): boolean {
  console.log("Appel fonction isReset");
  return text.value === textDefault;
}

watch(isResetComputed, (newValue, oldValue) => {
    console.log("Changement isResetComputed ", newValue, oldValue);
})

</script>

<template>
  <div>
    <InputText v-model="text"></InputText>
    {{ text }}
  </div>s
  <div v-if="isReset()">Initialisé</div>
  <div v-if="isResetComputed">Initialisé compute</div>
  <Button :label="label" @click="intialisation()"></Button>
</template>
