import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React, { useEffect } from 'react';
import api from '../utils/api';

import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from '../utils/auth';
import { ProtectedRoute } from './ProtectedRoute';
import Login from './Login';
import Register from './Register';

function App() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  
  const [selectedCardData, setSelectedCardData] = React.useState({});
  const [cardList, setCardList] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Error.....: (getUserInfo) ${err}`));
  }, []);
  
  useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCardList([...cardData]);
      })
      .catch((err) => console.log(`Error.....: (getInitialCards) ${err}`));
  }, []);
  
  function handleLogout() {
    logout()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleLoginTest = () => {
    login()
      .then(() => {
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .addLikes(card._id, !isLiked)
        .then((newCard) => {
          setCardList((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`Error.....: (addLikes) ${err}`));
    } else {
      api
        .removeLikes(card._id, isLiked)
        .then((newCard) => {
          setCardList((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`Error.....: (removeLikes) ${err}`));
    }
  }

  function handleDeleteCard(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const deletedCardID = card._id;
        setCardList(cardList.filter((card) => card._id !== deletedCardID));
      })
      .catch((err) => console.log(`Error.....: (handleDeleteCard) ${err}`));
  }

  function handleCardClick({ link, name }) {
    setIsImagePopupOpen(true);
    setSelectedCardData({
      title: name,
      link: link
    });
  }

  function handleUpdateUser(data) {
    const { name, description } = data;
    api
      .editUserInfo({ name, about: description })
      .then((name, description) => {
        setCurrentUser(name, description);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: (handleUpdateUser) ${err}`));
  }
  
  function handleAddPlaceSubmit(data) {
    const { title, link } = data;
    api
      .createCard({ name: title, link })
      .then((newCard) => {
        setCardList([newCard, ...cardList]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: (handleAddPlaceSubmit) ${err}`));
  }
  
  function handleUpdateAvatar(data) {
    const avatar = data.avatar.valueOf();
    api
      .editAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: (handleUpdateUser) ${err}`));
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleDeletePlaceClick() {
    setIsDeletePlacePopupOpen(true);
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCardData({});
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              handleLoginTest={handleLoginTest}
              handleSubmitLogin={handleSubmitLogin}
              handleLogout={handleLogout}
            />
          }
        >
          <Route
            element={
              <ProtectedRoute>
                <Main
                  onEditAvatarClick={handleEditAvatarClick}
                  onEditProfileClick={handleEditProfileClick}
                  onAddPlaceClick={handleAddPlaceClick}
                  handleCardClick={handleCardClick}
                  onDeletePlaceClick={handleDeletePlaceClick}
                  cardList={cardList}
                  handleCardLike={handleCardLike}
                  handleDeleteCard={handleDeleteCard}
                />
                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  closeAllPopups={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                />
                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  closeAllPopups={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  closeAllPopups={closeAllPopups}
                  onUpdateAddPlace={handleAddPlaceSubmit}
                />
                <PopupWithForm
                  name='remove-card'
                  title='Are you sure?'
                  buttonText='Yes'
                  isOpen={isDeletePlacePopupOpen}
                  closeAllPopups={closeAllPopups}
                />
                <ImagePopup
                  closeAllPopups={closeAllPopups}
                  selectedCardData={selectedCardData}
                  isOpen={isImagePopupOpen}
                />
              </ProtectedRoute>
            }
          />
        
          <Route path='signup' element={<Register />} />
          <Route path='signin' element={<Login />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <h1>Error 404: There's nothing here!</h1>
              </main>
            }
          />
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
