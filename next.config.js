/** @type {import('next').NextConfig} */
const repo = "cheat";
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
