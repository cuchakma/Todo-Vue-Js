<script setup>

defineProps({
    message: {
        type: String,
        required:true
    }
});

</script>


<template>
    <h2 class="todo-heading">{{ message }}</h2>
</template>