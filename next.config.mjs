/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: 'https://python-tinyapi-sagh.onrender.com/ytflex/:slug*',
            },
        ]
    },
};

export default nextConfig;
