import CirclePattern from "@/components/CirclePattern";
export default function Home() {
  return (
    <div>
      {/* <CirclePattern parentClass="inset-0 -translate-y-[60%]"/> */}
      <CirclePattern 
        parentClass='absolute top-0 right-0 -z-10 overflow-hidden'
        childClass='w-screen h-screen -translate-y-[60%] md:-translate-y-[70%] h-full place-self-end ml-auto'
      />

      {/* temp */}
      <div className="h-[500px]">

      </div>
    </div>
  );
}
