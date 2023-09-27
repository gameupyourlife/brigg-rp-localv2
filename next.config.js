/** @type {import('next').NextConfig} */
const nextConfig = {

}

// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      })
   
      return config
    },
  }
  
module.exports = nextConfig
