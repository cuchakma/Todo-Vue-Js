<script setup>

import Searchbar from './partials/Searchbar.vue';
import Heading from './partials/Heading.vue';
import Select from './partials/Select.vue';
import List from './partials/List.vue';
import Toggle from './partials/Toggle.vue';
import Add from './partials/Add.vue';


const options = [
  {
    label:'All',
    value:'all'
  },
  {
    label:'Option 1',
    value:'option-1'
  },
  {
    label:'Option 2',
    value:'option-1'
  },
  {
    label:'Option 3',
    value:'option-3'
  }
]

</script>

<template>
  <div class="main-wrapper">
    <Heading message="Todo List"/>
    <div class="search-wrapper">
        <Searchbar placeholder-text="Search"/>
        <Select :options="options"/>
        <Add/>
    </div>
    <List/>
  </div>
</template>