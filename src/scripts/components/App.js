import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import InputsEditProfile from './InputsEditProfile';
import InputsAddPlace from './InputsAddPlace';
import InputsEditAvatar from './InputsEditAvatar';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <>
    <div className="page">
      <Header  />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick = {handleCardClick}
      />
      <Footer />
    </div>
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit" title="Редактировать профиль" submit="Сохранить">
      <InputsEditProfile />
    </PopupWithForm>
    <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="new-card" title="Новое место" submit="Создать">
      <InputsAddPlace />
    </PopupWithForm>
    <PopupWithForm name="submit" title="Вы уверены?" submit="Да" />
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" submit="Сохранить">
      <InputsEditAvatar />
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </>
  );
}

export default App;
