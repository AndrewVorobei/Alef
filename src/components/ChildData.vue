<script setup>
import { reactive } from "vue"

const props = defineProps({
    childrens: Array,
})

const childrens = props.childrens

const createEmptyChild = () => {
    return reactive({
        name: "",
        age: "",
    });
};

const addChildren = () => {
    if (childrens.length < 5) {
        childrens.push(createEmptyChild());
    }
};

const deleteChildren = (child) => {
    const index = childrens.indexOf(child);
    if (index !== -1) {
        childrens.splice(index, 1);
    }
};


</script>

<template>
    <div class="children_block">
        <div class="children_header">
            <h1>
                Дети(макс. 5)
            </h1>
            <button class="add_children" @click="addChildren" v-if="childrens.length < 5">
                <img src="@/assets/children-img/add-btn.svg" alt="add button">
                <span class="btn_span">
                    Добавить ребенка
                </span>
            </button>
        </div>
        <div class="childrens" v-if="childrens.length">
            <transition-group name="list">
                <div class="children" v-for="child in childrens" :key="child">
                    <div class="children_name">
                        <label for="name_id">Имя</label>
                        <input id="name_id" v-model="child.name" placeholder="Children name" type="text"
                            class="name_input" />
                    </div>

                    <div class="children_age">
                        <label for="age_id">Возраст</label>
                        <input id="age_id" v-model="child.age" placeholder="Children age" type="number" class="age_input" />
                    </div>

                    <button class="delete_children" @click="deleteChildren(child)">Удалить</button>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables/variables.scss";

.children_block {
    margin-top: 44px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 616px;
    width: 100%;

    .children_header {
        display: flex;
        justify-content: space-between;

        .add_children {
            display: inline-flex;
            border: 2px solid $color-primary;
            border-radius: 100px;
            align-items: center;
            background: none;
            padding: 10px 20px;

            span {
                color: $color-primary;
                font-family: $ff;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }

            &:hover {
                background: rgba(110, 65, 226, 0.04);
            }
        }
    }

    .childrens {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .children {
            display: flex;
            gap: 18px;
            justify-content: space-between;

            .children_name,
            .children_age {
                border: 1px solid $color-greyL;
                border-radius: 4px;
                padding: 8px 16px 6px;
                max-height: 56px;
                width: 100%;
                display: flex;
                flex-direction: column;

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

            .delete_children {
                background: none;
                border: none;
                color: $color-primary;
                font-family: $ff;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                max-height: 24px;
                align-self: center;
            }
        }
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
</style>