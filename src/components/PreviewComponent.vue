<script setup>
import { childAgeSuffix, parentAgeSuffix, parent, childrens } from '@/helpers/previewPageHelper';
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
                {{ parent.name }}, {{ parent.age }} {{ parentAgeSuffix }}
            </span>
        </div>
        <div class="childrens_preview">
            <h1 class="children_header">
                Дети
            </h1>
            <div class="children_block" v-for="child in childAgeSuffix" :key="child.name">
                <span class="children_info">

                    {{ child.name }}, {{ child.age }} {{ child.ageSuffix }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";
@import "@/helpers/previewPageHelper/styles.scss";
</style>