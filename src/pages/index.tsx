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

                    <div className="h-6" />


                    <Divider text="TRPC-PRISMA" />
                    <div className="flex justify-center gap-4 text-white">
                        <Link className={buttonClass} href="/trpc/query">trpc/query</Link>
                        <Link className={buttonClass} href="/trpc/mutation">trpc/mutation</Link>
                        <Link className={buttonClass} href="/trpc/display">trpc/display</Link>
                    </div>


                    <Divider text="AUTH" />
                    <div className="flex justify-center gap-4 text-white">
                        <Link className={buttonClass} href="/trpc/display">credentials/login</Link>
                        <Link className={buttonClass} href="/trpc/display">credentials/register</Link>
                    </div>
                </div>
            </main>
        </>
    );
}



function Divider(props: { text: string }) {
    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium -translate-x-1/2 bg-transparent text-white left-1/2 dark:text-white dark:bg-gray-900">{props.text}</span>
        </div>
    );
}