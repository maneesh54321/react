import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const errorRes = useRouteError();

  const error = errorRes.data;

  let title = "An error occurred.";
  let message = "Something went wrong.";

  if (errorRes.status === 500) {
    message = error.message;
  }

  if (errorRes.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
