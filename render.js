import getListElemenets from "./list.js";
import { appEl, comment, token } from "./api.js";
import { initButtonsLikes } from "./buttonLikesElement.js";
import { changeComment } from "./changeComments.js";
import { renderAuthFormComponent } from "./authFromComponent.js";
export const renderApp = () => {
  const commentListComment = comment
    .map((comment, index) => getListElemenets(comment, index))
    .join("");
  const appHTML = ` <div class="container">
            <ul id="list" class="comments">
            ${commentListComment}</ul>
            ${
              token
                ? ""
                : ` <span>
                        Вы не зарегестрированы <a class="login-link">Зарегестрироваться</a>
                    </span>`
            }
            </div>`;

  appEl.innerHTML = appHTML;
  const loginLink = document.querySelector(".login-link");
  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    renderAuthFormComponent(appEl);
  });
  // nameElement.addEventListener("input", () => {
  //   if (nameElement.value === "" || descrElement.value === "") {
  //     buttonAddElement.disabled = true;
  //   } else {
  //     buttonAddElement.disabled = false;
  //   }
  // });

  // descrElement.addEventListener("input", () => {
  //   if (nameElement.value === "" || descrElement.value === "") {
  //     buttonAddElement.disabled = true;
  //   } else {
  //     buttonAddElement.disabled = false;
  //   }
  // });

  // document.addEventListener("keyup", () => {
  //   if (event.code === "Enter") {
  //     nameElement.classList.remove("error");
  //     descrElement.classList.remove("error");
  //     nameElement.placeholder;
  //     descrElement.placeholder;
  //     if (nameElement.value === "" || descrElement.value === "") {
  //       nameElement.classList.add("error");
  //       descrElement.classList.add("error");
  //       nameElement.placeholder = "Впишите данные";
  //       descrElement.placeholder = "Впишите данные";
  //     } else {
  //       buttonAddElement.disabled = false;

  //       comment.push({
  //         name: nameElement.value,
  //         descr: descrElement.value,
  //       });

  //       nameElement.value = "";
  //       descrElement.value = "";
  //     }
  //   }
  // });

  // buttonAddElement.addEventListener("click", () => {
  //   nameElement.classList.remove("error");
  //   descrElement.classList.remove("error");
  //   nameElement.placeholder;
  //   descrElement.placeholder;
  //   if (nameElement.value === "" || descrElement.value === "") {
  //     nameElement.classList.add("error");
  //     descrElement.classList.add("error");
  //     nameElement.placeholder = "Впишите данные";
  //     descrElement.placeholder = "Впишите данные";
  //   } else {
  //     buttonAddElement.disabled = false;
  //     addTodo();
  //   }
  // });
  initButtonsLikes();
  changeComment();
};
