import React from 'react';
import Image from '../../../image.png';
import style from './main-picture.module.scss';

export default function MainPicture() {
  return (
    <div className={style.container}>
      <img src={Image} alt="sofa" />
    </div>
  );
}
