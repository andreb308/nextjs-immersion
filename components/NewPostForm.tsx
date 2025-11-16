"use client"
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function NewPostForm() {

  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  return (
    <div className="w-1/2 max-md:w-full bg-form rounded-lg flex flex-col items-end gap-8 p-8">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="bg-input" placeholder="Título" />

      <Textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} className="h-32 bg-input" placeholder="Escreva seu post..." />
      
      <Button onClick={() => console.log({ title, postContent })} disabled={!title || !postContent} className="w-32">Publicar</Button>
    </div >
  );
}

export default NewPostForm;
