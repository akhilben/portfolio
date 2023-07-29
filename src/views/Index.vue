<template>
  <div class="wrapper" id="wrapper">
    <app-main
      :mainBg="mainBg"
      :currentPage="currentPage"
      :isSmallDevice="isSmallDevice"
      @scrollToPage="scrollToPage"
    ></app-main>

    <section class="side-content" id="sideContent">
      <app-home
        :currentPage="currentPage"
        @changePage="changePage"
        @scrollToPage="scrollToPage"
      ></app-home>

      <app-about
        :currentPage="currentPage"
        @changePage="changePage"
      ></app-about>

      <app-skills
        :currentPage="currentPage"
        @changePage="changePage"
      ></app-skills>

      <app-projects
        :currentPage="currentPage"
        @changePage="changePage"
      ></app-projects>
    </section>
  </div>
</template>

<script>
import { debounce } from "debounce";

import AppMain from "@Component/Main/Main.vue";
import AppHome from "@Component/Home/Home.vue";
import AppAbout from "@Component/About/About.vue";
import AppSkills from "@Component/Skills/Skills.vue";
import AppProjects from "@Component/Projects/Projects.vue";
import "./Index.scss";

export default {
  name: "Index",
  components: {
    AppMain,
    AppHome,
    AppAbout,
    AppSkills,
    AppProjects,
  },
  data() {
    return {
      mainBg: "gradient-blue",
      currentPage: "home",
      elementId: "sideContent",
      isSmallDevice: false,
    };
  },
  methods: {
    scrollToPage(page) {
      this.currentPage = page;
      document.getElementById(page).scrollIntoView({ behavior: "smooth" });
    },

    changePage(event) {
      this.currentPage = event.currentPage;
      this.mainBg = event.mainBg;
    },

    handleScroll(event) {
      this.scrollToPage(this.currentPage);
    },
  },

  mounted() {
    console.log(
      "%cI'm Open to jobs! 😃",
      "background-image: linear-gradient(blue, red); color: white; font-size: xx-large; padding: 10px"
    );

    if (window.innerWidth <= 767) {
      this.elementId = "wrapper";
      this.isSmallDevice = true;
      this.currentPage = "mainPage";
    }

    document
      .getElementById(this.elementId)
      .addEventListener("scroll", debounce(this.handleScroll, 500));
  },

  destroyed() {
    document
      .getElementById(this.elementId)
      .removeEventListener("scroll", this.handleScroll);
  },
};
</script>
