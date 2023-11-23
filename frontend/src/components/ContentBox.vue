<template>
    <div v-on:click="openModal" class="contentBox relative" :class="screen == 'phone' && 'mt-3'">
        <div class="absolute bottom-3 left-3 z-40 text-white">
            <p :style="titleSize" class="title font-bold"> {{ info.title.replace(new RegExp('-', 'g'), '&ensp;') }} </p>
            <p class="company font-bold"> {{ info.company }} </p>
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

export default defineComponent({
    props: ['info'],
    data() {
        return {
            fit: "h-full",
            titleSize: "font-size: 1.67vw",
            screen: "computer"
        }
    },
    methods: {
        openModal(){
            if (this.info.company){
                experienceModalOpen.value = true;
                experienceModalInfo.value = this.info;
            } else {
                projectsModalOpen.value = true;
                projectsModalInfo.value = this.info;
            }
        },
        resize(){
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";

            this.fit = "w-full";

            if (this.screen == 'computer'){
                if (this.info.title == "NewsGuesser" || this.info.title == "CivicSendNE" || this.info.title == "Portfolio"){
                    this.fit = "h-full";
                }
                if (!this.info.company){
                    this.titleSize = "font-size: 1.875vw";
                } else {
                    this.titleSize = "font-size: 1.67vw";
                }
            } else {
                if (this.info.title == "NewsGuesser" || this.info.title == "CivicSend" || this.info.title == "Portfolio"){
                    this.fit = "h-full";
                }
                if (!this.info.company){
                    this.titleSize = "font-size: 6vw";
                } else {
                    this.titleSize = "font-size: 5vw";
                }
            }
        }
    },
    mounted(){
        this.resize();
        window.addEventListener('resize', this.resize);
    },
});
</script>
  
<style lang="scss">
@import "../styles/colors.scss";

.contentBox {
    width: 25.85vw;
    height: 15vw;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    transition: .2s ease;
    .title {
        line-height: 1.2;
        filter: drop-shadow(2px 2px 2px #222);
    }
    .company {
        font-size: 1.2vw;
        color: #F9B959;
        filter: drop-shadow(2px 2px 2px #222);
    }
    .yellowShade {
        border-radius: 10px;
        background: #F9B959;
        opacity: 30%;
    }
    .blackShade {
        border-radius: 10px;
        background: #383838;
        opacity: 60%;
    }   
    img {
        border-radius: 10px;
    }
    &:hover {
        cursor: pointer;
        filter: brightness(130%);
    }
}
@media (max-width: 700px) {
    .contentBox {
        width: 80vw;
        height: 40vw;
        .title {
            line-height: 1.2;
        }
        .company {
            font-size: 3vw;
        }
    }
}
</style>
  