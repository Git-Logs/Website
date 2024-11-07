import Image from 'next/image';
import Preview from '@/public/banner.png';
import { AlbumIcon, GitMerge, Heart } from 'lucide-react';
import { SiRobotframework, SiGithub, SiDiscord, SiX } from 'react-icons/si';
import { Book, WorkflowIcon, WebhookIcon, CheckCheckIcon } from 'lucide-react';
import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import styles from "./header.module.css";
import Logo from '@/public/logo.png';

export const linkItems: LinkItemType[] = [
  {
    text: 'Support',
    url: 'https://discord.gg/N4hnRmEJMX',
    icon: <Heart />,
  },
  {
    icon: <AlbumIcon />,
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
  },
  {
    type: 'icon',
    url: 'https://discord.gg/N4hnRmEJMX',
    text: 'Discord',
    icon: <SiDiscord />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://x.com/HeyOctoflow',
    text: 'Twitter',
    icon: <SiX />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://github.com/Git-Logs',
    text: 'Github',
    icon: <SiGithub />,
    external: true,
  },
];

export const logo = (
  <>
    <Image
      alt="Octoflow"
      src={Logo}
      sizes="100px"
      className="hidden w-20 md:w-24 [.uwu_&]:block"
      aria-label="Octoflow"
    />
  </>
);

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className={styles.header}>
          <Image src="/logo.png" alt="Logo" width="32" height="32" />
          <h1>Octoflow</h1>
        </div>
      </>
    ),
    transparentMode: 'top',
  },
  links: [
    {
      type: 'menu',
      text: 'Documentation',
      items: [
        {
          menu: {
            banner: (
              <div className="-mx-3 -mt-3" >
                <Image
                  src={Preview}
                  alt="Perview"
                  className="object-cover rounded-t-lg"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom,white 60%,transparent)',
                  }}
                />
              </div>
            ),
            className: 'md:row-span-2',
          },
          icon: <Book />,
          text: 'Getting Started',
          description: 'Everything you need to keep you connected to your GitHub activity and stay up-to-date with every commit. ',
          url: '/docs',
        },
        {
          icon: <SiRobotframework />,
          text: 'Octyflow',
          description: 'Keep your team updated and never miss another flow 😉!',
          url: '/docs/client',
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          icon: <WebhookIcon />,
          text: 'Octyhooks',
          description:
            'Start hooking up your GitHub repositories and get notified about all the activities.',
          url: '/docs/events',
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          icon: <GitMerge />,
          text: 'GitHub Events',
          description: 'A curated list of GitHub events that may or may not cause a missed flow.',
          url: '/docs/events/github',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        },
        {
          icon: <CheckCheckIcon />,
          text: 'Supported Events',
          description: 'Get to know your flow better with our detailed list of supported events.',
          url: '/docs/events/supported',
          menu: {
            className: 'lg:col-start-3',
          },
        },
      ],
    },
    ...linkItems,
  ],
};
