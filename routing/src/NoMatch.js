import { useLocation } from "react-router-dom";

export default function NoMatch() {
  const location = useLocation();

  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}