<script setup>
import ChildData from '@/components/ChildData.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParentData from "@/components/ParentData.vue";
import { save, isSave, parent, childrens } from "@/helpers/formPageHelper/index"

</script>

<template>
    <HeaderComponent />
    <ParentData :parent="parent"></ParentData>
    <ChildData :childrens="childrens"></ChildData>
    <div class="save_block">
        <button @click="save" class="save_btn">
            Сохранить
        </button>
        <transition name="fade">
            <span v-if="isSave">Успешно сохраненно!</span>
        </transition>
    </div>
    <FooterComponent></FooterComponent>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";
@import "@/helpers/formPageHelper/styles.scss";
</style>