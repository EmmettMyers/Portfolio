<template>
    <div  
        class="box flex justify-center items-center font-semibold text-black text-center" :class="type">
            <p class="pr-4 pl-4">{{ info }}</p>
            
    </div>
</template>
  
<script lang="ts" scoped>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['info', 'type']
});
</script>
  
<style lang="scss" scoped>
@import "../styles/colors.scss";

.box {
    border-radius: 5px;
    line-height: 1;
    filter: brightness(90%);
    background: white;
}
.toolsBox {
    width: 9.5vw;
    height: 4vw;
    font-size: 1.2vw;
}
.skillsBox {
    width: 10.25vw;
    height: 4vw;
    font-size: 1.2vw;
}
.featuresBox {
    width: 19.5vw;
    height: 5vw;
    font-size: 1.1vw;
}

@media (max-width: 700px) {
    .box {
        width: 18vw;
        height: 6vw;
        font-size: 2vw;
        border-radius: 3px;
    }
    .toolsBox {
        width: 18vw;
        height: 6vw;
        font-size: 2vw;
    }
    .skillsBox {
        width: 17.75vw;
        height: 8vw;
        font-size: 2.2vw;
    }
    .featuresBox {
        width: 36.5vw;
        height: 9vw;
        font-size: 2vw;
    }
}
</style>
  