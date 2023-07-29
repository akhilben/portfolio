<template>
  <div class="side-card page2" id="about">
    <div class="blob6"></div>
    <div class="blob7"></div>
    <div class="blob5"></div>
    <div class="blob4"></div>
    <div class="card-parent" v-observe-visibility="changeBg">
      <transition name="slide-fade">
        <div class="inner-card" v-show="currentPage === 'about'">
          <h1 class="page-ttl">About</h1>
          <div class="card-wrapper">
            <div class="short-description">
              <dl>
                <dt>experience</dt>
                <dd>6+ years</dd>
              </dl>
              <dl>
                <dt>what</dt>
                <dd>Front-End Eng.</dd>
              </dl>
              <dl>
                <dt>where</dt>
                <dd>Fingent</dd>
              </dl>
            </div>
            <hr class="my-4" />
            <p class="animated ease fadeIn delay-1s">
              I am a front-end engineer with over 6 years of experience,
              currently working for
              <a rel="noopener" target="_blank" href="https://www.fingent.com/"
                >Fingent</a
              >. Specializing in
              <a rel="noopener" target="_blank" href="https://angular.io"
                >Angular</a
              >, I have hands-on expertise in developing user interfaces for web
              applications. Alongside Angular, I am proficient in other
              prominent JavaScript frameworks. Based in Kochi, India, I hold a
              B-tech degree in Computer Science from MG University. With a
              strong technical background and extensive experience, I am driven
              to deliver high-quality front-end solutions that optimally meet
              client requirements.
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
      type: String,
    },
  },

  methods: {
    changeBg(visible) {
      if (!visible) {
        return;
      }

      this.$emit("changePage", {
        currentPage: "about",
        mainBg: "gradient-red",
      });
    },
  },
};
</script>
