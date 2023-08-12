<template>
    <div class="flex justify-center">
        <div class="education" :class="screen == 'computer' ? 'pt-20 pb-32' : 'pt-10 pb-20'">
            <p class="title font-bold pb-4">
                EDUCATION
            </p>
            <div class="container">
                <div v-for="education in educationInfo">
                    <EducationBox :info="education" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import EducationBox from './EducationBox.vue';
import { educationInfo } from '../utils/educationInfo';

export default defineComponent({
    components: {
        EducationBox
    },
    data() {
        return {
            educationInfo: educationInfo,
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

.education {
    width: 80vw;
    .title {
        color: #FAFF00;
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
    .title {
        font-size: 5vw !important;
        letter-spacing: 1.5vw !important;
    }
    .container {
        display: block !important;
    }
}
</style>
  