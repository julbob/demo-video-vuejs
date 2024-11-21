<template>
    <div v-for="author in authors" :key="author.id">
        <AuthorCard :author="author" @save:author="save($event, author.id)"></AuthorCard>

        <div>{{ author.firstName + " " + author.lastName }} </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthorCard from './components/AuthorCard.vue';
import type { AuthorModel } from './models/Author.model';


const authors = ref<AuthorModel[]>([
    { "id": 1, "firstName": "Victor", "lastName": "Hugo" },
    { "id": 2, "firstName": "Mary", "lastName": "Shelley" },
    { "id": 3, "firstName": "Jules", "lastName": "Verne" },
    { "id": 4, "firstName": "Emily", "lastName": "Dickinson" },
    { "id": 5, "firstName": "William", "lastName": "Shakespeare" },
    { "id": 6, "firstName": "Agatha", "lastName": "Christie" },
    { "id": 7, "firstName": "Leo", "lastName": "Tolstoy" },
    { "id": 8, "firstName": "Franz", "lastName": "Kafka" },
    { "id": 9, "firstName": "Fyodor", "lastName": "Dostoevsky" },
    { "id": 10, "firstName": "Charlotte", "lastName": "Bronte" }
]

);

function save(event: AuthorModel, id: number) {
    const index = authors.value.findIndex(aut => aut.id === id);

    if (index !== undefined) {
        authors.value[index] = { ...event };
    }
}
</script>
