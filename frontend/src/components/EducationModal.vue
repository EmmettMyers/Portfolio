<template>
    <div 
        v-on:click="handleClose"
        class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="educationModal fixed mb-10">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p
                        v-on:click="handleClose"
                        class="exit font-light absolute top-5 right-6"
                    >
                        x
                    </p>
                    <div class="imgHolder h-full">
                        <img class="object-cover h-full" :src="info.image" />
                    </div>
                    <div class="rightSide">
                        <p class="school font-bold">{{ info.school }}</p>
                        <p class="major font-semibold">{{ info.major }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="academics font-bold mt-6">
                            ACADEMICS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="academic in info.academics">
                                {{ academic }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            ACTIVITIES
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="activity in info.activities">
                                {{ activity }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            HONORS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="honor in info.honors">
                                {{ honor }}
                            </li>
                        </p>
                        <p v-if="info.coursework.length > 0" class="academics font-bold mt-6">
                            COURSEWORK
                        </p>
                        <p class="academicsBox font-normal pb-3">
                            <li v-for="course in info.coursework">
                                {{ course }}
                            </li>
                        </p>
                    </div>
                </div>
                <div v-else class="h-full">
                    <div class="imgHolder h-full">
                        <img class="object-cover w-full h-full" :src="info.image" />
                    </div>
                    <div class="rightSide h-full relative">
                        <p
                            v-on:click="handleClose"
                            class="exit font-light absolute top-4 right-3"
                        >
                            x
                        </p>
                        <p class="school font-bold">{{ info.school }}</p>
                        <p class="major font-semibold">{{ info.major }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            {{ info.time }}
                        </p>
                        <p class="academics font-bold mt-6">
                            ACADEMICS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="academic in info.academics">
                                {{ academic }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            ACTIVITIES
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="activity in info.activities">
                                {{ activity }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            HONORS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="honor in info.honors">
                                {{ honor }}
                            </li>
                        </p>
                        <p v-if="info.coursework.length > 0" class="academics font-bold mt-6">
                            COURSEWORK
                        </p>
                        <p class="academicsBox font-normal pb-5">
                            <li v-for="course in info.coursework">
                                {{ course }}
                            </li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { educationModalInfo, educationModalOpen } from '@/utils/educationInfo';
import { defineComponent } from 'vue';
import ModalSkillsBox from './ModalSkillsBox.vue';

export default defineComponent({
    components: {
        ModalSkillsBox
    },
    data() {
        return {
            screen: "computer",
            info: educationModalInfo
        }
    },
    methods: {
        handleClose(){
            educationModalOpen.value = false;
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

.educationModal {
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
            color: #F9B959;
        }
    }
    .imgHolder {
        width: 30%;
        border-radius: 10px 0 0 10px;
        background: #F9B959;
        img {
            opacity: .5;
            border-radius: 10px 0 0 10px;
        }
    }
    .rightSide {
        overflow-y: scroll;
        width: 70%;
        padding-left: 2vw;
        padding-right: 3vw;
        padding-bottom: 3vw;
        .school {
            color: #F9B959;
            font-size: 2.5vw;
            margin-top: 1vw;
        }
        .major {
            color: #F9B959;
            font-size: 2vw;
        }
        .setting {
            font-size: 1.25vw;
            line-height: 2;
        }
        .academics {
            color: #F9B959;
            font-size: 1.5vw;
            letter-spacing: .8vw;
            line-height: 2;
            margin-top: 1vw;
        }
        .academicsBox {
            font-size: 1.25vw;
        }
    }
}
@media (max-width: 700px) {
    .educationModal {
        width: 80vw;
        height: 60vh;
        overflow: hidden;
        .exit {
            font-size: 6vw;
            line-height: 0;
        }
        .imgHolder {
            width: 100%;
            height: 25vh;
            border-radius: 10px 10px 0 0;
        }
        .rightSide {
            overflow-x: hidden;
            overflow-y: scroll;
            height: 35vh;
            width: 100%;
            padding-left: 3vw;
            padding-right: 3vw;
            padding-bottom: 3vw;
            .school {
                font-size: 4vw;
                margin-top: 2vw;
            }
            .major {
                color: #F9B959;
                font-size: 3vw;
                line-height: 1.5;
            }
            .setting {
                font-size: 2.5vw;
            }
            .academics {
                font-size: 3vw !important;
                letter-spacing: 1.2vw;
                line-height: 2;
                margin-top: 2vw;
            }
            .academicsBox {
                font-size: 2.5vw;
            }
        }
    }
}
</style>
  