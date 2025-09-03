<script setup>

import Searchbar from './partials/Searchbar.vue';
import Heading from './partials/Heading.vue';
import Select from './partials/Select.vue';
import List from './partials/List.vue';

</script>

<template>
  <div class="main-wrapper">
    <Heading message="Todo List"/>
    <div class="search-wrapper">
        <Searchbar/>
        <Select/>
    </div>
    <List/>
  </div>
</template>