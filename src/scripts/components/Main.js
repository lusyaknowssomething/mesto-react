import React from "react";
import editIcon from '../../images/edit__button.svg';
import addIcon from '../../images/add_button.svg';
import api from '../utils/Api';
import Card from './Card';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.resolve(api.getCards())
    .then((data) => {
      setCards(data.map((item) => ({
        likes: item.likes,
        name: item.name,
        link: item.link,
        id: item._id
      })))
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  },[]);

   React.useEffect(() => {
    api.getUserData()
    .then((user) => {
      setName(user.name);
      setDescription(user.about);
      setAvatar(user.avatar);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }, []);


  return (
    <main className= "content">
      <section className="profile page__profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={avatar} alt={name} />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{name}</h1>
          <p className="profile__subtitle">{description}</p>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}>
            <img
              className="profile__edit-icon"
              src={editIcon}
              alt="Иконка редактирования"
            />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}>
          <img
            className="profile__add-icon"
            src={addIcon}
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
