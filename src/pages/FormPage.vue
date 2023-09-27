<script setup>
import ChildData from '../components/ChildData.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParentData from "@/components/ParentData.vue";
import { ref, reactive } from "vue"

const childrens = ref([])

const parent = reactive({
    name: "",
    age: ""
});

const saveChildren = () => {
    childrens.value.forEach((item) => {
        (item.name && item.age).length === 0 ? alert('Заполните поля ребёнка!') : localStorage.setItem('childrens', JSON.stringify(childrens.value));
    })
};

const saveParent = () => {
    (parent.age && parent.name).length === 0 ?
        alert('Заполните поля родителя!')
        :
        localStorage.setItem('parent', JSON.stringify(parent))


};

const save = () => {
    saveParent();
    saveChildren();
};

</script>

<template>
    <HeaderComponent />
    <ParentData :parent="parent"></ParentData>
    <ChildData :childrens="childrens"></ChildData>
    <button v-if="childrens.length" @click="save" class="save_btn">
        Сохранить
    </button>

    <FooterComponent></FooterComponent>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";

.save_btn {
    align-self: flex-start;
    margin: 30px 0 136px 375px;
    background: $color-primary;
    border: none;
    border-radius: 100px;
    max-width: 118px;
    display: flex;
    padding: 10px 20px;
    color: $color-white;
    font-family: $ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    &:hover {
        background: #0F79AF;
    }
}
</style>