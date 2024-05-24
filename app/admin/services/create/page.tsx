"use client";
import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Loading from "@/components/Loading";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const [slotTime, setSlotTime] = useState(30);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/settings")
      .then((res) => {
        if (res.status == 200 && res.data) {
          setSlotTime(res.data.response.slotTime);
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Hata",
          description: "Hata olustu",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const formSchema = z.object({
    name: z.string().min(4, {
      message: "Servis ismi en az 4 karakter olmalıdır.",
    }),
    description: z.string().optional(),
    slotCount: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      slotCount: slotTime,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    axios
      .post("/api/services", values)
      .then(() => {
        form.reset();
        toast({
          title: "Bilgi",
          description: "Servis eklendi",
        });

        router.push("/admin/services");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Hata",
          description: "Servis eklenirken hata oluştu",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <Loading title="Yükleniyor...." />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Servis Ekleme</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hizmet Adı</FormLabel>
                  <FormControl>
                    <Input placeholder="Servis Adı" {...field} />
                  </FormControl>
                  <FormDescription>Servisin adını giriniz.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hizmet Adı</FormLabel>
                  <FormControl>
                    <Textarea {...field} name="description" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slotCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hizmet Süresi</FormLabel>
                  <FormControl>
                    <Input type="number" step={slotTime} {...field} />
                  </FormControl>
                  <FormDescription>Servisin süresini girin.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
