"use client";
import { Button } from "@/components/ui/button";
import CustomerSlotCards from "@/components/CustomerSlotCards";
import CustomerServices from "@/components/CustomerServices";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

import { Service } from "@prisma/client";
import { createAppointment } from "@/actions/appointment-actions";

function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [date, setDate] = React.useState<Date>(new Date());
  const [slotId, setSlotId] = React.useState<number>(0);
  const [serviceId, setServiceId] = React.useState<number>(0);
  const [selectedSlotCount, setSelectedSlotCount] = React.useState<number>(0);

  const handleClick = () => {
    if (isSignedIn) {
      createAppointment(date, user.id, slotId, false)
        .then((result) => {})
        .then((data) => {
          toast.success("Randevunuz alınmıştır.");

          setTimeout(() => {
            window.location.reload();
          }, 2500);
        });
    } else {
      alert("Please login first");
    }
  };

  const getSlotId = (id: number) => {
    setSlotId(id);
  };

  const getServiceId = (service: Service, slotTime: number) => {
    console.log("SERVICE:", service);
    console.log("SLOT TIME:", slotTime);
    setServiceId(service.id);
    setSelectedSlotCount(service[0].slotCount / slotTime);
  };

  return (
    <div className="flex items-start gap-10 my-5 w-[850px]">
      <Toaster
        toastOptions={{
          duration: 2000,
          classNames: {
            error: "bg-red-400",
            success: "bg-green-400",
          },
        }}
      />
      <div>
        <div className="rounded-md bg-black">
          <Image
            src={"/images/make-appointment.png"}
            alt="logo"
            width={600}
            height={300}
          />
        </div>
        <div className="py-5">
          <h1 className="font-bold text-xl mb-2">
            Things to pay attention to during your appointment
          </h1>
          <p>
            Web uygulamamım randevu sistemi nasıl çalışıyor? Müşterileriniz,
            mobil uygulama/internet sitesi aracılığıyla, kuaförünüze özel
            randevu sayfasından randevu alır/talebi oluşturur.
          </p>
          <ol className="mt-6 text-sm">
            <li className="mb-2">
              Salon Yöneticisi/Personeller tarafından panel üzerinden randevuyu
              onaylayabilir ya da reddedilebilir.
            </li>
            <li className="mb-2">
              Randevunuzu gerçekleştiremeyeceğiniz durumlarda, randevunuzu iptal
              edebilirsiniz.
            </li>
            <li className="mb-2">
              Personeller/müşteriler de daha önce oluşturulmuş randevuları iptal
              edebilir, değişiklik yapabilir.
            </li>
          </ol>
        </div>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Make an appointment</CardTitle>
          <CardDescription>
            Choose a suitable day and time for your service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <CustomerServices handleSelectService={getServiceId} />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Day</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                initialFocus
                fromDate={new Date()}
                toDate={new Date().setDate(new Date().getDate() + 30)}
              />
            </div>
            <CustomerSlotCards
              slotCount={selectedSlotCount}
              date={date}
              handleSelectSlot={getSlotId}
              slotId={slotId}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button
            onClick={handleClick}
            disabled={!isSignedIn || serviceId === 0 || slotId === 0}
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
