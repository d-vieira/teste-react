import LoginForm from "@/components/LoginForm";
import LoginIllustration from "@/components/assets/LoginIllustration";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center">
      <LoginIllustration />

      <div className="border-2 rounded-lg w-96 h-80 p-6 mx-auto flex flex-col justify-evenly bg-gray-700">
        <LoginForm />
        <hr className="border-gray-500" />
        <Button className="w-48 self-center">Criar nova conta</Button>
      </div>
    </div>
  );
}
