<template>
  <div class="w-screen h-screen">
    <TopSection />
    <Experience />
    <Projects />
    <Skills />
    <Education />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopSection from './components/TopSection.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';

export default defineComponent({
  components: {
    TopSection, Experience, Projects, Education, Skills
  }
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  color: white;
  overflow-x: hidden;
  user-select: none;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #595959;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #FAFF00;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
