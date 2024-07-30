"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendOrderEmailAction } from "@/actions/email";
import { BasketStore } from "@/lib/zustand";
import { Loader, SendHorizontal } from "lucide-react";
import React from "react";
import { useRouter } from "next13-progressbar";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  message: z.string(),
});

export function CofirmeOrderForm() {
  const products = BasketStore((item) => item.products);

  const [loading, setLoading] = React.useState<boolean>(false);
  const clearItems = BasketStore((item) => item.clear);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await sendOrderEmailAction({
        email: values.email,
        fristName: values.firstName,
        lastName: values.lastName,
        messageDetails: values.message,
        phone: values.phoneNumber,
        products: products,
      });

      router.push("/confirme-order/thank-you");
      setLoading(false);
      toast("votre e mail a été envoyé");
      form.reset();
      clearItems();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="+235.." {...field} />
              </FormControl>
              <FormDescription>
                nous utilisons ces informations pour contacter.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full h-fit grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>first Name</FormLabel>
                <FormControl>
                  <Input placeholder="Abdellag" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Chehri" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Parle nous un peu de toi"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={products.length === 0 || loading}
          type="submit"
          className="w-full h-[50px] "
        >
          {loading && <Loader className="mr-2 w-4 h-4 animate-spin" />}
          Envoyer ma commande
          <SendHorizontal className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </Form>
  );
}
