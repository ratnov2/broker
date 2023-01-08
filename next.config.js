/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cloudflare-ipfs.com', 'red-project-bank-app.herokuapp.com']
	}
}

module.exports = nextConfig
