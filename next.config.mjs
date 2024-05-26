/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org", "dummyjson.com"], // use this when is more than one if it is this just one use below
    // remotePatterns: [{
    //   protocol: 'https',
    //   hostname: 'robohash.org', <== when it's singular hostname like this
    //   port: '',
    // }]
  },
};

export default nextConfig;
