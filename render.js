import getListElemenets from "./list.js";
import { appEl, comment, getToken } from "./api.js";
import { initButtonsLikes } from "./buttonLikesElement.js";
import { changeComment } from "./changeComments.js";
import { renderAuthFormComponent } from "./authFromComponent.js";
import { addFormComponent } from "./addComponentForm.js";
export const renderApp = () => {
  const commentListComment = comment
    .map((comment, index) => getListElemenets(comment, index))
    .join("");
  const appHTML = ` <div class="container">
            <ul id="list" class="comments">
            ${commentListComment}</ul>
            ${
              getToken()
                ? ""
                : ` <span>
                        Вы не зарегестрированы <a class="login-link">Зарегестрироваться</a>
                    </span>`
            }
            <div >  ${getToken() ? addFormComponent() : ""}</div>
            </div>`;

  appEl.innerHTML = appHTML;
  const loginLink = document.querySelector(".login-link");
  if (loginLink !== null) {
    loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      renderAuthFormComponent(appEl);
    });
  }
  initButtonsLikes();
  changeComment();
  
};
