<template>
    <div v-on:click="handleClose" class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen absolute">
        <div class="h-screen flex items-center justify-center">
            <div class="experienceModal fixed mb-6">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p v-on:click="handleClose" class="exit font-light absolute top-6 right-6">
                        x
                    </p>
                    <div class="monitorHolder h-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img class="monitor" :src="info.screen" :style="{ width: monitorWidth }" />
                        </div>
                        <img class="back h-full absolute object-cover top-0 left-0" :src="info.background" />
                    </div>
                    <div class="rightSide">
                        <p class="role font-bold" v-html="info.title"></p>
                        <p class="company font-semibold" v-html="info.company"></p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <div class="flex justify-start flex-wrap">
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
                        <p v-if="info.contributions.length > 0" class="contributions font-bold mt-6">
                            CONTRIBUTIONS
                        </p>
                        <div class="contributionsBox font-normal">
                            <ul class="contributionsList">
                                <li v-for="contribution in info.contributions" v-html="contribution"></li>
                            </ul>
                        </div>
                        <p class="skills font-bold mt-6">
                            SKILLS
                        </p>
                        <p class="skillsBox font-normal">
                        <div v-for="skill in info.skills">
                            <ModalMiniBox :info="skill" type="skillsBox" />
                        </div>
                        </p>
                    </div>
                </div>
                <div v-else class="h-full">
                    <div class="monitorHolder w-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img class="monitor" :src="info.screen" :style="{ width: monitorWidth, maxWidth: monitorMaxWidth }" />
                        </div>
                        <img class="back h-full w-full absolute object-cover top-0 left-0" :src="info.background" />
                    </div>
                    <div class="rightSide h-full relative">
                        <p v-on:click="handleClose" class="exit font-light absolute top-4 right-3">
                            x
                        </p>
                        <p class="role font-bold" v-html="info.title"></p>
                        <p class="company font-semibold" v-html="info.company"></p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <div class="flex justify-start flex-wrap">
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
                        <p v-if="info.contributions.length > 0" class="contributions font-bold mt-6">
                            CONTRIBUTIONS
                        </p>
                        <div class="contributionsBox font-normal">
                            <ul class="contributionsList">
                                <li v-for="contribution in info.contributions" v-html="contribution"></li>
                            </ul>
                        </div>
                        <p class="skills font-bold mt-6">
                            SKILLS
                        </p>
                        <p class="skillsBox font-normal pb-5">
                        <div v-for="skill in info.skills">
                            <ModalMiniBox :info="skill" type="skillsBox" />
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
import ModalMiniBox from './ModalMiniBox.vue';

export default defineComponent({
    components: {
        ModalMiniBox
    },
    data() {
        return {
            screen: "computer",
            info: experienceModalInfo,
            monitorWidth: "80%",
            monitorMaxWidth: "220px"
        }
    },
    methods: {
        handleClose() {
            experienceModalOpen.value = false;
        },
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        setMonitorWidth() {
            if (this.info.title == 'Garmin' || this.info.title == 'Bosch') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '52%';
                } else {
                    this.monitorWidth = '35% !important';
                    this.monitorMaxWidth = '80px';
                }
            } else if (this.info.title == 'Google' || this.info.title == 'Nestimate' || this.info.title == 'The Daily Nebraskan' 
                       || this.info.title == 'brainrotcode' || this.info.title == 'Pi Kappa Alpha' || this.info.title == 'NIYOU') {
                if (this.screen == 'computer') {
                    this.monitorWidth = '85%';
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

.experienceModal {
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
        transition: .3s ease;
        transform: scale(1);
        margin-right: .5vw;
        margin-bottom: 0.6vw;

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
        width: 45%;
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
        width: 70%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;

        .role {
            color: #F9B959;
            font-size: 2.75vw;
            margin-top: 1.5vw;
            line-height: 3vw;
            margin-bottom: .25vw;
        }

        .company {
            color: #F9B959;
            font-size: 2vw;
            margin-top: .5vw;
            margin-bottom: .5vw;
            line-height: 2.5vw;
        }

        .setting {
            font-size: 1.25vw;
            margin-bottom: 1vw;
        }

        .overview,
        .skills,
        .contributions {
            color: #F9B959;
            font-size: 1.5vw;
            letter-spacing: 0.6vw;
            line-height: 2;
            margin-top: 1.5vw;
        }

        .desc,
        .contributionsBox {
            font-size: 1.25vw;
        }

        .contributionsList {
            list-style-position: outside;
            list-style-type: disc;
            padding-left: 1.6vw;
        }

        .skillsBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(9.5vw, 1fr));
            grid-gap: .5vw;
        }
    }
}

@media (max-width: 700px) {
    .experienceModal {
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
                filter: drop-shadow(0px 2px 2px #222);
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
                line-height: 2.5vw;
                padding-left: 20px;
                padding-right: 20px;
                height: 7vw;
                font-size: 2.5vw;
                border-radius: 5px;
                margin-right: 2vw;
                margin-top: 1.5vw;
                margin-bottom: 1.5vw;
            }

            .role {
                font-size: 5vw;
                margin-top: 2.5vw;
                line-height: 6vw;
                margin-bottom: 0.5vw;
            }

            .company {
                color: #F9B959;
                font-size: 3.75vw;
                margin-top: .5vw;
                line-height: 4.75vw;
            }

            .setting {
                font-size: 2.75vw;
                margin-bottom: 1.5vw;
            }

            .overview,
            .skills,
            .contributions {
                font-size: 3vw !important;
                letter-spacing: 0.8vw;
                line-height: 2;
                margin-top: 2vw;
            }

            .desc,
            .contributionsBox {
                font-size: 2.5vw !important;
            }

            .contributionsList {
                padding-left: 3.4vw;
            }

            .skillsBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
                grid-gap: .5vw;
            }
        }
    }
}

@media (max-width: 499px) {
    .contributionsList {
        padding-left: 4vw !important;
    }
}
</style>