<template>
    <div 
        v-on:click="handleClose"
        class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen absolute">
        <div class="h-screen flex items-center justify-center">
            <div class="experienceModal fixed mb-10">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p
                        v-on:click="handleClose"
                        class="exit font-light absolute top-5 right-6"
                    >
                        x
                    </p>
                    <div class="monitorHolder h-full relative">
                        <div class="w-full h-full flex justify-center items-center">
                            <img 
                                class="monitor" 
                                :src="info.screen" 
                                :style="{ width: monitorWidth }" 
                            />
                        </div>
                        <img class="back h-full absolute object-cover top-0 left-0" :src="info.background" />
                    </div>
                    <div class="rightSide">
                        <p class="role font-bold">{{ info.title.replace(new RegExp('-', 'g'), '&ensp;') }}</p>
                        <p class="company font-semibold">{{ info.company }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal" v-html="info.description"></p>
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
                            <img 
                                class="monitor" 
                                :src="info.screen" 
                                :style="{ width: monitorWidth }" 
                            />
                        </div>
                        <img class="back h-full w-full absolute object-cover top-0 left-0" :src="info.background" />
                    </div>
                    <div class="rightSide h-full relative">
                        <p
                            v-on:click="handleClose"
                            class="exit font-light absolute top-4 right-3"
                        >
                            x
                        </p>
                        <p class="role font-bold">{{ info.title.replace(new RegExp('-', 'g'), '&ensp;') }}</p>
                        <p class="company font-semibold">{{ info.company }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="overview font-bold mt-6">
                            OVERVIEW
                        </p>
                        <p class="desc font-normal" v-html="info.description"></p>
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
        handleClose(){
            experienceModalOpen.value = false;
        },
        resize(){
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        setMonitorWidth(){
            if (this.info.company == 'Garmin'){
                if (this.screen == 'computer'){
                    this.monitorWidth = '50%';
                } else {
                    this.monitorWidth = '20% !important';
                    this.monitorMaxWidth = '100px';
                }
            } else if (this.info.company == 'Nestimate'){
                if (this.screen == 'computer'){
                    this.monitorWidth = '85%';
                } else {
                    this.monitorWidth = '90% !important';
                    this.monitorMaxWidth = '400px';
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

.experienceModal {
    width: 75vw;
    height: 70vh;
    max-height: 50vw;
    background: #1E1E1E;
    border-radius: .65vw 0 0 .65vw;
    z-index: 60;
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
        width: 70%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;
        .role {
            color: #F9B959;
            font-size: 2.75vw;
            margin-top: 1.5vw;
            line-height: 3vw;
            margin-bottom: .5vw;
        }
        .company {
            color: #F9B959;
            font-size: 2vw;
            margin-bottom: .5vw;
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
        .skillsBox {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
            grid-gap: .5vw;
        }
    }
}
@media (max-width: 700px) {
    .experienceModal {
        width: 80vw;
        height: 60vh;
        max-height: none;
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
            height: 35vh;
            width: 100%;
            padding-left: 3vw;
            padding-right: 3vw;
            padding-bottom: 3vw;
            .role {
                font-size: 5vw;
                margin-top: 2.5vw;
                line-height: 6vw;
                margin-bottom: 1vw;
            }
            .company {
                color: #F9B959;
                font-size: 3vw;
            }
            .setting {
                font-size: 2.5vw;
            }
            .overview, .skills {
                font-size: 3vw !important;
                letter-spacing: 0.8vw;
                line-height: 2;
                margin-top: 2vw;
            }
            .desc {
                font-size: 2.5vw !important;
            }
            .skillsBox {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
                grid-gap: .5vw;
            }
        }
    }
}
</style>
  