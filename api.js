import { renderList } from "./render.js";
export const descrElement = document.getElementById("text-input");
export const nameElement = document.getElementById("name-input");
export const buttonAddElement = document.getElementById("button-add");
export const listElement = document.getElementById("list");
export let comment = [];

let host = "https://webdev-hw-api.vercel.app/api/v2/gromov-danil/comments";


let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

export const getFetch = () => {
  let changeText = () => {
    return (listElement.textContent = "подождите немного");
  };

  changeText();
  return fetch(host, {
    method: "GET",
    headers: {
      Authorization: token
    }
  })
    .then((response) => {
      changeText();
      return response.json();
    })
    .then((responseData) => {
      comment = responseData.comments;
      renderList();
    });
};
export const addTodo = () => {
  buttonAddElement.disabled = true;
  buttonAddElement.textContent = "Элемент добавлятся...";
  fetch(host, {
    method: "POST",
    headers: {
      Authorization: token
    },
    body: JSON.stringify({
      text: descrElement.value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
      name: nameElement.value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
      likes: 0,
      isLiked: false,
      date: new Date(),
    }),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 400) {
        return alert("Ведите в поле больше 2-ух символов");
      }
      if (response.status === 500) {
        return alert("Сервер лег");
      }
      return response.json();
    })

    .then(() => {
      // получили данные и рендерим их в приложении
      return getFetch();
    })
    .then(() => {
      buttonAddElement.disabled = false;
      buttonAddElement.textContent = "Написать";
      nameElement.value = "";
      descrElement.value = "";
    })
    .catch((error) => {
      buttonAddElement.disabled = false;
      buttonAddElement.textContent = "Написать";
      alert("Кажется, что-то пошло не так, попробуй позже");
      // TODO: Отправлять в систему сбора ошибок
      console.warn(error);
    });
};
