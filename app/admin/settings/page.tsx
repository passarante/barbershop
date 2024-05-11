"use client";

import { getSettings, setSettings } from "@/actions/setting-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings } from "@prisma/client";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [begTime, setBegTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [slotTime, setSlotTime] = useState(15);
  const [isSundayOff, setIsSundayOff] = useState(true);

  useEffect(() => {
    axios
      .get("/api/settings")
      .then((res) => {
        if (res.status == 200 && res.data) {
          setBegTime(res.data.response.begTime);
          setEndTime(res.data.response.endTime);
          setSlotTime(res.data.response.slotTime);
          setIsSundayOff(res.data.response.isSundayOff);
        }
      })
      .catch((err) => console.log(err));

    // getSettings()
    //   .then((res: Settings | undefined | null) => {
    //     if (res) {
    //       setBegTime(res.begTime);
    //       setEndTime(res.endTime);
    //       setSlotTime(res.slotTime);
    //       setIsSundayOff(res.isSundayOff);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: Settings = { id: 1, begTime, endTime, slotTime, isSundayOff };

    setSettings(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Card className="bg-slate-700">
          <CardHeader>
            <h3 className="text-3xl font-bold text-white">Uygulama Ayarları</h3>
          </CardHeader>
          <CardContent className="w-full flex flex-col ">
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <label htmlFor="as" className="text-white">
                  Başlangıç Saati
                </label>
                <input
                  type="time"
                  value={begTime}
                  onChange={(e) => setBegTime(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <label htmlFor="as" className="text-white">
                  Bitiş Saati
                </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <label htmlFor="as" className="text-white">
                  İşlem Süresi
                </label>
                <input
                  type="number"
                  value={slotTime}
                  onChange={(e) => setSlotTime(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="flex w-full mt-2">
              <div className="flex gap-4">
                <label htmlFor="as" className="text-white">
                  Pazar Tatil mi?
                </label>
                <input
                  type="checkbox"
                  checked={isSundayOff}
                  onChange={() => setIsSundayOff((prev) => !prev)}
                />
              </div>
            </div>
            <div className="flex mt-2">
              <Button>Kaydet</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default SettingsPage;
