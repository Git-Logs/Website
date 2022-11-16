import { BsDiscord, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "twin.macro";

import UnstyledLink from "#components/links/UnstyledLink";
import { Container } from "#components/StyledComponents";

import FooterIcon from "./FooterIcon";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
   return (
      <footer tw="bg-tw-background-secondary mt-10">
         <Container tw="py-16">
            <div tw="sm:flex sm:items-center sm:justify-between">
               <UnstyledLink href="/">
                  <h3>
                     <img src="/images/logo.png" className="inline-flex h-14 w-14" /> Git
                     Logs
                  </h3>
               </UnstyledLink>

               <div tw="mt-6 flex space-x-6 sm:mt-0">
                  <FooterIcon
                     href="https://twitter.com/GithubLogs"
                     icon={<BsTwitter tw="h-6 w-6" />}
                  >
                     Twitter
                  </FooterIcon>
                  <FooterIcon
                     href="https://github.com/Git-Logs"
                     icon={<BsGithub tw="h-6 w-6" />}
                  >
                     Github
                  </FooterIcon>
               </div>
            </div>

            <hr tw="border-tw-border my-12" />

            <div tw="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <FooterNavigation
                  category="Information"
                  items={[
                     { href: "/commands", children: "Commands" },
                     { href: "https://gitlogs.instatus.com", children: "Status" },
                  ]}
               />

               <FooterNavigation
                  category="Social"
                  items={[
                     { href: "https://github.com/Git-Logs", children: "Github" },
                     { href: "https://twitter.com/GithubLogs", children: "Twitter" },
                  ]}
               />

               <iframe
                  src="https://gitlogs.instatus.com/embed-status/dark-lg"
                  width="245"
                  height="61"
                  frameBorder="0"
                  scrolling="no"
               ></iframe>
            </div>

            <small tw="block mt-12">&copy; {new Date().getFullYear()} Git Logs</small>
         </Container>
      </footer>
   );
}
