import {
  buttonAddElement,
  descrElement,
  getUserName,
  nameElement,
} from "./api.js";

export const addFormComponent = () => {
  return `  <div class="add-form">
                <input
                id="name-input"
                type="text"
                class="add-form-name"
                value="${getUserName()}"
                disabled
                />
                <textarea
                id="text-input"
                type="textarea"
                class="add-form-text"
                placeholder="Введите ваш коментарий"
                rows="4"
                v-on:keydown.ctrl.enter="submitForm"
                ></textarea>
                <div class="add-form-row">
                <button id="button-add" class="add-form-button">Написать</button>
                <button id="button-delete" class="add-form-button">
                    Удалить последний комментарий
                </button>
                </div>
                </div>
            `;
};

export const renderAddFormComponent = (root) => {
  root.innerHTML = addFormComponent();
  const descrElement = document.getElementById("text-input");
  const nameElement = document.getElementById("name-input");
  const buttonAddElement = document.getElementById("button-add");
  nameElement.addEventListener("input", () => {
    if (nameElement.value === "" || descrElement.value === "") {
      buttonAddElement.disabled = true;
    } else {
      buttonAddElement.disabled = false;
    }
  });

  descrElement.addEventListener("input", () => {
    if (nameElement.value === "" || descrElement.value === "") {
      buttonAddElement.disabled = true;
    } else {
      buttonAddElement.disabled = false;
    }
  });

  document.addEventListener("keyup", () => {
    if (event.code === "Enter") {
      nameElement.classList.remove("error");
      descrElement.classList.remove("error");
      nameElement.placeholder;
      descrElement.placeholder;
      if (nameElement.value === "" || descrElement.value === "") {
        nameElement.classList.add("error");
        descrElement.classList.add("error");
        nameElement.placeholder = "Впишите данные";
        descrElement.placeholder = "Впишите данные";
      } else {
        buttonAddElement.disabled = false;

        comment.push({
          name: nameElement.value,
          descr: descrElement.value,
        });

        nameElement.value = "";
        descrElement.value = "";
      }
    }
  });

  buttonAddElement.addEventListener("click", () => {
    nameElement.classList.remove("error");
    descrElement.classList.remove("error");
    nameElement.placeholder;
    descrElement.placeholder;
    if (nameElement.value === "" || descrElement.value === "") {
      nameElement.classList.add("error");
      descrElement.classList.add("error");
      nameElement.placeholder = "Впишите данные";
      descrElement.placeholder = "Впишите данные";
    } else {
      buttonAddElement.disabled = false;
      addTodo();
    }
  });
};
