import "twin.macro";

import Layout from "#components/layouts/Layout";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const AboutUs: NextPageWithLayout = () => {
   return (
      <section id="hero" tw="py-20">
         {/** PREFIXED COMMANDS */}

         <div tw="flex flex-col text-center w-full mb-16" id="prefix">
            <h2 tw="sm:text-3xl">
               <a className="text-primary-500 hover:text-primary-400" href="#prefix">
                  Prefixed Commands
               </a>
            </h2>
         </div>
         <div tw="flex flex-wrap -m-2 mb-24">
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Simple Help</h4>
                     <small tw="text-tw-primary-dark">
                        View a simplified list of slash commands and information.
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!simplehelp</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">git!simplehelp</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Advanced Help</h4>
                     <small tw="text-tw-primary-dark">
                        View a advanced list of commands and information.
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!help</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">git!help</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>List Subscriptions</h4>
                     <small tw="text-tw-primary-dark">
                        List all webhooks in a guild with their respective repos and
                        channel
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!list</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">git!list</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>New Webhook</h4>
                     <small tw="text-tw-primary-dark">
                        Create a new webhook and webhook id for the current guild!
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!newhook</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">git!newhook</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>New Repo</h4>
                     <small tw="text-tw-primary-dark">
                        Subscribe to Repo Event Notifications
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">
                           git!newrepo [WebhookID] [User/Org Name] [Repo_Name]
                        </code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">
                           git!newrepo n03482tn0458ht Git-Logs Website
                        </code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Delete Repo</h4>
                     <small tw="text-tw-primary-dark">
                        UnSubscribe from Repo Event Notifications
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!delrepo [WebhookID]</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">
                           git!delrepo n03482tn0458ht
                        </code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Delete Webhook</h4>
                     <small tw="text-tw-primary-dark">
                        Delete a Webhook. This is useful if you think someone may have
                        your Secret <strong>NOTE:</strong> will make the Github Webhook
                        Settings error if not deleted
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">git!delhook [WebhookID]</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">
                           git!delhook n03482tn0458ht
                        </code>
                     </small>
                  </div>
               </div>
            </div>
         </div>

         {/** SLASH COMMANDS */}

         <div tw="flex flex-col text-center w-full mb-16" id="slash">
            <h2 tw="sm:text-3xl">
               <a className="text-primary-500 hover:text-primary-400" href="#slash">
                  Slash Commands
               </a>
            </h2>
         </div>
         <div tw="flex flex-wrap -m-2 mb-24">
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Simple Help</h4>
                     <small tw="text-tw-primary-dark">
                        View a simplified list of slash commands and information.
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/simplehelp</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/simplehelp</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Advanced Help</h4>
                     <small tw="text-tw-primary-dark">
                        View a advanced list of commands and information.
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/help</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/help</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>List Subscriptions</h4>
                     <small tw="text-tw-primary-dark">
                        List all webhooks in a guild with their respective repos and
                        channel
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/list</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/list</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>New Webhook</h4>
                     <small tw="text-tw-primary-dark">
                        Create a new webhook and webhook id for the current guild!
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/newhook</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/newhook</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>New Repo</h4>
                     <small tw="text-tw-primary-dark">
                        Subscribe to Repo Event Notifications
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">
                           /newrepo [WebhookID] [User/Org Name] [Repo_Name]
                        </code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">
                           /newrepo n03482tn0458ht Git-Logs Website
                        </code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Delete Repo</h4>
                     <small tw="text-tw-primary-dark">
                        UnSubscribe from Repo Event Notifications
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/delrepo [WebhookID]</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/delrepo n03482tn0458ht</code>
                     </small>
                  </div>
               </div>
            </div>

            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Delete Webhook</h4>
                     <small tw="text-tw-primary-dark">
                        Delete a Webhook. This is useful if you think someone may have
                        your Secret <strong>NOTE:</strong> will make the Github Webhook
                        Settings error if not deleted
                        <br />
                        <br />
                        <strong>USAGE:</strong>{" "}
                        <code className="text-primary-500">/delhook [WebhookID]</code>
                        <br />
                        <br />
                        <strong>EXAMPLE:</strong>{" "}
                        <code className="text-primary-500">/delhook n03482tn0458ht</code>
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
