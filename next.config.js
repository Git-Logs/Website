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
            source: "/invite",
            destination:
               "https://discord.com/api/oauth2/authorize?client_id=913266703398473810&permissions=545125694705&scope=bot%20applications.commands",
            permanent: true,
         },
         {
            source: "/status",
            destination: "https://gitlogs.instatus.com/",
            permanent: true,
         },
         {
            source: "/github",
            destination: "https://github.com/Git-Logs",
            permanent: true,
         },
         {
            source: "/twitter",
            destination: "https://twitter.com/GithubLogs",
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
