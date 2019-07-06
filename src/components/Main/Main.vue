<template>
    <section class="main-content" v-bind:class="mainBg" id="mainPage">
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="blob3"></div>
      <div class="card-parent" v-bind:class="{'animated ease flipInY': !isSmallDevice}">
      <div class="inner-card" v-bind:class="mainBg" v-observe-visibility="mainPageVisible">
        <main-menu :currentPage="currentPage" :mainPageVisibility="mainPageVisibility" @scrollToPage="scrollToPage"></main-menu>
        <div class="card-content">
          <h2 class="sub-ttl">HELLO, I AM</h2>
          <div class="main-ttl">
            <h1 class="first-name">AKHIL</h1>
            <h1 class="last-name">BEN</h1>
          </div>
          <button class="btn-white" v-on:click="downloadCV">Download my CV</button>
        </div>
      </div>
      </div>
      <main-footer></main-footer>
    </section>
</template>

<script>
import MainMenu from './Menu.vue';
import MainFooter from './Footer.vue';
import CV from '@Asset/CV.pdf';

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
    },
    isSmallDevice: {
      required: true,
      type: Boolean
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
      if (!visible || !this.$props.isSmallDevice) {return;}
      this.$emit('scrollToPage', 'mainPage');
    },

    scrollToPage(page) {
      this.$emit('scrollToPage', page);
    },

    downloadCV() {
      window.open(CV, '_blank')
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './Main.scss';
</style>
