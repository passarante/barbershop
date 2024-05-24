"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Delete, Edit, PlusIcon, Trash } from "lucide-react";
import { Service } from "@prisma/client";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import Loading from "@/components/Loading";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/services")
      .then((res: any) => {
        if (res.status == 200 && res.data) {
          setServices(res.data.response);
          //setServices(res.data.response);
        }
      })
      .catch((err) => {
        toast({
          title: "Hata",
          description: "Hata olustu",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading title="Hizmetler yükleniyor..." />;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle>Hizmet Listesi</CardTitle>
          <Link href="/admin/services/create">
            <Button size={"sm"}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Yeni Ekle
            </Button>
          </Link>
        </div>
      </CardHeader>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Hizmet Adı</TableHead>
            <TableHead>Açıklaması</TableHead>
            <TableHead>Süre</TableHead>
            <TableHead>-</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services &&
            services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.id}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{service.slotCount}</TableCell>
                <TableCell className="flex space-x-2">
                  <Button
                    size="sm"
                    className="w-[40px] bg-transparent hover:opacity-80 hover:bg-transparent h-[40px] text-blue-500 transtion-all duration-200"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="w-[40px] h-[40px] bg-transparent hover:opacity-80 hover:bg-transparent text-red-500 transtion-all duration-200"
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
