<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import PreviewComponent from '@/components/PreviewComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

</script>

<template>
    <HeaderComponent />
    <PreviewComponent></PreviewComponent>
    <FooterComponent class="footer_component"></FooterComponent>
</template>

<style scoped lang="scss">
.footer_component {
    position: absolute;
    bottom: 0;
}
</style>