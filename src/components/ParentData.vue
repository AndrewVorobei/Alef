<script setup>

const props = defineProps({
    parent: Object
});

let parent = props.parent;


</script>

<template>
    <div class="parent_block">
        <h1 class="parent_header">
            Персональные данные
        </h1>
        <div class="input_section">

            <div class="parent_name">
                <label for="name">Имя</label>
                <input v-model="parent.name" id="name" placeholder="Your name" type="text" class="name_input"
                    autocomplete="name">
            </div>

            <div class="parent_age">
                <label for="age">Возраст</label>
                <input v-model="parent.age" id="age" placeholder="Your age" type="number" class="age_input">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";

.parent_block {
    margin-top: 20px;
    max-width: 616px;
    max-height: 166px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .parent_header {
        color: $color-black;
        font-family: $ff;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    .input_section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        .parent_name,
        .parent_age {
            padding: 8px 16px 6px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            max-width: 616px;
            max-height: 56px;
            width: 100%;
            height: 100%;
            border: 1px solid $color-greyL;
            border-radius: 4px;
            background: $color-white;

            label {
                color: $color-grey;
                font-family: $ff;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            input {
                border: none;
                height: 24px;
                color: $color-black;
                font-family: $ff;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;

                &::placeholder {
                    color: $color-grey;
                    font-family: $ff;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                }

                &:focus {
                    color: $color-black;
                    font-family: $ff;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    outline: none;
                }
            }



        }

    }
}
</style>