<template>
  <div class="side-card page1" id="home">
    <div class="blob6"></div>
    <div class="blob7"></div>
    <div class="blob5"></div>
    <div class="blob4"></div>
    <div class="card-parent" v-observe-visibility="changeBg">
      <transition name="slide-fade">
        <div class="inner-card" v-show="currentPage==='home'">
          <div class="card-content">
            <picture>
              <img
                class="animated ease fadeIn delay-0-3s"
                src="src/assets/images/avataaars.svg"
                alt="me"
              />
            </picture>
            <h2 class="mt-3 sub-ttl animated ease fadeInDown">I AM A</h2>
            <div class="main-ttl">
              <h1 class="front-end animated ease fadeInDown delay-0-5s">FRONT-END</h1>
              <h1 class="engineer animated ease fadeInDown delay-1s">ENGINEER</h1>
            </div>
            <button
              class="btn-green solid mt-3 animated ease fadeIn delay-1-5s"
              v-on:click="scrollToPage()"
            >
              Find out more
              <span class="ml-2">
                <font-awesome-icon icon="angle-double-down" />
              </span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "./Home.scss";
export default {
  name: "Home",

  props: {
    currentPage: {
      required: true,
      type: String
    }
  },

  methods: {
    changeBg(visible) {
      if (!visible) {
        return;
      }

      this.$emit("changePage", {
        currentPage: "home",
        mainBg: "gradient-blue"
      });
    },

    scrollToPage() {
      this.$emit('scrollToPage', 'about')
    }
  }
};
</script>