import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";
import "twin.macro";

import ArrowLink from "#components/links/ArrowLink";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const NotFound: NextPageWithLayout = () => {
   return (
      <div tw="flex min-h-screen flex-col items-center justify-center text-center">
         <RiAlarmWarningFill size={60} tw="animate-flicker text-red-500" />
         <h1 tw="mt-8">404 - Not Found</h1>
         <p>Whatever you are looking for can not be found here!</p>
         <ArrowLink tw="mt-4 md:text-lg" href="/">
            Back to Home
         </ArrowLink>
      </div>
   );
};

NotFound.getLayout = (page) => (
   <>
      <Seo templateTitle="Not Found" />
      {page}
   </>
);

export default NotFound;
