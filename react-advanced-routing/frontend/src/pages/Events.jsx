// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   { id: "1", title: "Event 1" },
//   { id: "2", title: "Event 2" },
//   { id: "3", title: "Event 3" },
//   { id: "4", title: "Event 4" },
// ];

// export default function EventsPage() {
//   return (
//     <>
//       <h1>Events Page</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const response = useLoaderData();

  const events = response.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      {
        message: "Failed to fetch events!!",
      },
      {
        status: response.status,
      }
    );
  }
  return response;
}
