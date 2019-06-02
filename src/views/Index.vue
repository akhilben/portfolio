<template>
  <div class="wrapper">
    <section class="main-content gradient-blue">
        <div class="blob1"></div>
        <div class="blob2"></div>
        <div class="blob3"></div>
        <div class="inner-card gradient-blue">
          <a class="menu">
            <font-awesome-icon icon="bars" />
          </a>
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
          <div class="social">
            <a><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
            <a><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></a>
            <a><font-awesome-icon :icon="['fab', 'facebook']" size="2x"/></a>
            <a><font-awesome-icon icon="envelope" size="2x"/></a>
          </div>
          <p>©Copyright 2019, Akhil Ben.</p>
        </div>
    </section>
    <section class="side-content">
      <div class="side-card gradient-white">
        <div class="inner-card gradient-white">
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
      <div class="side-card">
        <div class="inner-card"></div>
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
      title: "Index page !",
      articles: []
    };
  },
  created() {
    api
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.articles = response.data;
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>
