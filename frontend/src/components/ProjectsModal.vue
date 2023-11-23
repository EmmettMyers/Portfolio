<template>
    <div 
        v-on:click="handleClose"
        class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="projectsModal fixed mb-10">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p
                        v-on:click="handleClose"
                        class="exit font-light absolute top-5 right-8"
                    >
                        x
                    </p>
                    <div class="monitorHolder h-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img class="monitor" :src="info.screen" :style="{ width: monitorWidth }" />
                        </div>
                    </div>
                    <div class="rightSide">
                        <p class="role font-bold">{{ info.title }}</p>
                        <p class="setting font-medium">
                            {{ info.time }}
                        </p>
                        <div class="flex justify-start">
                            <a 
                                v-if="info.demo"
                                :href="info.demo"
                                target="_blank"
                                class="btn demo font-medium text-black flex justify-center items-center">
                                    Live Demo
                            </a>
                            <a 
                                :href="info.code"
                                target="_blank"
                                class="btn code font-medium text-black flex justify-center items-center">
                                    Source Code
                            </a>
                        </div>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal">
                            {{ info.description }}
                        </p>
                        <p v-if="info.features.length > 0" class="skills font-bold mt-6">
                            FEATURES
                        </p>
                        <p class="featuresBox font-normal">
                            <div v-for="feature in info.features">
                                <ModalFeaturesBox :feature="feature" />
                            </div>
                        </p>
                        <p class="skills font-bold mt-6">
                            TOOLS USED
                        </p>
                        <p class="toolBox font-normal pb-2">
                            <div v-for="tool in info.tools">
                                <ModalToolsBox :tool="tool" />
                            </div>
                        </p>
                    </div>
                </div>
                <div v-else class="h-full">
                    <div class="monitorHolder w-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img class="monitor" :src="info.screen" :style="{ width: monitorWidth }" />
                        </div>
                        <img class="back h-full w-full absolute object-cover top-0 left-0" />
                    </div>
                    <div class="rightSide h-full relative">
                        <p
                            v-on:click="handleClose"
                            class="exit font-light absolute"
                        >
                            x
                        </p>
                        <p class="role font-bold">{{ info.title }}</p>
                        <p class="setting font-medium">
                            {{ info.time }}
                        </p>
                        <div class="flex justify-start">
                            <a 
                                v-if="info.demo"
                                :href="info.demo"
                                target="_blank"
                                class="btn demo font-medium text-black flex justify-center items-center">
                                    Live Demo
                            </a>
                            <a 
                                :href="info.code"
                                target="_blank"
                                class="btn code font-medium text-black flex justify-center items-center">
                                    Source Code
                            </a>
                        </div>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal">
                            {{ info.description }}
                        </p>
                        <p v-if="info.features.length > 0" class="skills font-bold mt-6">
                            FEATURES
                        </p>
                        <p class="featuresBox font-normal">
                            <div v-for="feature in info.features">
                                <ModalFeaturesBox :feature="feature" />
                            </div>
                        </p>
                        <p class="skills font-bold mt-6">
                            TOOLS USED
                        </p>
                        <p class="toolBox font-normal pb-5">
                            <div v-for="tool in info.tools">
                                <ModalToolsBox :tool="tool" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ModalToolsBox from './ModalToolsBox.vue';
import ModalFeaturesBox from './ModalFeaturesBox.vue';
import { projectsModalInfo, projectsModalOpen } from '@/utils/projectsInfo';

export default defineComponent({
    components: {
        ModalToolsBox, ModalFeaturesBox
    },
    data() {
        return {
            screen: "computer",
            info: projectsModalInfo,
            monitorWidth: "80%"
        }
    },
    methods: {
        handleClose(){
            projectsModalOpen.value = false;
        },
        resize(){
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        setMonitorWidth(){
            if (this.info.title == 'BlitzDraft'){
                if (this.screen == 'computer'){
                    this.monitorWidth = '70%'
                } else {
                    this.monitorWidth = '40% !important'
                }
            } else if (this.info.title == 'GuessNBA'){
                if (this.screen == 'computer'){
                    this.monitorWidth = '60%'
                } else {
                    this.monitorWidth = '35% !important'
                }
            }
        }
    },
    mounted(){
        this.resize();
        this.setMonitorWidth();
        window.addEventListener('resize', this.resize);
    },
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.projectsModal {
    width: 75vw;
    height: 70vh;
    background: #1E1E1E;
    border-radius: 10px;
    z-index: 60;
    .btn {
        width: 8vw;
        height: 2.5vw;
        background: #F9B959;
        border-radius: 10px;
        font-size: 1vw;
        margin-top: 1vw;
        transition: .3s ease;
        transform: scale(1);
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    .demo {
        margin-right: 1vw;
    }
    .exit {
        font-size: 3vw;
        line-height: 0;
        &:hover {
            transition: .2s;
            cursor: pointer;
            color: #F9B959;
        }
    }
    .monitorHolder {
        width: 40%;
        border-radius: 10px 0 0 10px;     
        z-index: -1;
        background: #F9B959;
        .logo {
            filter: drop-shadow(0px 2px 2px #222);
        }
        .monitor {
            filter: drop-shadow(0px 2px 2px #222);
        }
        .back {
            z-index: -1;
            opacity: .2;
        }
    }
    .rightSide {
        overflow-y: scroll;
        width: 60%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;
        .role {
            color: #F9B959;
            font-size: 2.75vw;
            margin-top: 1vw;
        }
        .setting {
            font-size: 1.25vw;
        }
        .overview, .skills {
            color: #F9B959;
            font-size: 1.5vw;
            letter-spacing: 0.8vw;
            line-height: 2;
            margin-top: 1.5vw;
        }
        .desc {
            font-size: 1.25vw;
        }
        .toolBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(9vw, 1fr));
            grid-gap: .5vw;
        }

        .featuresBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
            grid-gap: .5vw;
        }
    }
}
@media (max-width: 700px) {
    .projectsModal {
        width: 80vw;
        height: 60vh;
        overflow: hidden;
        .exit {
            font-size: 6vw;
            line-height: 0;
            right: 3vw;
            top: 3vw;
        }
        .monitorHolder {
            width: 100%;
            height: 25vh;
            border-radius: 10px 10px 0 0;
            .monitor {
                width: 60% !important;
            }
        }
        .rightSide {
            overflow-x: hidden;
            overflow-y: scroll;
            height: 35vh;
            width: 100%;
            padding-left: 3vw;
            padding-right: 3vw;
            padding-bottom: 3vw;
            .btn {
                width: 25vw;
                height: 7vw;
                font-size: 2.5vw;
                margin-top: 3vw;
                transition: .3s ease;
                transform: scale(1);
                border-radius: 5px;
                &:hover {
                    transform: scale(1.05);
                    cursor: pointer;
                }
            }
            .demo {
                margin-right: 2vw;
            }
            .role {
                font-size: 6vw;
                margin-top: 1vw;
            }
            .setting {
                font-size: 3vw;
                line-height: 1;
            }
            .overview, .skills {
                font-size: 3vw !important;
                letter-spacing: 1.5vw;
                line-height: 2;
                margin-top: 2.5vw;
            }
            .desc {
                font-size: 2.5vw !important;
            }
            .toolBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
                grid-gap: .3vw;
            }

            .featuresBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(32vw, 1fr));
                grid-gap: .5vw;
            }
        }
    }
}
</style>
  