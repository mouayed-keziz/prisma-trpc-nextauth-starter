import { api } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";

export default function ExampleForm() {
    const [name, setName] = useState<string>("");
    const example = api.example.createExample.useMutation();

    const submitHandeler = () => {
        example.mutate(name);
    }

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        THE <span className="text-[hsl(280,100%,70%)]">trpc</span> TEST
                    </h1>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        <span className="text-[hsl(280,100%,70%)]">with prisma</span>
                    </h2>

                    <form onSubmit={submitHandeler}>
                        <input className="mr-2 p-2 rounded-md" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="..." />
                        <button className="ml-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" type="submit">
                            submit
                        </button>
                    </form>

                    <div className="text-white">
                        <Link className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            href="/trpc/display">see all</Link>
                    </div>
                </div>
            </main>
        </>
    );
}