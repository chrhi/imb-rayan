import { SignInForm } from "@/components/forms/sign-in";
import type { FC } from "react";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <div className="w-full h-screen flex justify-center pt-40">
      <SignInForm />
    </div>
  );
};

export default Page;
