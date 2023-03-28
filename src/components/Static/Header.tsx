import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';
import { IUser} from '../../types';
import { defaultAvatar } from '../../Constants';
import Link from 'next/link';
import Image from 'next/image';
import Toggle, { CheckRadio } from '../Toggle';

interface IProps {
    user: IUser
}

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
      <header className={"fixed flex z-10 w-full border-b border-tweeterColor items-center justify-between flex-wrap p-5 m-auto top-0 animated scroll text-white bg-blackColor font-fredoka"}>
        <div
          id="logo"
          className="lg:text-xl p-2 mr-4 inline-flex items-center font-montserrat"
        >
          <img src="/images/logo.webp" className={styles["logo"]} alt="" />
          <Link href="/">
            <a className={styles["title"] + "text-toxColor text-3xl"}>&nbsp;Github Logs</a>
          </Link>
        </div>
        <button
          onClick={() => setShowNav(!showNav)}
          type="button"
          className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 -53 384 384"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          </svg>
        </button>
  
        <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
          <div
            className={
              "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
              (showNav ? "" : "hidden")
            }
          >
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-toxColor font-montserrat">
              <i className='fas fa-house' />&nbsp;Home
              </a>
            </Link>
            <Link href="https://discord.com/api/oauth2/authorize?client_id=913266703398473810&permissions=545125694705&scope=bot%20applications.commands">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-toxColor font-montserrat">
              <i className='fas fa-plus' />&nbsp;Invite
              </a>
            </Link>
            <Link href="/commands">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-toxColor font-montserrat">
              <i className='fas fa-terminal' />&nbsp;Commands
              </a>
            </Link>
            <Link href="/discord">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-toxColor font-montserrat">
              <i className='fab fa-discord' />&nbsp;Discord
              </a>
            </Link>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;