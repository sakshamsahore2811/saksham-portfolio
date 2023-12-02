'use client'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import styles from "./style.module.css";
import Experience from './components/Experience/Experience';
import Contacts from './components/Contacts/Contacts';

export default function Home() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Header/>
            <Carousel/>
            <Experience/>
            <Contacts/>
        </div>
    )
}