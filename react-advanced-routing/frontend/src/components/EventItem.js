import { json, Link, redirect, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Do you really want to delete the event?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

export async function deleteEventAction({ params }) {
  const eventId = params["eventId"];

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json(
      { message: "Failed to delete event" },
      { status: response.status }
    );
  }

  return redirect("/events");
}
