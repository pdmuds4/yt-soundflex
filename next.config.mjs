/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: 'https://ry4h7lzk33rmmxdeubkg2mzxmq0kjdrt.lambda-url.ap-northeast-1.on.aws/:slug*',
            },
        ]
    },
};

export default nextConfig;
