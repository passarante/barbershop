import React, { useState, useEffect } from "react";
import { getServices } from "@/actions/services-action";
import { Description } from "@radix-ui/react-toast";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { getSettings } from "@/actions/setting-actions";

function CustomerServices({ handleSelectService }: any) {
  const [slotTime, setSlotTime] = useState(0);

  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((result) => {
      setServices(result);
    });
    getSettings().then((result) => {
      setSlotTime(result?.slotTime);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="services">Service</Label>
      <Select
        onValueChange={(e) =>
          handleSelectService(
            services.filter((service) => e == service.id),
            slotTime
          )
        }
      >
        <SelectTrigger id="services">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          {services.map((service) => {
            return (
              <SelectItem value={service.id} key={service.id}>
                {service.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CustomerServices;
