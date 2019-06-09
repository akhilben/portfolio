<template>
  <div class="wrapper">
    <section class="main-content" v-bind:class="mainBg">
        <div class="blob1"></div>
        <div class="blob2"></div>
        <div class="blob3"></div>
        <div class="inner-card" v-bind:class="mainBg">
          <div class="menu" v-bind:class="{ active: isMenuActive }">
            <a class="icon" v-bind:class="{ front: isMenuActive,  back: !isMenuActive}" v-on:click="onMenuClick()">
              <font-awesome-icon :icon="isMenuActive ? 'times' : 'bars'" />
            </a>
            <nav>
              <ul>
                <li><a class="active">Home</a></li>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
              </ul>
            </nav>
          </div>
          <div class="card-content">
            <h2 class="sub-ttl">HELLO, I AM</h2>
            <div class="main-ttl">
              <h1 class="first-name">AKHIL</h1>
              <h1 class="last-name">BEN</h1>
            </div>
            <button class="btn-white">Download my CV</button>
          </div>
        </div>
        <div class="footer">
          <div class="w-100">
            <div class="social">
              <a><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
              <a><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></a>
              <a><font-awesome-icon :icon="['fab', 'facebook']" size="2x"/></a>
              <a><font-awesome-icon icon="envelope" size="2x"/></a>
            </div>
            <p>© Copyright 2019, Akhil Ben.</p>
          </div>
        </div>
    </section>
    <section class="side-content">
      <div class="side-card page1">
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="inner-card page1" v-observe-visibility="changeBg">
          <div class="card-content">
            <img src="src/assets/images/avataaars.svg" alt="me">
            <h2 class="mt-3 sub-ttl">I AM A</h2>
            <div class="main-ttl">
              <h1 class="front-end">FRONT-END</h1>
              <h1 class="engineer">ENGINEER</h1>
            </div>
            <button class="btn-green mt-3">Find out more <span class="ml-2"><font-awesome-icon icon="angle-double-down"/></span></button>
          </div>
        </div>
      </div>
      <div class="side-card page2">
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="inner-card" v-observe-visibility="changeBgToRed">
          <div class="card-wrapper">
            <div class="short-description">
              <dl><dt>experience</dt><dd>2+ years</dd></dl>
              <dl><dt>what</dt><dd>Front-End Eng.</dd></dl>
              <dl><dt>where</dt><dd>Cubet</dd></dl>
            </div>
          <!-- <div class="test">ABOUT ME</div> -->
            <hr class="my-5">
            <p>I am a front-end engineer from Kochi, India  with
            2+ years of experience in web development. I
            love to learn and use latest technologies to create
            innovative and beautiful web apps. Have mainly
            worked in Angular but not a stranger to other 
            prominent front-end js frameworks too! Currently
            working as a front-end engineer at Cubet Techno Labs.
            </p>
            <hr class="mt-5">
          </div>
        </div>
      </div>
      <div class="side-card">
        <div class="inner-card" v-observe-visibility="changeBgToPurple"></div>
      </div>
    </section>
  </div>
</template>

<script>
import api from "@API";

import "./Index.scss";

export default {
  name: "Index",
  components: {},
  data() {
    return {
      isMenuActive: false,
      mainBg: 'gradient-blue'
    };
  },
  methods: {
    onMenuClick() {
      this.isMenuActive = !this.isMenuActive;
    },

    changeBg(visible) {
      console.log(visible);
      if (!visible) { return; }
      this.mainBg = 'gradient-blue';
    },

    changeBgToRed(visible) {
      if (!visible) { return; }
      this.mainBg = 'gradient-red';
    },

    changeBgToPurple(visible) {
      if (!visible) { return; }
      this.mainBg = 'gradient-purple';
    },
  }
};
</script>
