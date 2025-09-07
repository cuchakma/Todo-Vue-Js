<script setup>
    import Searchbar from './Searchbar.vue';
    import Heading from './Heading.vue';
    import { useAppStore } from '../../store/appStore';
    const data                = useAppStore();
    const { showModalAction } = data;
</script>

<template>
    <div class="modal-wrapper">
        <div class="modal-wrapper-inner">
            <Heading message="New Note"/>
            <Searchbar placeholder-text="Input yout note"/>
            <div class="modal-wrapper-group">
                <button class="modal-cancel-button" :onclick="showModalAction">Cancel</button>
                <button class="modal-cancel-apply">Apply</button>
            </div>
        </div>
    </div>
</template>