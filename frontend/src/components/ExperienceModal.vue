<template>
    <div 
        v-on:click="handleClose"
        class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="experienceModal absolute">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p
                        v-on:click="handleClose"
                        class="exit font-light absolute top-5 right-8"
                    >
                        x
                    </p>
                    <img class="object-cover h-full" :src="info.image" />
                    <div class="rightSide">
                        <p class="role font-black">{{ info.title }}</p>
                        <p class="company font-bold">{{ info.company }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal">
                            {{ info.description }}
                        </p>
                        <p class="skills font-bold mt-6">
                            SKILLS
                        </p>
                        <p class="skillsBox font-normal">
                            <div v-for="skill in info.skills">
                                <ModalSkillsBox :skill="skill" />
                            </div>
                        </p>
                    </div>
                </div>
                <div v-else class="h-full">
                    <img class="object-cover h-full" :src="info.image" />
                    <div class="rightSide h-full relative">
                        <p
                            v-on:click="handleClose"
                            class="exit font-light absolute"
                        >
                            x
                        </p>
                        <p class="role font-black">{{ info.title }}</p>
                        <p class="company font-bold">{{ info.company }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal">
                            {{ info.description }}
                        </p>
                        <p class="skills font-bold mt-6">
                            SKILLS
                        </p>
                        <p class="skillsBox font-normal">
                            <div v-for="skill in info.skills">
                                <ModalSkillsBox :skill="skill" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { experienceModalInfo, experienceModalOpen } from '@/utils/experienceInfo';
import { defineComponent } from 'vue';
import ModalSkillsBox from './ModalSkillsBox.vue';

export default defineComponent({
    components: {
        ModalSkillsBox
    },
    data() {
        return {
            screen: "computer",
            info: experienceModalInfo
        }
    },
    methods: {
        handleClose(){
            experienceModalOpen.value = false;
        },
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

.experienceModal {
    width: 70vw;
    height: 70vh;
    background: #1E1E1E;
    border-radius: 10px;
    z-index: 60;
    .exit {
        font-size: 3vw;
        line-height: 0;
        &:hover {
            transition: .2s;
            cursor: pointer;
            color: #FAFF00;
        }
    }
    img {
        width: 30%;
        border-radius: 10px 0 0 10px;
    }
    .rightSide {
        overflow-y: scroll;
        width: 70%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;
        .role {
            color: #FAFF00;
            font-size: 3vw;
            margin-top: 1vw;
        }
        .company {
            color: #FAFF00;
            font-size: 2vw;
        }
        .setting {
            font-size: 1.5vw;
            line-height: 2;
        }
        .overview, .skills {
            color: #FAFF00;
            font-size: 3vw !important;
            letter-spacing: 1.2vw !important;
            line-height: 2;
            margin-top: 2vw;
        }
        .desc {
            font-size: 2vw !important;
        }
        .skillsBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(13vw, 1fr));
            grid-gap: .5vw;
        }
    }
}
@media (max-width: 700px) {
    .experienceModal {
        width: 80vw;
        height: 80vh;
        overflow: hidden;
        .exit {
            font-size: 6vw;
            line-height: 0;
            right: 3vw;
            top: 3vw;
        }
        img {
            width: 100%;
            height: 25vh;
            border-radius: 10px 10px 0 0;
        }
        .rightSide {
            overflow-x: hidden;
            overflow-y: scroll;
            height: 55vh;
            width: 100%;
            padding-left: 3vw;
            padding-right: 3vw;
            padding-bottom: 3vw;
            .role {
                font-size: 5vw;
                margin-top: 1vw;
            }
            .company {
                color: #FAFF00;
                font-size: 3vw;
            }
            .setting {
                font-size: 2vw;
            }
            .overview, .skills {
                font-size: 2vw;
                letter-spacing: 0.8vw;
                line-height: 2;
                margin-top: 2vw;
            }
            .desc {
                font-size: 1.5vw;
            }
            .skillsBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
                grid-gap: 1vw;
            }
        }
    }
}
</style>
  