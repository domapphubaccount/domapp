/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // This disables Next.js's automatic image optimization.
    },
};

export default nextConfig;

