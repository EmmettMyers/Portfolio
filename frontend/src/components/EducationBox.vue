<template>
    <div v-on:click="openModal" class="educationBox relative" :class="screen == 'phone' && 'mt-3'">
        <div class="absolute z-40 text-white" style="bottom: 2vw; left: 2vw">
            <p class="title font-bold"> {{ info.school }} </p>
        </div>
        <div class="blackShade absolute top-0 z-30 left-0 w-full h-full"></div>
        <div class="yellowShade absolute top-0 z-20 left-0 w-full h-full"></div>
        <img class="w-full object-cover z-10" :src="info.image" />
    </div>
</template>
  
<script lang="ts">
import { educationModalInfo, educationModalOpen } from '@/utils/educationInfo';
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['info'],
    data() {
        return {
            screen: "computer"
        }
    },
    methods: {
        openModal(){
            if (this.info.company){
                educationModalOpen.value = true;
                educationModalInfo.value = this.info;
            } else {
                educationModalOpen.value = true;
                educationModalInfo.value = this.info;
            }
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
  
<style lang="scss">
@import "../styles/colors.scss";

.educationBox {
    width: 39.25vw;
    height: 18.23vw;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    transition: .2s ease;
    .title {
        line-height: 1;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.73);
        font-size: 1.875vw;
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
    .educationBox {
        width: 80vw;
        height: 40vw;
        .title {
            line-height: 1;
            font-size: 4vw;
        }
    }
}
</style>
  