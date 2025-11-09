import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-[calc(100dvh-6rem-5.25rem)] bg-slate-600 text-white flex justify-center items-center px-4">
      <div className="h-104 w-176 bg-orange-600 rounded-4xl">
        <div className="h-[25%] bg-slate-950 rounded-t-4xl flex items-center justify-center">
          <h1 className="text-3xl font-bold">Imersão Next</h1>
        </div>
        <div className="w-full h-[75%] flex items-center justify-center gap-4 max-md:flex-col px-4">
          <Image src="/next.svg" width={288} height={100} alt="Next.js Logo" />
          <Image src="/vercel.svg" width={192} height={100} alt="Vercel Logo" />
        </div>
      </div>
    </main>
  );
}
