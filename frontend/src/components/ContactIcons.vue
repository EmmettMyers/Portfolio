<template>
    <div :class="screen == 'phone' ? 'mt-3' : 'wordPadder'" class="flex justify-start">
        <a 
            href="https://drive.google.com/file/d/1yo8VFTRjU4CyZzGaWpc3aR87mB2SLqSh/view"
            class="contactBox flex justify-center items-center"
            target="_blank"
        >
                <img class="lg" src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png" />
        </a>
        <a 
            href="https://www.linkedin.com/in/emmettmyers/" 
            class="contactBox flex justify-center items-center" 
            :class="screen == 'phone' ? 'ml-1' : 'ml-3'"
            target="_blank"
        >
                <img class="sm" src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" />
        </a>
        <a 
            href="https://github.com/EmmettMyers" 
            class="contactBox flex justify-center items-center" 
            :class="screen == 'phone' ? 'ml-1' : 'ml-3'"
            target="_blank"
        >
                <img class="sm" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </a>
        <a 
            href="mailto:emmettleemyers@gmail.com?subject=&body=" 
            class="contactBox flex justify-center items-center" 
            :class="screen == 'phone' ? 'ml-1' : 'ml-3'"
            target="_blank"
        >
                <img class="md" src="https://img.freepik.com/free-icon/email_318-859700.jpg" />
        </a>
        <a 
            href="https://www.instagram.com/emmett_myers/" 
            class="contactBox flex justify-center items-center" 
            :class="screen == 'phone' ? 'ml-1' : 'ml-3'"
            target="_blank"
        >
                <img class="sm" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
        </a>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            screen: "computer"
        }
    },
    methods: {
        resize(){
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        }
    },
    mounted(){
        this.resize();
        window.addEventListener('resize', this.resize);
    }
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.wordPadder {
    padding-top: 2vw;
}

.contactBox {
    width: 6vw;
    height: 5.21vw;
    background: #F9B959;
    border-radius: 10px;
    transition: .3s ease;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    .sm {
        height: 2.65vw;
    }
    .md {
        height: 3.5vw;
    }
    .lg {
        height: 4vw;
    }
}
@media (max-width: 700px) {
    .contactBox {
        width: 12vw;
        height: 9vw;
        border-radius: 5px;
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
        .sm {
            height: 5vw;
        }
        .md {
            height: 6.5vw;
        }
        .lg {
            height: 7.5vw;
        }
    }
}
</style>
  