import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

import Link from 'next/link';
import iiitu_img from "../../../../public/images/iiitu.png";
import ffi_img from "../../../../public/images/ffi.jpg";
import dawa_img from "../../../../public/images/dawaa.png";

const Experience = () => {
    return(
        <div className={styles.container}>
            <h1>MY EXPERIENCE</h1>
            <br/>
            <Image src={iiitu_img} height={100} width={110}/>
            Research Intern --<a href="iiitu.ac.in">Indian Institute of Information Technology Una</a><br/>
            <Image src={ffi_img} height={100} width={150}/>
            Software Developer Intern --<a href="friendsforinclusion.org">Friends For Inclusion</a><br/>
            <Image src={dawa_img} height={90} width={170}/>
            Web Developer Intern --<a href="dawaai.co.in">Dawa.AI</a><br/>
        </div>
    )
}

export default Experience;