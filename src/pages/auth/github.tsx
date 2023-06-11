import { signIn, signOut, useSession } from "next-auth/react";
import { type MouseEventHandler } from "react";
import { type Session } from "next-auth";

export default function Discord() {
    const data = useSession();
    return (

        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        TEST <span className="text-[hsl(280,100%,70%)]">GITHUB</span> AUTH
                    </h1>

                    <div className="h-6" />

                    {data.status === "loading" && <Loading />}
                    {data.status === "authenticated" && <Authenticated user={data.data.user} />}
                    {data.status === "unauthenticated" && <Unauthenticated />}

                    <div className="h-6" />

                </div>
            </main>

        </>
    )
}


function Loading() {
    return (
        <p className="text-white">Loading...</p>
    );
}

interface AuthenticatedProps {
    user: Session["user"];
}
function Authenticated({ user }: AuthenticatedProps) {
    const Handeler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        void signOut();
    }
    return (
        <>
            {user && (
                <div className="flex-col items-center text-center justify-center">
                    <b className="text-white">authenticates</b>
                    <p className="text-white" ><b>email :</b> {user.email}</p>
                    <p className="text-white" ><b>name :</b> {user.name}</p>
                    <p className="text-white" ><b>id :</b> {user.id}</p>
                    {user.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            className="w-16 h-16 rounded-full"
                            src={user.image}
                            alt="Rounded avatar"
                        />
                    )}
                </div>
            )}

            <button
                className="ml-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                onClick={Handeler}
            >SignOut</button>
        </>
    );
}

function Unauthenticated() {
    const Handeler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        void signIn("");
    }
    return (
        <>
            <p className="text-white">unauthenticated</p>
            <button
                className="ml-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                onClick={Handeler}
            >SignIn</button>
        </>
    );
}
