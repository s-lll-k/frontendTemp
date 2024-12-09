<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
    <h1 :class="['class', { 'dynamyc-class': true }]">{{ count }}</h1>
</template>

<style scoped lang="scss"></style>
