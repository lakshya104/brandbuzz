/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //     config.module.rules.push({
  //       test: /\.html$/,
  //       loader: 'null-loader',
  //     });
  //     return config;
  //   },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    AUTH_SECRET: "98b8ac86c50e09ce044f8dc6c4596c40",
  },
};

export default nextConfig;
