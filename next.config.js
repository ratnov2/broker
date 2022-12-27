/** @type {import('next').NextConfig} */
const nextConfig = {
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
			}
		]
	}
}

module.exports = nextConfig
