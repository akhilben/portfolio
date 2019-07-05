<template>
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
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>