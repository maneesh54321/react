import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem.js";

export default function EventDetailPage() {
  const response = useRouteLoaderData("event-data");

  return (
    <>
      <EventItem event={response.event} />
    </>
  );
}

export async function fetchEventLoader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json(
      { message: "Failed to find the event." },
      { status: response.status }
    );
  }

  return response;
}
