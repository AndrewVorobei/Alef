<script setup></script>

<template>
    <div class="header_layout">
        <div class="logo">
            <img src="@/assets/header-img/logo.svg" alt="logo">
        </div>
        <nav class="navigation">
            <router-link :to="{ path: '/' }" class="form_nav">
                Форма
            </router-link>
            <router-link :to="{ path: '/preview' }" class="preview_nav">
                Превью
            </router-link>
        </nav>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";

.header_layout {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 100%;
    max-height: 76px;
    background: $color-white;

    .logo {
        display: flex;
        align-self: center;
        padding: 2px 41px 1px 41px;
        max-width: 175px;
        max-height: 32px;
    }

    .navigation {
        margin-top: 7px;
        display: flex;
        align-items: center;
        justify-self: center;

        gap: 24px;
        height: 70px;


        a {
            text-decoration: none;
            font-family: $ff;
            color: $color-grey;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;


            &:hover {
                color: rgba(17, 17, 17, 0.76)
            }
        }
    }
}
</style>