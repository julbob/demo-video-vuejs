<template>
  <AuthorCard
    class="flex col"
    v-for="author in authors"
    :key="author.id"
    :author="author"
    @saveAuthor="saveAuthor($event, author.id)"
  >
  </AuthorCard>
</template>

<script setup lang="ts">
import AuthorCard from '@/components/Author/AuthorCard.vue';
import type { Author } from '@/model/Author.model';
import { ref } from 'vue';

const authors = ref<Author[]>([
  { id: 1, firstName: 'Victor', lastName: 'Hugo' },
  { id: 2, firstName: 'Jane', lastName: 'Austen' },
  { id: 3, firstName: 'Gabriel', lastName: 'García Márquez' },
  { id: 4, firstName: 'Fyodor', lastName: 'Dostoevsky' },
  { id: 5, firstName: 'Haruki', lastName: 'Murakami' },
  { id: 6, firstName: 'Chimamanda', lastName: 'Ngozi Adichie' },
  { id: 7, firstName: 'George', lastName: 'Orwell' },
  { id: 8, firstName: 'Margaret', lastName: 'Atwood' },
  { id: 9, firstName: 'J.K.', lastName: 'Rowling' },
  { id: 10, firstName: 'Albert', lastName: 'Camus' },
]);

function saveAuthor(author: Author, id: number) {
  const indexAuthor: number = authors.value.findIndex((aut) => aut.id === id);
  if (indexAuthor !== -1) {
    authors.value[indexAuthor] = author;
  }
}
</script>
