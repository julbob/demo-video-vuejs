<template>
    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="author.firstName"></InputText>
    </InputGroup>

    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="author.lastName"></InputText>
    </InputGroup>

    {{ "Author card :" + author.firstName + " " + author.lastName}}

</template>

<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputText } from 'primevue';
import type { Author } from '@/model/Author.model';

const author = defineModel<Author>('author', {required: true});

</script>