import { regUser } from "./api.js";
import { renderApp } from "./render.js";

export const registerUsersComponent = () => {
  return `
                    <div class="container">
                        <div class="add-form">
                            <input
                                id="reg-name"
                                type="text"
                                class="add-form-name"
                                placeholder="Имя"
                            />
                            <input
                                id="reg-login"
                                type="text"
                                class="add-form-name"
                                placeholder="Логин"
                            />
                            <textarea
                                id="reg-password"
                                type="textarea"
                                class="add-form-text"
                                placeholder="Пароль"
                                v-on:keydown.ctrl.enter="submitForm"
                            ></textarea>
                            <div class="add-form-row">
                                <button id="reg-button" class="add-form-button">
                                Зарегестрироваться
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>`;
};

export const renderRegisterForm = (root) => {
  console.log(root);
  root.innerHTML = registerUsersComponent();
  const regNameUser = document.getElementById("reg-name");
  const regLoginUser = document.getElementById("reg-login");
  const regPasswordUser = document.getElementById("reg-password");
  const regButtonUser = document.getElementById("reg-button");

  regButtonUser.addEventListener("click", () => {
    regUser(regLoginUser.value, regPasswordUser.value, regNameUser.value).then(
      () => {
        renderApp();
      }
    );
  });
};
