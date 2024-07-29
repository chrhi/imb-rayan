"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { useUploadThing } from "@/lib/uploadthing";
import { useState } from "react";
import { FileDialog } from "../file-dialog";
import { FileWithPreview } from "@/types";
import { useRouter } from "next/navigation";
import { catchError, isArrayOfFile } from "@/lib/utils";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { Zoom } from "../zoom-image";
import Image from "next/image";
import { createProduct } from "@/actions/products";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const productSchema = z.object({
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  description: z.any(),

  status: z.string(),
  range: z.string(),
  company: z.string(),
  images: z
    .unknown()
    .refine((val) => {
      if (!Array.isArray(val)) return false;
      if (val.some((file) => !(file instanceof File))) return false;
      return true;
    }, "Must be an array of File")
    .optional()
    .nullable()
    .default(null),
});

type Inputs = z.infer<typeof productSchema>;

export function CreateProductForm() {
  const [files, setFiles] = useState<FileWithPreview[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const { isUploading, startUpload } = useUploadThing("imageUploader");

  const form = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      status: "",
      images: "",
      description: {},
    },
  });

  const { mutate, error, mutateAsync, isPending } = useMutation({
    mutationFn: async (data: Inputs) => {
      setLoading(true);
      try {
        if (isArrayOfFile(data.images)) {
          toast.promise(
            startUpload(data.images)
              .then((res) => {
                const formattedImages = res?.map((image) => ({
                  id: image.key,
                  name: image.key.split("_")[1] ?? image.key,
                  url: image.url,
                }));
                return formattedImages ?? null;
              })
              .then(async (images) => {
                await createProduct({
                  ...data,
                  description: data.description ?? "",
                  images: images ?? [],
                });

                router.push("/dashboard/products");
              }),

            {
              loading: "Création d'un nouveau produit...",
              success: "Produit ajouté avec succès.",
              error: "Erreur lors de la création du produit.",
            }
          );
        } else {
          await createProduct({
            ...data,
            description: data.description ?? "",
            images: [],
          });

          router.push("/dashboard/products");
          toast.success("Erreur lors de la création du produit.");
        }
      } catch (err) {
        catchError(err);
      }
    },
  });

  async function onSubmit(data: z.infer<typeof productSchema>) {
    console.log(data);
    setLoading(true);
    await mutateAsync(data);
  }
  return (
    <div className="w-full h-[300px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="w-full h-fit bg-white rounded-2xl  border shadow col-span-1 md:col-span-2 flex flex-col gap-y-4  p-4 pb-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de produit</FormLabel>
                    <FormControl>
                      <Input placeholder="nome.." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <ReactQuill
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1.5">
                    <FormLabel>Images</FormLabel>
                    {files?.length ? (
                      <div className="flex items-center gap-2">
                        {files.map((file, i) => (
                          <Zoom key={i}>
                            <Image
                              src={file.preview}
                              alt={file.name}
                              className="h-20 w-20 shrink-0 rounded-md object-cover object-center"
                              width={80}
                              height={80}
                            />
                          </Zoom>
                        ))}
                      </div>
                    ) : null}
                    <FormControl>
                      <FileDialog
                        setValue={form.setValue}
                        name="images"
                        maxFiles={3}
                        maxSize={1024 * 1024 * 4}
                        files={files}
                        setFiles={setFiles}
                        isUploading={isUploading}
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full h-full   flex flex-col gap-y-8">
              <div className="w-full p-4 h-[500px] bg-white rounded-2xl  flex flex-col gap-y-4 border shadow">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="DRAFT">draft</SelectItem>
                          <SelectItem value="PUBLISHED">published</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="IMB">IMB</SelectItem>
                          <SelectItem value="IRC">IRC</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="range"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Range</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SERIE_700">SERIE_700</SelectItem>
                          <SelectItem value="SERIE_700ECO">
                            SERIE_700ECO
                          </SelectItem>
                          <SelectItem value="SERIE_900">SERIE_900</SelectItem>
                          <SelectItem value="ELEMENTS_NEUTRES">
                            ELEMENTS_NEUTRES
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={loading} type="submit">
                  {loading && <Loader className="mr-2 w-4 h-4 animate-spin" />}
                  Sauvegarder les modifications
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
