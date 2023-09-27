<script setup>
const parent = JSON.parse(localStorage.getItem('parent'));

const childrens = JSON.parse(localStorage.getItem('childrens'))
</script>

<template>
    <div class="empty_preview" v-if="!(childrens && parent)">
        <span>Заполните поля во вкладке "Форма"</span>
    </div>
    <div class="preview_block" v-else>
        <div class="parent_preview">
            <h1 class="parent_header">
                Персональные данные
            </h1>
            <span class="parent_info">
                {{ parent.name }}, {{ parent.age }}
            </span>
        </div>
        <div class="childrens_preview">
            <h1 class="children_header">
                Дети
            </h1>
            <div class="children_block" v-for="child in childrens" :key="child.name">
                <span class="children_info">

                    {{ child.name }}, {{ child.age }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";

.empty_preview {

    span {
        color: #000;
        font-family: $ff;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
}

.preview_block {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-self: flex-start;
    margin: 30px 0 0 375px;

    .parent_preview,
    .childrens_preview {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .parent_header,
        .children_header {
            color: $color-black;
            font-family: $ff;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
        }

        .parent_info {
            color: $color-black;
            font-family: $ff;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
        }

        .children_block {
            .children_info {
                display: flex;
                padding: 10px 20px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 10px;
                border-radius: 5px;
                background: $color-greyL;
                color: #000;
                font-family: $ff;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 24px;
            }
        }
    }
}
</style>