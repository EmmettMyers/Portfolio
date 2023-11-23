<template>
  <div class="w-screen h-screen">
    <EducationModal v-if="educationModalOpen" />
    <ExperienceModal v-if="experienceModalOpen" />
    <ProjectsModal v-if="projectsModalOpen" />
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
import ExperienceModal from './components/ExperienceModal.vue';
import ProjectsModal from './components/ProjectsModal.vue';
import { experienceModalOpen } from './utils/experienceInfo';
import { projectsModalOpen } from './utils/projectsInfo';
import EducationModal from './components/EducationModal.vue';
import { educationModalOpen } from './utils/educationInfo';

export default defineComponent({
  components: {
    TopSection,
    Experience,
    Projects,
    Education,
    Skills,
    ExperienceModal,
    ProjectsModal,
    EducationModal
},
  data(){
    return {
      experienceModalOpen: experienceModalOpen,
      educationModalOpen: educationModalOpen,
      projectsModalOpen: projectsModalOpen
    }
  }
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #1E1E1E;
  color: white;
  overflow-x: hidden;
  user-select: none;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #595959;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #F9B959;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
