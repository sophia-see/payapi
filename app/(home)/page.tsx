import CirclePattern from "@/components/CirclePattern";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Usage from "./components/Usage";
export default function Home() {
  return (
    <div>
      <CirclePattern 
        parentClass={`
          absolute 
          top-0 
          right-0
          left-0
          -z-10 
          lg:w-full
          lg:h-[600px]
          lg:max-w-[1110px] lg:mx-auto 
        `}
        childClass={`
          max-lg:w-screen max-lg:h-screen
          lg:absolute lg:bottom-0 lg:right-0
          translate-y-[-85%] md:translate-y-[-40%] lg:translate-y-[-15%] xl:translate-y-[0%]
          lg:translate-x-[45%] xl:translate-x-[25%]
          flex items-start
        `}
      />
      <Hero />
      <About />
      <Features />
      <Usage />
    </div>
  );
}
