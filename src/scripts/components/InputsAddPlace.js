function InputsAddPlace() {
  return(
    <>
      <input
        className="popup__input popup__input_element_description"
        placeholder ="Название"
        type="text"
        name="description"
        required
        minLength="2"
        maxLength="30"
        id="description-card"
      />
      <span id="description-card-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_element_link"
        placeholder ="Ссылка на картинку"
        type="url"
        name="link"
        required
        id="link-card"
      />
      <span id="link-card-error" className="popup__error"></span>
    </>
  )
}

export default InputsAddPlace;
