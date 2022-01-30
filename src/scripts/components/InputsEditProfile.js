function InputsEditProfile() {
  return(
    <>
      <input
        className="popup__input popup__input_profile_name"
        placeholder ="Имя"
        type="text"
        name="name"
        required
        minLength="2"
        maxLength="40"
        id="name-card"
      />
      <span id="name-card-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_profile_job"
        placeholder ="Вид деятельности"
        type="text"
        name="about"
        required
        minLength="2"
        maxLength="200"
        id="job-card"
      />
      <span id="job-card-error" className="popup__error"></span>
    </>
  )
}

export default InputsEditProfile;
