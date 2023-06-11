import Link from "next/link";

const buttonClass = 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'

export default function HomePage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        THE <span className="text-[hsl(280,100%,70%)]">T3</span> TEST
                    </h1>
                    <div className="flex justify-center gap-4 text-white">
                        <Link className={buttonClass} href="/trpc/query">trpc/query</Link>
                        <Link className={buttonClass} href="/trpc/mutation">trpc/mutation</Link>
                        <Link className={buttonClass} href="/trpc/display">trpc/display</Link>
                    </div>
                </div>
            </main>
        </>
    );
}