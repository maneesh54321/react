import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return <EventForm />;
}

export async function newEventAction({ request, params }) {
  console.log("action triggerred!!");

  const formData = await request.formData();
  const event = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    throw json(
      { message: "Failed to save event." },
      { status: response.status }
    );
  }

  return redirect("/events");
}
