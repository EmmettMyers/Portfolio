<template>
    <div v-on:click="handleClose" class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="projectsModal fixed mb-6">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p v-on:click="handleClose" class="exit font-light absolute top-5 right-6">
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
                            <div v-for="link in info.links">
                                <a :href="link.url" target="_blank"
                                    class="btn link font-medium text-black flex justify-center items-center">
                                    {{ link.title }}
                                </a>
                            </div>
                        </div>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal" v-html="info.description"></p>
                        <p v-if="info.features.length > 0" class="skills font-bold mt-6">
                            FEATURES
                        </p>
                        <p class="featuresBox font-normal">
                        <div v-for="feature in info.features">
                            <ModalMiniBox :info="feature" type="featuresBox" />
                        </div>
                        </p>
                        <div v-if="info.tools">
                            <p class="skills font-bold mt-6">
                                TOOLS USED
                            </p>
                            <p class="toolBox font-normal pb-2">
                            <div v-for="tool in info.tools">
                                <ModalMiniBox :info="tool" type="toolsBox" />
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div v-else class="h-full">
                    <div class="monitorHolder w-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img class="monitor" :src="info.screen"
                                :style="{ width: monitorWidth, maxWidth: monitorMaxWidth }" />
                        </div>
                        <img class="back h-full w-full absolute object-cover top-0 left-0" />
                    </div>
                    <div class="rightSide h-full relative">
                        <p v-on:click="handleClose" class="exit font-light absolute top-4 right-3">
                            x
                        </p>
                        <p class="role font-bold">{{ info.title }}</p>
                        <p class="setting font-medium">
                            {{ info.time }}
                        </p>
                        <div class="flex justify-start">
                            <div v-for="link in info.links">
                                <a :href="link.url" target="_blank"
                                    class="btn link font-medium text-black flex justify-center items-center">
                                    {{ link.title }}
                                </a>
                            </div>
                        </div>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal" v-html="info.description"></p>
                        <p v-if="info.features.length > 0" class="skills font-bold mt-6">
                            FEATURES
                        </p>
                        <p class="featuresBox font-normal">
                        <div v-for="feature in info.features">
                            <ModalMiniBox :info="feature" type="featuresBox" />
                        </div>
                        </p>
                        <div v-if="info.tools">
                            <p class="skills font-bold mt-6">
                                TOOLS USED
                            </p>
                            <p class="toolBox font-normal pb-5">
                            <div v-for="tool in info.tools">
                                <ModalMiniBox :info="tool" type="toolsBox" />
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalMiniBox from './ModalMiniBox.vue';
import { projectsModalInfo, projectsModalOpen } from '@/utils/projectsInfo';
import { logProjectButtonClick } from '@/utils/analytics';

export default defineComponent({
    components: {
        ModalMiniBox
    },
    data() {
        return {
            screen: "computer",
            info: projectsModalInfo,
            monitorWidth: "80%",
            monitorMaxWidth: "220px"
        }
    },
    methods: {
        logButtonClick(name: string) {
            logProjectButtonClick(name, this.info.title);
        },
        handleClose() {
            projectsModalOpen.value = false;
        },
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        setMonitorWidth() {
            if (this.info.title == 'BlitzDraft') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '70%';
                } else {
                    this.monitorWidth = '40% !important';
                    this.monitorMaxWidth = '140px';
                }
            } else if (this.info.title == 'GuessNBA') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '60%';
                } else {
                    this.monitorWidth = '35% !important';
                    this.monitorMaxWidth = '120px';
                }
            } else if (this.info.title == 'Seekr') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '55%';
                } else {
                    this.monitorWidth = '35% !important';
                    this.monitorMaxWidth = '80px';
                }
            } else if (this.info.title == 'PickupUNL' || this.info.title == 'Sure' || this.info.title == 'Blokus') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '90%';
                } else {
                    this.monitorWidth = '75% !important';
                    this.monitorMaxWidth = '260px';
                }
            }
        }
    },
    mounted() {
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
    height: 75vh;
    max-height: 50vw;
    background: #1E1E1E;
    border-radius: .65vw 0 0 .65vw;
    z-index: 60;

    .link {
        padding-left: 20px;
        padding-right: 20px;
        height: 2.5vw;
        background: #F9B959;
        color: #1E1E1E;
        border-radius: .35vw;
        font-size: 1vw;
        margin-top: 1vw;
        transition: .3s ease;
        transform: scale(1);
        margin-right: .5vw;
        margin-bottom: 0.25vw;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
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
        border-radius: .65vw 0 0 .65vw;
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

        .overview,
        .skills {
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
        height: auto;
        max-height: 70vh;
        overflow: hidden;
        border-radius: 2vw;

        .exit {
            font-size: 6vw;
            line-height: 0;
        }

        .monitorHolder {
            width: 100%;
            height: 25vh;
            border-radius: 2vw 2vw 0 0;

            .monitor {
                width: 60% !important;
            }
        }

        .rightSide {
            overflow-x: hidden;
            overflow-y: scroll;
            max-height: 45vh;
            width: 100%;
            padding-left: 3vw;
            padding-right: 3vw;
            padding-bottom: 3vw;

            .link {
                text-align: center;
                line-height: 2.5vw;
                padding-left: 20px;
                padding-right: 20px;
                height: 7vw;
                font-size: 2.5vw;
                margin-top: 3vw;
                border-radius: 5px;
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

            .overview,
            .skills {
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