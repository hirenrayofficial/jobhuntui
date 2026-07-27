/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ibb.co', port: '', pathname: '/**' }],
    dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
