import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import EmailInput from "@/components/EmailInput";
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <div className="p-10 flex flex-col mx-auto max-w-[300px]">
      <EmailInput placeholder="Enter email Address"/>
    </div>
  );
}
