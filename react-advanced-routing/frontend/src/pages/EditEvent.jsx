import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm.js";

export default function EditEventPage() {
  const response = useRouteLoaderData("event-data");
  return (
    <>
      <EventForm event={response.event} />
    </>
  );
}
