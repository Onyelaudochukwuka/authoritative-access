import React, { FC, FormEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Input, PassWordInput } from '../../components';
import { isEmail, isPassword } from '../../utils/functions';
import { useAppDispatch, useInput } from '../../utils/hooks';
import { auth, level } from '../../utils/redux/appSlice';

import style from './index.module.css';

const LogIn: FC = () => {
  const [email, setEmail, clearEmail] = useInput('');
  const [password, setPassword, clearPassword] = useInput('');
  const [emailError, setEmailError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isEmail(String(email)) || !isPassword(String(password))) {
      if (!isEmail(String(email))) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }
      if (!isPassword(String(password))) {
        setPassWordError(true);
        setTimeout(() => {
          setPassWordError(false);
        }, 3000);
      }
    } else {
      dispatch(auth(true));
      switch (email) {
        case 'claud@gmail.com':
          dispatch(level(1));
          localStorage.setItem('level', '1');
          break;
        case 'claudpsyc@gmail.com':
          dispatch(level(2));
          localStorage.setItem('level', '2');
          break;
        case 'claudnurse@gmail.com':
          dispatch(level(3));
          localStorage.setItem('level', '3');
          break;
        default:
          dispatch(level(4));
          localStorage.setItem('level', '4');
          break;
      }
      navigate('/dashboard/users');
    }
  };
  return (
    <section className={style.LogIn}>
      <div className={style.LogIn__right}>
        <h2 className={style.LogIn__right__heading}>Welcome!</h2>
        <p className={style.LogIn__right__details}>Enter details to login.</p>
        <form onSubmit={handleSubmit} className={style.LogIn__right__form}>
          <Input
            {...{
              value: String(email),
              setValue: setEmail,
              clearValue: clearEmail,
              placeholder: 'Email',
              type: 'text',
              error: emailError,
              errorMessage: 'Please enter a valid email',
            }}
          />
          <PassWordInput
            {...{
              value: String(password),
              setValue: setPassword,
              clearValue: clearPassword,
              placeholder: 'Password',
              type: 'password',
              error: passWordError,
              errorMessage:
                'Please enter a password with an Uppercase, Lowercase, Number and a special character',
            }}
          />
          <span className={style.LogIn__right__form__forgot}>
            Forgot PASSWORD?
          </span>
          <button className={style.LogIn__right__form__button} type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
