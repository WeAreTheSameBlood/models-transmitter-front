import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["fra.cloud.appwrite.io"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
