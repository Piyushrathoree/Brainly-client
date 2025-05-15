import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  const { registerUser, loginWithGoogle, loginWithGithub, isLoading } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUser(formData);
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md  text-slate-300 bg-black my-[5.9vh] rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-800 dark">
      <h2 className="text-xl font-bold text-slate-200">Welcome to Brainly</h2>
      <p className="mt-2 max-w-sm text-sm text-slate-300">
        Create your account or sign up with a social provider
      </p>
      <button
        className="flex gap-1 items-center absolute top-24 left-48 duration-400 hover:-translate-y-0.5  rounded-md py-1 px-2  bg-slate-800/20"
        onClick={() => navigate("/")}
      >
        {<ArrowLeft size={16} />}Back
      </button>
      <form className="my-8 flex flex-col " onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-slate-300"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="johndoe@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-slate-300"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
            className="text-slate-300"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md font-medium bg-gradient-to-b from-netural-900 to-zinc-900 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign up"} &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={loginWithGithub}
          >
            <IconBrandGithub className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Sign up with GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={loginWithGoogle}
          >
            <IconBrandGoogle className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Sign up with Google
            </span>
            <BottomGradient />
          </button>
        </div>
        <div className="text-sm text-slate-400 mt-4 -mb-10">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className=" duration-300 hover:underline hover:text-slate-300"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
