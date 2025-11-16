import NewPostForm from "@/components/NewPostForm";
import Post from "@/components/Post";
import React from "react";

function page() {
  return (
    <main className="min-h-[80dvh] px-4 py-8 gap-4 bg-slate-600 text-white flex flex-col justify-center items-center">
      <NewPostForm />
      <Post />
    </main>
  );
}

export default page;
