import { LoaderFunction, Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-full min-w-full">
      <Outlet />
    </div>
  );
};

// TODO: Implement this loader after Auth API is done
// currently it will just allow all the requests
export const AuthLoader: LoaderFunction = () => {
  return null;
};
