<template>
    <div  
        class="toolBox flex justify-center items-center font-semibold text-black text-center">
            {{ tool }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['tool']
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.toolBox {
    width: 9.5vw;
    height: 4vw;
    border-radius: 5px;
    font-size: 1.2vw;
    padding-left: 2vw;
    padding-right: 2vw;
    line-height: 1;
    filter: brightness(90%);
    background: white;
}
@media (max-width: 700px) {
    .toolBox {
        width: 17.25vw !important;
        height: 6vw !important;
        font-size: 2vw !important;
        border-radius: 3px;
    }
}
</style>
  