<template>
    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="localAuthor.firstName"></InputText>
    </InputGroup>

    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="localAuthor.lastName"></InputText>
    </InputGroup>

    {{ localAuthor.firstName + " " + localAuthor.lastName}}

    <Button :label="label" @click="saveAuthor()"></Button>
</template>

<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputText, Button } from 'primevue';
import type { Author } from '@/model/Author.model';
import { ref } from 'vue';

const label = "Save";
const props = defineProps<{author: Author}>();
const localAuthor = ref<Author>({ ...props.author });

const emits = defineEmits<{
    (e: 'saveAuthor', author: Author): void
}>();

function saveAuthor(){
    emits("saveAuthor", localAuthor.value);
}



</script>