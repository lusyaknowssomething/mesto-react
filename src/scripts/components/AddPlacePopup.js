import React from "react";
import PopupWithForm from "./PopupWithForm";
import InputsAddPlace from "./InputsAddPlace";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  // Подписка на контекст

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
    onClose={onClose}
    isOpen={isOpen}
    name="new-card"
    title="Новое место"
    submit="Создать"
    onSubmit={handleSubmit}
  >
    <InputsAddPlace
      onChangeName={handleChangeName}
      onChangeLink={handleChangeLink}
    />
  </PopupWithForm>
  );
}

export default AddPlacePopup;
