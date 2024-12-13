"use client";
export default function Button() {
    return (
        <button
            className="bg-zinc-300 px-4 py-2 rounded hover:bg-zinc-400"
            type="button"
            onClick={async () => {
                const res = await fetch("/api/sentry-err");
                if (!res.ok) {
                    throw new Error("Sentry Example Frontend Error - DEV");
                }
            }}
        >
            Throw error!
        </button>
    );
}
