<script setup>

import Wrapper from '../Wrapper.vue';

import { ref } from 'vue';

defineProps({
    placeholderText:{
        type: String,
        required:true,
        default:'Search'
    }
})

</script>

<template>
    <input id="partials-search-bar" class="partials-search-bar" type="text" :placeholder="placeholderText" />
</template>

