import { GetServerSideProps } from 'next';
import generateOAuth2 from "../utils/generateOAuth2";
import Permissions from '../utils/Permissions';
import styles from '../styles/home.module.css';
import { Metas } from '../components/SEO/Metas';
import Header from '../components/Static/Header';
import Footer from '../components/Static/Footer';
import Script from 'next/script';

export default function NotFound() {
    return (
      <>
                <Metas
                   title="Thanks • Git Logs"
                   description="Woah you did something cool"
                   imageURL="/images/logo.webp"
                   siteName="https://gitlogs.xyz"
                />
                <Header />
                <br /><br /><br /><br /><br /><br />
                <div className={styles['fade-in']}>
                <div className="flex mx-auto max-w-7xl justify-center items-center">
                    <div className="relative pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
                        <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
                            <div className="sm:text-center lg:text-center">
                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline font-chewy">
                                        You're
                                    </span>{" "}
                                    <span className="block text-toxColor xl:inline font-chewy">
                                        Amazing
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:text-md md:mt-5 md:text-md lg:mx-0 font-fredoka">
                                    Thanks for inviting Migizi to your server and showing us some love. We appreciate the support.
                                </p>
                            </div>
                            <div className={styles['main-content-buttons']}>
                                <li>
                                    <a href={'/'} target={'_blank'}>
                                    <i className='fas fa-house' /> Go Home
                                    </a>
                                </li>
                                <li>
                                    <a href={'/support'} target={'_blank'}> 
                                    <i className='fa fa-plus' /> Get Support 
                                    </a>
                                </li>
                            </div>
                        </main>
                    </div>
                </div>
          </div>
        <br /><br /><br /><br /><br /><br />
        <Footer />
      </>
    )
}