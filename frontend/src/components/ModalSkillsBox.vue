<template>
    <div  
        class="skillBox flex justify-center items-center font-semibold text-black">
            {{ skill }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['skill']
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.skillBox {
    width: 14vw;
    height: 4.3vw;
    border-radius: 5px;
    font-size: 1.563vw;
    filter: brightness(90%);
    background: white;
}
@media (max-width: 700px) {
    .skillBox {
        width: 17vw !important;
        height: 8vw !important;
        font-size: 2.2vw !important;
    }
}
</style>
  