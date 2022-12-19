import React, { FC } from 'react';

import {
  DropDown,
  Notification,
  userImage,
} from '../../../assets';
import { useAppSelector } from '../../../utils/hooks';

import style from './index.module.css';

interface INavbar {
  className: string;
}
const Navbar: FC<INavbar> = ({ className }) => {
  const authLevel = useAppSelector((state) => state.app.level);
  const accessLevel = ['Doctor', 'Psychologist', 'Nurse', 'Social Worker'];
  return (
    <div
      className={`${style.Navbar} ${className}`}
      data-testid="navbar-container"
    >
      <div className={style.Navbar__left}>
        <p>Logo</p>
        <span>
          Access level:
          {' '}
          {accessLevel[authLevel - 1]}
        </span>
      </div>
      <div className={style.Navbar__right}>
        <Notification className={style.Navbar__right__notification} />
        <div className={style.Navbar__right__user}>
          <img
            src={userImage}
            alt="userImage"
            className={style.Navbar__right__user__avatar}
            data-testid="user-image"
          />
          <span className={style.Navbar__right__user__info}>
            <p className={style.Navbar__right__user__info__name}>Adedeji</p>
            <DropDown className={style.Navbar__right__user__info__icon} />
          </span>
        </div>
      </div>
      <div
        className={style.Navbar__menu}
        role="button"
        aria-label="hamburgermenu"
        tabIndex={0}
      />
    </div>
  );
};
export default Navbar;
