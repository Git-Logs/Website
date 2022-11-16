import "twin.macro";

import Layout from "#components/layouts/Layout";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const AboutUs: NextPageWithLayout = () => {
   return (
      <section id="hero" tw="py-20">
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Commands</h2>
         </div>
         <div tw="flex flex-wrap -m-2 mb-24">
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Help</h4>
                     <small tw="text-tw-primary-dark">
                        View a list of commands and information.
                        <br />
                        <br />
                        <strong>USAGE:</strong>git! help
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>git! help
                     </small>
                  </div>
               </div>
            </div>
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Add</h4>
                     <small tw="text-tw-primary-dark">
                        Subscribe to a Github Repository
                        <br />
                        <br />
                        <strong>USAGE:</strong>git! add &lt;Org/Repo&gt;
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>git! add TheRealToxicDev/Website
                     </small>
                  </div>
               </div>
            </div>
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Remove</h4>
                     <small tw="text-tw-primary-dark">
                        Unsubscribe from Repository Events
                        <br />
                        <br />
                        <strong>USAGE:</strong>git! remove &lt;Org/Repo&gt;
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>git! remove TheRealToxicDev/Website
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

AboutUs.getLayout = (page) => (
   <Layout>
      <Seo templateTitle="Commands" />
      {page}
   </Layout>
);

export default AboutUs;
