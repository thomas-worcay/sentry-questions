"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        Sentry.captureException(error);
    }, [error]);

    return <div className="p-10">Error.tsx</div>;
}
