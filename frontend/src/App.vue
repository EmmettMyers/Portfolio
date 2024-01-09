<template>
  <div class="w-screen h-screen">
    <EducationModal v-if="educationModalOpen" />
    <ExperienceModal v-if="experienceModalOpen" />
    <ProjectsModal v-if="projectsModalOpen" />
    <TopSection />
    <BoxSection title="EXPERIENCE" :allInfo="experienceInfo" />
    <BoxSection title="PROJECTS" :allInfo="projectsInfo" />
    <BoxSection title="SKILLS" :allInfo="skillsInfo" />
    <BoxSection title="EDUCATION" :allInfo="educationInfo" />
    <img v-for="imageSrc in imageSources" :key="imageSrc" :src="imageSrc" style="display: none;" @load="onImageLoad">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopSection from './components/TopSection.vue';
import ExperienceModal from './components/ExperienceModal.vue';
import ProjectsModal from './components/ProjectsModal.vue';
import EducationModal from './components/EducationModal.vue';
import BoxSection from './components/BoxSection.vue';
import { experienceModalOpen } from './utils/experienceInfo';
import { projectsModalOpen } from './utils/projectsInfo';
import { educationModalOpen } from './utils/educationInfo';
import { experienceInfo } from './utils/experienceInfo';
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
    BoxSection
  },
  data(){
    return {
      experienceModalOpen: experienceModalOpen,
      educationModalOpen: educationModalOpen,
      projectsModalOpen: projectsModalOpen,
      experienceInfo: experienceInfo,
      projectsInfo: projectsInfo,
      skillsInfo: skillsInfo,
      educationInfo: educationInfo,
      imageSources: imageSources,
    }
  },
  methods: {
    preloadImages() {
      this.imageSources.forEach((imageSrc: string) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = this.onImageLoad;
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
