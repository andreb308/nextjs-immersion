import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Button } from "./ui/button";

function Post() {
  return (
    <Card className="w-1/2 max-md:w-full">
      <CardHeader>
        <CardDescription>
          TESTE: (aqui no futuro vai ser o nome do autor)
        </CardDescription>
        <CardTitle className="text-2xl">
          A jornada para dominar Next.Js
        </CardTitle>
        {/* <CardAction><PencilIcon className="h-6 w-6 cursor-pointer" /></CardAction> */}
      </CardHeader>
      <CardContent>
        <p>
          Explorando os fundamentos e os recursos avançados do Next.js para
          construir aplicações web modernas e performáticas. Uma viagem desde a
          configuração inicial até o deploy.
        </p>
      </CardContent>
      <hr className="h-0.5 bg-gray-400 w-full" />
      <CardFooter>
        <Button>Deletar</Button>
      </CardFooter>
    </Card>
  );
}

export default Post;
