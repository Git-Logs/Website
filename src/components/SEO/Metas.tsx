import React from "react";
import Head from "next/head";

export const Metas = ({ title, description, imageURL, siteName }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="msapplication-TileColor" content="#00F902" />
      <meta name="theme-color" content="#00F902" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:image" content={imageURL} />
      <meta property="og:site_name" content={siteName}></meta>
      <meta name="apple-mobile-web-app-title" content={title} />
      <link rel="apple-touch-icon" sizes="180x180" href={imageURL} />
      <link rel="icon" type="image/png" sizes="192x192" href={imageURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={imageURL} />
      <link rel="icon" type="image/png" sizes="96x96" href={imageURL} />
      <link rel="icon" type="image/png" sizes="16x16" href={imageURL} />
      <meta name="msapplication-TileImage" content={imageURL} />
    </Head>
  );
};