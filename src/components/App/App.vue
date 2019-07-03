<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Welcome to my starter !',
    };
  },
};
</script>

<style>
  @import '../../assets/css/bootstrap.min.css';
  @import '../../assets/css/animate.css';
</style>
