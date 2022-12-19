import React, { FC, ReactNode } from 'react';

import { Navbar } from '../..';

import style from './index.module.css';

interface ILayout {
  children: ReactNode;
  className: string;
}
const Layout: FC<ILayout> = ({ children, className, ...props }) => (
  <section className={style.Layout}>
    <Navbar
      className={style.Layout__nav}
    />
    <section
      {...props}
      className={`${className} ${style.Layout__body}`}
      data-testid="layout-container"
    >
      {children}
    </section>
  </section>
);

export default Layout;
