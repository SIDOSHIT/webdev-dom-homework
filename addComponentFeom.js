const addFormComponent = () => {
  return `  <div class="add-form">
                <input
                id="name-input"
                type="text"
                class="add-form-name"
                placeholder="Введите ваше имя"
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
            </div>`;
};
