import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
        Sentry.replayIntegration({
            maskAllText: false,
            maskAllInputs: true,
            blockAllMedia: true,
        }),
    ],
    // https://vercel.com/docs/projects/environment-variables/framework-environment-variables#NEXT_PUBLIC_VERCEL_ENV
    replaysOnErrorSampleRate:
        process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 1.0 : 0.0,
    debug: false,
});
