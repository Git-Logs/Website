import React from 'react';
import Script from 'next/script';
import { GetServerSideProps } from 'next'
import socket from 'socket.io-client';
import { parseCookies } from 'nookies';
import HomeFeatures from '../components/Home/FeaturesImgLeft';

import Header from '../components/Static/Header';
import Footer from '../components/Static/Footer';

import styles from '../styles/home.module.css';

import { IUser } from '../types';
import { Metas } from '../components/SEO/Metas';
import FeaturesLeft from '../components/Home/FeaturesImgLeft';
import FeaturesRight from '../components/Home/FeaturesImgRight';
import useSWR from 'swr';

export default function Home() {
    const { data, error } = useSWR('client');

    return (
        <>
        <Script>{`
            document.querySelector('body').style = \`
                background: #100F1C;
                background-color: #10101C;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                background-attachment: fixed;
                background-blend-mode: overlay;
            \`
        `}</Script>
        <Metas
           title="Home • Git Logs"
           description="Providing users with a trustworthy and reliable solution for logging GitHub Events to Discord"
           imageURL="/images/logo.webp"
           siteName="https://gitlogs.xyz"
        />
        <br /><br /><br /><br /><br /><br />
        <Header />
        
        <div className={styles['fade-in']}>
            <div className={styles['main-content']}>
                <div className={styles['main-content-children']}>
                    <div className={styles['main-content-image']}>
                        <figure>
                            <img src={'/images/IMG_8572.png'} alt={'Git Logs Logo'} />
                        </figure>
                    </div>
                </div>

                <div className={`${styles['main-content-children']}`}>
                    <div className={styles['bot-icon-base']}>
                        <h1>Github Logs</h1>
                    </div>
                    <p>Trustworthy and reliable solution for logging GitHub Events to Discord</p>
                    <div className={styles['main-content-buttons']}>
                        <li>
                            <div>
                               <i className='fas fa-signal' /> {data?.guilds ? data?.guilds : '...'}
                            </div>
                        </li>
                        <li>
                            <div> 
                               <i className='fa fa-user' /> {data?.users ? data?.users : '...'} 
                            </div>
                        </li>
                        <li>
                            <div> 
                               <i className='fas fa-server' /> {data?.shards ? data?.shards : '...'} 
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className={styles['main-features']}>
                <div className={styles['wave-border']}>
                    <svg 
                        version={'1.1'}
                        xmlns={'http://www.w3.org/2000/svg'} 
                        viewBox={'0 0 1440 100'} 
                        preserveAspectRatio={'none'}
                    >
                        <path 
                            d={'M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z'} 
                            fill={'currentColor'} 
                        />
                    </svg>
                </div>
                <div className={styles['main-features-background']}>
                    <FeaturesLeft
                      alt="evt-log" 
                      name="Event Logging"
                      image="https://img.toxicdev.me/9c8f11.png"
                      description="Log your favorite GitHub Events to a Discord Channel of your choice and never miss a update!"
                    />
                    <FeaturesLeft
                      alt="flow-log" 
                      name="Workflow Logging"
                      image="https://img.toxicdev.me/fd818a.png"
                      description="Start receiving your Workflow Events, Action Events, Deploy Events and so much more!"
                    />
                    <FeaturesLeft
                      alt="backups" 
                      name="Backup & Restore"
                      image="https://img.toxicdev.me/87447e.png"
                      description="Get a piece of mind with our backup and restore commands you can be sure your configurations are always saved."
                    />
                </div>
                
                <div className={styles['wave-border']}>
                    <svg 
                        version={'1.1'} 
                        xmlns={'http://www.w3.org/2000/svg'} 
                        viewBox={'0 0 1440 100'} 
                        preserveAspectRatio={'none'} 
                        style={{ transform: 'scaleY(-1) translateY(1px)'}}
                    >
                        <path 
                            d={'M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z'} 
                            fill={'var(--tox-colors-icon)'} 
                        />
                    </svg>
                </div>
            </div>

            <div className={styles["main-links"]} id="lunaVote">
                <div className={styles["link-container"]}>
                    <div className={styles['link-content']}>
                        <h1 style={{position: 'relative', top: '-7px'}}>
                            Our GitHub
                        </h1>
                        <p>
                            Git Logs is Open-Source and Public for contributions.
                            <br /><br />
                            If you enjoy our services you can give us a star on github,
                            we greatly appreciate all the love and support received while
                            migrating the bot to its next major version!
                        </p>
                        <br />
                        <a href="/github" target="_blank">
                            <div className={styles["link-button"]}>
                                Follow us on GitHub
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles["link-container"]}>
                    <div className={styles['link-content']}>
                        <h1>Feeling Stuck?</h1>
                        <p>
                            Using our services can be a bit complex for beginners.
                            <br />
                            <br />
                            If for any reason you feel like you are lost or need some
                            support you can reach out to us in our Discord Server and
                            we will be happy to assist you!
                        </p>
                        <br />
                        <a href="/discord" target="_blank">
                            <div className={styles["link-button"]}>
                                Join our Support Server
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles["link-empty-child"]} />
            </div>
        </div>

        <div className={`${styles['wave-border']} ${styles['footer']}`}>
            <svg 
                version={'1.1'}
                xmlns={'http://www.w3.org/2000/svg'} 
                viewBox={'0 0 1440 100'} 
                preserveAspectRatio={'none'}
            >
                <path 
                    d={'M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z'} 
                    fill={'currentColor'} 
                />
            </svg>
        </div>
        <Footer />
    </>
    )
}
