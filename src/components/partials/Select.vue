<script setup>
const props = defineProps({
    options:{
        type:Array,
        required:true
    }
});

const {options} = props;

</script>

<template>
    <select id="select-field-wrapper" class="select-field-wrapper">
        <template v-for="value in options">
            <option :value="value['value']">{{ value['label'] }}</option>
        </template>
    </select>
</template>

