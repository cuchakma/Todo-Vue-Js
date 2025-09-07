<script setup>
  import Wrapper from './components/Wrapper.vue';
  import Modal from './components/partials/Modal.vue';
  import 'primeicons/primeicons.css';
  import { useAppStore } from './store/appStore';
  const data = useAppStore();
  
</script>

<template>
  <Wrapper/>
  <Modal v-show="data.showModal"/>
</template>
