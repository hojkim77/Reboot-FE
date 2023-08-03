{
  /* @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/
}
//next.config.js
/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
