import { Button } from "@/components/ui/button";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import WaveText from "@/components/smoothui/ui/WaveText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className=" min-h-[calc(100dvh-6rem-5.25rem)] bg-background text-white flex justify-center items-center flex-col gap-8 px-4 max-md:gap-16">
      <div className="flex justify-center items-center">
        <TextRevealCard
          text={
            <>
              Imersão <WaveText className="text-[#323238]">Next.js</WaveText>: Do
              Zero ao Deploy
            </>
          }
          revealText={
            <>
              Imersão <WaveText className="text-primary">Next.js</WaveText>: Do
              Zero ao Deploy
            </>
          }
          className="bg-transparent"
          // duration={10}
          textClassName="text-6xl max-md:text-5xl font-extrabold text-center"
        />
      </div>
      <div className="w-2/3 max-md:w-full max-md:px-4">
        <h3 className="text-2xl max-md:text-lg md:text-2xl lg:text-2xl text-center font-normal text-muted-foreground">
          Aprenda a construir aplicações web modernas com Next.js, do conceito inicial à implantação final. Domine as melhores práticas e as ferramentas essenciais para o desenvolvimento front-end.
        </h3>
      </div>
      <Link href="/posts">
        <Button className="text-xl px-8 py-6 font-semibold">
          Comece a aprender!
        </Button>
      </Link>
    </main>
  );
}
