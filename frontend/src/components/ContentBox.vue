<template>
    <div v-on:click="boxClicked" class="contentBox relative" :class="screen == 'phone' && 'mt-3'"
        :style="{ width: boxWidth }">
        <div class="holder absolute z-40 text-white">
            <div v-if="info.school">
                <p :style="titleSize" class="title font-bold"> {{ info.school }} </p>
                <p class="school font-bold"> {{ info.title }} </p>
            </div>
            <div v-else>
                <p :style="titleSize" class="title font-bold"> {{ info.title.replace(new RegExp('-', 'g'), '&ensp;') }}
                </p>
                <p class="company font-bold"> {{ info.company }} </p>
            </div>
        </div>
        <div class="blackShade absolute top-0 z-30 left-0 w-full h-full"></div>
        <div class="yellowShade absolute top-0 z-20 left-0 w-full h-full"></div>
        <img :class="fit" class="object-cover z-10" :src="info.image" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { experienceModalOpen, experienceModalInfo } from '../utils/experienceInfo'
import { projectsModalInfo, projectsModalOpen } from '@/utils/projectsInfo';
import { educationModalInfo, educationModalOpen } from '@/utils/educationInfo';
import { logEducationBoxClick, logExperienceBoxClick, logProjectBoxClick } from '@/utils/analytics';

export default defineComponent({
    props: ['info'],
    data() {
        return {
            fit: "h-full",
            titleSize: "font-size: 1.67vw",
            screen: "computer",
            boxWidth: "25.85vw",
        }
    },
    methods: {
        boxClicked() {
            if (this.info.company) {
                experienceModalOpen.value = true;
                experienceModalInfo.value = this.info;
                logExperienceBoxClick(this.info.title, this.info.company);
            } else if (this.info.school) {
                educationModalOpen.value = true;
                educationModalInfo.value = this.info;
                logEducationBoxClick(this.info.school);
            } else {
                projectsModalOpen.value = true;
                projectsModalInfo.value = this.info;
                logProjectBoxClick(this.info.title);
            }
        },
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";

            this.fit = "w-full";

            if (this.info.title == "Seekr"){
                this.fit = "seekr";
            }

            if (this.screen == 'computer') {
                if (this.info.title == "Projex" || this.info.title == "NewsGuesser" || this.info.title == "CivicSendNE"
                    || this.info.title == "Portfolio" || this.info.school == "Elkhorn South High School") {
                    this.fit = "h-full";
                }
                if (!this.info.company) {
                    this.titleSize = "font-size: 1.875vw";
                } else {
                    this.titleSize = "font-size: 1.67vw";
                }
            } else {
                if (this.info.title == "Projex" || this.info.title == "NewsGuesser" || this.info.title == "CivicSendNE"
                    || this.info.title == "Portfolio" || this.info.school == "Elkhorn South High School") {
                    this.fit = "h-full";
                }
                if (!this.info.company && !this.info.school) {
                    this.titleSize = "font-size: 6vw";
                } else if (this.info.school) {
                    this.titleSize = "font-size: 4.5vw";
                } else {
                    this.titleSize = "font-size: 5vw";
                }
            }

            if (this.info.school && this.screen == 'computer') {
                if (this.info.school == "University of Nebraska-Lincoln") {
                    this.boxWidth = "48.6vw";
                } else {
                    this.fit = "h-full";
                    this.boxWidth = "30vw";
                }
            }
        }
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
    },
});
</script>

<style lang="scss">
@import "../styles/colors.scss";

.seekr {
    position: absolute;
    top: -40px;
}

.contentBox {
    height: 15vw;
    background: white;
    border-radius: .65vw;
    overflow: hidden;
    transition: .2s ease;

    .holder {
        bottom: .65vw;
        left: .9vw;
    }

    .title {
        line-height: 1.2;
        filter: drop-shadow(2px 2px 2px #222);
    }

    .company {
        font-size: 1.4vw;
        color: #feca7b;
        filter: drop-shadow(2px 2px 2px #222);
    }

    .school {
        font-size: 1.4vw;
        color: #feca7b;
        filter: drop-shadow(2px 2px 2px #222);
    }

    .yellowShade {
        border-radius: .65vw;
        background: #F9B959;
        opacity: 40%;
    }

    .blackShade {
        border-radius: .65vw;
        background: #383838;
        opacity: 50%;
    }

    img {
        border-radius: .65vw;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(130%);
    }
}

@media (max-width: 700px) {

    .contentBox,
    .yellowShade,
    .blackShade,
    .contentBox img {
        border-radius: 2vw;
    }

    .contentBox {
        width: 80vw !important;
        height: 40vw;
        border-radius: 2vw;

        .holder {
            bottom: 2vw;
            left: 2.5vw;
        }

        .title {
            line-height: 1.2;
        }

        .company {
            font-size: 4.1vw;
        }

        .school {
            font-size: 3.4vw;
        }
    }
}
</style>