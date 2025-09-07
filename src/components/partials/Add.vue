<script setup>
    const props = defineProps({
        onclick: {
            type: Function,
        }
    });
    const { onclick } = props;
</script>

<template>
    <div class="add-icon" :onclick="onclick">
        <i class="pi pi-plus" style="font-size: 1rem"></i>
    </div>
</template>