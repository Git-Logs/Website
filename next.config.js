/** @type {import('next').NextConfig} */
module.exports = {
   eslint: {
      dirs: ["src"],
   },
   experimental: {
      forceSwcTransforms: true,
   },
   reactStrictMode: true,

   images: {
      domains: ["dummyimage.com"],
   },

  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://discord.com/api/oauth2/authorize?client_id=910319339712950282&permissions=466108153169&scope=bot%20applications.commands',
        permanent: true,
      }
    ]
  },

   // SVGR
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: [
            {
               loader: "@svgr/webpack",
               options: {
                  typescript: true,
                  icon: true,
               },
            },
         ],
      });

      return config;
   },
};
