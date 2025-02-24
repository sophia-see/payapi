import CirclePattern from "@/components/CirclePattern";
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

      {/* temp */}
      <div className="h-[500px]">

      </div>
    </div>
  );
}
