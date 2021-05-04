import React from 'react';

import styles from './header.module.scss';
import Cart from '../../cart.svg';

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>cleo</div>
      <div className={styles.social}>
        <span>
          <a href="/">Facebook</a>
        </span>
        <span>
          {' '}
          <a href="/">Instagram</a>
        </span>
        <span>
          <a href="/">Twitter</a>
        </span>
      </div>
      <div className={styles.right}>
        <div className={styles.right__menu_container}>
          <div className={styles.right__menu_container__sandwich}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.right__svg}>
          <img src={Cart} alt="cart"></img>
        </div>
      </div>
    </header>
  );
}
