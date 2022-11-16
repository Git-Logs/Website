import "twin.macro";

import UnstyledLink from "#/lib/components/links/UnstyledLink";
import Seo from "#/lib/components/Seo";

import FixedLayout from "#components/layouts/FixedLayout";

import { NextPageWithLayout } from "#/global-types";

const HelpCenter: NextPageWithLayout = () => {
   return (
      <section tw="flex flex-col items-center mb-10 mt-10">
         {/**<input
            type="search"
            name="Search"
            placeholder="Type something to search..."
            tw="my-8 w-full lg:w-1/2 rounded-lg border-transparent bg-tw-background-secondary font-semibold text-tw-primary-light focus:border-2 focus:border-primary-500 focus:ring-0"
         />*/}
         <div tw="flex w-full flex-col divide-y divide-tw-border sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32">
            <div tw="flex w-full flex-col divide-y divide-tw-border">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="/help/setup"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Setup Guide
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Permissions
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Information
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
            </div>
            <div tw="flex w-full flex-col divide-y divide-tw-border">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Features
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center  p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Bug Reports
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  User Reports
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
            </div>
            <div tw="hidden w-full divide-y divide-tw-border sm:flex sm:flex-col">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Security Vulnerabilities
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Privacy
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Developers
                  <span tw="bg-primary-600 rounded-lg ml-4">Soon!</span>
               </UnstyledLink>
            </div>
         </div>
      </section>
   );
};

HelpCenter.getLayout = (page) => (
   <FixedLayout title="Help Center" isTitleCentered>
      <Seo templateTitle="Help Center" />
      {page}
   </FixedLayout>
);

export default HelpCenter;
