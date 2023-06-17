import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      Page not found. Back to <Link to="/">home</Link>
    </div>
  );
};
