<template>
    <div :class="screen == 'phone' ? 'mt-3' : 'wordPadder'" class="flex justify-start">
        <a href="https://drive.google.com/file/d/14F5Z8eOhVzJzOl70Hiz_65fA68jDcjF0/view?usp=sharing"
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
        <a href="https://www.instagram.com/emmett_myers/" class="contactBox flex justify-center items-center"
            target="_blank" @click="logContactIconClick('instagram')">
            <img style="height: 60%;" src="icons/instagram.webp" />
        </a>
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
    margin-right: .75vw;

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