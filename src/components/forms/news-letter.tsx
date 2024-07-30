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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { sendDetailsEmailAction } from "@/actions/email";

const formSchema = z.object({
  email: z.string(),
});

export function NewsLetterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await sendDetailsEmailAction({
        email: values.email,
      });
      toast("nous vous envoyons un e-mail, vérifiez votre boîte de réception");
      form.reset();
      setIsLoading(false);
    } catch (err) {
      // displaying an error to the user
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <div className="w-full h-[50px]  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex items-center justify-between gap-x-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="w-full placeholder:text-xl placeholder:text-[#5B5B5B] h-[50px]"
                    placeholder="Entrer votre Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            className=" bg-primary h-[50px] text-xl font-bold"
          >
            {isLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            Envoyer
            <SendHorizontal className="w-4 h-4 text-white ml-2 " />
          </Button>
        </form>
      </Form>
    </div>
  );
}
