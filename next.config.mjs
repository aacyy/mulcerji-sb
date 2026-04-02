/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'], // add Sanity CDN here
	},
};

export default nextConfig;
