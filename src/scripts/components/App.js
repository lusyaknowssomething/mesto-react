import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import InputsAddPlace from "./InputsAddPlace";
import InputsEditAvatar from "./InputsEditAvatar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const avatarRef = React.useRef();

  React.useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getCards()
    ])
    .then(([user, cards]) => {
      setCurrentUser(user);

      setCards(
        cards.map((item) => ({
          likes: item.likes,
          name: item.name,
          link: item.link,
          _id: item._id,
          owner: item.owner,
        })));
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
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
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API и удаляем карточку
    api.deleteCard(card._id).then(()=> {
      const NewCards = cards.filter(el => el._id !== card._id)
      setCards(NewCards);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  function handleUpdateUser(data) {
    api.patchUserData(data)
    .then(() => {
      currentUser.name = data.name;
      currentUser.about = data.about;
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  function handleUpdateAvatar(data) {

    api.patchAvatar({avatar: data})
    .then(() => {
      currentUser.avatar = data;
      closeAllPopups()
      avatarRef.current.value = '';
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  function handleAddPlace(data) {
    api.postCard(data)
    .then((res)  => {
      setCards([res, ...cards]);
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} avatarRef={avatarRef}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>
      <PopupWithForm name="submit" title="Вы уверены?" submit="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
