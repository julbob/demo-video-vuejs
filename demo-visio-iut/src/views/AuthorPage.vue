<template>
    <AuthorCard :author="author" @saveAuthor="saveAuthor($event)"></AuthorCard>

    <div>
 {{ author.firstName + " " + author.lastName }}
    </div>
</template>

<script setup lang="ts">
import AuthorCard from '@/components/Author/AuthorCard.vue';
import type { Author } from '@/model/Author.model';
import { ref } from 'vue';

const author = ref<Author>({ id: -1, firstName: "George", lastName: "Orwell" });

function saveAuthor(newAuthor: Author) {
    author.value = {...newAuthor};
}
</script>