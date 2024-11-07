import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://octoflow.ca',
      images: '/banner.png',
      siteName: 'Octoflow',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@HeyOctoflow',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseUrl = (() => {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    const useLocalNet = process.env.USE_LOCAL_NET === 'true';
    const localUrl = useLocalNet ? process.env.LOCAL_NET : 'http://localhost:3000';

    if (!localUrl) {
      throw new Error('LOCAL_NET environment variable is not set');
    }

    return new URL(localUrl);
  }

  return new URL('https://octoflow.ca');
})();