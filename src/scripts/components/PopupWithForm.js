import React from "react";

function PopupWithForm({onClose, isOpen, name, title, submit, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <div className="popup__content">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" action="#" method="post" name={`popup_${name}`} noValidate>
            {children}
            <button className="popup__submit" type="submit" name="Сохранить">{submit}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
