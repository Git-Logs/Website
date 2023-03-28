import React from 'react';
import useSWR from "swr";

import styles from '../../styles/Footer.module.css';


const Footer = () => {

    const { data } = useSWR(`/status`);

        return (
            <>
                <footer className={styles['footer']}>
                    <div className={styles['l-footer']}>
                        <h1>
                            Github Logs
                        </h1>
                        <p>
                            © {(new Date()).getFullYear()} <a href='https://infinitydev.team' style={{color: 'var(--luny-colors-band-100)'}}>Infinity Development</a>. 
                        </p>
                    </div>
                    <ul className={styles['r-footer']}>
                        <li>
                            <h2>Socials</h2>
                            <ul className={styles['box']}>
                                <li><a href="/github" target={'_blank'}>Github</a></li>
                                <li><a href="/twitter" target={'_blank'}>Twitter</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>Support</h2>
                            <ul className={styles['box']}>
                                <li><a href="/team">Discord</a></li>
                                <li><a href="/commands" target={'_blank'}>Commands</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>Legal</h2>
                            <ul className={styles['box']}>
                                <li><a href={'/soon'}>Privacy</a></li>
                                <li><a href={'/soon'}>Terms</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles['b-footer']}>
                        <div className="flex">
                        <img src="/images/logo.webp" className={styles["logo"]} alt="" />
                        <div>
                            <div className="flex text-sm font-medium text-slate-400 mt-4">
                                {data?.page?.status === "UP" ? (
                                    <a href="https://status.jobcord.co" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#4ade80]">
                                            <i className="fas fa-circle text-[#4ade80]" /> ONLINE!
                                        </span>
                                    </a>
                                ) : data?.page?.status === "UNDERMAINTENANCE" ? (
                                    <a href="https://status.jobcord.co" target="_blank" rel="noopener noreferrer">
                                        <span className="text-yellow-300">
                                            <i className="fas fa-circle text-yellow-300" /> MAINTENANCE.
                                        </span>
                                    </a>
                                ) : data?.page?.status === "HASISSUES" ? (
                                    <a href="https://status.jobcord.co" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#f87171]">
                                            <i className="fas fa-circle text-[#f87171]" /> DEGRADED.
                                        </span>
                                    </a>
                                ) : (
                                    <a href="https://status.jobcord.co" target="_blank" rel="noopener noreferrer">
                                        <span className="text-white">
                                            <i className="fas fa-circle text-white" /> OFFLINE.
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                        </div>
                        <button onClick={() => location.href = 'https://discord.com/api/oauth2/authorize?client_id=913266703398473810&permissions=545125694705&scope=bot%20applications.commands'}>Invite Me</button>
                    </div>
                </footer>
            </>
        )
} 

export default Footer;