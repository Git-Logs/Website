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
               Invite the bot to your Discord Server by{" "}
               <ArrowLink href="https://discord.com/api/oauth2/authorize?client_id=910319339712950282&permissions=466108153169&scope=bot%20applications.commands">
                  Clicking Here
               </ArrowLink>
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 2</h2>
            <p>
               Head to the "Settings" tab in your Github Repo and find the "Webhooks
               Section"
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 3</h2>
            <p>
               Create a new Webhook with the following payload url:{" "}
               <code>https://api.gitlogs.xyz</code>
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 4</h2>
            <p>
               Set the Webhooks "Content Type" to <code>application/json</code> and leave
               SSL Verification enabled.
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 5</h2>
            <p>
               Allow the Webhook to send you all events by selecting "Send me everything"
               or select what you want to send with "Let me select individual events"
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Step 6</h2>
            <p>
               Make sure the Webhook is active by checking the "Active" option at the
               bottom of the setup page!
            </p>
         </div>
      </section>
   );
};

Docs.getLayout = (page) => <FixedLayout title="Git Logs Setup Guide">{page}</FixedLayout>;

export default Docs;
