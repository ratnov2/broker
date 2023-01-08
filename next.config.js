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
	swcMinify: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://red-project-bank-app.herokuapp.com/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `https://red-project-bank-app.herokuapp.com/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
