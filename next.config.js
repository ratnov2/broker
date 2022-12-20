/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cloudflare-ipfs.com',
				port: '',
				pathname: '/ipfs/**'
			}
		]
	},
	reactStrictMode: true,
	swcMinify: true
}

module.exports = nextConfig
