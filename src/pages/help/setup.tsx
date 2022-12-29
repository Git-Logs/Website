import { ImSpinner3 } from "react-icons/im";
import "twin.macro";

import FixedLayout from "#components/layouts/FixedLayout";
import ButtonLink from "#components/links/ButtonLink";
import ArrowLink from "#components/links/ArrowLink";

import { NextPageWithLayout } from "#/global-types";
import { useUserGuilds } from "#/utils/query";

const Docs: NextPageWithLayout = () => {
   return (
      <section tw="mb-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 1</h2>
            <p>
               <strong>make sure you are allowing DM's</strong> and invite the bot to your
               Discord Server by{" "}
               <ArrowLink href="https://discord.com/api/oauth2/authorize?client_id=910319339712950282&permissions=466108153169&scope=bot%20applications.commands">
                  Clicking Here
               </ArrowLink>
               once invited run the <code className="text-primary-500">git!newhook</code>{" "}
               or <code className="text-primary-500">/newhook</code> command
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 2</h2>
            <p>
               Check the DM from the Bot for your Webhook Link, ID and Secret. Head over
               to the Settings {">"} Webhook Tab of your Github Organization or Repository
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 3</h2>
            <p>
               Under the <code className="text-primary-500">"Payload URL"</code> section
               enter the
               <code className="break-all text-primary-500">
                  "https://v2.gitlogs.xyz/kittycat"
               </code>{" "}
               Webhook URL provided by the bot including the "id" query.
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 4</h2>
            <p>
               Set the Webhooks "Content Type" to <code>application/json</code> and leave
               SSL Verification enabled for security purposes.
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 5</h2>
            <p>
               Under the <code className="text-primary-500">"Secret"</code> section
               provide the Webhook Secret that can be found in the bots DM. (DO NOT USE
               THE ID)
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 6</h2>
            <p>Save your webhook settings and proceed to the next step.</p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 7</h2>
            <p>
               Run the command <code className="text-primary-500">/newrepo</code> and
               follow the slash command prompts. (<strong>NOTE:</strong> Owner is the
               Owner or Org Name (ex: Git-Logs), Name: is the repo name)
            </p>
         </div>
      </section>
   );
};

Docs.getLayout = (page) => <FixedLayout title="Git Logs Setup Guide">{page}</FixedLayout>;

export default Docs;
