import React, { useContext } from 'react';
import './Profile.css';
import svodka from '../../assets/svodka.png';
import userr from '../../assets/user.png';
import heart from '../../assets/heart.png';
import operations from '../../assets/operations.png';
import bell from '../../assets/bell.png';
import hidden from '../../assets/hidden_new.png';
import exit from '../../assets/exit.png';
import { Context } from '../..';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import { observer } from 'mobx-react-lite';
import { REGISTER } from '../../utilits/consts';

const Profile = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    console.log('log out');
  };

  return (
    <>
      <Header />
      <div className='profile_left'>
        <ul className='ul_profile'>
          {/* нужно вставить ссылки на определенного зарегатированного пользователя. пока оставлю так. смотреть в ListReg */}
          <li className='li_name_profile'>
            <p className='profile_name'>Имя</p>
            <p className='profile_name'>Фамилия</p>
          </li>
        </ul>
        <ul className='ul_possibilities'>
          <li className='li_possibilities'>
            <img className='photo_in_profile' src={svodka} alt='' />
            <p>Сводка</p>
          </li>
          <li className='li_possibilities'>
            <img src={userr} alt='' className='photo_in_profile' />
            <p>Профиль</p>
          </li>
          <li className='li_possibilities'>
            <img src={heart} alt='' className='photo_in_profile' />
            <p>Избранное</p>
          </li>
          <li className='li_possibilities'>
            <img src={operations} alt='' className='photo_in_profile' />
            <p>Операции</p>
          </li>
          <li className='li_possibilities'>
            <img src={bell} alt='' className='photo_in_profile' />
            <p>Уведомления</p>
          </li>
          <li className='li_possibilities'>
            <img src={hidden} alt='' className='photo_in_profile' />
            <p>Скрытые объявления</p>
          </li>
          <NavLink to={REGISTER} onClick={() => logout()} className='li_possibilities'>
            <img src={exit} alt='' className='photo_in_profile' />
            <p style={{ zIndex: 10 }}>Выйти</p>
          </NavLink>
        </ul>
      </div>
    </>
  );
});

export default Profile;
