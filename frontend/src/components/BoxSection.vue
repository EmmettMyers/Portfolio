<template>
    <div class="flex justify-center">
        <div class="section" :style="{
            paddingTop: (title == 'SKILLS' || title == 'PROJECTS') ? (screen === 'computer' ? '2vw' : '4vw') : (screen === 'computer' ? '5vw' : '10vw'),
            paddingBottom: (title == 'EDUCATION') ? (screen === 'computer' ? '8vw' : '15vw') : '0'
        }">
            <p class="title font-bold" :class="screen == 'computer' ? 'pb-4' : 'pb-1'">
                {{ title }}
            </p>
            <div v-if="title == 'SKILLS'">
                <div class="skillsContainer">
                    <div v-for="info in allInfo">
                        <SkillBox :info="info" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="container">
                    <div v-for="info in allInfo.slice(0, 6)">
                        <ContentBox :info="info" />
                    </div>
                </div>
                <div v-if="allInfo.length > 6 && !showMore" class="showMore" v-on:click="setShowMore(true)">
                    <div class="showMoreTxt">Show More +</div>
                </div>
                <div v-if="showMore" class="container" style="margin-top: 1.042vw;"
                    :style="{ paddingBottom: screen === 'computer' ? '3vw' : '6vw' }">
                    <div v-for="info in allInfo.slice(6)">
                        <ContentBox :info="info" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentBox from './/ContentBox.vue';
import SkillBox from './SkillBox.vue';

export default defineComponent({
    props: ['title', 'allInfo'],
    components: {
        ContentBox, SkillBox
    },
    data() {
        return {
            screen: "computer",
            showMore: false,
        }
    },
    methods: {
        resize() {
            window.innerWidth > 700 ? this.screen = "computer" : this.screen = "phone";
        },
        setShowMore(state: boolean) {
            this.showMore = state;
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

.section {
    width: 80vw;

    .title {
        color: #F9B959;
        font-size: 2.5vw;
        letter-spacing: 0.781vw;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.042vw;
    }

    .showMore {
        width: 80vw;
        text-align: right;
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;

        .showMoreTxt {
            font-weight: 500;
            font-style: italic;
            color: #F9B959;
            font-size: 1.75vw;
            transition: .2s ease;
            width: fit-content;

            &:hover {
                cursor: pointer;
                filter: brightness(120%);
            }
        }
    }

    .skillsContainer {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 0.3vw;
    }
}

@media (max-width: 700px) {
    .title {
        font-size: 5vw !important;
        letter-spacing: 1.5vw !important;
    }

    .container {
        display: block !important;
    }

    .showMoreTxt {
        font-size: 4.5vw !important;
    }

    .skillsContainer {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-gap: 1vw !important;
    }
}
</style>