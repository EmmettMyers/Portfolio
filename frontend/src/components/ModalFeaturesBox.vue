<template>
    <div  
        class="featuresBox flex justify-center items-center font-semibold text-black text-center">
            {{ feature }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['feature']
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.featuresBox {
    width: 17.75vw;
    height: 5.5vw;
    padding-left: 2vw;
    padding-right: 2vw;
    border-radius: 5px;
    font-size: 1.25vw;
    line-height: 1;
    filter: brightness(90%);
    background: white;
}
@media (max-width: 700px) {
    .featuresBox {
        width: 35.5vw !important;
        height: 9vw !important;
        font-size: 2vw !important;
    }
}
</style>
  