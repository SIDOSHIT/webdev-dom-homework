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
    console.log(root)
    root.innerHTML = authFromComponent();
};
