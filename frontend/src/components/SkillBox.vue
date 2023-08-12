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
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.skillBox {
    width: 12.9vw;
    height: 4.3vw;
    border-radius: 5px;
    font-size: 1.563vw;
}
@media (max-width: 700px) {
    .skillBox {
        width: 26vw !important;
        height: 8vw !important;
        font-size: 2.75vw !important;
    }
}
</style>
  