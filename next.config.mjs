/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: false
        }
    }
};

export default nextConfig;
