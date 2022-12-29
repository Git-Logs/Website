import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
   title: "Git Logs",
   siteName: "Git Logs",
   description:
      "Providing users with a trustworthy and reliable way to send their GitHub logs to a Discord Channel of their choice with just a few simple commands!",
   url: "https://gitlogs.xyz",
   type: "website",
   robots: "follow, index",
   image: `/images/logo.png`,
};

type SeoProps = {
   date?: string;
   templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
   const router = useRouter();
   const meta = {
      ...defaultMeta,
      ...props,
   };

   meta["title"] = props.templateTitle
      ? `${props.templateTitle} | ${meta.siteName}`
      : meta.title;

   // meta['image'] = openGraph({
   //   description: meta.description,
   //   siteName: props.templateTitle ? meta.siteName : meta.title,
   //   templateTitle: props.templateTitle,
   // });

   return (
      <Head>
         <title>{meta.title}</title>
         <meta name="robots" content={meta.robots} />
         <meta content={meta.description} name="description" />
         <meta property="og:url" content={`${meta.url}${router.asPath}`} />
         <link rel="canonical" href={`${meta.url}${router.asPath}`} />
         {/* Open Graph */}
         <meta property="og:type" content={meta.type} />
         <meta property="og:site_name" content={meta.siteName} />
         <meta property="og:description" content={meta.description} />
         <meta property="og:title" content={meta.title} />
         <meta name="image" property="og:image" content={meta.image} />
         {/* Twitter */}
         <meta name="twitter:site" content="@TheRealToxicDev" />
         <meta name="twitter:title" content={meta.title} />
         <meta name="twitter:description" content={meta.description} />
         <meta name="twitter:image" content={meta.image} />
         {meta.date && (
            <>
               <meta property="article:published_time" content={meta.date} />
               <meta name="publish_date" property="og:publish_date" content={meta.date} />
               <meta name="author" property="article:author" content="TheRealToxicDev" />
            </>
         )}

         {/* Favicons */}
         {favicons.map((linkProps) => (
            <link key={linkProps.href} {...linkProps} />
         ))}
         <meta name="msapplication-TileColor" content="#ffffff" />
         <meta name="msapplication-TileImage" content="/images/logo.png" />
         <meta name="theme-color" content="#ffffff" />
      </Head>
   );
}

type Favicons = {
   rel: string;
   href: string;
   sizes?: string;
   type?: string;
};

const favicons: Array<Favicons> = [
   {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/images/logo.png",
   },
   {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/images/logo.png",
   },
   {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/images/logo.png",
   },
   {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/images/logo.png",
   },
   {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/images/logo.png",
   },
   {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/images/logo.png",
   },
   {
      rel: "manifest",
      href: "/favicon/manifest.json",
   },
];
