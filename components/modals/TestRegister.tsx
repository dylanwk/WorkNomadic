"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "./Heading";
import { Input } from "../inputs/Input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const TestRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex h-screen">
      <Link href="/">
        <Button
          variant={"outline"}
          className="p-4 m-8 border-0 transition absolute rounded-lg"
        >
          <FaArrowLeft size={20} className="pr-2" />
          Back
        </Button>
      </Link>
      {/* <!-- Left Pane --> */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <Image
            src="/images/vagaspace_logo.png"
            height={47}
            width={47}
            alt="Logo"
          />
        </div>
      </div>
      {/* <!-- Right Pane --> */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="flex justify-between relative mb-6">
            <Heading
              title="Welcome to Vagaspace"
              subtitle="Create an account"
            />
          </div>

          <form action="#" method="POST" className="space-y-4">
            {/* <!-- Your form elements go here --> */}
            <div>
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div>
              <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div>
              <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="pt-1">
              <Button className="py-6 w-full ">Sign Up</Button>
            </div>
          </form>
          <div className="relative py-3 mt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-gray-100 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-2 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
              <Button
                className="py-6 w-full flex items-center"
                onClick={() => {}}
                variant="outline"
              >
                <FcGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <Button
                className="py-6 w-full flex justify-center items-center"
                onClick={() => {}}
                variant="outline"
              >
                <AiFillGithub className="mr-2 h-4 w-4" />
                Github
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-black hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestRegister;
