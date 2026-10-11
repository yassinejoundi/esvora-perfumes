import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Collection } from "@/components/collection";
import { Philosophy } from "@/components/philosophy";
import { ScentFinder } from "@/components/scent-finder";
import { Discovery } from "@/components/discovery";
import { AtelierWords } from "@/components/atelier-words";
import { Footer } from "@/components/footer";
import { ScrollChoreography } from "@/components/scroll-choreography";

export default function Home() {
  return <>
    <Navigation />
    <main className="site-main overflow-x-hidden w-full max-w-full">
      <Hero /><Marquee /><Collection /><Philosophy /><ScentFinder /><Discovery /><AtelierWords />
    </main>
    <Footer />
    <ScrollChoreography />
  </>;
}
