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
              {name: "Ionic", fontAwesomeIcon: false, icon: "ionic.svg", link: "https://ionicframework.com"},
              {name: "Vue", fontAwesomeIcon: true, icon: "vuejs", link: "https://vuejs.org"},
              {name: "React", fontAwesomeIcon: true, icon: "react", link: "https://reactjs.org/"},
              {name: "NodeJs", fontAwesomeIcon: true, icon: "node-js", link: "https://nodejs.org/"},
              {name: "RxJs", fontAwesomeIcon: false, icon: "rxjs.svg", link: "https://rxjs.dev/"},
              {name: "jQuery", fontAwesomeIcon: false, icon: "jquery.svg", link: "https://jquery.com"},
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
              {name: "Designer", fontAwesomeIcon: false, icon: "qt.svg", link: "https://www.qt.io", style: "filter: invert(1);"},
          ]
        },
        {
          type: "misc",
          title: "Miscellaneous",
          navigateLeft: "design",
          skills: [
              {name: "Watson", fontAwesomeIcon: false, icon: "ibm-watson.svg", link: "https://www.ibm.com/watson"},
              {name: "Dialogflow", fontAwesomeIcon: false, icon: "dialogflow.png", link: "https://dialogflow.com/", style: "filter: brightness(5);"},
              {name: "Git", fontAwesomeIcon: true, icon: "git-alt", link: "https://git-scm.com/"},
              {name: "Typescript", fontAwesomeIcon: false, icon: "typescript.svg", link: "https://www.typescriptlang.org/", style: "filter: invert(1);"},
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