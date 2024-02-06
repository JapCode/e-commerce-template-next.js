/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import { Button, buttonVariants } from "@/components/Button";
import Icons from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import trpc from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { data } = trpc.anyApiRoute.useQuery();
  console.log(data);

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    console.log(data);
  };

  return (
    <>
      <div className=" container relative flex flex-col items-center justify-center pt-20 lg:px-0  ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              href="/sing-in"
              className={buttonVariants({
                variant: "link",
                className: "text-muted-foreground",
              })}
            >
              Already have an account? Sing-in
              <ArrowRight className=" h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    id="password"
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                </div>
                <Button>Sing-up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
