<template>
  <div class="w-screen h-screen">
    <!-- Fixed Deprecation Banner -->
    <div class="fixed top-0 left-0 w-full bg-red-600 text-white text-center p-2 z-50">
      <p>
        This page will be deprecated soon, and the information may be outdated. 
        Please visit my <a href="https://www.linkedin.com/in/emmettmyers/" target="_blank" class="underline text-blue-200 hover:text-blue-400">LinkedIn</a>
        for the latest updates.
      </p>
    </div>

    <!-- preloading images -->
    <img style="display: none;" @load="onImageLoad" v-for="imageSrc in imageSources" :key="imageSrc" :src="imageSrc">

    <div v-if="imagesLoaded">
      <EducationModal v-if="educationModalOpen" />
      <ExperienceModal v-if="experienceModalOpen" />
      <ProjectsModal v-if="projectsModalOpen" />
      <TopSection />
      <BoxSection title="EXPERIENCE" :allInfo="experienceInfo" />
      <BoxSection title="LEADERSHIP" :allInfo="leadershipInfo" />
      <BoxSection title="PROJECTS" :allInfo="projectsInfo" />
      <BoxSection title="SKILLS" :allInfo="skillsInfo" />
      <BoxSection title="EDUCATION" :allInfo="educationInfo" />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopSection from './components/TopSection.vue';
import ExperienceModal from './components/ExperienceModal.vue';
import ProjectsModal from './components/ProjectsModal.vue';
import EducationModal from './components/EducationModal.vue';
import BoxSection from './components/BoxSection.vue';
import Loader from './components/Loader.vue';
import { experienceModalOpen } from './utils/experienceInfo';
import { projectsModalOpen } from './utils/projectsInfo';
import { educationModalOpen } from './utils/educationInfo';
import { experienceInfo } from './utils/experienceInfo';
import { leadershipInfo, leadershipModalOpen } from './utils/leadershipInfo';
import { projectsInfo } from './utils/projectsInfo';
import { skillsInfo } from './utils/skillsInfo';
import { educationInfo } from './utils/educationInfo';
import { imageSources } from './utils/imageSources';

export default defineComponent({
  components: {
    TopSection,
    ExperienceModal,
    ProjectsModal,
    EducationModal,
    BoxSection,
    Loader
  },
  data(){
    return {
      experienceModalOpen: experienceModalOpen,
      leadershipModalOpen: leadershipModalOpen,
      educationModalOpen: educationModalOpen,
      projectsModalOpen: projectsModalOpen,
      experienceInfo: experienceInfo,
      leadershipInfo: leadershipInfo,
      projectsInfo: projectsInfo,
      skillsInfo: skillsInfo,
      educationInfo: educationInfo,
      imageSources: imageSources,
      imagesLoaded: false
    }
  },
  methods: {
    preloadImages() {
      this.imageSources.forEach((imageSrc: string) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = this.onImageLoad;
        this.imagesLoaded = true;
      });
    },
    onImageLoad() {
      console.log('Image loaded');
    },
  },
  mounted() {
    this.preloadImages();
  },
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
/* Deprecation Banner */
.fixed {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  z-index: 100;
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
