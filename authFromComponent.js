import { getFetch, token } from "./api.js";

const hostLogin = "https://wedev-api.sky.pro/api/user/login";

const authFromComponent = () => {
  return `   
  <div class="container">
  <div class="add-form">
            <input
                id="login-input"
                type="text"
                class="add-form-name"
                placeholder="Логин"
            />
            <textarea
                id="password-input"
                type="textarea"
                class="add-form-text"
                placeholder="Пароль"
                v-on:keydown.ctrl.enter="submitForm"
            ></textarea>
            <div class="add-form-row">
                <button id="login-add" class="add-form-button">Войти</button>
                <button id="login-reg" class="add-form-button">
                Зарегестрироваться
                </button>
            </div>
            </div>
</div>
</div>`;
};

export const renderAuthFormComponent = (root) => {
  console.log(root);
  root.innerHTML = authFromComponent();
  authFromComponent();
  const buttonAddUser = document.getElementById("login-add");
  const loginInput = document.getElementById("login-input");
  const passwordInput = document.getElementById("password-input");

  buttonAddUser.addEventListener("click", () => {
    fetch(hostLogin, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        login: loginInput.value,
        password: passwordInput.value,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 400) {
        return alert("Неправильно введен логин или пароль");
      }
      if (response.status === 500) {
        return alert("Сервер лег");
      }
      return response.json();
    })
  });
};
