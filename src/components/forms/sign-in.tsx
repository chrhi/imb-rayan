"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { rootAdminSignInAction } from "@/actions/auth";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      setIsLoading(true);

      toast.promise(
        rootAdminSignInAction({
          email: values.email,
          password: values.password,
        }),
        {
          loading: "nous validons vos informations d&apos;identification...",
          success: (data) => {
            return `succès`;
          },
          error: "une erreur",
        }
      );

      router.push("/dashboard");
    } catch (err) {
      // displaying an error to the user

      console.log(err);
    }
  }

  return (
    <div className="w-[500px] h-[350px] shadow-xl border-2 rounded-2xl p-8 bg-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="***..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            size={"lg"}
            className="w-full"
          >
            {isLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            se connecter
          </Button>
        </form>
      </Form>
    </div>
  );
}
