import CirclePattern from "@/components/CirclePattern";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <CirclePattern 
        parentClass={`
          absolute 
          max-lg:top-0 
          right-0 
          lg:top-0 
          -z-10 
          overflow-hidden
          lg:w-full
          lg:h-[600px]
        `}
        childClass={`
          max-lg:w-screen max-lg:h-screen
          lg:absolute lg:bottom-0 lg:right-0
          -translate-y-[60%] md:-translate-y-[70%] lg:translate-y-[-5%]
          lg:translate-x-[20%]
          flex items-start
        `}
      />

      <Hero />
    </div>
  );
}
