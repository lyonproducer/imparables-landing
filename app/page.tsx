import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutEvent } from "@/components/sections/AboutEvent";
import { Topics } from "@/components/sections/Topics";
import { Audience } from "@/components/sections/Audience";
import { Speakers } from "@/components/sections/Speakers";
import { Agenda } from "@/components/sections/Agenda";
import { AboutImparables } from "@/components/sections/AboutImparables";
import { Partners } from "@/components/sections/Partners";
import { RegisterCTA } from "@/components/sections/RegisterCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutEvent />
        <Topics />
        <Audience />
        <Speakers />
        <Agenda />
        <AboutImparables />
        <Partners />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}
