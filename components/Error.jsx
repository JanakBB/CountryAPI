import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {error.data} {error.status}
    </>
  );
}


