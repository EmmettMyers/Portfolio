<template>
    <div class="flex justify-center">
        <div class="experience">
            <p class="title font-bold" :class="screen == 'computer' ? 'pb-4' : 'pb-1'">
                EXPERIENCE
            </p>
            <div class="container">
                <div v-for="experience in experienceInfo">
                    <ContentBox :info="experience" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ContentBox from './/ContentBox.vue';
import { experienceInfo } from '../utils/experienceInfo';

export default defineComponent({
    components: {
        ContentBox
    },
    data() {
        return {
            experienceInfo: experienceInfo,
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

.experience {
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
}
@media (max-width: 700px) {
    .experience {
        padding-top: 10vw;
    }
    .title {
        font-size: 5vw !important;
        letter-spacing: 1.5vw !important;
    }
    .container {
        display: block !important;
    }
}
</style>
  