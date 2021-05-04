import React from 'react';

import styles from './main-text.module.scss';

export default function MainText() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__heading}>Cosy design</h1>
      <p className={styles.container__text}>
        Create comfort in your living room with our new stylish collection of furniture and
        accessories made of high quality materials.
      </p>
      <button className={styles.container__main_Btn}>See collection</button>
    </div>
  );
}
