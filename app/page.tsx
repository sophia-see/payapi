import Button from "@/components/Button";
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <div className="flex flex-col text-center mx-auto gap-2 p-2 max-w-[300px]">
      <TextArea error={"This field can’t be empty"}/>
      <TextField placeholder="Email Address" error={"This field can’t be empty"}/>

      <Button>Primary 1</Button>
      <Button>Primary 2</Button>
      <Button disabled>Primary 3</Button>

      <div className="bg-san-juan-blue flex flex-col text-center mx-auto gap-2 p-2 w-full">
        <Button variant="secondary" mode="light">Secondary Light 1</Button>
        <Button variant="secondary" mode="light">Secondary Light 2</Button>
        <Button variant="secondary" mode="light" disabled>Secondary Light 3</Button>
      </div>

      <Button variant="secondary" mode="dark">Secondary Dark 1</Button>
      <Button variant="secondary" mode="dark">Secondary Dark 2</Button>
      <Button variant="secondary" mode="dark" disabled>Secondary Dark 3</Button>
    </div>
  );
}
