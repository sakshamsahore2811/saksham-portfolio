import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

const Header = () => {
    return(
        <div className={styles.container}>
        <h1>Hi there ! I am Saksham </h1>
        <p>Full Stack Web Developer in Final year </p>
        <br/>
        </div>
    )
}

export default Header;