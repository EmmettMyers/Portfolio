<template>
    <div 
        :style="{ background: info.color }" 
        class="skillBox flex justify-center items-center font-semibold">
            {{ info.name }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['info']
});
</script>
  
<style lang="scss">
@import "../styles/colors.scss";

.skillBox {
    width: 12.1vw;
    height: 4.3vw;
    border-radius: 5px;
    font-size: 1.563vw;
    filter: brightness(90%);
}
@media (max-width: 700px) {
    .skillBox {
        width: 18vw !important;
        height: 8vw !important;
        font-size: 2.5vw !important;
    }
}
</style>
  