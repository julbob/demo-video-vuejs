<template>
    <div class="flex gap-3">
        <InputGroup class="w-3">
            <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
            <InputText v-model="localAuthor.firstName"></InputText>
        </InputGroup>

        <InputGroup class="w-3">
            <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
            <InputText v-model="localAuthor.lastName"></InputText>
        </InputGroup>


        <Button v-if="localAuthor.firstName !== author.firstName || localAuthor.lastName !== author.lastName"
            :label="label" @click="emits('save:author', localAuthor)"></Button>
    </div>
</template>

<script setup lang="ts">
import type { AuthorModel } from '@/models/Author.model';
import { InputGroup, InputGroupAddon, InputText, Button } from 'primevue';
import { ref } from 'vue';

const props = defineProps<{ author: AuthorModel }>();
const emits = defineEmits(["save:author"]);
const localAuthor = ref({ ...props.author });
const label = "Sauvegarde";
</script>
