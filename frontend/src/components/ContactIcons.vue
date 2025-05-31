<template>
    <div :class="screen == 'phone' ? 'mt-3' : 'wordPadder'" class="flex justify-start">
        <a href="https://drive.google.com/file/d/1RGJ0TIDiIU-Fgys2chJRpRexov5ZxSjt/view?usp=sharing"
            class="contactBox flex justify-center items-center" target="_blank" @click="logContactIconClick('resume')">
            <img style="height: 75%;" src="icons/resume.png" />
        </a>
        <a href="https://www.linkedin.com/in/emmettmyers/" class="contactBox flex justify-center items-center"
            target="_blank" @click="logContactIconClick('linkedin')">
            <img style="height: 55%;" src="icons/linkedin.png" />
        </a>
        <a href="https://github.com/EmmettMyers" class="contactBox flex justify-center items-center" target="_blank"
            @click="logContactIconClick('github')">
            <img style="height: 55%;" src="icons/github.png" />
        </a>
        <a href="mailto:emmettleemyers@gmail.com?subject=&body=" class="contactBox flex justify-center items-center"
            target="_blank" @click="logContactIconClick('email')">
            <img style="height: 65%;" src="icons/email.png" />
        </a>
        <!--<a href="https://leetcode.com/u/emmettmyers/" class="contactBox flex justify-center items-center"
            target="_blank" @click="logContactIconClick('leetcode')">
            <img style="height: 50%;" src="icons/leetcode.png" />
        </a>-->
        <!--<a href="https://www.instagram.com/emmett_myers/" class="contactBox flex justify-center items-center"
            target="_blank" @click="logContactIconClick('instagram')">
            <img style="height: 60%;" src="icons/instagram.webp" />
        </a>-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { logContactIconClick } from '../utils/analytics';

export default defineComponent({
    data() {
        return {
            screen: "computer"
        }
    },
    methods: {
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        logContactIconClick(icon: string) {
            logContactIconClick(icon);
        },
    },
    mounted() {
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
    border-radius: .75vw;
    transition: .3s ease;
    transform: scale(1);
    margin-right: 1vw;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    img {
        filter: invert(0%) sepia(8%) saturate(3616%) hue-rotate(37deg) brightness(100%) contrast(76%);
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
        width: 14vw;
        height: 12vw;
        border-radius: 7px;
        margin-right: 2vw;

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