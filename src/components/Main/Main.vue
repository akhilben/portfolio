<template>
    <section class="main-content" v-bind:class="mainBg">
      <!-- <p class="copyright">© Copyright 2019, Akhil Ben.</p> -->
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="blob3"></div>
      <div class="inner-card" v-bind:class="mainBg" v-observe-visibility="mainPageVisible">
        <main-menu :currentPage="currentPage" :mainPageVisibility="mainPageVisibility" @scrollToPage="scrollToPage"></main-menu>
        <!-- <div class="card-content">
          <h2 class="sub-ttl">HELLO, I AM</h2>
          <div class="main-ttl">
            <h1 class="first-name">AKHIL</h1>
            <h1 class="last-name">BEN</h1>
          </div>
          <button class="btn-white">Download my CV</button>
        </div>-->
      </div>
      <main-footer></main-footer>
    </section>
</template>

<script>
// import './Main.scss';
import MainMenu from './Menu.vue';
import MainFooter from './Footer.vue';

export default {
  name: 'Main',

  components: {
    MainMenu,
    MainFooter
  },

  props: {
    currentPage: {
      required: true,
      type: String
    },
    mainBg: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      mainPageVisibility: true
    };
  },

  methods: {
    mainPageVisible(visible) {
      this.mainPageVisibility = visible;
    },

    scrollToPage(page) {
      this.$emit('scrollToPage', page);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './Main.scss';
</style>
