import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { useState } from "react";

const Home: NextPage = () => {

  const [value, setValue] = useState(0);

  const hello = api.example.hello.useQuery({ text: "message from trpc" });
  const doubled = api.example.double.useQuery(20);
  const triple = api.example.timesThree.useMutation();

  const HandleSubmition = () => {
    triple.mutate(value);
  }


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            THE <span className="text-[hsl(280,100%,70%)]">trpc</span> TEST
          </h1>

          <p className="text-2xl text-center text-white">
            <b>api 1 (hello) :</b> {hello.data ? hello.data.greeting : "loading..."}
          </p>

          <p className="text-2xl text-center text-white">
            <b>api 2 (doubled) :</b> {doubled.data ? doubled.data.result : "loading..."}
          </p>

          <p className="text-2xl text-center text-white">
            <b>api 3 (triple) :</b>
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center w-full">
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={value} onChange={(e) => setValue(parseInt(e.target.value))} type="number" placeholder="input" />
            <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={HandleSubmition}>submit</button>
          </div>
          <b className="text-white">
            {triple.status === "loading" && "loading..."}
            {triple.data && triple.data.result}
          </b>
        </div>
      </main>
    </>
  );
};

export default Home;
