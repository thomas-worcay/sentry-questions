import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.devtool = "hidden-source-map";
        return config;
    },
    experimental: {
        instrumentationHook: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    productionBrowserSourceMaps: true,
};

export default withSentryConfig(nextConfig, {
    org: "thomas-vb",
    project: "nextjs-test",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
        enabled: true,
    },
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    sourcemaps: {
        deleteSourcemapsAfterUpload: true,
    },
});
