export function getSlotTime(slot: string, day: Date) {

    const begTime = day;

    const [hours, minutes] = slot.split(":");
    begTime?.setHours(parseInt(hours));
    begTime?.setMinutes(parseInt(minutes));
    begTime?.setSeconds(0);


    const endTime = new Date(begTime.setMinutes(begTime.getMinutes() + 30));

    return { begTime, endTime };
}