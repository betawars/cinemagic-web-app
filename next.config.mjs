/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['another-domain.com', 'example.com', 'mdbcdn.b-cdn.net', 'image.tmdb.org'],
    },
};


export default nextConfig;
