<template>
    <div 
        v-on:click="handleClose"
        class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="projectsModal absolute">
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
                    <img class="object-cover h-full" :src="info.image" />
                    <div class="rightSide h-full relative">
                        <p
                            v-on:click="handleClose"
                            class="exit font-light absolute"
                        >
                            x
                        </p>
                        <p class="role font-black">{{ info.title }}</p>
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
            info: projectsModalInfo
        }
    },
    methods: {
        handleClose(){
            projectsModalOpen.value = false;
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

.projectsModal {
    width: 70vw;
    height: 70vh;
    background: #1E1E1E;
    border-radius: 10px;
    z-index: 60;
    .btn {
        width: 10vw;
        height: 3vw;
        background: #FAFF00;
        border-radius: 10px;
        font-size: 1.25vw;
        margin-top: 2vw;
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
            color: #FAFF00;
        }
    }
    img {
        width: 40%;
        border-radius: 10px 0 0 10px;
    }
    .rightSide {
        overflow-y: scroll;
        width: 60%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;
        .role {
            color: #FAFF00;
            font-size: 3vw;
            margin-top: 1vw;
        }
        .setting {
            font-size: 1.5vw;
        }
        .overview, .skills {
            color: #FAFF00;
            font-size: 2vw;
            letter-spacing: 0.8vw;
            line-height: 2;
            margin-top: 2vw;
        }
        .desc {
            font-size: 1.5vw;
        }
        .toolBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(7vw, 1fr));
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
            .btn {
                width: 25vw;
                height: 5vw;
                font-size: 2vw;
                margin-top: 4vw;
                transition: .3s ease;
                transform: scale(1);
                &:hover {
                    transform: scale(1.05);
                    cursor: pointer;
                }
            }
            .demo {
                margin-right: 2vw;
            }
            .role {
                font-size: 7vw;
                margin-top: 1vw;
            }
            .setting {
                font-size: 3vw;
                line-height: 1;
            }
            .overview, .skills {
                font-size: 3vw;
                letter-spacing: 1.5vw;
                line-height: 2;
                margin-top: 2.5vw;
            }
            .desc {
                font-size: 2vw;
            }
            .toolBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
                grid-gap: .5vw;
            }

            .featuresBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(22vw, 1fr));
                grid-gap: .5vw;
            }
        }
    }
}
</style>
  