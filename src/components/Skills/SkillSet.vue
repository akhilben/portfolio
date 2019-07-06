<template>
  <div
    class="option"
    v-bind:class="{ active: openedSkill===skillSet.type }"
  >
    <span class="ttl">{{skillSet.title}}</span>
    <div class="row text-white" v-show="openedSkill===skillSet.type">
      <div v-for="(skill, index) in skillSet.skills" :key="index" class="col-6 col-md-12 col-lg-6 my-4 text-center animated ease fadeInDown">
        <a class="pills" rel="noopener" target="_blank" href="https://www.sketch.com/">
          <font-awesome-icon v-if="skill.fontAwesomeIcon" :icon="['fab', skill.icon]" />
          <img v-if="!skill.fontAwesomeIcon" :src="require('@/assets/images/' + skill.icon)" height="16px" :style="skill.style"/>{{skill.name}}
        </a>
      </div>
    </div>
    <a v-if="skillSet.navigateLeft" v-on:click.stop="onSkillClick(skillSet.navigateLeft)" class="navigate left">
      <font-awesome-icon icon="arrow-circle-left" />
    </a>
    <a v-if="skillSet.navigateRight" v-on:click.stop="onSkillClick(skillSet.navigateRight)" class="navigate right">
      <font-awesome-icon icon="arrow-circle-right" />
    </a>
  </div>
</template>

<script>
export default {
    name: "SkillSet",

    props: {
    skillSet: {
      required: true,
      type: Object
    },
    openedSkill: {
      required: true,
      type: String
    }
  },

  methods: {
    onSkillClick(skillSet) {
      this.$emit('navigateToSkill', skillSet)
    }
  }
};
</script>