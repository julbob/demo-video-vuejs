<template>
    <div class="flex gap-3">
        <InputGroup class="w-3">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="localAuthor.firstName"></InputText>
        </InputGroup>

        <InputGroup class="w-3">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="localAuthor.lastName"></InputText>
        </InputGroup>
        <Button :class="computeButtonClass()" class="width-button" :label="label" @click="saveAuthor()"></Button>
    </div>

</template>

<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputText, Button } from 'primevue';
import type { Author } from '@/model/Author.model';
import { computed, ref } from 'vue';

const label = "Save";
const props = defineProps<{author: Author}>();
const localAuthor = ref<Author>({ ...props.author });

const emits = defineEmits<{
    (e: 'saveAuthor', author: Author): void
}>();

const isReset = computed(() => {
    return props.author.firstName === localAuthor.value.firstName && props.author.lastName === localAuthor.value.lastName;
})
function saveAuthor(){
    emits("saveAuthor", localAuthor.value);
}

function computeButtonClass(){
    return isReset.value ? 'background-red': '';
}
</script>

<style scoped>
.background-red {
    background-color: red;
}

.width-button {
    width: 100px;
}
</style>