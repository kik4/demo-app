import Image from "next/image";
import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        {session?.user ? (
          <>
            <div>signed in: {session.user.name}</div>
            {session.user.image && (
              <div>
                <Image
                  src={session.user.image}
                  width={64}
                  height={64}
                  alt="User Avatar"
                  unoptimized
                />
              </div>
            )}
            <div>
              <SignOut />
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}
