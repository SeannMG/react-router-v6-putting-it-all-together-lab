import { Outlet } from "react-router-dom";

export default function DirectorContainer() {
  return (
    <div>
      <h1>Movie Directory</h1>
      <Outlet />
    </div>
  );
}