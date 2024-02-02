import React from 'react';
import Script from 'next/script';
import { GetServerSideProps } from 'next'
import socket from 'socket.io-client';
import { parseCookies } from 'nookies';

import Header from '../components/Static/Header';
import Footer from '../components/Static/Footer';

import styles from '../styles/commands.module.css';

import { Metas } from '../components/SEO/Metas';

import { IUser } from '../types';

import _commands from '../../public/json/commands.json';

const constants = {
    "@Handle": "TheRealToxicDev",
    "@handle": "therealtoxicdev"
}
  
const categorys = {
    "Info": {
        name: "Info",
        color: "#00F902",
    }
}

interface IState {
    user: IUser | null;
    category: string|null;
    search: string|null;
    commands: any[];
};

interface IProps {
    token: string;
    hostApi: string;
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.state)
        this.state = {
            user: null,
            category: null,
            search: null,
            commands: _commands.commands
        } as IState;
    }

    render() {
        const { user, category, commands, search } = this.state as IState;
        const { token, hostApi } = this.props as IProps;

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
                   title="Commands • Git Logs"
                   description="View a list of our Commands and Usage Info"
                   imageURL="/images/logo.webp"
                   siteName="https://gitlogs.xyz"
                />
                <Header />
                <br /><br /><br />
                <div className={styles['content-commands']}>
                    <div className={styles['spacement']}>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className={styles['content-commands-container']}>
                        <div className={styles['content-commands-column-1']}>
                            <p>
                                - The <kbd className={styles['code-style-inline-blue']}>Blue</kbd> Command Tags require the user to have the Commands Respective Permissions
                                <br /><br />
                                - The <kbd className={styles['code-style-inline-purple']}>Purple</kbd> Command Tags require the bot to have the Commands Respective Permissions
                                <br /><br />
                                - The <kbd className={styles['code-style-inline-blue']}>Bot Admin</kbd> Command Tags can only be executed by the Github Logs Owner/Developers.
                                <br /><br />
                                - The <kbd className={styles['code-style-inline-green']}>Everyone</kbd> Command Tags can be executed by Any member of the Server.
                            </p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles['content-commands-column-2']}>
                                <div className={styles['content-commands-column-2-left']}>
                                    <h1>Command Categories</h1>
                                    <div className={styles['content-commands-expand']}>
                                        <p> Show &frasl; Hide all </p>
                                        <div className={styles['switch']}>
                                            <input type="checkbox" id={'checkbox-expand'} />
                                            <span className={styles['slider']}></span>
                                        </div>
                                    </div>

                                    <ul className={styles['qa-menu-list']}>
                                        {Object.entries(categorys).map(([key, {name}]) => {
                                            return (
                                                <li data-li={key} className={`${styles['col-2-btn']} ${category == key ? `${styles['active']}` : ''}`} key={key}>{name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className={styles['content-commands-column-2-right']}>
                                    <div className={styles['commands-search']}>
                                        <input id={'search-box'} type={'text'} name={'command'} defaultValue={search || ''} required onKeyUp={(e) => {
                                            // @ts-ignore
                                            window.searchCommand(e.currentTarget.value || '');
                                        }} />
                                        <label htmlFor={'search'} className={styles['search-label']}>
                                            <span className={styles['content-search']}> Search </span>
                                        </label>
                                    </div>
                                    <div className={styles['commands']} id={'commands-list'}>
                                        {(() => {
                                            if(!commands) {
                                                return ( <div className={styles['commands-still-loading']} /> )
                                            }

                                            try {
                                                return (
                                                    <>
                                                        {commands.map((command) => (
                                                            <div className={`${styles['command']} ${command.group}`} data-name={command.name} key={command.name.replace(/\s/g, '-') + Math.random()}>
                                                                <div className={styles['command-heading']}>
                                                                    <div 
                                                                        className={`${styles['group-icon']} group-for-${command.name.replace(/ +/g, "_")}`}
                                                                        style={{backgroundColor: categorys[command.group]?.color || 'var(--tox-colors-band-100'}}
                                                                    >
                                                                        <strong>{categorys[command.group]?.name || 'No group'}</strong>
                                                                    </div>

                                                                    <div className={styles['command-heading-left']}>
                                                                        <div className={styles['arrow-icon']}>
                                                                            <svg aria-hidden="true" role="img" viewBox="0 0 320 512" className={styles['icon-expand']}>
                                                                                <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1>{command.name}</h1>
                                                                    </div>
                                                                </div>

                                                                <div className={`${styles['command-details']} ${command.name.replace(/ +/g, "_")}-1`}>
                                                                    <div>
                                                                        {String(command.description)}
                                                                        <br />
                                                                        {command.userDiscordPermissions?.map(x => {
                                                                            return (<span key={x} className={styles['code-style-inline-blue']}>{x.split('_').map(p=>p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()).join(' ')}</span>)
                                                                        }) || (<span className={styles['code-style-inline-green']}>Everyone</span>)}
                                                                        {command.botUserPermissions?.map(x => {
                                                                            return (<span key={x} className={styles['code-style-inline-purple']}>{x.split('_').map(p=>p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()).join(' ')}</span>)
                                                                        })}
                                                                        <br />
                                                                        <br />
                                                                        <br />
                                                                        <h3>Example&frasl;s:</h3>
                                                                        {command.examples ? 
                                                                            Array.isArray(command.examples) ?
                                                                                command.examples.map(x => (
                                                                                    x.name || x.title ?
                                                                                        <p key={x.name || x.title}>
                                                                                            <strong>{x.name || x.title}</strong>
                                                                                            <br />
                                                                                            <code>{replaceUsage(x.usage)}</code>
                                                                                        </p>
                                                                                    : <code>{replaceUsage(x)}</code>
                                                                                ))
                                                                                : <code>{replaceUsage(command.examples)}</code>
                                                                            : <code>{command.name}</code>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>
                                                )
                                            } catch(e) {
                                                console.log(e)
                                                return (
                                                    <div className={styles['commands-loading-failed']}>
                                                        <h1><code>Error:</code> Unable to Load Commands. This most likely means there is nothing to see here yet!</h1>
                                                    </div>
                                                )
                                            }

                                        })()}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />

                <Script
                    src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
                    defer
                    onLoad={() => {
                        const params = new URLSearchParams(location.search);
                        const category = params.get('category') || null
                        const search = params.get('seach') || params.get('s') || null;

                        this.setState({
                            category,
                            search,
                        });
                        
                        const api = socket(hostApi, {
                            query: {
                                token,
                            },
                        });

                        api.on('ready', ({ data }) => {
                            this.setState({
                                user: data.user,
                            });
                        });

                        $(`.${styles['commands-still-loading']}`).hide();
                        if(categorys[params.get('category') as string]) { 
                            $(`.${styles['command']}`).hide();
                            $(`.${styles['command']}.${params.get('category')}`).show();
                        }
                        $('.Moderação').show();
                        $(`.${styles['command-details']}`).hide();
                        $(`.${styles['clock-icon']}`).hide();

                        $(`.${styles['col-2-btn']}`).click(function() {
                            $(`.${styles['col-2-btn']}`).removeClass(styles['active']);

                            $(this).addClass(styles['active']);

                            $('#search-box').val('');

                            const attr = $(this).attr('data-li');

                            $(`.${styles['command']}`).hide();
                            $(`.${attr}`).show();
                        });

                        $('#checkbox-expand').change(function(){
                            if($(this).is(':checked')) {
                                $(`.${styles['command-details']}`).slideDown(300);
                                $(`.${styles['clock-icon']}`).show();
                            } else {
                                $(`.${styles['command-details']}`).slideUp(300);
                                $(`.${styles['clock-icon']}`).hide();
                            };
                        });

                        $(`.${styles['command']}`).click(function() {
                            const attr = $(this).attr('data-name').replace(/ +/g, "_");
                            
                            $(`.clock-for-${attr}`).toggle(300);
                            $(`.${attr}-1`).slideToggle(300);
                        });

                        // @ts-ignore
                        window.searchCommand = (search: string) => {
                            const value = String(search).toLowerCase().trim();
                            if(!value) {
                                const attr = $(`.${styles['col-2-btn']}.${styles['active']}`).attr('data-li');
                                $(`.${styles['command']}`).hide();
                                $(`.${attr}`).show();
                                return;
                            };
    
                            const commandsDiv = $(`.${styles['commands']} div`) as any;
                            commandsDiv.filter(function(_,el) {
                                if(!$(el).hasClass(styles['command'])) { return; };
                                $(this).toggle($(this).attr('data-name').toLowerCase().trim().indexOf(value)>-1)
                            });
                        };

                        if(search) {
                            // @ts-ignore
                            window.searchCommand(search);
                        };
                    }}
                ></Script>
            </>
        );
    }
}

function replaceUsage(string) {
    if(string) {
        Object.entries(constants).forEach(([key, value]) => {
            string = string.replace(new RegExp(`{${key}}`, 'g'), value);
        });
    }
  
    return string;
}