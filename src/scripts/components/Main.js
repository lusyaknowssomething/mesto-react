import React from "react";
import EditIcon from '../../images/edit__button.svg';
import AddIcon from '../../images/add_button.svg';
import api from '../utils/Api';
import Card from './Card';


function Main({onEditProfile, onEditAvatar, onAddPlace, userName, userDescription, userAvatar, cards, onCardClick }) {
  console.log(cards)

  return (
    <main className= "content">
      <section className="profile page__profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt={userName} />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}>
            <img
              className="profile__edit-icon"
              src={EditIcon}
              alt="Иконка редактирования"
            />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}>
          <img
            className="profile__add-icon"
            src={AddIcon}
            alt="Кнопка добавить"
          />
        </button>
      </section>
      <section
        className="elements page__elements"
        aria-label="Блок с карточками"
      >
        {
          cards.map((card) => <Card key={card.id} card={card} onCardClick={onCardClick} />)
        }
      </section>
    </main>
  );
}

export default Main;
