/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withImages = require('next-images');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOPtions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
    [withImages],
  ],
  nextConfig
);
