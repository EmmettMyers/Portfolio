<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="loader mb-10">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss">
.loader {
    border: 16px solid rgb(229, 224, 224);
    border-top: 16px solid #e29a2e;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>  