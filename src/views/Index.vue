<template>
  <div class="wrapper">
    <section class="main-content" v-bind:class="mainBg">
      <p class="copyright">© Copyright 2019, Akhil Ben.</p>
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="blob3"></div>
      <div class="inner-card" v-bind:class="mainBg">
        <div class="menu" v-bind:class="{ active: isMenuActive }">
          <a
            class="icon"
            v-bind:class="{ front: isMenuActive,  back: !isMenuActive}"
            v-on:click="onMenuClick()"
          >
            <font-awesome-icon :icon="isMenuActive ? 'times' : 'bars'" />
          </a>
          <nav>
            <ul>
              <li>
                <a
                  v-bind:class="{active: currentPage==='home'}"
                  v-on:click="scrollToPage('home')"
                >Home</a>
              </li>
              <li>
                <a
                  v-bind:class="{active: currentPage==='about'}"
                  v-on:click="scrollToPage('about')"
                >About</a>
              </li>
              <li>
                <a
                  v-bind:class="{active: currentPage==='skills'}"
                  v-on:click="scrollToPage('skills')"
                >Skills</a>
              </li>
              <li>
                <a
                  v-bind:class="{active: currentPage==='projects'}"
                  v-on:click="scrollToPage('projects')"
                >Projects</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- <div class="card-content">
          <h2 class="sub-ttl">HELLO, I AM</h2>
          <div class="main-ttl">
            <h1 class="first-name">AKHIL</h1>
            <h1 class="last-name">BEN</h1>
          </div>
          <button class="btn-white">Download my CV</button>
        </div>-->
      </div>
      <div class="footer">
        <div class="w-100">
          <div class="social">
            <a
              class="animated ease fadeInLeft delay-2s"
              rel="noopener"
              target="_blank"
              href="https://github.com/akhilben"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="2x" />
            </a>
            <a class="animated ease fadeInLeft delay-1-5s">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            </a>
            <a class="animated ease fadeInLeft delay-1s">
              <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
            </a>
            <a class="animated ease fadeInLeft delay-0-5s">
              <font-awesome-icon icon="envelope" size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="side-content" id="sideContent">
      <div class="side-card page1" id="home">
        <div class="blob6"></div>
        <div class="blob7"></div>
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="card-parent" v-observe-visibility="changeBg">
          <transition name="slide-fade">
            <div class="inner-card page1" v-show="currentPage==='home'">
              <div class="card-content">
                <img
                  class="animated ease fadeIn delay-0-3s"
                  src="src/assets/images/avataaars.svg"
                  alt="me"
                />
                <h2 class="mt-3 sub-ttl animated ease fadeInDown">I AM A</h2>
                <div class="main-ttl">
                  <h1 class="front-end animated ease fadeInDown delay-0-5s">FRONT-END</h1>
                  <h1 class="engineer animated ease fadeInDown delay-1s">ENGINEER</h1>
                </div>
                <button
                  class="btn-green solid mt-3 animated ease fadeIn delay-1-5s"
                  v-on:click="scrollToPage('about')"
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
      <div class="side-card page2" id="about">
        <div class="blob6"></div>
        <div class="blob7"></div>
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="card-parent" v-observe-visibility="changeBgToRed">
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
                <!-- <div class="test">ABOUT ME</div> -->
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

      <div class="side-card page3" id="skills">
        <div class="blob6"></div>
        <div class="blob7"></div>
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="card-parent" v-observe-visibility="changeBgToPurple">
          <transition name="slide-fade">
            <div class="inner-card" v-show="currentPage==='skills'">
              <div class="options">
                <div
                  class="option"
                  v-bind:class="{ active: openedSkill==='frameworks' }"
                  v-on:click="onSkillClick('frameworks')"
                >
                  <span class="ttl">Frameworks & Libraries</span>
                  <div class="row text-white" v-show="openedSkill==='frameworks'">
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://angular.io">
                        <font-awesome-icon :icon="['fab', 'angular']" />Angular
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://ionicframework.com"
                      >
                        <img src="src/assets/images/ionic.svg" height="16px" />Ionic
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://vuejs.org">
                        <font-awesome-icon :icon="['fab', 'vuejs']" />Vue
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://reactjs.org/">
                        <font-awesome-icon :icon="['fab', 'react']" />React
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://nodejs.org/">
                        <font-awesome-icon :icon="['fab', 'node-js']" />NodeJs
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://nodejs.org/">
                        <img src="src/assets/images/rxjs.svg" height="16px" />RxJs
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://jquery.com">
                        <img src="src/assets/images/jquery.svg" height="16px" />jQuery
                      </a>
                    </div>
                  </div>

                  <a v-on:click.stop="onSkillClick('design')" class="navigate right">
                    <font-awesome-icon icon="arrow-circle-right" />
                  </a>
                </div>
                <div
                  class="option"
                  v-bind:class="{ active: openedSkill==='design' }"
                  v-on:click="onSkillClick('design')"
                >
                  <span class="ttl">Design & Development</span>
                  <div class="row text-white" v-show="openedSkill==='design'">
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://www.sketch.com/"
                      >
                        <font-awesome-icon :icon="['fab', 'sketch']" />Sketch
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://www.figma.com/">
                        <font-awesome-icon :icon="['fab', 'figma']" />Figma
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/HTML5"
                      >
                        <font-awesome-icon :icon="['fab', 'html5']" />HTML
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                      >
                        <font-awesome-icon :icon="['fab', 'css3']" />CSS
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://sass-lang.com/">
                        <font-awesome-icon :icon="['fab', 'sass']" />Scss
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://getbootstrap.com/"
                      >
                        <font-awesome-icon :icon="['fab', 'bootstrap']" />Bootstrap
                      </a>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://www.qt.io">
                        <img
                          src="src/assets/images/qt.svg"
                          height="16px"
                          style="filter: invert(1);"
                        />Designer
                      </a>
                    </div>
                  </div>
                  <a v-on:click.stop="onSkillClick('frameworks')" class="navigate left">
                    <font-awesome-icon icon="arrow-circle-left" />
                  </a>
                  <a v-on:click.stop="onSkillClick('misc')" class="navigate right">
                    <font-awesome-icon icon="arrow-circle-right" />
                  </a>
                </div>
                <div
                  class="option"
                  v-bind:class="{ active: openedSkill==='misc' }"
                  v-on:click="onSkillClick('misc')"
                >
                  <span class="ttl">Miscellaneous</span>
                  <div class="row text-white" v-show="openedSkill==='misc'">
                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://www.ibm.com/watson"
                      >
                        <img src="src/assets/images/ibm-watson.svg" height="16px" />Watson
                      </a>
                    </div>

                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://www.qt.io">
                        <img
                          src="src/assets/images/dialogflow.png"
                          height="16px"
                          style="filter: brightness(5);"
                        />Dialogflow
                      </a>
                    </div>

                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a
                        class="pills"
                        rel="noopener"
                        target="_blank"
                        href="https://getbootstrap.com/"
                      >
                        <font-awesome-icon :icon="['fab', 'git-alt']" />Git
                      </a>
                    </div>

                    <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                      <a class="pills" rel="noopener" target="_blank" href="https://www.qt.io">
                        <img
                          src="src/assets/images/typescript.svg"
                          height="16px"
                          style="filter: invert(1);"
                        />Typescript
                      </a>
                    </div>
                  </div>
                  <a v-on:click.stop="onSkillClick('design')" class="navigate left">
                    <font-awesome-icon icon="arrow-circle-left" />
                  </a>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </transition>
        </div>
      </div>

      <div class="side-card page4" id="projects">
        <div class="blob6"></div>
        <div class="blob7"></div>
        <div class="blob5"></div>
        <div class="blob4"></div>
        <div class="card-parent" v-observe-visibility="changeBgToCrimson">
          <transition name="slide-fade">
            <div class="inner-card" v-show="currentPage==='projects'">
              <h1 class="page-ttl">Projects</h1>
              <div class="card-wrapper">
                <div class="row mb-4">
                  <div class="col-md-6 mb-3 animated ease fadeInDown delay-1s">
                    <div class="project-card">
                      <div class="card-head">
                        <picture>
                          <img src="src/assets/images/quorra.png" alt />
                        </picture>
                        <h6 class="m-0">Quorra Js</h6>
                      </div>

                      <div class="card-content">
                        <p>A is a full fledged, open-source MVC NodeJS framework inspired by Laravel.</p>
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
                          <img src="src/assets/images/taskpod.png" alt />
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
      </div>
    </section>
  </div>
