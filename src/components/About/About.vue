<template>
  <div class="side-card page2" id="about">
    <div class="blob6"></div>
    <div class="blob7"></div>
    <div class="blob5"></div>
    <div class="blob4"></div>
    <div class="card-parent" v-observe-visibility="changeBg">
      <transition name="slide-fade">
        <div class="inner-card" v-show="currentPage==='about'">
          <h1 class="page-ttl">About</h1>
          <div class="card-wrapper">
            <div class="short-description">
              <dl>
                <dt>experience</dt>
                <dd>2+ years</dd>
              </dl>
              <dl>
                <dt>what</dt>
                <dd>Front-End Eng.</dd>
              </dl>
              <dl>
                <dt>where</dt>
                <dd>Cubet</dd>
              </dl>
            </div>
            <hr class="my-4" />
            <p class="animated ease fadeIn delay-1s">
              I am a front-end engineer from Kochi, India with
              2+ years of experience in web development. I
              love to learn and use latest technologies to create
              innovative and beautiful web apps. Have mainly
              worked in
              <a
                rel="noopener"
                target="_blank"
                href="https://angular.io"
              >Angular</a> but not a stranger to other
              prominent front-end js frameworks too! Holds a B-tech degree in Computer Science from MG University. Currently
              working as a front-end engineer at
              <a
                rel="noopener"
                target="_blank"
                href="https://cubettech.com"
              >Cubet Techno Labs</a>.
            </p>
            <hr class="mt-4" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "./About.scss";
export default {
  name: "About",

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
        currentPage: "about",
        mainBg: "gradient-red"
      });
    }
  }
};
</script>