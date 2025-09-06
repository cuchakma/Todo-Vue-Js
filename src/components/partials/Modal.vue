<script setup>
    import Searchbar from './Searchbar.vue';
    import Heading from './Heading.vue';
</script>

<template>
    <div class="modal-wrapper">
        <div class="modal-wrapper-inner">
            <Heading message="New Note"/>
            <Searchbar placeholder-text="Input yout note"/>
            <div class="modal-wrapper-group">
                <button class="modal-cancel-button">Cancel</button>
                <button class="modal-cancel-apply">Apply</button>
            </div>
        </div>
    </div>
</template>