<template>
  <div class="menu" v-bind:class="{ active: isMenuActive, fixed:  !mainPageVisibility}">
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
          <a v-bind:class="{active: currentPage==='home'}" v-on:click="scrollToPage('home')">Home</a>
        </li>
        <li>
          <a v-bind:class="{active: currentPage==='about'}" v-on:click="scrollToPage('about')">About</a>
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
</template>

<script>
import "./Menu.scss";

export default {
  name: "Menu",

  props: {
    currentPage: {
      required: true,
      type: String
    },
    mainPageVisibility: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      isMenuActive: false
    };
  },

  methods: {
    onMenuClick() {
      this.isMenuActive = !this.isMenuActive;
    },

    scrollToPage(page) {
      this.$emit('scrollToPage', page)
    }
  }
};
</script>