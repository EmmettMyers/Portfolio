<template>
    <div v-on:click="handleClose" class="shadow bg-black w-screen h-screen z-50 absolute left-0 top-0 opacity-90">
    </div>
    <div class="w-screen h-screen">
        <div class="h-screen flex items-center justify-center">
            <div class="educationModal fixed mb-10">
                <div v-if="screen == 'computer'" class="flex justify-between h-full">
                    <p v-on:click="handleClose" class="exit font-light absolute top-6 right-6">
                        x
                    </p>
                    <div class="imgHolder h-full">
                        <img class="object-cover h-full" :src="info.image" />
                    </div>
                    <div class="rightSide">
                        <p class="school font-bold">{{ info.school }}</p>
                        <p class="major font-semibold">{{ info.title }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
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
                        <p class="academics font-bold mt-6">
                            ACADEMICS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="academic in info.academics">
                                {{ academic }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            {{ info.school === 'University of Nebraska-Lincoln' ? 'INVOLVEMENTS' : 'ACTIVITIES' }}
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
                        <p v-on:click="handleClose" class="exit font-light absolute top-4 right-3">
                            x
                        </p>
                        <p class="school font-bold">{{ info.school }}</p>
                        <p class="major font-semibold">{{ info.title }}</p>
                        <p class="setting font-medium">
                            {{ info.location }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
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
                        <p class="academics font-bold mt-6">
                            ACADEMICS
                        </p>
                        <p class="academicsBox font-normal">
                            <li v-for="academic in info.academics">
                                {{ academic }}
                            </li>
                        </p>
                        <p class="academics font-bold mt-6">
                            {{ info.school === 'University of Nebraska-Lincoln' ? 'INVOLVEMENTS' : 'ACTIVITIES' }}
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

export default defineComponent({
    data() {
        return {
            screen: "computer",
            info: educationModalInfo
        }
    },
    methods: {
        handleClose() {
            educationModalOpen.value = false;
        },
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        }
    },
    mounted() {
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

    .imgHolder {
        width: 30%;
        border-radius: .65vw 0 0 .65vw;
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
        height: auto;
        max-height: 70vh;
        overflow: hidden;
        border-radius: 2vw;

        .exit {
            font-size: 6vw;
            line-height: 0;
        }

        .imgHolder {
            width: 100%;
            height: 25vh;
            border-radius: 2vw 2vw 0 0;
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
                margin-top: 3vw;
                border-radius: 5px;
                margin-right: 2vw;
            }

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