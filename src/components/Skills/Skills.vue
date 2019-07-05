<template>
  <div class="side-card page3" id="skills">
    <div class="blob6"></div>
    <div class="blob7"></div>
    <div class="blob5"></div>
    <div class="blob4"></div>
    <div class="card-parent" v-observe-visibility="changeBg">
      <transition name="slide-fade">
        <div class="inner-card" v-show="currentPage==='skills'">
          <div class="options">
            <!-- <div
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
                  <a class="pills" rel="noopener" target="_blank" href="https://ionicframework.com">
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
                  <a class="pills" rel="noopener" target="_blank" href="https://www.sketch.com/">
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
                  <a class="pills" rel="noopener" target="_blank" href="https://getbootstrap.com/">
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />Bootstrap
                  </a>
                </div>
                <div class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
                  <a class="pills" rel="noopener" target="_blank" href="https://www.qt.io">
                    <img src="src/assets/images/qt.svg" height="16px" style="filter: invert(1);" />Designer
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
                  <a class="pills" rel="noopener" target="_blank" href="https://www.ibm.com/watson">
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
                  <a class="pills" rel="noopener" target="_blank" href="https://getbootstrap.com/">
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
            </div> -->
          <skill-set v-for="(skillSet, index) in SkillSets" :key="index" v-on:click.native="onSkillClick(skillSet.type)" :skillSet="skillSet" :openedSkill="openedSkill" @navigateToSkill="onSkillClick"></skill-set>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "./Skills.scss";
import SkillSet from './SkillSet.vue';
export default {
  name: "About",

  components: {
      SkillSet
  },

  props: {
    currentPage: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      openedSkill: "frameworks",
      SkillSets:[
        {
          type: "frameworks",
          title: "Frameworks & Libraries",
          navigateRight: "design",
          skills: [
              {name: "Angular", fontAwesomeIcon: true, icon: "angular", link: "https://angular.io"},
              {name: "Ionic", fontAwesomeIcon: false, icon: "src/assets/images/ionic.svg", link: "https://ionicframework.com"},
              {name: "Vue", fontAwesomeIcon: true, icon: "vuejs", link: "https://vuejs.org"},
              {name: "React", fontAwesomeIcon: true, icon: "react", link: "https://reactjs.org/"},
              {name: "NodeJs", fontAwesomeIcon: true, icon: "node-js", link: "https://nodejs.org/"},
              {name: "RxJs", fontAwesomeIcon: false, icon: "src/assets/images/rxjs.svg", link: "https://rxjs.dev/"},
              {name: "jQuery", fontAwesomeIcon: false, icon: "src/assets/images/jquery.svg", link: "https://jquery.com"},
          ]
        },
        {
          type: "design",
          title: "Design & Development",
          navigateLeft: "frameworks",
          navigateRight: "misc",
          skills: [
              {name: "Sketch", fontAwesomeIcon: true, icon: "sketch", link: "https://www.sketch.com/"},
              {name: "Figma", fontAwesomeIcon: true, icon: "figma", link: "https://www.figma.com/"},
              {name: "HTML", fontAwesomeIcon: true, icon: "html5", link: "https://en.wikipedia.org/wiki/HTML5"},
              {name: "CSS", fontAwesomeIcon: true, icon: "css3", link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"},
              {name: "Scss", fontAwesomeIcon: true, icon: "sass", link: "https://sass-lang.com/"},
              {name: "Bootstrap", fontAwesomeIcon: true, icon: "bootstrap", link: "https://getbootstrap.com/"},
              {name: "Designer", fontAwesomeIcon: false, icon: "src/assets/images/qt.svg", link: "https://www.qt.io", style: "filter: invert(1);"},
          ]
        },
        {
          type: "misc",
          title: "Miscellaneous",
          navigateLeft: "design",
          skills: [
              {name: "Watson", fontAwesomeIcon: false, icon: "src/assets/images/ibm-watson.svg", link: "https://www.ibm.com/watson"},
              {name: "Dialogflow", fontAwesomeIcon: false, icon: "src/assets/images/dialogflow.png", link: "https://dialogflow.com/", style: "filter: brightness(5);"},
              {name: "Git", fontAwesomeIcon: true, icon: "git-alt", link: "https://git-scm.com/"},
              {name: "Typescript", fontAwesomeIcon: false, icon: "src/assets/images/typescript.svg", link: "https://www.typescriptlang.org/", style: "filter: invert(1);"},
          ]
        }
      ]
    };
  },

  methods: {
    changeBg(visible) {
      if (!visible) {
        return;
      }

      this.$emit("changePage", {
        currentPage: "skills",
        mainBg: "gradient-purple"
      });
    },

    onSkillClick(skill) {
      this.openedSkill = skill;
    }
  }
};
</script>