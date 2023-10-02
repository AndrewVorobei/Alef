import { ref, reactive } from "vue";

const childrens = ref([]);

const parent = reactive({
  name: "",
  age: Number,
});

function setChildrens() {
  localStorage.setItem("childrens", JSON.stringify(childrens.value));
  successfulSave();
}

function setParent() {
  localStorage.setItem("parent", JSON.stringify(parent));
  successfulSave();
}

function saveChildren() {
  childrens.value.forEach((item) => {
    item.name === "" && item.age === Number
      ? alert("Заполните поля ребёнка!")
      : setChildrens();
  });
}

function saveParent() {
  (parent.age || parent.name) === ""
    ? alert("Заполните поля родителя!")
    : setParent();
}

function resetFields() {
  parent.name = "";
  parent.age = "";
  childrens.value.length = 0;
}

const isSave = ref(false);
function successfulSave() {
  isSave.value = true;
  setTimeout(() => {
    isSave.value = false;
  }, 3000);
}

const save = () => {
  saveParent();
  saveChildren();
  resetFields();
};

export { save, childrens, parent, isSave };
