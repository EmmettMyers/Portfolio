<template>
    <div class="flex justify-center">
        <div class="section" :style="{ paddingBottom: title === 'EDUCATION' ? (screen === 'computer' ? '8vw' : '15vw') : '0' }">
            <p class="title font-bold" :class="screen == 'computer' ? 'pb-4' : 'pb-1'">
                {{ title }}
            </p>
            <div v-if="title == 'SKILLS'">
                <div class="skillsContainer">
                    <div v-for="info in allInfo">
                        <SkillBox :info="info" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="container">
                    <div v-for="info in allInfo">
                        <ContentBox :info="info" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ContentBox from './/ContentBox.vue';
import SkillBox from './SkillBox.vue';

export default defineComponent({
    props: ['title', 'allInfo'],
    components: {
        ContentBox, SkillBox
    },
    data() {
        return {
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

.section {
    width: 80vw;
    padding-top: 5vw;
    .title {
        color: #F9B959;
        font-size: 2.5vw;
        letter-spacing: 0.781vw;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.042vw;
    }
    .skillsContainer {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 0.3vw;
    }
}
@media (max-width: 700px) {
    .section {
        padding-top: 10vw;
    }
    .title {
        font-size: 5vw !important;
        letter-spacing: 1.5vw !important;
    }
    .container {
        display: block !important;
    }
    .skillsContainer {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-gap: 1vw !important;
    }
}
</style>
  