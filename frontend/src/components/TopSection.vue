<template>
    <div class="w-screen">
        <div v-if="screen == 'computer'" class="flex justify-center w-screen">
            <div class="topSection flex justify-between items-center">
                <div class="textBox">
                    <p class="hello font-black">
                        Hello!
                    </p>
                    <p class="greeting font-bold">
                        I'm <span style="color: #F9B959">Emmett Myers.</span>
                    </p>
                    <p class="desc font-medium">
                        I <span class="animate">code.</span> Mostly full-stack web apps.
                    </p>
                    <ContactIcons />
                </div>
                <div class="meBox relative flex justify-center">
                    <img class="absolute bottom-0 object-cover" src="headshots/emmettHeadshot3.png" />
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center w-screen">
            <div class="topSection">
                <div class="flex justify-center pt-6">
                    <div class="meBox relative flex justify-center mt-20">
                        <img class="absolute bottom-0 object-cover" src="headshots/emmettHeadshot3.png" />
                    </div>
                </div>
                <p class="hello font-black pt-5">
                    Hello!
                </p>
                <p class="greeting font-bold">
                    I'm <span style="color: #F9B959">Emmett Myers.</span>
                </p>
                <p class="desc font-medium">
                    I <span class="animate">code.</span> Mostly full-stack web apps.
                </p>
                <ContactIcons />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ContactIcons from './/ContactIcons.vue';

export default defineComponent({
    components: {
        ContactIcons
    },
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
  
<style lang="scss">
@import "../styles/colors.scss";

.topSection {
    padding-top: 4vw;
    width: 80vw;

    .textBox {
        margin-top: 1vw;
        .hello {
            line-height: 1;
            font-size: 7.8vw;
        }
        .greeting {
            line-height: 1.4;
            font-size: 3.9vw;
        }
        .desc {
            line-height: 1.4;
            font-size: 2.5vw;
        }
    }

    .meBox {
        margin-top: 4.5vw;
        width: 35vw;
        height: 22vw;
        background: #F9B959;
        border-radius: 10px;
        overflow: visible;
        img {
            width: auto;
            height: 130%;
            border-radius: 1vw;
        }
    }

    .animate {
        background-image: linear-gradient(-225deg,
                #F9B959 0%,
                orange 40%,
                yellow 60%,
                #F9B959 100%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
}

@media (max-width: 700px) {
    .topSection {
        width: 80vw;
        .hello {
            line-height: 1;
            font-size: 15vw;
        }
        .greeting {
            line-height: 1.4;
            font-size: 6vw;
        }
        .desc {
            line-height: 1.4;
            font-size: 4.5vw;
        }
        .meBox {
            margin-top: 16vw;
            width: 80vw;
            height: 35vh;
            background: #F9B959;
            border-radius: 10px;
            overflow: visible;
            img {
                width: auto;
                height: 130%;
            }
        }
    }
}
</style>
  