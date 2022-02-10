import React from "react";
import PopupWithForm from "./PopupWithForm";
import InputsEditAvatar from "./InputsEditAvatar";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, avatarRef }) {

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    const avatar = avatarRef.current.value
    onUpdateAvatar(avatar);
  }

  return (
    <PopupWithForm
        onClose={onClose}
        isOpen={isOpen}
        name="avatar"
        title="Обновить аватар"
        submit="Сохранить"
        onSubmit={handleSubmit}
      >
        <InputsEditAvatar
          avatarRef={avatarRef}
        />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
