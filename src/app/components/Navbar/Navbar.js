import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

import Link from 'next/link';

const Navbar = () =>{
return(
    <div className={styles.container}>
            <ul className={styles.unorderedlist}>
            <li className={styles.listitem}><a href="#home">Home</a></li>
            <li className={styles.listitem}><a href="#aboutme">About Me</a></li>
            <li className={styles.listitem}><a href="#contacts">Contacts</a></li>
            <li className={styles.listitem}><a href="#blog">Blog</a></li>
          </ul>
    </div>

)
}

export default Navbar;