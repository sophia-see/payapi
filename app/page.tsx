import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Button>Primary 1</Button>
      <Button>Primary 2</Button>
      <Button disabled>Primary 3</Button>

      <Button variant="secondary" mode="light">Secondary Light 1</Button>
      <Button variant="secondary" mode="light">Secondary Light 2</Button>
      <Button variant="secondary" mode="light" disabled>Secondary Light 3</Button>

      <Button variant="secondary" mode="dark">Secondary Dark 1</Button>
      <Button variant="secondary" mode="dark">Secondary Dark 2</Button>
      <Button variant="secondary" mode="dark" disabled>Secondary Dark 3</Button>
    </div>
  );
}
