import { Calendar } from "./ui/calendar";
import { Label } from "./ui/label";
import * as React from "react";
function CustomerCalendar() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Day</Label>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        initialFocus
      />
    </div>
  );
}

export default CustomerCalendar;