</template>

<script>
import api from "@API";
import { debounce } from "debounce";
import "./Index.scss";

export default {
  name: "Index",
  components: {},
  data() {
    return {
      isMenuActive: false,
      mainBg: "gradient-blue",
      openedSkill: "frameworks",
      currentPage: "home"
    };
  },
  methods: {
    onMenuClick() {
      this.isMenuActive = !this.isMenuActive;
    },

    scrollToPage(page) {
      this.currentPage = page;
      document.getElementById(page).scrollIntoView({ behavior: "smooth" });
    },

    changeBg(visible) {
      if (!visible) {
        return;
      }
      this.currentPage = "home";
      this.mainBg = "gradient-blue";
    },

    changeBgToRed(visible) {
      if (!visible) {
        return;
      }
      this.currentPage = "about";
      this.mainBg = "gradient-red";
    },

    changeBgToPurple(visible) {
      if (!visible) {
        return;
      }
      this.currentPage = "skills";
      this.mainBg = "gradient-purple";
    },

    changeBgToCrimson(visible) {
      if (!visible) {
        return;
      }
      this.currentPage = "projects";
      this.mainBg = "gradient-crimson";
    },

    onSkillClick(skill) {
      this.openedSkill = skill;
    },

    handleScroll(event) {
      this.scrollToPage(this.currentPage);
    }
  },

  mounted() {
    document
      .getElementById("sideContent")
      .addEventListener("scroll", debounce(this.handleScroll, 500));
  },

  destroyed() {
    document
      .getElementById("sideContent")
      .removeEventListener("scroll", this.handleScroll);
  }
};
</script>
