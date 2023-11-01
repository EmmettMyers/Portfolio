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

<!-- <img :class="specialClass" class="logo z-40 absolute bottom-2 right-2" :src="info.logo" /> -->
  
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
            screen: "computer",
            specialClass: ""
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
            if (this.info.company == "The Daily Nebraskan" ){
                this.specialClass = "dn_logo"
            } else if (this.info.company == "Olsson" ){
                this.specialClass = "olsson_logo"
            }

            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
            if (this.screen == "computer" ){
                this.fit = "h-full"
            }
            if (this.info.title == "BlitzDraft" || this.info.title == "GuessNBA" || this.info.company == "Principal Financial Group"){
                this.fit = "w-full"
            } else if (this.info.company && this.screen == "phone"){
                this.fit = "w-full"
            } else if (this.screen == "phone" 
                && (this.info.title == "PickupUNL" || this.info.title == "Sure" || this.info.title == "Connect 4 Bot")){
                    this.fit = "w-full"
            }
            if (this.screen == "computer" && !this.info.company) {
                this.titleSize = "font-size: 1.875vw"
            } else if (this.screen == "computer"){
                this.titleSize = "font-size: 1.67vw"
            }
            if (this.screen == "phone" && this.info.company){
                this.titleSize = "font-size: 5vw"
            } else if (this.screen == "phone"){
                this.titleSize = "font-size: 6vw"
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
    height: 18.23vw;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    transition: .2s ease;
    .title {
        line-height: 1.2;
        filter: drop-shadow(2px 2px 2px #222);
    }
    .company {
        font-size: 1.042vw;
        color: #FAFF00;
        filter: drop-shadow(2px 2px 2px #222);
    }
    .logo {
        max-height: 2vw;
        max-width: 4.5vw;
        border-radius: 0;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow(2px 2px 2px #222);
    }
    .dn_logo {
        max-width: 7vw;
    }
    .olsson_logo {
        max-width: 3.5vw;
    }
    .yellowShade {
        border-radius: 10px;
        background: #FAFF00;
        opacity: 30%;
    }
    .blackShade {
        border-radius: 10px;
        background: black;
        opacity: 50%;
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
        .logo {
            max-height: 10vw;
            max-width: 25vw;
        }
        .dn_logo {
            max-width: 35vw;
        }
        .olsson_logo {
            max-width: 18vw;
        }
    }
}
</style>
  