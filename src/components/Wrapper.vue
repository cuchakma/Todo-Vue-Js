<script setup>

import Searchbar from './partials/Searchbar.vue';
import Heading from './partials/Heading.vue';
import Select from './partials/Select.vue';
import List from './partials/List.vue';
import Toggle from './partials/Toggle.vue';
import Add from './partials/Add.vue';
import { useAppStore } from '../store/appStore';


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
];

const data                = useAppStore();
const { showModalAction } = data;

</script>

<template>
  <div class="main-wrapper">
    <Heading message="Todo List"/>
    <div class="search-wrapper">
        <Searchbar placeholder-text="Search"/>
        <Select :options="options"/>
        <Add :onclick="showModalAction"/>
    </div>
    <List/>
  </div>
</template>