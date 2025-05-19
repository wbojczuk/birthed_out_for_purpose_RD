"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Birthed Out<br />For Purpose</h1>
    <h2>Empowering teens to heal, grow, and discover their purpose — because their past doesn’t define their future.</h2>

    <div className={`center ${styles.linkWrapper}`}>
        <a className='main-link' href='#ourMission'>Learn More</a>
    </div>

    <div className={styles.linksWrapper}>
        <a href="#ourMission" className={styles.link}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="m14.829 12.026l1.414 1.414L12 17.683L7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537z"/><path fillRule="evenodd" d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556m-1.414-1.414A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728" clipRule="evenodd"/></g></svg>
        </a>
    </div>
 
    <img src='/img/header.png' alt='Image of happy people' className='bg-img' />
    <div className='shader'></div>
 </header>
)};