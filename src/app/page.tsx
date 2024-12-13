import Button from "./_components/Button";
export default async function Home() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const publicEnv =
        process.env.NEXT_PUBLIC_VERCEL_ENV || "no NEXT_PUBLIC_VERCEL_ENV found";
    const env = process.env.VERCEL_ENV || "no VERCEL_ENV found";
    return (
        <div className="mx-auto w-fit pt-10 space-y-8">
            <p>{publicEnv}</p>
            <p>{env}</p>
            <Button />
        </div>
    );
}
