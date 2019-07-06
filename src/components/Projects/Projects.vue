<template>
  <div class="side-card page4" id="projects">
    <div class="blob6"></div>
    <div class="blob7"></div>
    <div class="blob5"></div>
    <div class="blob4"></div>
    <div class="card-parent" v-observe-visibility="changeBg">
      <transition name="slide-fade">
        <div class="inner-card" v-show="currentPage==='projects'">
          <h1 class="page-ttl">Projects</h1>
          <div class="card-wrapper">
            <div class="row mb-4">
              <div class="col-md-6 mb-3 animated ease fadeInDown delay-1s">
                <div class="project-card">
                  <div class="card-head">
                    <picture>
                      <img :src="require('@/assets/images/quorra.png')" alt />
                    </picture>
                    <h6 class="m-0">Quorra Js</h6>
                  </div>

                  <div class="card-content">
                    <p>A full fledged, open-source MVC NodeJS framework inspired by Laravel.</p>
                    <div class="card-links">
                      <a rel="noopener" target="_blank" href="https://github.com/quorrajs">
                        <font-awesome-icon :icon="['fab', 'github']" />
                      </a>
                      <a rel="noopener" target="_blank" href="https://quorrajs.org">
                        <font-awesome-icon icon="link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3 animated ease fadeInDown delay-1-5s">
                <div class="project-card">
                  <div class="card-head">
                    <picture>
                      <img :src="require('@/assets/images/taskpod.png')" alt />
                    </picture>
                    <h6 class="m-0">Taskpod</h6>
                  </div>

                  <div class="card-content">
                    <p>A desktop app for Podio with a quick launcher to manage tasks.</p>
                    <div class="card-links">
                      <a rel="noopener" target="_blank" href="https://taskpod.app">
                        <font-awesome-icon icon="link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-white text-center animated ease fadeIn delay-2s">
              <font-awesome-icon icon="plus-circle" size="2x" />
              <span class="ml-1" style="vertical-align:super;">many more</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="footer">
    <p>© Copyright 2019, Akhil Ben. Made with 🧡 and <a href="https://vuejs.org/">Vue</a>. SVG backgrounds by <a href="https://www.svgbackgrounds.com">SVGBackgrounds.com</a></p>
    </div>
  </div>
</template>

<script>
import "./Projects.scss";
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
        currentPage: "projects",
        mainBg: "gradient-crimson"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Projects.scss";
</style>