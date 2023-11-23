<template>
    <div class="flex justify-center">
        <div class="skills">
            <p class="title font-bold" :class="screen == 'computer' ? 'pb-4' : 'pb-3'">
                SKILLS
            </p>
            <div class="container">
                <div v-for="skill in skillsInfo">
                    <SkillBox :info="skill" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import SkillBox from './SkillBox.vue';
import { skillsInfo } from '../utils/skillsInfo';

export default defineComponent({
    components: {
        SkillBox
    },
    data() {
        return {
            skillsInfo: skillsInfo,
            screen: "computer"
        }
    },
    methods: {
        resize(){
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        }
    },
    mounted(){
        this.resize();
        window.addEventListener('resize', this.resize);
    },
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.skills {
    width: 80vw;
    padding-top: 5vw;
    .title {
        color: #F9B959;
        font-size: 2.5vw;
        letter-spacing: 0.781vw;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 0.3vw;
    }
}
@media (max-width: 700px) {
    .skills {
        padding-top: 10vw;
    }
    .title {
        font-size: 5vw !important;
        letter-spacing: 1.5vw !important;
    }
    .container {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-gap: 1vw !important;
    }
}
</style>
  