import "twin.macro";

import Layout from "#components/layouts/Layout";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";
import UnderlineLink from "#/lib/components/links/UnderlineLink";

const Privacy: NextPageWithLayout = () => {
   return (
      <section id="hero" tw="py-20">
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Privacy Policy</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               This Privacy Policy ("Policy") explains how information about You is
               collected, used, and disclosed by Your access or use of this Site or
               otherwise as a result of Your interactions with Us. By visiting this Site
               directly or through another site, You accept the terms and conditions of
               this Policy. Git Logs ("Service", "Bot", "Discord") is the Discord portion
               of our service. The website ("Site", "Website", or "Dashboard") is the
               website. We value your privacy and do our best to make sure we have the
               best methods in place to protect it.
            </p>
         </div>
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Git Logs</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               By using the Bot you understand that we can collect data about you or your
               Discord Servers including:
            </p>
            <ul tw="flex grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-1 gap-4 mt-4">
               <li>1). Your Discord Username</li>
               <li>2). Your Discord Avatar/Logo</li>
               <li>3). Your Guild Name and Logo</li>
               <li>4). Your Guild ID and Invite Link</li>
               <li>4). Your Github Org/Username and Repo</li>
            </ul>
         </div>
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Our Site</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               By accessing and using the Site you understand that we collect data about
               you:
            </p>
            <ul tw="flex grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-1 gap-4 mt-4">
               <li>
                  1). Your browser, access times, pages you view, IP address, and the page
                  visited before viewing our Site
               </li>
               <li>2). Hardware model, OS, and network information</li>
               <li>
                  3). Data from external websites, which we do not own or operate, such as
                  Discord
               </li>
               <li>4). Cookies, Secrets and Authorization related data.</li>
            </ul>
         </div>
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Data Deletion</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               You can request us to remove any data tied to you by Contacting our Staff
               Team at{" "}
               <UnderlineLink href="mailto:gitbotteam@gmail.com">
                  gitbotteam@gmail.com
               </UnderlineLink>{" "}
               .
            </p>
         </div>
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Data Usage</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               We may use data we collect to better improve the Site and to continue
               providing Git Logs to you. Your data can be used to improve Git Logs and
               our Site. In the event We merge with another company, some or all of your
               data may be disclosed to the company, and will be handled under the next
               privacy policy.
            </p>
         </div>
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Updates to this Policy</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               If We change or update this Privacy Policy, We will post changes and
               updates on the Site and in our Discord Server so that you will always be
               aware of what information We collect, use and disclose. We encourage you to
               review this Policy from time to time so you will know if the Privacy Policy
               has been changed or updated. .
            </p>
         </div>
      </section>
   );
};

Privacy.getLayout = (page) => (
   <Layout>
      <Seo templateTitle="Privacy" />
      {page}
   </Layout>
);

export default Privacy;
