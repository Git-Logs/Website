import { ImSpinner3 } from "react-icons/im";
import "twin.macro";

import FixedLayout from "#components/layouts/FixedLayout";
import ButtonLink from "#components/links/ButtonLink";

import { NextPageWithLayout } from "#/global-types";
import { useUserGuilds } from "#/utils/query";

const Docs: NextPageWithLayout = () => {
   return (
      <section tw="mb-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
         <div
            key="Section"
            tw="p-8 bg-tw-background-secondary w-full h-56 rounded-lg border border-tw-border"
         >
            <h2>Coming Soon</h2>
            <p>
               This will house the Artie Documentation sometime in the near future. Check
               back soon
            </p>
         </div>
      </section>
   );
};

Docs.getLayout = (page) => <FixedLayout title="Select a Section">{page}</FixedLayout>;

export default Docs;
