<template>
    <div>
        <ul>
            <li>{{ catalog.id }}</li>
            <li>{{ catalog.name }}</li>
            <li>{{ catalog.price }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Catalog from '@/types/Catalog.ts'
const { catalog } = defineProps<Catalog>()
</script>

<style scoped></style>