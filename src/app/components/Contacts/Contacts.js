import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

import Link from 'next/link';

const Contacts = () => {
    return(
        <div className={styles.container}>
            <h1>My Contacts !</h1>
            <a href="https://www.github.com/sakshamsahore2811" target="_blank">Github</a>
        </div>
    )
}

export default Contacts;