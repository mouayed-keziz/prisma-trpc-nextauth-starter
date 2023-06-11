import { api } from "@/utils/api";
import Table from "@/components/Table";
import Link from "next/link";

const buttonClass = 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'

export default function All() {
    const data = api.example.getAllExamples.useQuery();

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        LIST ALL DATA FROM <span className="text-[hsl(280,100%,70%)]">prisma</span> USING <span className="text-[hsl(280,100%,70%)]">trpc</span> API
                    </h1>

                    {data.data ? (<Table data={data.data} />) : (<div>loading ...</div >)}

                    <div className="flex justify-center align-center text-center text-violet-100 gap-4">
                        <Link className={buttonClass} href="/">main</Link>
                        <Link className={buttonClass} href="/trpc/mutation">input</Link>
                    </div>
                </div>
            </main>
        </>
    );
}