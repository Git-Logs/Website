import React, { FC } from 'react';
import styles from '../../styles/home.module.css';

export default function FeaturesRight({ alt, name, image, description }) {

  return (
    <div className={styles['feature-row']}>
        <div className={styles['feature-column']}>
            <h1>{name}</h1>
            <br />
            <p>{description}</p>                    
        </div>
        <div className={styles['feature-column']}>
            <div className={`${styles['feature-column-image']} ${styles['secondIMG']}`} data-tilt>
                <img src={image} alt={alt} />
            </div>
        </div>
    </div>
  )
}